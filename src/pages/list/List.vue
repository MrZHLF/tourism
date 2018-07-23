<template>
	<div>
	<list-header></list-header>
	<list-detailsList :list="list"></list-detailsList>
	</div>
</template>

<script>
import Header from './components/Header'
import DetailsList from './components/DetailsList'
import axios from 'axios'
	export default {
		name:"List",
		data() {
			return {
				list:[]
			}
		},
		methods: {
			getListInfo () {
				axios.get('/api/list.json',{
					params:{
						id: this.$route.params.id
					}
				}).then(this.listInfo)
			},
			listInfo (res) {
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
					this.list = data.DetaillList
				}
			}
		},
		mounted() {
			this.getListInfo ()
		},
		components: {
			"list-header":Header,
			"list-detailsList":DetailsList
		}
	}
</script>

<style scoped lang="stylus">

</style>