"use strict";
const common_vendor = require("../../common/vendor.js");
const api_player = require("../../api/player.js");
require("../../api/request.js");
const _sfc_main = {
  __name: "musicPlayer",
  props: {
    bottom: {
      type: String,
      default: "0rpx"
    }
  },
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "5c150d4f": __props.bottom
    }));
    const store = common_vendor.useStore();
    const state = common_vendor.reactive({
      url: "",
      name: "",
      author: "",
      time: "",
      pic: "",
      method: "pause"
    });
    const getSongUrl = async (id) => {
      const res = await api_player.apiGetSongUrl(id);
      state.url = res.data.data[0].url;
      const innerAudioContext = common_vendor.index.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.src = state.url;
      innerAudioContext.onPlay(() => {
      });
      innerAudioContext.onError((res2) => {
      });
    };
    const getSongDetail = async (id) => {
      const res = await api_player.apiGetSongDetail(id);
      state.name = res.data.songs[0].al.name;
      state.pic = res.data.songs[0].al.picUrl;
      state.time = res.data.songs[0].dt;
      state.author = res.data.songs[0].ar.map((item) => item.name).join("/");
    };
    common_vendor.watch(
      () => store.state.currentPlayId,
      async (newVal, oldVal) => {
        getSongUrl(newVal);
        getSongDetail(newVal);
      }
    );
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(store).state.isShowPlayer
      }, common_vendor.unref(store).state.isShowPlayer ? {
        b: state.pic,
        c: common_vendor.t(state.name),
        d: common_vendor.t(state.author),
        e: common_vendor.s(_ctx.__cssVars())
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/WORKSPACE/LM_html/Vue/uniapp/music/components/musicPlayer/musicPlayer.vue"]]);
wx.createComponent(Component);
