<template>
<div :class="$style.card_grid">
	<slot></slot>
</div>
</template>

<script>
export default {
  name: 'CardGrid',
  props: {
  	array: {
  		type: Array,
  		required: false
  	}
  }
};
</script>

<style lang="scss" module>
@import "./style.scss";
.card_grid{
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-gap: 5px;
}
</style>
