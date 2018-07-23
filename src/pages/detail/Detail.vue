<template>
	<div>
		<detail-header></detail-header>
		<detail-banner></detail-banner>
		<div class="center"></div>
	</div>
</template>

<script>
import Header from './components/Header'
import Banner from './components/Banner'
	export default {
		name:"detail",
		components: {
			"detail-banner": Banner,
			"detail-header": Header
		}
	}
</script>

<style scoped lang="stylus">
.center
	height: 20rem
</style>