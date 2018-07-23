<template>
	<div class="city">
		<CityHeader></CityHeader>
		<Search :list="cities"></Search>
		<List :hot="hotCity" :letter="letter" :list="cities"></List>
		<Alphabet @chang="handleLetterChang" :list="cities"></Alphabet>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
	data () {
		return {
			cities:{}, // 城市列表
			hotCity:[], //热门城市
			letter: ''  // A-Z
		}
	},
	components: {
		CityHeader,
		Search,
		List,
		Alphabet
	},
	methods:{
		getCityInfo () {
			axios.get('/api/city.json').then(this.getCityInfoSucc)
		},
		getCityInfoSucc(res){
			 res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.hotCity = data.hotCities
				this.cities = data.cities
			}
			console.log(res)
		},
		handleLetterChang(letter) { //接受子组件传过来的
//			console.log(letter)
			this.letter = letter
		}
	},
	mounted () {
		this.getCityInfo ()
	}
}
</script>

<style scoped lang="stylus">

</style>