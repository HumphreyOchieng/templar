<template>
<div :class='$style.container'>
	<div :class='$style.title'>Calendar</div>
</div>
</template>

<script>
export default {
	name: 'Calendar',
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