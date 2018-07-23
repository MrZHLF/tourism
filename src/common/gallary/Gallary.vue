<template>
	<div class="container"  @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
				<!-- slides -->
				<swiper-slide>
					<img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png" alt="">
				</swiper-slide>
				<swiper-slide>
					<img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png" alt="">
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			imgs:{
				type: Array,
				default () {
				return []
			  }
			}
		},
		data () {
			return {
				swiperOption:{
					pagination: '.swiper-pagination',
					paginationType : 'fraction',
					observeParents: true,
					observer: true
				}
			}
		},
		methods: {
			handleGallaryClick () {
				this.$emit('close')
			}
		}
	}
</script>

<style scoped lang="stylus">
.container >>> .swiper-container
	    overflow: inherit;
.container 
	display: flex
	flex-direction: column
	justify-content: center
	z-index:999
	position: fixed
	left: 0
	right: 0
	top: 0
	bottom: 0
	background: #212121
	.wrapper
		height:0
		width:100%
		padding-bottom:100%
		.swiper-img
			width:100%
		.swiper-pagination
			color:#fff
			bottom: -1rem
</style>