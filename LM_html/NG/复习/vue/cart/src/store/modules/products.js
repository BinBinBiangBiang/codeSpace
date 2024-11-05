import shop from '../../api/shop'

const state = {
  all:[]
}

const getters = {
  
}

const actions = {
  async getAllProducts ({ commit }) {
    await shop.getProducts(
      products => {
        commit('setProducts', products)
      }
    )
  }
}

// 对状态的写操作，而且是同步操作 mutations可变的
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations,
}