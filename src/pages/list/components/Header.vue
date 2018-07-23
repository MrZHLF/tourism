<template>
	<div>
		<div class="mp-header">
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe624;</div>
			</router-link>
			最赞的海滨浴场
		</div>
	</div>
</template>

<script>
	export default {
		name: "listHeader"
	}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';
.mp-header
	z-index:999
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