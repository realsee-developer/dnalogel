const e = {
  globalConfig: {
    visibleConfig: {
      followModelVisibility: !0
    },
    unfoldedConfig: {
      autoUnfold: {
        enable: !0,
        strategy: "MinimumDistance",
        distance: { max: 5 }
      }
    },
    tag3DConfig: {
      ratio: 35e-4
    }
  },
  contentTypeConfig: {
    "[Mapview]": {
      unfoldedConfig: {
        autoUnfold: {
          enable: !1,
          distance: { max: 9999 }
        }
      }
    },
    "[Floorplan]": {
      unfoldedConfig: {
        autoUnfold: {
          enable: !1,
          distance: { max: 9999 }
        }
      }
    },
    "Any-Audio-plane": {
      unfoldedConfig: {
        keep: "unfolded"
      }
    },
    Link: {
      unfoldedConfig: {
        // VR 跳转标签没有收起状态
        keep: "unfolded"
      }
    },
    Panorama: {
      unfoldedConfig: {
        // VR 跳转标签没有收起状态
        keep: "unfolded"
      }
    },
    VRLink: {
      unfoldedConfig: {
        // VR 跳转标签没有收起状态
        keep: "unfolded"
      }
    },
    PanoLink: {
      unfoldedConfig: {
        // VR 跳转标签没有收起状态
        keep: "unfolded"
      }
    },
    MediaPlane: {
      unfoldedConfig: {
        keep: "unfolded"
      },
      visibleConfig: {
        alwaysShowWhenMovePano: !0
      },
      initialData: {
        autoplayConfig: {
          autoplayCarousel: !0,
          autoplayVideo: !1,
          autoplayVideoInCarousel: !1
        }
      }
    },
    "Model-Any": {
      unfoldedConfig: {
        keep: "unfolded"
      },
      visibleConfig: {
        keep: "visible",
        visibleFiveMode: "all",
        alwaysShowWhenMovePano: !0
      }
    }
  }
};
export {
  e as DefaultConfig,
  e as default
};
