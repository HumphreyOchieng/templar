<template>
<div :class="$style.container">
	<router-view></router-view>
</div>
</template>

<script>
export default {
	name: 'Tasks'
};
</script>

<style module lang="scss">
.container {
	padding: 5px;
	margin-bottom: 56px;
}
</style>