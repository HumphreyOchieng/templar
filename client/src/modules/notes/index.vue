<template>
<div :class='$style.container'>
	<div :class='$style.title'>Notes</div>
</div>
</template>

<script>
export default {
	name: 'Notes',
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