<template>
<div :class='$style.container'>
	<div :class='$style.title'>Settings</div>
</div>
</template>

<script>
export default {
	name: 'Settings',
};
</script>

<style module lang="scss">
.container{
	padding: 15px;
}
.title {
	font-size: $fontSizeHeader;
	font-weight: bold;
}
</style>