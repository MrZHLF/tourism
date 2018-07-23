<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-show="showHeader">
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link >
		<div class="mp-header" v-show="!showHeader" :style="opactiyStyleColor">
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe624;</div>
			 </router-link>
			景点详情
		</div>
	</div>
</template>

<script>
export default {
	name:"DetailHeader",
	data () {
		return {
			showHeader:true,
			opactiyStyleColor: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			const top = document.documentElement.scrollTop;
			if (top > 40 ) {  
				let opacity = top / 140
				opacity = opacity > 1 ? 1 : opacity
				this.opactiyStyleColor= { opacity }
				this.showHeader = false
			} else {
				this.showHeader = true
			}
		}
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll)
	},
	unmounted () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';
.header-abs
	position: absolute
	left: .2rem
	top: .2rem
	width: .8rem
	height: .8rem
	line-height: .8rem
	border-radius: .4rem
	background: rgba(0,0,0,.5)
	z-index: 99
	.header-abs-back
		text-align: center
		color: #fff
		font-size: .4rem
.mp-header
	z-index:999
	position: fixed
	top: 0
	left: 0
	right: 0
	height: $headerHeight
	line-height: $headerHeight
	text-align: center
	background: $bgColor
	color: #fff
	font-size: .32rem
	.header-fixed-back
		position: absolute
		top:0
		left: 0
		width: .64rem
		text-align:center
		font-size:.44rem
		color:#fff
</style>