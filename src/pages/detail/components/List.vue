<template>
	<div>
		<div class="list-item"  v-for="(item,index) of list" :key="index">
			<div class="list-item-title">
				<span class="list-item-icon"></span>
				{{item.title}}
			</div>
			<div class="item-childer" v-if="item.children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"DetailList",
	props: {
		list: Array
	}
}
</script>

<style scoped lang="stylus">
.list-item-icon {
	position: relative;
	top: .06rem;
	left: .0rem;
	display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
}
.list-item-title{
	line-height: .8rem;
	padding-left: .3rem;
	font-size: .32rem;
	color: #333;
}
.item-childer{
	padding: 0 .4rem;
}
</style>