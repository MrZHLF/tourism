<template>
	<div>
		<detail-header></detail-header>
		<detail-banner 
		:sightName="sightName"
		:bannerImg="bannerImg"
		:gallaryImgs="gallaryImgs"
		>
		</detail-banner>
		<div class="center">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import Header from './components/Header'
import Banner from './components/Banner'
import List from './components/List'
import axios from 'axios'
	export default {
		name:"Detail",
		data() {
			return {
				sightName: "",
				bannerImg:"",
				gallaryImgs:[],
				list:[]
			}
		},
		methods: {
			getDetail () {
				axios.get('/api/detail.json',{
					params: {
						id: this.$route.params.id
					}
				}).then(this.handleDetail)
			},
			handleDetail (res) {
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.gallaryImgs = data.gallaryImgs
					this.list = data.categoryList
				}
			}
		},
		mounted(){
			this.getDetail()
		},
		components: {
			"detail-banner": Banner,
			"detail-header": Header,
			"detail-list":List
		}
	}
</script>

<style scoped lang="stylus">
.center
	height: 20rem
</style>