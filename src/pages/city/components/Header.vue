<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.header
	overflow: hidden
	height $headerHeight
	line-height: $headerHeight
	text-align: center
	color: #fff
	background: $bgColor
	font-size: .4rem
	.back-icon
		position: absolute
		left: 0
		top: 0
		width: .64rem
		font-size: .4rem
		text-align: center
		color: #fff
</style>