<template>
	<div class="notice">
		<ul class="ullist">
			<li class="listitem-con-item">
				定位失败
			</li>
			<li class="listitem-con-item">
				玩水季
			</li>
		</ul>
		<ul class="ullist mp-activity-con">
			<li class="mp-con-item">
				<img class="img-item" src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png"/>
			</li>
			<li class="mp-con-item">
				<img class="img-item" src="http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png"/>
			</li>
		</ul>
	</div>
</template>

<script>
export	default{
	
}
</script>

<style scoped lang="stylus">
.notice
	display: block
	border-top:1px solid #e0e0e0
	.ullist
		display: flex
		width:100%
		background: #FFFFFF
		overflow: hidden
		.listitem-con-item
			overflow: hidden
			height: .98rem;
			line-height: .98rem
			color: #212121
			text-align: center
			flex:1
			border-right: 1px solid #e0e0e0
		.listitem-con-item:nth-child(2)
			border-right: none
	.mp-activity-con
		margin-top: .2rem
		height:1.4rem
		.mp-con-item
			border-right: 1px solid #e0e0e0
		.mp-con-item:nth-child(2)
			border-right:0
	.mp-activity-con .img-item
		display: block
		background-size: auto 100%
		width:100%
		height: 100%
		background-repeat: no-repeat
</style>