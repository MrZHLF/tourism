<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音" />
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="serach-item border-bottom" @click="handleClick(item.name)" v-for="item in listItem" :key="item.id">{{item.name}}</li>
				<li v-show="hasNoData" class="serach-item border-bottom">没有搜索到匹配的数据</li>
			</ul>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
	props: {
	  	list: Object,
	},
	data() {
		return {
			keyword:'',
			listItem:[],
			timer:null
		}
	},
	methods: {
		handleClick (city) {
			this.$store.commit('changCity',city)
			this.$router.push('/')
		}
	},
	computed: {
		hasNoData() {
			return !this.listItem.length  //没有搜索的条件是否显示
		}
	},
	watch: {
		keyword () {
			if (this.timer) {
				clearTimeout(this.timer)
			}
			if(!this.keyword) {  //清空
				this.listItem = ""
				return
			}
			this.timer = setTimeout(() => {
				const result = []
				for (let i in this.list) {
					this.list[i].forEach((value) => {   //匹配搜索的条件
						if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
							result.push(value)
						}
					})
				}
				this.listItem= result
			},100)
		}
	},
	mounted () {
		this.scroll = new BScroll(this.$refs.search)
	}
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.search
	height: .72rem
	padding: 0 .1rem
	background:$bgColor
	.search-input
		box-sizing: border-box
		width:100%
		height: .62rem
		line-height: .62rem
		text-align: center
		border-radius: .06rem
		padding: 0 .1rem
		color: #666
.search-content 
	z-index: 1
	overflow:hidden
	position:absolute
	top: 1.58rem
	left: 0
	right: 0
	bottom: 0
	background: #eee
	.serach-item
		line-height: .62rem
		padding-left:.2rem
		color:#666
		background: #fff
</style>