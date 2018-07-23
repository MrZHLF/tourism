<template>
	<div class="main">
		<div class="list-item" v-for="item of list" :key="item.id">
			<div class="list-item-img">
				<img :src="item.imgUrl" alt="">
			</div>
			<div class="list-product-info">
				<p class="product-name">{{item.name}}</p>
				<p class="product-desc">{{item.desc}}</p>
				<div class="product-price">
					¥<em>{{item.price}}</em>
					<span>起</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"detailsList",
		props: {
			list: Array
		}
	}
</script>

<style scoped lang="stylus">
.list-item 
	margin-bottom: .2rem
	.list-item-img 
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 43.37288%
		.list-item-img img
			width: 100%
	.list-product-info
		position: relative
		padding: .14rem .2rem .24rem .2rem
		.product-name
			overflow: hidden
			line-height: .54rem
			font-size: .36rem
			color: #212121
			padding-right: 2.2rem
			white-space: nowrap
			text-overflow: ellipsis
		.product-desc
			overflow: hidden
			font-size: .26rem
			color: #616161
			line-height: .45rem
			white-space: nowrap
			text-overflow: ellipsis
		.product-price
			position: absolute
			top: .25rem
			right: .2rem
			color:#ff8300
			em
				font-weight: bold
				font-size:.4rem
				margin-left: .04rem
			span
				color: #000
</style>