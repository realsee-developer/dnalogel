import * as React from 'react';
import { useFiveEventCallback } from "@realsee/five/react";

interface LoadingPropTypes {

}

const Loading = (props: LoadingPropTypes) => {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [loadingProgress, setLoadingProgress] = React.useState<number>(0.00)

    useFiveEventCallback('willLoad', () => setLoading(true))
    useFiveEventCallback('modelLoaded', () => setLoading(false))
    // Five中的 textureLoading 事件返回当前材质加载进度，作为loading进度的依据值
    useFiveEventCallback("textureLoading", progress => setLoadingProgress(progress))

    return (
        <_Loading visible={loading} loadingProgress={loadingProgress}/>
    )

};

export default Loading;

// 此处提供进度条和进度值的显示
interface ILoadingProps {
    loadingProgress: number,
    visible: boolean
}

const _Loading: React.FC<ILoadingProps> = (props) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, .8)',
                display: props.visible ? 'block' : 'none',
                overflow: 'hidden',
                position: 'absolute',
                left: 0,
                top: 0
            }}
        >
            <div
                style={{
                    width: '200px',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <div
                    style={{
                        lineHeight: '30px',
                        fontSize: '24px',
                        textAlign: 'center',
                        color: '#FFF',
                        marginTop: '-20px'
                    }}
                >REALSEE.COM
                </div>
                <div style={{background: '#222', height: '4px', marginTop: '20px'}}>
                    <div
                        className="bar"
                        style={{
                            width: `${(props.loadingProgress * 100).toFixed(2)}%`,
                            background: '#EEE',
                            height: '4px'
                        }}
                    />
                </div>
                <div
                    className="text"
                    style={{textAlign: 'center', color: '#FFF', marginTop: '10px', fontSize: '12px'}}
                >{`${(props.loadingProgress * 100).toFixed(2)}%`}</div>
            </div>
        </div>
    )
}


