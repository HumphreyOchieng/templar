<template>
<div :class='$style.container'>
	<div :class='$style.account'>
		<router-link :to='{name: "login"}'>Log In</router-link> or 
		<router-link :to='{name: "signup"}'>Sign Up</router-link>
	</div>
</div>
</template>

<script>
export default {
	name: 'Settings',
};
</script>

<style module lang="scss">
.container{

}
</style>