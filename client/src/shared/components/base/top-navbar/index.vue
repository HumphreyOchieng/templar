<template>
<div :class='$style.container'>
	<div :class="$style.app">{{app}}</div>
	<base-button @click="showModal">+ Add</base-button>
</div>
</template>

<script>
import { mapMutations} from 'vuex';
import BaseButton from '@/shared/components/base/button';
export default {
	name: 'TopNavBar',
	data() {
		return {
			app: "templar"
		}
	},
	components: {
		BaseButton
	},
	methods: {
		...mapMutations(['showModal'])
	}
};
</script>

<style module lang="scss">
.container{
	position: sticky;
	top: 0;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: $color-content;
	background: $color-background;
	border-bottom: 1px solid $color-border;
	padding: 0 10px;
}
.app {
	font-weight: bold;
	line-height: 50px;
	font-size: 22px;
}
</style>