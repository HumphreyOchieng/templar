<template>
<div :class='$style.container'>
	<slot></slot>
</div>
</template>

<script>
export default {
	name: 'NoBars',
};
</script>

<style module lang="scss">
.container{
	height: 100%;
}
</style>