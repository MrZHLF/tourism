<template>
	<div>
		<div class="banner" @click="handleGallaryClick">
			<img class="banner-img" :src="bannerImg" alt="">
			<div class="banner-info">
				<div class="banner-titel">{{this.sightName}}</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe692;</span>
					{{this.bannerImg.length}}
				</div>
			</div>
		</div>
		<Gallary v-show="gallart" @close="handleCloseClick" :imgs="gallaryImgs"></Gallary>
	</div>	
</template>

<script>
import Gallary from 'common/gallary/Gallary'
	export default {
		name:"Detailbanner",
		props:{
			sightName: String,
			bannerImg: String,
			gallaryImgs: Array
		},
		data () {
			return {
				gallart: false
			}
		},
		methods: {
			handleGallaryClick () {
				this.gallart = true  //开启画廊
			},
			handleCloseClick () {
				this.gallart = false //关闭画廊
			}
		},
		components: {
			Gallary
		}
	}
</script>

<style scoped lang="stylus">
.banner
	overflow:hidden
	position:relative
	height:0
	padding-bottom: 55%
	.banner-img
		width:100%
	.banner-info
		display: flex
		position:absolute
		left:0
		right:0
		bottom:0
		line-height: .6rem
		color: #fff
		background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
		.banner-titel
			flex:1
			font-size:.32rem
			padding: 0 .2rem
		.banner-number
			height: .32rem
			line-height: .32rem
			margin-top: .14rem
			border-radius: .2rem
			padding: 0 .4rem
			font-size:.24rem
			background:rgba(0,0,0,.8)
			.banner-icon
				font-size: .24rem
</style>