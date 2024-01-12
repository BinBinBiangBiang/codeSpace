<template>
    <div>
        <!-- drag属性是一个用于控制元素是否可以被拖动的属性。它有以下几种可能的取值：
      auto：元素可以被拖动，但是拖动行为的具体效果由浏览器决定。
      none：元素不可以被拖动。
      element：元素本身可以被拖动。
      content：元素中的内容可以被拖动。 -->
        <!-- tailwindcss  原子化的css h-14   1 => 0.25rem -->
        <div class="flex items-center justify-between drag h-14">
            <div class="flex items-center pl-5">
                <IconPark :icon="Left" :size="iconSize" stroke-width:number="2" class="icon-button" @click="router.back()" />
                <IconPark :icon="Right" :size="iconSize" stroke-width:number="2" class="icon-button" />
                <div class="search no-drag ml-2">
                    <SearchPop />
                </div>
            </div>
            <div class="flex items-center mr-5">
                <IconPark :icon="Mail" :size="iconSize" stroke-width:number="2" class="icon-button" />
                <IconPark :icon="Platte" :size="iconSize" stroke-width:number="2" class="icon-button" />
                <IconPark :icon="HamburgerButton" :size="iconSize" stroke-width:number="2" class="icon-button" />

            </div>
            <div class="flex items-center mr-5"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchPop from '@/components/layout/header/SearchPop.vue'
import IconPark from '@/components/common/IconPark.vue'
import { Left, Mail, Platte, Right, HamburgerButton } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'

const router = useRouter();
const iconSize = 22;
</script>

<style scoped></style>