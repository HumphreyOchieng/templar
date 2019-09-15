<template>
<div :class='$style.container'>
	<router-view></router-view>
</div>
</template>

<script>
export default {
	name: 'Profile',
};
</script>

<style module lang="scss">
.container{
	padding: 15px;
	height: 100%;
}
</style>