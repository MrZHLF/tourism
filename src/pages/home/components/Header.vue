<template>
  <div class="header">
  	<div class="header-left">
  		 <div class="iconfont back-icon">&#xe624;</div>
  	</div>
  	<div class="header-input">
  		输入城市/景点/游玩主题
  	</div>
  	<router-link to="/city">
  		<div class="header-right">
	  		{{this.$store.state.city}}
	  		<span class="iconfont arrow-icon">&#xe64a;</span>
	  	</div>
  	</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: '头部内容'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/varibles.styl';
.header
	display: flex
	line-height: $headerHeight
	background:$bgColor
	color: #fff
	.header-left
		width: .64rem
		float: left
		.back-icon
			text-align: center
			font-size: .4rem
	.header-input
		flex: 1
		line-height: .64rem
		height: .64rem
		margin-top: .12rem
		margin-left: .2rem
		padding-left: .2rem
		background: #fff
		border-radius: .1rem
		color: #ccc
	.header-right 
		width: 1.6rem
		float: right
		padding: 0 .1rem
		text-align: center
		color: #fff
		.arrow-icon
			font-size: .24rem
</style>
