<template>
	<view>about page</view>
	<view class="btn">
		<button type="default">按钮</button>
	</view>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
	const reqTask = uni.request({
		url:'https://mock.mengxuegu.com/mock/65aa0683c4cd67421b34c926/movie/movieList',
		methods:'Get',
		success:(res) => {
			console.log(res);
			uni.setStorage({
				key:'movieName',
				data:res.data.movieList[0].nm,
				success() {
					uni.showToast({
						title:'保存成功',
						duration:1500,
						icon:'success'
					})
				}
			})
		}
	})
	// 取消接口请求
	// reqTask.abort()
})
</script>

<style lang="scss">
.btn{
	button{
		// rpx是根据屏幕宽度定制的响应式单位
		width: 100rpx;
	}
}
</style>
