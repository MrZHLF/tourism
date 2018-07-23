<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link :to="'/detail/' + item.id" tag="li" class="item border-bottom border" v-for="item in recommend" :key="item.id">
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	props:{
		recommend:Array
	}
}
</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl';
.title
	line-height: .8rem
	background: #f5f5f5
	margin-top: .2rem
	text-indent: .2rem
	color: #212121
.item
	display: flex
	overflow: hidden
	height: 1.9rem
	background: #fff
	.item-img
		width:1.7rem
		height: 1.7rem
		padding: .1rem
	.item-info
		flex: 1
		padding: .1rem
		min-width: 0
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color: #ccc
			ellipsis()
		.item-button
			line-height: .44rem
			background: #ff9300
			padding: 0 .2rem
			border-radius: .06rem
			margin-top: .16rem
			color: #fff
</style>