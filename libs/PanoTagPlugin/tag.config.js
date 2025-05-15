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
    },
    popoverConfig: {
      enabled: !1,
      // debug: true,
      trigger: "hover",
      triggerDelay: 500,
      placement: "auto",
      autoPlacementBaseSpace: {
        top: 0.2,
        right: 0.15,
        bottom: 0.2
      },
      transitionDuration: 100,
      // theme: 'light',
      toolbar: {
        showMore: !0,
        showShare: !0
      },
      viewMoreText: "查看更多"
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
        visibleFiveMode: "all"
      }
    },
    Marketing: {
      popoverConfig: {
        enabled: !1
      }
    },
    Audio: {
      popoverConfig: {
        enabled: !1
      }
    }
  }
};
export {
  e as DefaultConfig,
  e as default
};
