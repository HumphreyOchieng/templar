<template>
<div :class='$style.container'>
	<div :class='$style.tab_container' v-for="(tab, index) in routes" :key="index">
		<div :class='$style.tab'
		@click="openRoute(tab.routeName)">
			<component :class="$style.icon" :is="tab.icon" :size="23" title=""></component>
			<div :class="$style.label">{{tab.label}}</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'TabBar',
  props: ['routes'],
  methods: {
		openRoute(routeName) {
			this.$router.push({name: routeName});
		}
	}
};
</script>

<style module lang="scss">
.container{
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	height: 55px;
	padding: 0 5%;
	display: flex;
	flex-flow: row nowrap;
	align-items: stretch;
	background: $color-background;
	border-top: $border-width solid $color-border;
}
.tab_container {
	flex: 1;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
}
.tab {
	display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.tab:hover{
	cursor: pointer;
}
.label {
	font-size: 12px;
	text-decoration: none;
	color: $color-content;
	font-weight: $font-weight-normal;
}
</style>
