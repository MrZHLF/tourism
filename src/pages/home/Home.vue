<template>
  <div class="home">
  	<app-header></app-header>
  	<app-swiper :list="swiperList"></app-swiper>
  	<app-icons :list="iconList"></app-icons>
  	<app-notice></app-notice>
  	<app-recommend :recommend="recommend"></app-recommend>
  	<app-weekend :list="weekend"></app-weekend>
  </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import Notice from './components/Notice'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      // city: '',  //城市
      swiperList:[],  //轮播图
      iconList: [], //icon图标
      recommend: [], //热销推荐
      weekend:[]     //周末去哪
    }
  },
  components: {
  	"app-header":Header,
  	"app-swiper": Swiper,
  	"app-icons": Icons,
  	"app-recommend": Recommend,
  	"app-weekend": Weekend,
  	"app-notice": Notice
  },
  methods: {
  	getHomeInfo () {
  		axios.get('/api/index.json').then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc(res) {
  		res = res.data
  		if (res.ret && res.data) {
  			const data = res.data
  			// this.city = data.data.city
  			this.swiperList = data.swiperList
  			this.iconList = data.iconList
  			this.recommend = data.recommendList
  			this.weekend = data.weekendList
  		}
  	}
  },
  mounted () {
  	this.getHomeInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home
	background: #f5f5f5;
</style>
