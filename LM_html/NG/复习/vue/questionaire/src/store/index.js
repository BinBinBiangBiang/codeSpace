import { createStore } from 'vuex'
import Axios from 'axios'

export default createStore({
  // state 全局数据源
  state() {
    return {
      questionList: [],
      itemNum: 1,  // 第几题
      answerId: [],  // 存放选中的答案
    }
  },
  // computed
  // Getters 类似于组件中的计算属性，用于从 state 中派生出一些状态。它们对应于 store 中的计算属性。
  getters: {
    rightAnswer(state) {
      let arr = []
      for (let question of state.questionList) {
        for (let answer of question.topic_answer) {
          if (answer.is_standard_answer == 1) {
            arr.push(answer.topic_answer_id)
          }
        }
      }
      return arr
    }
  },
  // methods
  // Mutations 是用于修改 state 的方法。
  // 每个 mutation 都有一个字符串的事件类型（type）和一个回调函数，回调函数是实际进行状态修改的地方。Mutations 是同步的操作。
  mutations: { // 同步的方式去修改数据源
    getQuestionList(state, list) {
      state.questionList = list
    },
    recordAnswer(state, id) {
      state.answerId.push(id)
    },
    nextItem(state) {
      // 第一步：保存当前答案
      state.itemNum += 1;
    }
  },
  // async methods
  //  Actions 是用于触发 mutations 的方法。Actions 可以包含异步操作，然后通过提交 mutations 来修改 state。它们对应于 store 中的方法。
  actions: {
    getQuestionListAction({ commit }) {  // context 整个store
      Axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/fri')
        .then(res => {
          console.log(res);
          // 触发getQuestionList
          // context.commit('getQuestionList',res.data);// 上述getQuestionListAction的参数如果没有解构 而是直接传context 就写这个 解构了就写下面这个
          commit('getQuestionList', res.data);
        })
    },
    recordAnswerAction({ commit, state }, id) {
      commit('recordAnswer', id)
      if (state.itemNum < state.questionList.length) {
        commit('nextItem')
      }
    }
  },
  //  Modules 允许将 store 分割成模块，每个模块都有自己的 state、getters、mutations 和 actions。这有助于组织大型应用的代码。
  modules: {
  }
})
