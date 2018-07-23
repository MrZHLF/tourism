<template>
  <div class="icons">
  	<swiper :options="swiperOption">
  		<swiper-slide v-for='(page,index) of pages' :key="index">
  			<div class="icon" v-for="item of page" :key="item.id">
		  		<div class="icon-img">
		  			<img class="icon-img-content" :src="item.imgUrl"/>
		  		</div>
		  		<p class="desc">{{item.desc}}</p>
		  	</div>
  		</swiper-slide>
  	</swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcon',
  props: {
  	list: Array
  },
  data () {
    return {
    	swiperOption:{
    		autoplay: false   //轮播图停止滚动
    	}
    }
  },
  computed: {
  	pages () {
  		const pages = []
  		this.list.forEach((item, index) => {
  				const page = Math.floor(index / 8)  //索引值，每页占8个
  				if(!pages[page]) {
  					pages[page] = []
  				}
  				pages[page].push(item)
  		})
  		return pages
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="stylus">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons
	background: #fff
.icons >>> .swiper-container
	height: 0
	padding-bottom: 52%
	.icon
		position: relative
		overflow: hidden
		width:25%
		padding-bottom: 25%
		float: left
		height:0
		.icon-img
			position:absolute
			top:0
			left:0
			right:0
			bottom: .44rem
			box-sizing: border-box
			padding: .1rem
			.icon-img-content
				display: block
				margin: 0 auto
				height: 100%
		.desc
			position:absolute
			left:0
			right:0
			bottom: 0
			height: .44rem
			line-height: .44rem
			text-align: center
			color: $darkTextColor
			ellipsis()
</style>
