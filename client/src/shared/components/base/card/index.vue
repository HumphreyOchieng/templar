<template>
<div :class="$style.card" @click="$emit('card-clicked')">
	<slot></slot>
</div>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>

<style lang="scss" module>
@import "./style.scss";
.card{
	background-color: $cardColorBackground;
	border-color: $cardColorBorder;
	border-style: solid;
	border-width: 1px;
	border-radius: $cardBorderRadius;

	font-family: $cardFontFamily;
	font-size: $cardFontSizeContent;
	text-align: left;

	cursor: pointer;
	overflow: hidden;
}
</style>
