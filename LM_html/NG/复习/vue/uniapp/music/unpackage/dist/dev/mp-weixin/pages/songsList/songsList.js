"use strict";
const common_vendor = require("../../common/vendor.js");
const api_songs = require("../../api/songs.js");
require("../../api/request.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_musicPlayer2 = common_vendor.resolveComponent("musicPlayer");
  (_easycom_uni_icons2 + _easycom_musicPlayer2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_musicPlayer = () => "../../components/musicPlayer/musicPlayer.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_musicPlayer)();
}
const _sfc_main = {
  __name: "songsList",
  setup(__props) {
    const list = common_vendor.ref([]);
    const info = common_vendor.ref({});
    const store = common_vendor.useStore();
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    common_vendor.onLoad((option) => {
      getPlayList(option.id);
      getPlayListDetail(option.id);
    });
    const getPlayList = async (id) => {
      const res = await api_songs.apiGetPlayList(id, 20, 0);
      list.value = res.data.songs;
    };
    const getPlayListDetail = async (id) => {
      const res = await api_songs.apiGetPlayListDetail(id);
      info.value = res.data.playlist;
    };
    const showPlayer = (id) => {
      store.commit("changeIsShowPlayer", true);
      store.commit("changeCurrentPlayId", id);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          type: "left",
          size: "22",
          color: "#fff"
        }),
        c: common_vendor.p({
          type: "more-filled",
          size: "22",
          color: "#fff"
        }),
        d: info.value.coverImgUrl,
        e: common_vendor.t(info.value.name),
        f: info.value.creator && info.value.creator.avatarUrl,
        g: common_vendor.t(info.value.creator && info.value.creator.nickname),
        h: common_vendor.p({
          type: "right",
          size: "15",
          color: "#fff"
        }),
        i: common_vendor.p({
          type: "redo",
          size: "20",
          color: "#fff"
        }),
        j: common_vendor.t(info.value.shareCount),
        k: common_vendor.p({
          type: "chat",
          size: "20",
          color: "#fff"
        }),
        l: common_vendor.p({
          type: "download",
          size: "20",
          color: "#fff"
        }),
        m: common_vendor.t(info.value.subscribedCount),
        n: common_vendor.p({
          type: "headphones",
          size: "26",
          color: "#d81e06"
        }),
        o: common_vendor.t(info.value.trackCount),
        p: common_vendor.f(list.value, (song, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(song.name),
            c: common_vendor.f(song.ar, (item, i, i1) => {
              return common_vendor.e({
                a: common_vendor.t(item.name),
                b: i !== song.ar.length - 1
              }, i !== song.ar.length - 1 ? {} : {}, {
                c: item.id
              });
            }),
            d: common_vendor.t(song.al && song.al.name),
            e: common_vendor.o(($event) => showPlayer(song.id), song.id),
            f: song.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/WORKSPACE/LM_html/Vue/uniapp/music/pages/songsList/songsList.vue"]]);
wx.createPage(MiniProgramPage);
