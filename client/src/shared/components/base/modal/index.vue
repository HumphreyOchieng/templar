<template>
<div :class='$style.container' v-show="isModalVisible">
	<div :class='$style.overlay'>
		<div :class='$style.modal'>
			<h2>{{modalConfig.title}}</h2>
			<p>{{modalConfig.body}}</p>
			<base-button @click="hideModal">Close</base-button>
		</div>
	</div>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import BaseButton from '@/shared/components/base/button';

export default {
	name: 'Modal',
	computed: mapState(['isModalVisible', 'modalConfig']),
	methods: {
		...mapMutations(['hideModal'])
	},
	components: {
		BaseButton
	}
};
</script>

<style module lang="scss">
.container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 990;
}
.overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background :rgba(0,0,0,0.85);
	z-index: 995;
}
.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;
	border-radius: 2px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	max-height: 90%;
	background: #ffffff;
	padding: 20px;
}
</style>