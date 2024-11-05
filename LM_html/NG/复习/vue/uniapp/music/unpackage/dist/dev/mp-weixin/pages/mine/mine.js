"use strict";
const common_vendor = require("../../common/vendor.js");
const api_mine = require("../../api/mine.js");
const utils_index = require("../../utils/index.js");
require("../../api/request.js");
if (!Array) {
  const _easycom_wyheader2 = common_vendor.resolveComponent("wyheader");
  const _easycom_menuLeft2 = common_vendor.resolveComponent("menuLeft");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_musicPlayer2 = common_vendor.resolveComponent("musicPlayer");
  (_easycom_wyheader2 + _easycom_menuLeft2 + _easycom_uni_icons2 + _easycom_musicPlayer2)();
}
const _easycom_wyheader = () => "../../components/wyheader/wyheader.js";
const _easycom_menuLeft = () => "../../components/menuLeft/menuLeft.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_musicPlayer = () => "../../components/musicPlayer/musicPlayer.js";
if (!Math) {
  (_easycom_wyheader + _easycom_menuLeft + _easycom_uni_icons + _easycom_musicPlayer)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "0513ccb4": nav_bottom.value
    }));
    const store = common_vendor.useStore();
    const userInfo = common_vendor.ref({});
    const activeNum = common_vendor.ref(0);
    const listNav = ["音乐", "播客", "动态"];
    const nav_bottom = common_vendor.ref(750 / 3 / 2 + "rpx");
    const sort_playlist = common_vendor.ref([]);
    const headerBgColor = common_vendor.ref("rgba(255, 255, 255, 0)");
    const headerFontColor = common_vendor.ref("rgba(255, 255, 255, 1)");
    const showTab = common_vendor.ref([true, false, false]);
    const isLogin = common_vendor.computed(() => {
      return store.state.loginState;
    });
    const login = () => {
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    };
    const getUserInfo = async () => {
      const res = await api_mine.apiGetUserInfo(store.state.userInfo.userId);
      userInfo.value = res.data;
    };
    const getUserSongsList = async () => {
      const res = await api_mine.apiGetUserSongsList(store.state.userInfo.userId);
      sort_playlist.value = res.data.playlist;
    };
    common_vendor.watch(
      () => store.state.userInfo.userId,
      (newVal, oldVal) => {
        if (newVal) {
          getUserInfo();
          getUserSongsList();
        }
      },
      { immediate: true }
    );
    const changeNav = (index) => {
      activeNum.value = index;
      nav_bottom.value = 750 / 3 / 2 * (2 * index + 1) + "rpx";
      showTab.value = [false, false, false];
      showTab.value[index] = true;
    };
    let bgOpacity = 0;
    let fontColor = 255;
    const handleScroll = (e) => {
      let top = e.detail.scrollTop;
      if (top <= 340) {
        bgOpacity = (top / 340).toFixed(2);
      } else {
        bgOpacity = 1;
      }
      if (top >= 200) {
        fontColor = 0;
      } else {
        fontColor = 255;
      }
      headerBgColor.value = `rgba(255, 255, 255, ${bgOpacity})`;
      headerFontColor.value = `rgb(${fontColor}, ${fontColor}, ${fontColor})`;
    };
    const goSongsList = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/songsList/songsList?id=${id}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          icon: "more-filled",
          bgColor: headerBgColor.value,
          needBox: false,
          fontColor: headerFontColor.value
        }),
        b: `url(${userInfo.value.profile && userInfo.value.profile.backgroundUrl})`,
        c: common_vendor.unref(isLogin)
      }, common_vendor.unref(isLogin) ? {
        d: userInfo.value.profile && userInfo.value.profile.avatarUrl
      } : {}, {
        e: common_vendor.unref(isLogin)
      }, common_vendor.unref(isLogin) ? {
        f: common_vendor.t(userInfo.value.profile && userInfo.value.profile.nickname),
        g: common_vendor.t(common_vendor.unref(utils_index.formateTime)(userInfo.value.profile && userInfo.value.profile.birthday).ageLever),
        h: common_vendor.t(common_vendor.unref(utils_index.formateTime)(userInfo.value.profile && userInfo.value.profile.birthday).horoscope),
        i: common_vendor.t(~~(userInfo.value.createDays / 365)),
        j: common_vendor.t(userInfo.value.profile && userInfo.value.profile.follows),
        k: common_vendor.t(userInfo.value.profile && userInfo.value.profile.followeds),
        l: common_vendor.t(userInfo.value.level),
        m: common_vendor.t(userInfo.value.listenSongs)
      } : {
        n: common_vendor.p({
          type: "right",
          size: "16"
        }),
        o: common_vendor.o(login)
      }, {
        p: common_vendor.f(listNav, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.o(($event) => changeNav(index), index),
            c: activeNum.value === index ? 1 : "",
            d: index
          };
        }),
        q: common_vendor.f(sort_playlist.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.coverImgUrl,
            b: common_vendor.t(item.name),
            c: item.specialType == 0
          }, item.specialType == 0 ? {} : {}, {
            d: common_vendor.t(item.trackCount),
            e: item.specialType > 0
          }, item.specialType > 0 ? {
            f: common_vendor.t(item.playCount)
          } : {}, {
            g: item.specialType == 0
          }, item.specialType == 0 ? {
            h: common_vendor.t(item.creator.nickname)
          } : {}, {
            i: common_vendor.o(($event) => goSongsList(item.id), item.id),
            j: item.id
          });
        }),
        r: showTab.value[0],
        s: showTab.value[1],
        t: showTab.value[2],
        v: common_vendor.p({
          bottom: "100rpx"
        }),
        w: common_vendor.o(handleScroll),
        x: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"], ["__file", "D:/WORKSPACE/LM_html/Vue/uniapp/music/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
