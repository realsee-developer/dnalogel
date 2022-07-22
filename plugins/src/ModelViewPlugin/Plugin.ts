import type { Five, FivePlugin } from '@realsee/five'
import * as THREE from 'three'

export interface ModelViewPluginExportType {
    appendTo: (element: HTMLElement, size?: { width?: number; height?: number }) => void

    refresh: (size?: { width?: number; height?: number }) => void
}

/**
 * Five 模型插件
 * @template ExportType 导出方法
 */
export const ModelViewPlugin: FivePlugin<void, ModelViewPluginExportType> = (five: Five) => {
    let needsRender = true
    let renderer: THREE.WebGLRenderer | null = null

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)

    let model = new THREE.Object3D()

    {
        const light = new THREE.DirectionalLight(0xffffff, 0.5)
        light.position.copy(new THREE.Vector3(1, 1, 1))
        scene.add(light)
    }
    {
        const light = new THREE.DirectionalLight(0xffffff, 0.3)
        scene.add(light)
    }
    {
        const light = new THREE.AmbientLight(0xffffff, 0.3)
        scene.add(light)
    }

    scene.add(model)

    const initRendererIfNeeds = () => {
        if (!five.renderer) return
        if (!renderer) {
            renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
            renderer.setPixelRatio(five.renderer.getPixelRatio())
            renderer.outputEncoding = THREE.sRGBEncoding
            renderer.setClearColor(0x181a1c, 0)
            renderer.autoClear = true
        }
        return renderer
    }

    const handleModelWillLoad = () => {
        model.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                const materials = ([] as THREE.Material[]).concat(object.material)
                materials.forEach((material) => material.dispose())
            }
        })
        scene.remove(model)
        model = new THREE.Object3D()
        scene.add(model)
        update()
    }

    const handleModelLoaded = () => {
        function cloneMaterial(material: THREE.ShaderMaterial) {
            material.clone().uniforms.modelAlpha.value = 1
            if (material.uniforms.map.value) {
                material.uniforms.map.value.needsUpdate = true
            }
            return material
        }

        function cloneModel(model: THREE.Object3D) {
            if (model instanceof THREE.Mesh) {
                const geometry = model.geometry
                const material = Array.isArray(model.material)
                    ? model.material.map(cloneMaterial)
                    : cloneMaterial(model.material)
                return new THREE.Mesh(geometry, material)
            } else if (model instanceof THREE.Group) {
                const group = new THREE.Group()
                model.children.forEach((object) => group.add(cloneModel(object)))
                return group
            } else {
                const object3D = new THREE.Object3D()
                model.children.forEach((object) => object3D.add(cloneModel(object)))
                return object3D
            }
        }

        scene.remove(model)
        model = cloneModel(five.model)
        scene.add(model)
        update()
    }

    const appendTo = (element: HTMLElement, size: { width?: number; height?: number } = {}) => {
        const renderer = initRendererIfNeeds()
        if (!renderer) return
        element.appendChild(renderer.domElement)
        refresh(size)
        const positionType = window.getComputedStyle(element).position
        if (
            positionType !== 'relative' &&
            positionType !== 'absolute' &&
            positionType !== 'fixed' &&
            positionType !== 'sticky'
        )
            element.style.position = 'relative'
    }

    const refresh = (size: { width?: number; height?: number } = {}) => {
        if (!renderer) return
        const element = renderer.domElement
        const container = element.parentNode as HTMLElement
        if (container?.nodeName) {

            const { width = container.offsetWidth, height = container.offsetHeight } = size
            renderer.setSize(width, height)
            // 修改摄像机 aspect 比值
            camera.aspect = width / height
            camera.updateProjectionMatrix()
        }

        update()
    }

    const cameraDistance = () => {
        const bounding = five.model.bounding
        const { fov, aspect } = camera
        const radius = Math.sqrt(
            Math.pow(bounding.max.x - bounding.min.x + 2, 2) +
            Math.pow(bounding.max.y - bounding.min.y + 2, 2) +
            Math.pow(bounding.max.z - bounding.min.z + 2, 2),
        )

        // fit screen
        let distance = radius / 2 / Math.tan((Math.PI * fov) / 360)
        if (aspect < 1) distance = distance / aspect

        return isNaN(distance) ? radius : distance
    }

    const update = () => {
        const { longitude, latitude } = five.getPose()
        const distance = cameraDistance()
        const lookAt = five.model.bounding.getCenter(new THREE.Vector3())
        const longitudeDistance = distance * Math.cos(latitude)

        const cameraPosition = new THREE.Vector3()
        cameraPosition.x = Math.sin(longitude) * longitudeDistance + lookAt.x
        cameraPosition.z = Math.cos(longitude) * longitudeDistance + lookAt.z
        cameraPosition.y = Math.sin(latitude) * distance + lookAt.y

        camera.position.copy(cameraPosition)
        camera.lookAt(lookAt)
        needsRender = true
    }

    const render = () => {
        if (needsRender !== true) return
        if (!renderer) return
        if (!renderer.domElement.parentNode) return
        const parentNode = renderer.domElement.parentNode as HTMLElement
        if (parentNode.offsetWidth === 0) return
        renderer.render(scene, camera)
        needsRender = false
    }

    const dispose = () => {
        if (renderer) renderer.dispose()
        renderer = null
    }

    five.on('modelLoaded', handleModelLoaded)
    five.on('modelWillLoad', handleModelWillLoad)
    five.on('cameraDirectionUpdate', update)
    five.on('dispose', dispose)
    five.on('renderFrame', render)

    return { appendTo, refresh }
}

export default ModelViewPlugin
