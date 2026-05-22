import { Loader as oe, LoaderUtils as J, FileLoader as Le, TextureLoader as Ie, RepeatWrapping as ue, ClampToEdgeWrapping as fe, Texture as le, MeshPhongMaterial as N, MeshLambertMaterial as Pe, Color as F, sRGBEncoding as U, EquirectangularReflectionMapping as Fe, Matrix4 as m, Group as pe, Bone as ce, PropertyBinding as X, Object3D as ee, OrthographicCamera as Me, PerspectiveCamera as Se, PointLight as ve, MathUtils as x, SpotLight as Re, DirectionalLight as Oe, SkinnedMesh as Be, Mesh as be, LineBasicMaterial as ke, Line as De, Vector3 as G, Skeleton as Ce, AmbientLight as Ue, BufferGeometry as V, Float32BufferAttribute as O, Uint16BufferAttribute as Xe, Matrix3 as Ge, Vector4 as Ve, BufferAttribute as je, AnimationClip as ze, Quaternion as j, Euler as B, VectorKeyframeTrack as He, QuaternionKeyframeTrack as _e, NumberKeyframeTrack as Ke } from "three";
import { Zlib as he } from "../libs/inflate.js";
import { NURBSCurve as me } from "../libs/NURBSCurve.js";
var qe = function() {
  var v, y, T;
  function z(e) {
    oe.call(this, e);
  }
  z.prototype = Object.assign(Object.create(oe.prototype), {
    constructor: z,
    load: function(e, t, r, n) {
      var a = this, i = a.path === "" ? J.extractUrlBase(e) : a.path, s = new Le(this.manager);
      s.setPath(a.path), s.setResponseType("arraybuffer"), s.load(
        e,
        function(o) {
          try {
            t(a.parse(o, i));
          } catch (f) {
            n ? n(f) : console.error(f), a.manager.itemError(e);
          }
        },
        r,
        n
      );
    },
    parse: function(e, t) {
      if (ge(e))
        v = new Y().parse(e);
      else {
        var r = ne(e);
        if (!ye(r))
          throw new Error("THREE.FBXLoader: Unknown format.");
        if (te(r) < 7e3)
          throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + te(r));
        v = new W().parse(r);
      }
      var n = new Ie(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
      return new H(n, this.manager).parse(v);
    }
  });
  function H(e, t) {
    this.textureLoader = e, this.manager = t;
  }
  H.prototype = {
    constructor: H,
    parse: function() {
      y = this.parseConnections();
      var e = this.parseImages(), t = this.parseTextures(e), r = this.parseMaterials(t), n = this.parseDeformers(), a = new _().parse(n);
      return this.parseScene(n, a, r), T;
    },
    // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
    // and details the connection type
    parseConnections: function() {
      var e = /* @__PURE__ */ new Map();
      if ("Connections" in v) {
        var t = v.Connections.connections;
        t.forEach(function(r) {
          var n = r[0], a = r[1], i = r[2];
          e.has(n) || e.set(n, {
            parents: [],
            children: []
          });
          var s = { ID: a, relationship: i };
          e.get(n).parents.push(s), e.has(a) || e.set(a, {
            parents: [],
            children: []
          });
          var o = { ID: n, relationship: i };
          e.get(a).children.push(o);
        });
      }
      return e;
    },
    // Parse FBXTree.Objects.Video for embedded image data
    // These images are connected to textures in FBXTree.Objects.Textures
    // via FBXTree.Connections.
    parseImages: function() {
      var e = {}, t = {};
      if ("Video" in v.Objects) {
        var r = v.Objects.Video;
        for (var n in r) {
          var a = r[n], i = parseInt(n);
          if (e[i] = a.RelativeFilename || a.Filename, "Content" in a) {
            var s = a.Content instanceof ArrayBuffer && a.Content.byteLength > 0, o = typeof a.Content == "string" && a.Content !== "";
            if (s || o) {
              var f = this.parseImage(r[n]);
              t[a.RelativeFilename || a.Filename] = f;
            }
          }
        }
      }
      for (var i in e) {
        var l = e[i];
        t[l] !== void 0 ? e[i] = t[l] : e[i] = e[i].split("\\").pop();
      }
      return e;
    },
    // Parse embedded image data in FBXTree.Video.Content
    parseImage: function(e) {
      var t = e.Content, r = e.RelativeFilename || e.Filename, n = r.slice(r.lastIndexOf(".") + 1).toLowerCase(), a;
      switch (n) {
        case "bmp":
          a = "image/bmp";
          break;
        case "jpg":
        case "jpeg":
          a = "image/jpeg";
          break;
        case "png":
          a = "image/png";
          break;
        case "tif":
          a = "image/tiff";
          break;
        case "tga":
          this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", r), a = "image/tga";
          break;
        default:
          console.warn('FBXLoader: Image type "' + n + '" is not supported.');
          return;
      }
      if (typeof t == "string")
        return "data:" + a + ";base64," + t;
      var i = new Uint8Array(t);
      return window.URL.createObjectURL(new Blob([i], { type: a }));
    },
    // Parse nodes in FBXTree.Objects.Texture
    // These contain details such as UV scaling, cropping, rotation etc and are connected
    // to images in FBXTree.Objects.Video
    parseTextures: function(e) {
      var t = /* @__PURE__ */ new Map();
      if ("Texture" in v.Objects) {
        var r = v.Objects.Texture;
        for (var n in r) {
          var a = this.parseTexture(r[n], e);
          t.set(parseInt(n), a);
        }
      }
      return t;
    },
    // Parse individual node in FBXTree.Objects.Texture
    parseTexture: function(e, t) {
      var r = this.loadTexture(e, t);
      r.ID = e.id, r.name = e.attrName;
      var n = e.WrapModeU, a = e.WrapModeV, i = n !== void 0 ? n.value : 0, s = a !== void 0 ? a.value : 0;
      if (r.wrapS = i === 0 ? ue : fe, r.wrapT = s === 0 ? ue : fe, "Scaling" in e) {
        var o = e.Scaling.value;
        r.repeat.x = o[0], r.repeat.y = o[1];
      }
      return r;
    },
    // load a texture specified as a blob or data URI, or via an external URL using TextureLoader
    loadTexture: function(e, t) {
      var r, n = this.textureLoader.path, a = y.get(e.id).children;
      a !== void 0 && a.length > 0 && t[a[0].ID] !== void 0 && (r = t[a[0].ID], (r.indexOf("blob:") === 0 || r.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
      var i, s = e.FileName.slice(-3).toLowerCase();
      if (s === "tga") {
        var o = this.manager.getHandler(".tga");
        o === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename), i = new le()) : i = o.load(r);
      } else
        s === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename), i = new le()) : i = this.textureLoader.load(r);
      return this.textureLoader.setPath(n), i;
    },
    // Parse nodes in FBXTree.Objects.Material
    parseMaterials: function(e) {
      var t = /* @__PURE__ */ new Map();
      if ("Material" in v.Objects) {
        var r = v.Objects.Material;
        for (var n in r) {
          var a = this.parseMaterial(r[n], e);
          a !== null && t.set(parseInt(n), a);
        }
      }
      return t;
    },
    // Parse single node in FBXTree.Objects.Material
    // Materials are connected to texture maps in FBXTree.Objects.Textures
    // FBX format currently only supports Lambert and Phong shading models
    parseMaterial: function(e, t) {
      var r = e.id, n = e.attrName, a = e.ShadingModel;
      if (typeof a == "object" && (a = a.value), !y.has(r))
        return null;
      var i = this.parseParameters(e, t, r), s;
      switch (a.toLowerCase()) {
        case "phong":
          s = new N();
          break;
        case "lambert":
          s = new Pe();
          break;
        default:
          console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', a), s = new N();
          break;
      }
      return s.setValues(i), s.name = n, s;
    },
    // Parse FBX material and return parameters suitable for a three.js material
    // Also parse the texture map and return any textures associated with the material
    parseParameters: function(e, t, r) {
      var n = {};
      e.BumpFactor && (n.bumpScale = e.BumpFactor.value), e.Diffuse ? n.color = new F().fromArray(e.Diffuse.value) : e.DiffuseColor && e.DiffuseColor.type === "Color" && (n.color = new F().fromArray(e.DiffuseColor.value)), e.DisplacementFactor && (n.displacementScale = e.DisplacementFactor.value), e.Emissive ? n.emissive = new F().fromArray(e.Emissive.value) : e.EmissiveColor && e.EmissiveColor.type === "Color" && (n.emissive = new F().fromArray(e.EmissiveColor.value)), e.EmissiveFactor && (n.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (n.opacity = parseFloat(e.Opacity.value)), n.opacity < 1 && (n.transparent = !0), e.ReflectionFactor && (n.reflectivity = e.ReflectionFactor.value), e.Shininess && (n.shininess = e.Shininess.value), e.Specular ? n.specular = new F().fromArray(e.Specular.value) : e.SpecularColor && e.SpecularColor.type === "Color" && (n.specular = new F().fromArray(e.SpecularColor.value));
      var a = this;
      return y.get(r).children.forEach(function(i) {
        var s = i.relationship;
        switch (s) {
          case "Bump":
            n.bumpMap = a.getTexture(t, i.ID);
            break;
          case "Maya|TEX_ao_map":
            n.aoMap = a.getTexture(t, i.ID);
            break;
          case "DiffuseColor":
          case "Maya|TEX_color_map":
            n.map = a.getTexture(t, i.ID), n.map.encoding = U;
            break;
          case "DisplacementColor":
            n.displacementMap = a.getTexture(t, i.ID);
            break;
          case "EmissiveColor":
            n.emissiveMap = a.getTexture(t, i.ID), n.emissiveMap.encoding = U;
            break;
          case "NormalMap":
          case "Maya|TEX_normal_map":
            n.normalMap = a.getTexture(t, i.ID);
            break;
          case "ReflectionColor":
            n.envMap = a.getTexture(t, i.ID), n.envMap.mapping = Fe, n.envMap.encoding = U;
            break;
          case "SpecularColor":
            n.specularMap = a.getTexture(t, i.ID), n.specularMap.encoding = U;
            break;
          case "TransparentColor":
          case "TransparencyFactor":
            n.alphaMap = a.getTexture(t, i.ID), n.transparent = !0;
            break;
          case "AmbientColor":
          case "ShininessExponent":
          case "SpecularFactor":
          case "VectorDisplacementColor":
          default:
            console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", s);
            break;
        }
      }), n;
    },
    // get a texture from the textureMap for use by a material.
    getTexture: function(e, t) {
      return "LayeredTexture" in v.Objects && t in v.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = y.get(t).children[0].ID), e.get(t);
    },
    // Parse nodes in FBXTree.Objects.Deformer
    // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
    // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
    parseDeformers: function() {
      var e = {}, t = {};
      if ("Deformer" in v.Objects) {
        var r = v.Objects.Deformer;
        for (var n in r) {
          var a = r[n], i = y.get(parseInt(n));
          if (a.attrType === "Skin") {
            var s = this.parseSkeleton(i, r);
            s.ID = n, i.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), s.geometryID = i.parents[0].ID, e[n] = s;
          } else if (a.attrType === "BlendShape") {
            var o = {
              id: n
            };
            o.rawTargets = this.parseMorphTargets(i, r), o.id = n, i.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), t[n] = o;
          }
        }
      }
      return {
        skeletons: e,
        morphTargets: t
      };
    },
    // Parse single nodes in FBXTree.Objects.Deformer
    // The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
    // Each skin node represents a skeleton and each cluster node represents a bone
    parseSkeleton: function(e, t) {
      var r = [];
      return e.children.forEach(function(n) {
        var a = t[n.ID];
        if (a.attrType === "Cluster") {
          var i = {
            ID: n.ID,
            indices: [],
            weights: [],
            transformLink: new m().fromArray(a.TransformLink.a)
            // transform: new Matrix4().fromArray( boneNode.Transform.a ),
            // linkMode: boneNode.Mode,
          };
          "Indexes" in a && (i.indices = a.Indexes.a, i.weights = a.Weights.a), r.push(i);
        }
      }), {
        rawBones: r,
        bones: []
      };
    },
    // The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
    parseMorphTargets: function(e, t) {
      for (var r = [], n = 0; n < e.children.length; n++) {
        var a = e.children[n], i = t[a.ID], s = {
          name: i.attrName,
          initialWeight: i.DeformPercent,
          id: i.id,
          fullWeights: i.FullWeights.a
        };
        if (i.attrType !== "BlendShapeChannel")
          return;
        s.geoID = y.get(parseInt(a.ID)).children.filter(function(o) {
          return o.relationship === void 0;
        })[0].ID, r.push(s);
      }
      return r;
    },
    // create the main Group() to be returned by the loader
    parseScene: function(e, t, r) {
      T = new pe();
      var n = this.parseModels(e.skeletons, t, r), a = v.Objects.Model, i = this;
      n.forEach(function(o) {
        var f = a[o.ID];
        i.setLookAtProperties(o, f);
        var l = y.get(o.ID).parents;
        l.forEach(function(u) {
          var p = n.get(u.ID);
          p !== void 0 && p.add(o);
        }), o.parent === null && T.add(o);
      }), this.bindSkeleton(e.skeletons, t, n), this.createAmbientLight(), this.setupMorphMaterials(), T.traverse(function(o) {
        if (o.userData.transformData) {
          o.parent && (o.userData.transformData.parentMatrixWorld = o.parent.matrix);
          var f = re(o.userData.transformData);
          o.applyMatrix4(f);
        }
      });
      var s = new K().parse();
      T.children.length === 1 && T.children[0].isGroup && (T.children[0].animations = s, T = T.children[0]), T.animations = s;
    },
    // parse nodes in FBXTree.Objects.Model
    parseModels: function(e, t, r) {
      var n = /* @__PURE__ */ new Map(), a = v.Objects.Model;
      for (var i in a) {
        var s = parseInt(i), o = a[i], f = y.get(s), l = this.buildSkeleton(f, e, s, o.attrName);
        if (!l) {
          switch (o.attrType) {
            case "Camera":
              l = this.createCamera(f);
              break;
            case "Light":
              l = this.createLight(f);
              break;
            case "Mesh":
              l = this.createMesh(f, t, r);
              break;
            case "NurbsCurve":
              l = this.createCurve(f, t);
              break;
            case "LimbNode":
            case "Root":
              l = new ce();
              break;
            case "Null":
            default:
              l = new pe();
              break;
          }
          l.name = o.attrName ? X.sanitizeNodeName(o.attrName) : "", l.ID = s;
        }
        this.getTransformData(l, o), n.set(s, l);
      }
      return n;
    },
    buildSkeleton: function(e, t, r, n) {
      var a = null;
      return e.parents.forEach(function(i) {
        for (var s in t) {
          var o = t[s];
          o.rawBones.forEach(function(f, l) {
            if (f.ID === i.ID) {
              var u = a;
              a = new ce(), a.matrixWorld.copy(f.transformLink), a.name = n ? X.sanitizeNodeName(n) : "", a.ID = r, o.bones[l] = a, u !== null && a.add(u);
            }
          });
        }
      }), a;
    },
    // create a PerspectiveCamera or OrthographicCamera
    createCamera: function(e) {
      var t, r;
      if (e.children.forEach(function(p) {
        var c = v.Objects.NodeAttribute[p.ID];
        c !== void 0 && (r = c);
      }), r === void 0)
        t = new ee();
      else {
        var n = 0;
        r.CameraProjectionType !== void 0 && r.CameraProjectionType.value === 1 && (n = 1);
        var a = 1;
        r.NearPlane !== void 0 && (a = r.NearPlane.value / 1e3);
        var i = 1e3;
        r.FarPlane !== void 0 && (i = r.FarPlane.value / 1e3);
        var s = window.innerWidth, o = window.innerHeight;
        r.AspectWidth !== void 0 && r.AspectHeight !== void 0 && (s = r.AspectWidth.value, o = r.AspectHeight.value);
        var f = s / o, l = 45;
        r.FieldOfView !== void 0 && (l = r.FieldOfView.value);
        var u = r.FocalLength ? r.FocalLength.value : null;
        switch (n) {
          case 0:
            t = new Se(l, f, a, i), u !== null && t.setFocalLength(u);
            break;
          case 1:
            t = new Me(-s / 2, s / 2, o / 2, -o / 2, a, i);
            break;
          default:
            console.warn("THREE.FBXLoader: Unknown camera type " + n + "."), t = new ee();
            break;
        }
      }
      return t;
    },
    // Create a DirectionalLight, PointLight or SpotLight
    createLight: function(e) {
      var t, r;
      if (e.children.forEach(function(u) {
        var p = v.Objects.NodeAttribute[u.ID];
        p !== void 0 && (r = p);
      }), r === void 0)
        t = new ee();
      else {
        var n;
        r.LightType === void 0 ? n = 0 : n = r.LightType.value;
        var a = 16777215;
        r.Color !== void 0 && (a = new F().fromArray(r.Color.value));
        var i = r.Intensity === void 0 ? 1 : r.Intensity.value / 100;
        r.CastLightOnObject !== void 0 && r.CastLightOnObject.value === 0 && (i = 0);
        var s = 0;
        r.FarAttenuationEnd !== void 0 && (r.EnableFarAttenuation !== void 0 && r.EnableFarAttenuation.value === 0 ? s = 0 : s = r.FarAttenuationEnd.value);
        var o = 1;
        switch (n) {
          case 0:
            t = new ve(a, i, s, o);
            break;
          case 1:
            t = new Oe(a, i);
            break;
          case 2:
            var f = Math.PI / 3;
            r.InnerAngle !== void 0 && (f = x.degToRad(r.InnerAngle.value));
            var l = 0;
            r.OuterAngle !== void 0 && (l = x.degToRad(r.OuterAngle.value), l = Math.max(l, 1)), t = new Re(a, i, s, f, l, o);
            break;
          default:
            console.warn("THREE.FBXLoader: Unknown light type " + r.LightType.value + ", defaulting to a PointLight."), t = new ve(a, i);
            break;
        }
        r.CastShadows !== void 0 && r.CastShadows.value === 1 && (t.castShadow = !0);
      }
      return t;
    },
    createMesh: function(e, t, r) {
      var n, a = null, i = null, s = [];
      return e.children.forEach(function(o) {
        t.has(o.ID) && (a = t.get(o.ID)), r.has(o.ID) && s.push(r.get(o.ID));
      }), s.length > 1 ? i = s : s.length > 0 ? i = s[0] : (i = new N({ color: 13421772 }), s.push(i)), "color" in a.attributes && s.forEach(function(o) {
        o.vertexColors = !0;
      }), a.FBX_Deformer ? (s.forEach(function(o) {
        o.skinning = !0;
      }), n = new Be(a, i), n.normalizeSkinWeights()) : n = new be(a, i), n;
    },
    createCurve: function(e, t) {
      var r = e.children.reduce(function(a, i) {
        return t.has(i.ID) && (a = t.get(i.ID)), a;
      }, null), n = new ke({ color: 3342591, linewidth: 1 });
      return new De(r, n);
    },
    // parse the model node for transform data
    getTransformData: function(e, t) {
      var r = {};
      "InheritType" in t && (r.inheritType = parseInt(t.InheritType.value)), "RotationOrder" in t ? r.eulerOrder = ae(t.RotationOrder.value) : r.eulerOrder = "ZYX", "Lcl_Translation" in t && (r.translation = t.Lcl_Translation.value), "PreRotation" in t && (r.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (r.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (r.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (r.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (r.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (r.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (r.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (r.rotationPivot = t.RotationPivot.value), e.userData.transformData = r;
    },
    setLookAtProperties: function(e, t) {
      if ("LookAtProperty" in t) {
        var r = y.get(e.ID).children;
        r.forEach(function(n) {
          if (n.relationship === "LookAtProperty") {
            var a = v.Objects.Model[n.ID];
            if ("Lcl_Translation" in a) {
              var i = a.Lcl_Translation.value;
              e.target !== void 0 ? (e.target.position.fromArray(i), T.add(e.target)) : e.lookAt(new G().fromArray(i));
            }
          }
        });
      }
    },
    bindSkeleton: function(e, t, r) {
      var n = this.parsePoseNodes();
      for (var a in e) {
        var i = e[a], s = y.get(parseInt(i.ID)).parents;
        s.forEach(function(o) {
          if (t.has(o.ID)) {
            var f = o.ID, l = y.get(f);
            l.parents.forEach(function(u) {
              if (r.has(u.ID)) {
                var p = r.get(u.ID);
                p.bind(new Ce(i.bones), n[u.ID]);
              }
            });
          }
        });
      }
    },
    parsePoseNodes: function() {
      var e = {};
      if ("Pose" in v.Objects) {
        var t = v.Objects.Pose;
        for (var r in t)
          if (t[r].attrType === "BindPose") {
            var n = t[r].PoseNode;
            Array.isArray(n) ? n.forEach(function(a) {
              e[a.Node] = new m().fromArray(a.Matrix.a);
            }) : e[n.Node] = new m().fromArray(n.Matrix.a);
          }
      }
      return e;
    },
    // Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light
    createAmbientLight: function() {
      if ("GlobalSettings" in v && "AmbientColor" in v.GlobalSettings) {
        var e = v.GlobalSettings.AmbientColor.value, t = e[0], r = e[1], n = e[2];
        if (t !== 0 || r !== 0 || n !== 0) {
          var a = new F(t, r, n);
          T.add(new Ue(a, 1));
        }
      }
    },
    setupMorphMaterials: function() {
      var e = this;
      T.traverse(function(t) {
        t.isMesh && t.geometry.morphAttributes.position && t.geometry.morphAttributes.position.length && (Array.isArray(t.material) ? t.material.forEach(function(r, n) {
          e.setupMorphMaterial(t, r, n);
        }) : e.setupMorphMaterial(t, t.material));
      });
    },
    setupMorphMaterial: function(e, t, r) {
      var n = e.uuid, a = t.uuid, i = !1;
      if (T.traverse(function(o) {
        o.isMesh && (Array.isArray(o.material) ? o.material.forEach(function(f) {
          f.uuid === a && o.uuid !== n && (i = !0);
        }) : o.material.uuid === a && o.uuid !== n && (i = !0));
      }), i === !0) {
        var s = t.clone();
        s.morphTargets = !0, r === void 0 ? e.material = s : e.material[r] = s;
      } else
        t.morphTargets = !0;
    }
  };
  function _() {
  }
  _.prototype = {
    constructor: _,
    // Parse nodes in FBXTree.Objects.Geometry
    parse: function(e) {
      var t = /* @__PURE__ */ new Map();
      if ("Geometry" in v.Objects) {
        var r = v.Objects.Geometry;
        for (var n in r) {
          var a = y.get(parseInt(n)), i = this.parseGeometry(a, r[n], e);
          t.set(parseInt(n), i);
        }
      }
      return t;
    },
    // Parse single node in FBXTree.Objects.Geometry
    parseGeometry: function(e, t, r) {
      switch (t.attrType) {
        case "Mesh":
          return this.parseMeshGeometry(e, t, r);
        case "NurbsCurve":
          return this.parseNurbsGeometry(t);
      }
    },
    // Parse single node mesh geometry in FBXTree.Objects.Geometry
    parseMeshGeometry: function(e, t, r) {
      var n = r.skeletons, a = [], i = e.parents.map(function(u) {
        return v.Objects.Model[u.ID];
      });
      if (i.length !== 0) {
        var s = e.children.reduce(function(u, p) {
          return n[p.ID] !== void 0 && (u = n[p.ID]), u;
        }, null);
        e.children.forEach(function(u) {
          r.morphTargets[u.ID] !== void 0 && a.push(r.morphTargets[u.ID]);
        });
        var o = i[0], f = {};
        "RotationOrder" in o && (f.eulerOrder = ae(o.RotationOrder.value)), "InheritType" in o && (f.inheritType = parseInt(o.InheritType.value)), "GeometricTranslation" in o && (f.translation = o.GeometricTranslation.value), "GeometricRotation" in o && (f.rotation = o.GeometricRotation.value), "GeometricScaling" in o && (f.scale = o.GeometricScaling.value);
        var l = re(f);
        return this.genGeometry(t, s, a, l);
      }
    },
    // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
    genGeometry: function(e, t, r, n) {
      var a = new V();
      e.attrName && (a.name = e.attrName);
      var i = this.parseGeoNode(e, t), s = this.genBuffers(i), o = new O(s.vertex, 3);
      if (o.applyMatrix4(n), a.setAttribute("position", o), s.colors.length > 0 && a.setAttribute("color", new O(s.colors, 3)), t && (a.setAttribute("skinIndex", new Xe(s.weightsIndices, 4)), a.setAttribute("skinWeight", new O(s.vertexWeights, 4)), a.FBX_Deformer = t), s.normal.length > 0) {
        var f = new Ge().getNormalMatrix(n), l = new O(s.normal, 3);
        l.applyNormalMatrix(f), a.setAttribute("normal", l);
      }
      if (s.uvs.forEach(function(w, g) {
        var d = "uv" + (g + 1).toString();
        g === 0 && (d = "uv"), a.setAttribute(d, new O(s.uvs[g], 2));
      }), i.material && i.material.mappingType !== "AllSame") {
        var u = s.materialIndex[0], p = 0;
        if (s.materialIndex.forEach(function(w, g) {
          w !== u && (a.addGroup(p, g - p, u), u = w, p = g);
        }), a.groups.length > 0) {
          var c = a.groups[a.groups.length - 1], h = c.start + c.count;
          h !== s.materialIndex.length && a.addGroup(h, s.materialIndex.length - h, u);
        }
        a.groups.length === 0 && a.addGroup(0, s.materialIndex.length, s.materialIndex[0]);
      }
      return this.addMorphTargets(a, e, r, n), a;
    },
    parseGeoNode: function(e, t) {
      var r = {};
      if (r.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : [], r.vertexIndices = e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (r.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (r.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (r.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
        r.uv = [];
        for (var n = 0; e.LayerElementUV[n]; )
          r.uv.push(this.parseUVs(e.LayerElementUV[n])), n++;
      }
      return r.weightTable = {}, t !== null && (r.skeleton = t, t.rawBones.forEach(function(a, i) {
        a.indices.forEach(function(s, o) {
          r.weightTable[s] === void 0 && (r.weightTable[s] = []), r.weightTable[s].push({
            id: i,
            weight: a.weights[o]
          });
        });
      })), r;
    },
    genBuffers: function(e) {
      var t = {
        vertex: [],
        normal: [],
        colors: [],
        uvs: [],
        materialIndex: [],
        vertexWeights: [],
        weightsIndices: []
      }, r = 0, n = 0, a = !1, i = [], s = [], o = [], f = [], l = [], u = [], p = this;
      return e.vertexIndices.forEach(function(c, h) {
        var w = !1;
        c < 0 && (c = c ^ -1, w = !0);
        var g = [], d = [];
        if (i.push(c * 3, c * 3 + 1, c * 3 + 2), e.color) {
          var A = D(h, r, c, e.color);
          o.push(A[0], A[1], A[2]);
        }
        if (e.skeleton) {
          if (e.weightTable[c] !== void 0 && e.weightTable[c].forEach(function(I) {
            d.push(I.weight), g.push(I.id);
          }), d.length > 4) {
            a || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), a = !0);
            var L = [0, 0, 0, 0], S = [0, 0, 0, 0];
            d.forEach(function(I, E) {
              var P = I, C = g[E];
              S.forEach(function(se, Q, Ee) {
                if (P > se) {
                  Ee[Q] = P, P = se;
                  var xe = L[Q];
                  L[Q] = C, C = xe;
                }
              });
            }), g = L, d = S;
          }
          for (; d.length < 4; )
            d.push(0), g.push(0);
          for (var R = 0; R < 4; ++R)
            l.push(d[R]), u.push(g[R]);
        }
        if (e.normal) {
          var A = D(h, r, c, e.normal);
          s.push(A[0], A[1], A[2]);
        }
        if (e.material && e.material.mappingType !== "AllSame")
          var $ = D(h, r, c, e.material)[0];
        e.uv && e.uv.forEach(function(I, E) {
          var P = D(h, r, c, I);
          f[E] === void 0 && (f[E] = []), f[E].push(P[0]), f[E].push(P[1]);
        }), n++, w && (p.genFace(
          t,
          e,
          i,
          $,
          s,
          o,
          f,
          l,
          u,
          n
        ), r++, n = 0, i = [], s = [], o = [], f = [], l = [], u = []);
      }), t;
    },
    // Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
    genFace: function(e, t, r, n, a, i, s, o, f, l) {
      for (var u = 2; u < l; u++)
        e.vertex.push(t.vertexPositions[r[0]]), e.vertex.push(t.vertexPositions[r[1]]), e.vertex.push(t.vertexPositions[r[2]]), e.vertex.push(t.vertexPositions[r[(u - 1) * 3]]), e.vertex.push(t.vertexPositions[r[(u - 1) * 3 + 1]]), e.vertex.push(t.vertexPositions[r[(u - 1) * 3 + 2]]), e.vertex.push(t.vertexPositions[r[u * 3]]), e.vertex.push(t.vertexPositions[r[u * 3 + 1]]), e.vertex.push(t.vertexPositions[r[u * 3 + 2]]), t.skeleton && (e.vertexWeights.push(o[0]), e.vertexWeights.push(o[1]), e.vertexWeights.push(o[2]), e.vertexWeights.push(o[3]), e.vertexWeights.push(o[(u - 1) * 4]), e.vertexWeights.push(o[(u - 1) * 4 + 1]), e.vertexWeights.push(o[(u - 1) * 4 + 2]), e.vertexWeights.push(o[(u - 1) * 4 + 3]), e.vertexWeights.push(o[u * 4]), e.vertexWeights.push(o[u * 4 + 1]), e.vertexWeights.push(o[u * 4 + 2]), e.vertexWeights.push(o[u * 4 + 3]), e.weightsIndices.push(f[0]), e.weightsIndices.push(f[1]), e.weightsIndices.push(f[2]), e.weightsIndices.push(f[3]), e.weightsIndices.push(f[(u - 1) * 4]), e.weightsIndices.push(f[(u - 1) * 4 + 1]), e.weightsIndices.push(f[(u - 1) * 4 + 2]), e.weightsIndices.push(f[(u - 1) * 4 + 3]), e.weightsIndices.push(f[u * 4]), e.weightsIndices.push(f[u * 4 + 1]), e.weightsIndices.push(f[u * 4 + 2]), e.weightsIndices.push(f[u * 4 + 3])), t.color && (e.colors.push(i[0]), e.colors.push(i[1]), e.colors.push(i[2]), e.colors.push(i[(u - 1) * 3]), e.colors.push(i[(u - 1) * 3 + 1]), e.colors.push(i[(u - 1) * 3 + 2]), e.colors.push(i[u * 3]), e.colors.push(i[u * 3 + 1]), e.colors.push(i[u * 3 + 2])), t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(n), e.materialIndex.push(n), e.materialIndex.push(n)), t.normal && (e.normal.push(a[0]), e.normal.push(a[1]), e.normal.push(a[2]), e.normal.push(a[(u - 1) * 3]), e.normal.push(a[(u - 1) * 3 + 1]), e.normal.push(a[(u - 1) * 3 + 2]), e.normal.push(a[u * 3]), e.normal.push(a[u * 3 + 1]), e.normal.push(a[u * 3 + 2])), t.uv && t.uv.forEach(function(p, c) {
          e.uvs[c] === void 0 && (e.uvs[c] = []), e.uvs[c].push(s[c][0]), e.uvs[c].push(s[c][1]), e.uvs[c].push(s[c][(u - 1) * 2]), e.uvs[c].push(s[c][(u - 1) * 2 + 1]), e.uvs[c].push(s[c][u * 2]), e.uvs[c].push(s[c][u * 2 + 1]);
        });
    },
    addMorphTargets: function(e, t, r, n) {
      if (r.length !== 0) {
        e.morphTargetsRelative = !0, e.morphAttributes.position = [];
        var a = this;
        r.forEach(function(i) {
          i.rawTargets.forEach(function(s) {
            var o = v.Objects.Geometry[s.geoID];
            o !== void 0 && a.genMorphGeometry(e, t, o, n, s.name);
          });
        });
      }
    },
    // a morph geometry node is similar to a standard  node, and the node is also contained
    // in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
    // and a special attribute Index defining which vertices of the original geometry are affected
    // Normal and position attributes only have data for the vertices that are affected by the morph
    genMorphGeometry: function(e, t, r, n, a) {
      for (var i = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [], s = r.Vertices !== void 0 ? r.Vertices.a : [], o = r.Indexes !== void 0 ? r.Indexes.a : [], f = e.attributes.position.count * 3, l = new Float32Array(f), u = 0; u < o.length; u++) {
        var p = o[u] * 3;
        l[p] = s[u * 3], l[p + 1] = s[u * 3 + 1], l[p + 2] = s[u * 3 + 2];
      }
      var c = {
        vertexIndices: i,
        vertexPositions: l
      }, h = this.genBuffers(c), w = new O(h.vertex, 3);
      w.name = a || r.attrName, w.applyMatrix4(n), e.morphAttributes.position.push(w);
    },
    // Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
    parseNormals: function(e) {
      var t = e.MappingInformationType, r = e.ReferenceInformationType, n = e.Normals.a, a = [];
      return r === "IndexToDirect" && ("NormalIndex" in e ? a = e.NormalIndex.a : "NormalsIndex" in e && (a = e.NormalsIndex.a)), {
        dataSize: 3,
        buffer: n,
        indices: a,
        mappingType: t,
        referenceType: r
      };
    },
    // Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
    parseUVs: function(e) {
      var t = e.MappingInformationType, r = e.ReferenceInformationType, n = e.UV.a, a = [];
      return r === "IndexToDirect" && (a = e.UVIndex.a), {
        dataSize: 2,
        buffer: n,
        indices: a,
        mappingType: t,
        referenceType: r
      };
    },
    // Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
    parseVertexColors: function(e) {
      var t = e.MappingInformationType, r = e.ReferenceInformationType, n = e.Colors.a, a = [];
      return r === "IndexToDirect" && (a = e.ColorIndex.a), {
        dataSize: 4,
        buffer: n,
        indices: a,
        mappingType: t,
        referenceType: r
      };
    },
    // Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
    parseMaterialIndices: function(e) {
      var t = e.MappingInformationType, r = e.ReferenceInformationType;
      if (t === "NoMappingInformation")
        return {
          dataSize: 1,
          buffer: [0],
          indices: [0],
          mappingType: "AllSame",
          referenceType: r
        };
      for (var n = e.Materials.a, a = [], i = 0; i < n.length; ++i)
        a.push(i);
      return {
        dataSize: 1,
        buffer: n,
        indices: a,
        mappingType: t,
        referenceType: r
      };
    },
    // Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
    parseNurbsGeometry: function(e) {
      if (me === void 0)
        return console.error(
          "THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."
        ), new V();
      var t = parseInt(e.Order);
      if (isNaN(t))
        return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new V();
      for (var r = t - 1, n = e.KnotVector.a, a = [], i = e.Points.a, s = 0, o = i.length; s < o; s += 4)
        a.push(new Ve().fromArray(i, s));
      var f, l;
      if (e.Form === "Closed")
        a.push(a[0]);
      else if (e.Form === "Periodic") {
        f = r, l = n.length - 1 - f;
        for (var s = 0; s < r; ++s)
          a.push(a[s]);
      }
      var u = new me(r, n, a, f, l), p = u.getPoints(a.length * 7), c = new Float32Array(p.length * 3);
      p.forEach(function(w, g) {
        w.toArray(c, g * 3);
      });
      var h = new V();
      return h.setAttribute("position", new je(c, 3)), h;
    }
  };
  function K() {
  }
  K.prototype = {
    constructor: K,
    // take raw animation clips and turn them into three.js animation clips
    parse: function() {
      var e = [], t = this.parseClips();
      if (t !== void 0)
        for (var r in t) {
          var n = t[r], a = this.addClip(n);
          e.push(a);
        }
      return e;
    },
    parseClips: function() {
      if (v.Objects.AnimationCurve !== void 0) {
        var e = this.parseAnimationCurveNodes();
        this.parseAnimationCurves(e);
        var t = this.parseAnimationLayers(e), r = this.parseAnimStacks(t);
        return r;
      }
    },
    // parse nodes in FBXTree.Objects.AnimationCurveNode
    // each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
    // and is referenced by an AnimationLayer
    parseAnimationCurveNodes: function() {
      var e = v.Objects.AnimationCurveNode, t = /* @__PURE__ */ new Map();
      for (var r in e) {
        var n = e[r];
        if (n.attrName.match(/S|R|T|DeformPercent/) !== null) {
          var a = {
            id: n.id,
            attr: n.attrName,
            curves: {}
          };
          t.set(a.id, a);
        }
      }
      return t;
    },
    // parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
    // previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
    // axis ( e.g. times and values of x rotation)
    parseAnimationCurves: function(e) {
      var t = v.Objects.AnimationCurve;
      for (var r in t) {
        var n = {
          id: t[r].id,
          times: t[r].KeyTime.a.map(de),
          values: t[r].KeyValueFloat.a
        }, a = y.get(n.id);
        if (a !== void 0) {
          var i = a.parents[0].ID, s = a.parents[0].relationship;
          s.match(/X/) ? e.get(i).curves.x = n : s.match(/Y/) ? e.get(i).curves.y = n : s.match(/Z/) ? e.get(i).curves.z = n : s.match(/d|DeformPercent/) && e.has(i) && (e.get(i).curves.morph = n);
        }
      }
    },
    // parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
    // to various AnimationCurveNodes and is referenced by an AnimationStack node
    // note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
    parseAnimationLayers: function(e) {
      var t = v.Objects.AnimationLayer, r = /* @__PURE__ */ new Map();
      for (var n in t) {
        var a = [], i = y.get(parseInt(n));
        if (i !== void 0) {
          var s = i.children;
          s.forEach(function(o, f) {
            if (e.has(o.ID)) {
              var l = e.get(o.ID);
              if (l.curves.x !== void 0 || l.curves.y !== void 0 || l.curves.z !== void 0) {
                if (a[f] === void 0) {
                  var u = y.get(o.ID).parents.filter(function(d) {
                    return d.relationship !== void 0;
                  })[0].ID;
                  if (u !== void 0) {
                    var p = v.Objects.Model[u.toString()];
                    if (p === void 0) {
                      console.warn("THREE.FBXLoader: Encountered a unused curve.", o);
                      return;
                    }
                    var c = {
                      modelName: p.attrName ? X.sanitizeNodeName(p.attrName) : "",
                      ID: p.id,
                      initialPosition: [0, 0, 0],
                      initialRotation: [0, 0, 0],
                      initialScale: [1, 1, 1]
                    };
                    T.traverse(function(d) {
                      d.ID === p.id && (c.transform = d.matrix, d.userData.transformData && (c.eulerOrder = d.userData.transformData.eulerOrder));
                    }), c.transform || (c.transform = new m()), "PreRotation" in p && (c.preRotation = p.PreRotation.value), "PostRotation" in p && (c.postRotation = p.PostRotation.value), a[f] = c;
                  }
                }
                a[f] && (a[f][l.attr] = l);
              } else if (l.curves.morph !== void 0) {
                if (a[f] === void 0) {
                  var h = y.get(o.ID).parents.filter(function(S) {
                    return S.relationship !== void 0;
                  })[0].ID, w = y.get(h).parents[0].ID, g = y.get(w).parents[0].ID, u = y.get(g).parents[0].ID, p = v.Objects.Model[u], c = {
                    modelName: p.attrName ? X.sanitizeNodeName(p.attrName) : "",
                    morphName: v.Objects.Deformer[h].attrName
                  };
                  a[f] = c;
                }
                a[f][l.attr] = l;
              }
            }
          }), r.set(parseInt(n), a);
        }
      }
      return r;
    },
    // parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
    // hierarchy. Each Stack node will be used to create a AnimationClip
    parseAnimStacks: function(e) {
      var t = v.Objects.AnimationStack, r = {};
      for (var n in t) {
        var a = y.get(parseInt(n)).children;
        a.length > 1 && console.warn(
          "THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers."
        );
        var i = e.get(a[0].ID);
        r[n] = {
          name: t[n].attrName,
          layer: i
        };
      }
      return r;
    },
    addClip: function(e) {
      var t = [], r = this;
      return e.layer.forEach(function(n) {
        t = t.concat(r.generateTracks(n));
      }), new ze(e.name, -1, t);
    },
    generateTracks: function(e) {
      var t = [], r = new G(), n = new j(), a = new G();
      if (e.transform && e.transform.decompose(r, n, a), r = r.toArray(), n = new B().setFromQuaternion(n, e.eulerOrder).toArray(), a = a.toArray(), e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
        var i = this.generateVectorTrack(e.modelName, e.T.curves, r, "position");
        i !== void 0 && t.push(i);
      }
      if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
        var s = this.generateRotationTrack(
          e.modelName,
          e.R.curves,
          n,
          e.preRotation,
          e.postRotation,
          e.eulerOrder
        );
        s !== void 0 && t.push(s);
      }
      if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
        var o = this.generateVectorTrack(e.modelName, e.S.curves, a, "scale");
        o !== void 0 && t.push(o);
      }
      if (e.DeformPercent !== void 0) {
        var f = this.generateMorphTrack(e);
        f !== void 0 && t.push(f);
      }
      return t;
    },
    generateVectorTrack: function(e, t, r, n) {
      var a = this.getTimesForAllAxes(t), i = this.getKeyframeTrackValues(a, t, r);
      return new He(e + "." + n, a, i);
    },
    generateRotationTrack: function(e, t, r, n, a, i) {
      t.x !== void 0 && (this.interpolateRotations(t.x), t.x.values = t.x.values.map(x.degToRad)), t.y !== void 0 && (this.interpolateRotations(t.y), t.y.values = t.y.values.map(x.degToRad)), t.z !== void 0 && (this.interpolateRotations(t.z), t.z.values = t.z.values.map(x.degToRad));
      var s = this.getTimesForAllAxes(t), o = this.getKeyframeTrackValues(s, t, r);
      n !== void 0 && (n = n.map(x.degToRad), n.push(i), n = new B().fromArray(n), n = new j().setFromEuler(n)), a !== void 0 && (a = a.map(x.degToRad), a.push(i), a = new B().fromArray(a), a = new j().setFromEuler(a).inverse());
      for (var f = new j(), l = new B(), u = [], p = 0; p < o.length; p += 3)
        l.set(o[p], o[p + 1], o[p + 2], i), f.setFromEuler(l), n !== void 0 && f.premultiply(n), a !== void 0 && f.multiply(a), f.toArray(u, p / 3 * 4);
      return new _e(e + ".quaternion", s, u);
    },
    generateMorphTrack: function(e) {
      var t = e.DeformPercent.curves.morph, r = t.values.map(function(a) {
        return a / 100;
      }), n = T.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
      return new Ke(e.modelName + ".morphTargetInfluences[" + n + "]", t.times, r);
    },
    // For all animated objects, times are defined separately for each axis
    // Here we'll combine the times into one sorted array without duplicates
    getTimesForAllAxes: function(e) {
      var t = [];
      return e.x !== void 0 && (t = t.concat(e.x.times)), e.y !== void 0 && (t = t.concat(e.y.times)), e.z !== void 0 && (t = t.concat(e.z.times)), t = t.sort(function(r, n) {
        return r - n;
      }).filter(function(r, n, a) {
        return a.indexOf(r) == n;
      }), t;
    },
    getKeyframeTrackValues: function(e, t, r) {
      var n = r, a = [], i = -1, s = -1, o = -1;
      return e.forEach(function(f) {
        if (t.x && (i = t.x.times.indexOf(f)), t.y && (s = t.y.times.indexOf(f)), t.z && (o = t.z.times.indexOf(f)), i !== -1) {
          var l = t.x.values[i];
          a.push(l), n[0] = l;
        } else
          a.push(n[0]);
        if (s !== -1) {
          var u = t.y.values[s];
          a.push(u), n[1] = u;
        } else
          a.push(n[1]);
        if (o !== -1) {
          var p = t.z.values[o];
          a.push(p), n[2] = p;
        } else
          a.push(n[2]);
      }), a;
    },
    // Rotations are defined as Euler angles which can have values  of any size
    // These will be converted to quaternions which don't support values greater than
    // PI, so we'll interpolate large rotations
    interpolateRotations: function(e) {
      for (var t = 1; t < e.values.length; t++) {
        var r = e.values[t - 1], n = e.values[t] - r, a = Math.abs(n);
        if (a >= 180) {
          for (var i = a / 180, s = n / i, o = r + s, f = e.times[t - 1], l = e.times[t] - f, u = l / i, p = f + u, c = [], h = []; p < e.times[t]; )
            c.push(p), p += u, h.push(o), o += s;
          e.times = ie(e.times, t, c), e.values = ie(e.values, t, h);
        }
      }
    }
  };
  function W() {
  }
  W.prototype = {
    constructor: W,
    getPrevNode: function() {
      return this.nodeStack[this.currentIndent - 2];
    },
    getCurrentNode: function() {
      return this.nodeStack[this.currentIndent - 1];
    },
    getCurrentProp: function() {
      return this.currentProp;
    },
    pushStack: function(e) {
      this.nodeStack.push(e), this.currentIndent += 1;
    },
    popStack: function() {
      this.nodeStack.pop(), this.currentIndent -= 1;
    },
    setCurrentProp: function(e, t) {
      this.currentProp = e, this.currentPropName = t;
    },
    parse: function(e) {
      this.currentIndent = 0, this.allNodes = new k(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
      var t = this, r = e.split(/[\r\n]+/);
      return r.forEach(function(n, a) {
        var i = n.match(/^[\s\t]*;/), s = n.match(/^[\s\t]*$/);
        if (!(i || s)) {
          var o = n.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""), f = n.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"), l = n.match("^\\t{" + (t.currentIndent - 1) + "}}");
          o ? t.parseNodeBegin(n, o) : f ? t.parseNodeProperty(n, f, r[++a]) : l ? t.popStack() : n.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(n);
        }
      }), this.allNodes;
    },
    parseNodeBegin: function(e, t) {
      var r = t[1].trim().replace(/^"/, "").replace(/"$/, ""), n = t[2].split(",").map(function(o) {
        return o.trim().replace(/^"/, "").replace(/"$/, "");
      }), a = { name: r }, i = this.parseNodeAttr(n), s = this.getCurrentNode();
      this.currentIndent === 0 ? this.allNodes.add(r, a) : r in s ? (r === "PoseNode" ? s.PoseNode.push(a) : s[r].id !== void 0 && (s[r] = {}, s[r][s[r].id] = s[r]), i.id !== "" && (s[r][i.id] = a)) : typeof i.id == "number" ? (s[r] = {}, s[r][i.id] = a) : r !== "Properties70" && (r === "PoseNode" ? s[r] = [a] : s[r] = a), typeof i.id == "number" && (a.id = i.id), i.name !== "" && (a.attrName = i.name), i.type !== "" && (a.attrType = i.type), this.pushStack(a);
    },
    parseNodeAttr: function(e) {
      var t = e[0];
      e[0] !== "" && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
      var r = "", n = "";
      return e.length > 1 && (r = e[1].replace(/^(\w+)::/, ""), n = e[2]), { id: t, name: r, type: n };
    },
    parseNodeProperty: function(e, t, r) {
      var n = t[1].replace(/^"/, "").replace(/"$/, "").trim(), a = t[2].replace(/^"/, "").replace(/"$/, "").trim();
      n === "Content" && a === "," && (a = r.replace(/"/g, "").replace(/,$/, "").trim());
      var i = this.getCurrentNode(), s = i.name;
      if (s === "Properties70") {
        this.parseNodeSpecialProperty(e, n, a);
        return;
      }
      if (n === "C") {
        var o = a.split(",").slice(1), f = parseInt(o[0]), l = parseInt(o[1]), u = a.split(",").slice(3);
        u = u.map(function(p) {
          return p.trim().replace(/^"/, "");
        }), n = "connections", a = [f, l], Te(a, u), i[n] === void 0 && (i[n] = []);
      }
      n === "Node" && (i.id = a), n in i && Array.isArray(i[n]) ? i[n].push(a) : n !== "a" ? i[n] = a : i.a = a, this.setCurrentProp(i, n), n === "a" && a.slice(-1) !== "," && (i.a = q(a));
    },
    parseNodePropertyContinued: function(e) {
      var t = this.getCurrentNode();
      t.a += e, e.slice(-1) !== "," && (t.a = q(t.a));
    },
    // parse "Property70"
    parseNodeSpecialProperty: function(e, t, r) {
      var n = r.split('",').map(function(l) {
        return l.trim().replace(/^\"/, "").replace(/\s/, "_");
      }), a = n[0], i = n[1], s = n[2], o = n[3], f = n[4];
      switch (i) {
        case "int":
        case "enum":
        case "bool":
        case "ULongLong":
        case "double":
        case "Number":
        case "FieldOfView":
          f = parseFloat(f);
          break;
        case "Color":
        case "ColorRGB":
        case "Vector3D":
        case "Lcl_Translation":
        case "Lcl_Rotation":
        case "Lcl_Scaling":
          f = q(f);
          break;
      }
      this.getPrevNode()[a] = {
        type: i,
        type2: s,
        flag: o,
        value: f
      }, this.setCurrentProp(this.getPrevNode(), a);
    }
  };
  function Y() {
  }
  Y.prototype = {
    constructor: Y,
    parse: function(e) {
      var t = new b(e);
      t.skip(23);
      var r = t.getUint32();
      console.info("THREE.FBXLoader: FBX binary version: " + r);
      for (var n = new k(); !this.endOfContent(t); ) {
        var a = this.parseNode(t, r);
        a !== null && n.add(a.name, a);
      }
      return n;
    },
    // Check if reader has reached the end of content.
    endOfContent: function(e) {
      return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size();
    },
    // recursively parse nodes until the end of the file is reached
    parseNode: function(e, t) {
      var r = {}, n = t >= 7500 ? e.getUint64() : e.getUint32(), a = t >= 7500 ? e.getUint64() : e.getUint32();
      t >= 7500 ? e.getUint64() : e.getUint32();
      var i = e.getUint8(), s = e.getString(i);
      if (n === 0)
        return null;
      for (var o = [], f = 0; f < a; f++)
        o.push(this.parseProperty(e));
      var l = o.length > 0 ? o[0] : "", u = o.length > 1 ? o[1] : "", p = o.length > 2 ? o[2] : "";
      for (r.singleProperty = a === 1 && e.getOffset() === n; n > e.getOffset(); ) {
        var c = this.parseNode(e, t);
        c !== null && this.parseSubNode(s, r, c);
      }
      return r.propertyList = o, typeof l == "number" && (r.id = l), u !== "" && (r.attrName = u), p !== "" && (r.attrType = p), s !== "" && (r.name = s), r;
    },
    parseSubNode: function(e, t, r) {
      if (r.singleProperty === !0) {
        var n = r.propertyList[0];
        Array.isArray(n) ? (t[r.name] = r, r.a = n) : t[r.name] = n;
      } else if (e === "Connections" && r.name === "C") {
        var a = [];
        r.propertyList.forEach(function(p, c) {
          c !== 0 && a.push(p);
        }), t.connections === void 0 && (t.connections = []), t.connections.push(a);
      } else if (r.name === "Properties70") {
        var i = Object.keys(r);
        i.forEach(function(p) {
          t[p] = r[p];
        });
      } else if (e === "Properties70" && r.name === "P") {
        var s = r.propertyList[0], o = r.propertyList[1], f = r.propertyList[2], l = r.propertyList[3], u;
        s.indexOf("Lcl ") === 0 && (s = s.replace("Lcl ", "Lcl_")), o.indexOf("Lcl ") === 0 && (o = o.replace("Lcl ", "Lcl_")), o === "Color" || o === "ColorRGB" || o === "Vector" || o === "Vector3D" || o.indexOf("Lcl_") === 0 ? u = [r.propertyList[4], r.propertyList[5], r.propertyList[6]] : u = r.propertyList[4], t[s] = {
          type: o,
          type2: f,
          flag: l,
          value: u
        };
      } else
        t[r.name] === void 0 ? typeof r.id == "number" ? (t[r.name] = {}, t[r.name][r.id] = r) : t[r.name] = r : r.name === "PoseNode" ? (Array.isArray(t[r.name]) || (t[r.name] = [t[r.name]]), t[r.name].push(r)) : t[r.name][r.id] === void 0 && (t[r.name][r.id] = r);
    },
    parseProperty: function(e) {
      var t = e.getString(1);
      switch (t) {
        case "C":
          return e.getBoolean();
        case "D":
          return e.getFloat64();
        case "F":
          return e.getFloat32();
        case "I":
          return e.getInt32();
        case "L":
          return e.getInt64();
        case "R":
          var r = e.getUint32();
          return e.getArrayBuffer(r);
        case "S":
          var r = e.getUint32();
          return e.getString(r);
        case "Y":
          return e.getInt16();
        case "b":
        case "c":
        case "d":
        case "f":
        case "i":
        case "l":
          var n = e.getUint32(), a = e.getUint32(), i = e.getUint32();
          if (a === 0)
            switch (t) {
              case "b":
              case "c":
                return e.getBooleanArray(n);
              case "d":
                return e.getFloat64Array(n);
              case "f":
                return e.getFloat32Array(n);
              case "i":
                return e.getInt32Array(n);
              case "l":
                return e.getInt64Array(n);
            }
          typeof he == "undefined" && console.error(
            "THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js"
          );
          var s = new he.Inflate(new Uint8Array(e.getArrayBuffer(i))), o = new b(s.decompress().buffer);
          switch (t) {
            case "b":
            case "c":
              return o.getBooleanArray(n);
            case "d":
              return o.getFloat64Array(n);
            case "f":
              return o.getFloat32Array(n);
            case "i":
              return o.getInt32Array(n);
            case "l":
              return o.getInt64Array(n);
          }
        default:
          throw new Error("THREE.FBXLoader: Unknown property type " + t);
      }
    }
  };
  function b(e, t) {
    this.dv = new DataView(e), this.offset = 0, this.littleEndian = t !== void 0 ? t : !0;
  }
  b.prototype = {
    constructor: b,
    getOffset: function() {
      return this.offset;
    },
    size: function() {
      return this.dv.buffer.byteLength;
    },
    skip: function(e) {
      this.offset += e;
    },
    // seems like true/false representation depends on exporter.
    // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
    // then sees LSB.
    getBoolean: function() {
      return (this.getUint8() & 1) === 1;
    },
    getBooleanArray: function(e) {
      for (var t = [], r = 0; r < e; r++)
        t.push(this.getBoolean());
      return t;
    },
    getUint8: function() {
      var e = this.dv.getUint8(this.offset);
      return this.offset += 1, e;
    },
    getInt16: function() {
      var e = this.dv.getInt16(this.offset, this.littleEndian);
      return this.offset += 2, e;
    },
    getInt32: function() {
      var e = this.dv.getInt32(this.offset, this.littleEndian);
      return this.offset += 4, e;
    },
    getInt32Array: function(e) {
      for (var t = [], r = 0; r < e; r++)
        t.push(this.getInt32());
      return t;
    },
    getUint32: function() {
      var e = this.dv.getUint32(this.offset, this.littleEndian);
      return this.offset += 4, e;
    },
    // JavaScript doesn't support 64-bit integer so calculate this here
    // 1 << 32 will return 1 so using multiply operation instead here.
    // There's a possibility that this method returns wrong value if the value
    // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
    // TODO: safely handle 64-bit integer
    getInt64: function() {
      var e, t;
      return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t & 2147483648 ? (t = ~t & 4294967295, e = ~e & 4294967295, e === 4294967295 && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(t * 4294967296 + e)) : t * 4294967296 + e;
    },
    getInt64Array: function(e) {
      for (var t = [], r = 0; r < e; r++)
        t.push(this.getInt64());
      return t;
    },
    // Note: see getInt64() comment
    getUint64: function() {
      var e, t;
      return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t * 4294967296 + e;
    },
    getFloat32: function() {
      var e = this.dv.getFloat32(this.offset, this.littleEndian);
      return this.offset += 4, e;
    },
    getFloat32Array: function(e) {
      for (var t = [], r = 0; r < e; r++)
        t.push(this.getFloat32());
      return t;
    },
    getFloat64: function() {
      var e = this.dv.getFloat64(this.offset, this.littleEndian);
      return this.offset += 8, e;
    },
    getFloat64Array: function(e) {
      for (var t = [], r = 0; r < e; r++)
        t.push(this.getFloat64());
      return t;
    },
    getArrayBuffer: function(e) {
      var t = this.dv.buffer.slice(this.offset, this.offset + e);
      return this.offset += e, t;
    },
    getString: function(e) {
      for (var t = [], r = 0; r < e; r++)
        t[r] = this.getUint8();
      var n = t.indexOf(0);
      return n >= 0 && (t = t.slice(0, n)), J.decodeText(new Uint8Array(t));
    }
  };
  function k() {
  }
  k.prototype = {
    constructor: k,
    add: function(e, t) {
      this[e] = t;
    }
  };
  function ge(e) {
    var t = "Kaydara FBX Binary  \0";
    return e.byteLength >= t.length && t === ne(e, 0, t.length);
  }
  function ye(e) {
    var t = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"], r = 0;
    function n(s) {
      var o = e[s - 1];
      return e = e.slice(r + s), r++, o;
    }
    for (var a = 0; a < t.length; ++a) {
      var i = n(1);
      if (i === t[a])
        return !1;
    }
    return !0;
  }
  function te(e) {
    var t = /FBXVersion: (\d+)/, r = e.match(t);
    if (r) {
      var n = parseInt(r[1]);
      return n;
    }
    throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
  }
  function de(e) {
    return e / 46186158e3;
  }
  var we = [];
  function D(e, t, r, n) {
    var a;
    switch (n.mappingType) {
      case "ByPolygonVertex":
        a = e;
        break;
      case "ByPolygon":
        a = t;
        break;
      case "ByVertice":
        a = r;
        break;
      case "AllSame":
        a = n.indices[0];
        break;
      default:
        console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType);
    }
    n.referenceType === "IndexToDirect" && (a = n.indices[a]);
    var i = a * n.dataSize, s = i + n.dataSize;
    return Ae(we, n.buffer, i, s);
  }
  var Z = new B(), M = new G();
  function re(e) {
    var t = new m(), r = new m(), n = new m(), a = new m(), i = new m(), s = new m(), o = new m(), f = new m(), l = new m(), u = new m(), p = new m(), c = e.inheritType ? e.inheritType : 0;
    if (e.translation && t.setPosition(M.fromArray(e.translation)), e.preRotation) {
      var h = e.preRotation.map(x.degToRad);
      h.push(e.eulerOrder), r.makeRotationFromEuler(Z.fromArray(h));
    }
    if (e.rotation) {
      var h = e.rotation.map(x.degToRad);
      h.push(e.eulerOrder), n.makeRotationFromEuler(Z.fromArray(h));
    }
    if (e.postRotation) {
      var h = e.postRotation.map(x.degToRad);
      h.push(e.eulerOrder), a.makeRotationFromEuler(Z.fromArray(h));
    }
    e.scale && i.scale(M.fromArray(e.scale)), e.scalingOffset && o.setPosition(M.fromArray(e.scalingOffset)), e.scalingPivot && s.setPosition(M.fromArray(e.scalingPivot)), e.rotationOffset && f.setPosition(M.fromArray(e.rotationOffset)), e.rotationPivot && l.setPosition(M.fromArray(e.rotationPivot)), e.parentMatrixWorld && (u = e.parentMatrixWorld);
    var w = r.multiply(n).multiply(a), g = new m();
    u.extractRotation(g);
    var d = new m();
    d.copyPosition(u);
    var A = new m();
    A.getInverse(g).multiply(u);
    var L = new m();
    if (c === 0)
      L.copy(g).multiply(w).multiply(A).multiply(i);
    else if (c === 1)
      L.copy(g).multiply(A).multiply(w).multiply(i);
    else {
      var S = new m().getInverse(i), R = new m().multiply(A).multiply(S);
      L.copy(g).multiply(w).multiply(R).multiply(i);
    }
    var $ = new m().getInverse(l), I = new m().getInverse(s), E = new m();
    E.copy(t).multiply(f).multiply(l).multiply(r).multiply(n).multiply(a).multiply($).multiply(o).multiply(s).multiply(i).multiply(I);
    var P = new m().copyPosition(E), C = new m().copy(u).multiply(P);
    return p.copyPosition(C), E = new m().multiply(p).multiply(L), E;
  }
  function ae(e) {
    e = e || 0;
    var t = [
      "ZYX",
      // -> XYZ extrinsic
      "YZX",
      // -> XZY extrinsic
      "XZY",
      // -> YZX extrinsic
      "ZXY",
      // -> YXZ extrinsic
      "YXZ",
      // -> ZXY extrinsic
      "XYZ"
      // -> ZYX extrinsic
      // 'SphericXYZ', // not possible to support
    ];
    return e === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), t[0]) : t[e];
  }
  function q(e) {
    var t = e.split(",").map(function(r) {
      return parseFloat(r);
    });
    return t;
  }
  function ne(e, t, r) {
    return t === void 0 && (t = 0), r === void 0 && (r = e.byteLength), J.decodeText(new Uint8Array(e, t, r));
  }
  function Te(e, t) {
    for (var r = 0, n = e.length, a = t.length; r < a; r++, n++)
      e[n] = t[r];
  }
  function Ae(e, t, r, n) {
    for (var a = r, i = 0; a < n; a++, i++)
      e[i] = t[a];
    return e;
  }
  function ie(e, t, r) {
    return e.slice(0, t).concat(r).concat(e.slice(t));
  }
  return z;
}();
export {
  qe as FBXLoader
};
