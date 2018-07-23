<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<router-link tag="li" :to="'/list/' + item.id" class="item border-bottom" v-for="item in list" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name:'weekend',
	props:{
		list:Array
	}
}
</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl';
.title
	line-height: .8rem
	background: #eee
	text-indent: .2rem
	color: #212121
.item
	background: #fff	
.item-img-wrapper
	overflow:hidden
	height: 0
	padding-bottom: 37.09%
	.item-img
		width:100%
.item-info
	padding: .1rem
	.item-title
		line-height: .54rem
		font-size: .32rem
		ellipsis()
	.item-desc
		line-height: .4rem
		color: #616161
		ellipsis()
</style>