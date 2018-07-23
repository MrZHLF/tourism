<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" @click="handleClick(item.name)" v-for="item in hot" :key="item.id">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" 
				v-for="(item,key) in list" 
				:ref="key"
				:key="key">
				<div class="title border-topbottom">{{key}}</div>
				<ul class="item-list">
					<li class="item border-bottom"
						 v-for="listInner in item"
						  :key="listInner.id"
							 @click="handleClick(listInner.name)"
					>{{listInner.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	props: {
	  	hot: Array,
	  	list: Object,
	  	letter:String
	  },
		methods: {
			handleClick (city) {
				this.$store.commit('changCity',city)
				this.$router.push('/')
				console.log(city)
			}
		},
	mounted () {
		this.scroll = new BScroll(this.$refs.wrapper)
	},
	watch:{
		letter () {  //监听列表滚动事件 A-Z
			if(this.letter) {
				const element = this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
				// console.log(element)
			}
		}
	}
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.border-topbottom
	&:before
		background: #ccc
	&:after
		background:#ccc
.border-bottom
	&:before
		background: #ccc
.list
	overflow: hidden
	position:absolute
	top:1.58rem
	left:0
	right:0
	bottom:0
	.title
		line-height: .54rem;
		background: #eee;
		padding-left: .2rem;
		color: #666;
		font-size: .26rem;
	.button-list
		overflow:hidden
		padding: .1rem .6rem .1rem .1rem
		.button-wrapper
			float:left
			width:33.33%
			.button
				margin: .1rem
				padding: .1rem 0
				text-align: center
				border: .02rem solid #ccc
				border-radius: .06rem
	.item-list
		.item
			line-height: .76rem
			color:#212121
			padding-left: .2rem
			font-size: .28rem
			text-overflow: ellipsis
			white-space: nowrap
</style>