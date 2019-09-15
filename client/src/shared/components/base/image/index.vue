<template>
	<div :class="$style.container"  :style="imageStyle">
		<img :src="src" :alt="alt" :class="$style.image"/>
	</div>
</template>

<script>
import baseStyle from './style.scss';

export default {
  name: 'BaseImage',
  props: {
    src: {
      type: String,
      required: false,
      default: 'http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image',
    },
    alt: {
      type: String,
      required: false,
      default: '',
    },
    borderRadius: {
      type: String,
      required: false,
      default: baseStyle.borderRadius,
    },
  },
  computed: {
    imageStyle() {
      return {
        'border-radius': this.borderRadius,
      };
    },
  },
};
</script>

<style lang="scss" module>
	@import "./style.scss";
	.container {
		overflow: hidden;
	}
	.image {
		display: block;
		height: 100%;
		width: 100%;
	}
</style>
