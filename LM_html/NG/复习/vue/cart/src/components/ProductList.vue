<template>
  <div>
    <ul>
      <li 
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} - {{ currency(product.price) }}
        <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)"
        >
        Add to cart
      </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { currency } from '../currency'

const store = useStore()
const products = computed(() =>{
  return store.state.products.all
})

const addProductToCart = (product) => {
  store.dispatch(
    'cart/addProductToCart',product
  )
}

// dispatch 派遣一个工作  store/modules/products中的action中的方法开始执行
// 这里的products是store/modules/products中的name
// 这里的getAllProducts是store/modules/products中的action的name
store.dispatch('products/getAllProducts')
console.log(products);
</script>

<style lang="scss" scoped>

</style>