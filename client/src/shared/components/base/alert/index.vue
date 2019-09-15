<template>
<div :class='$style.container'>
	<div :class='alertClasses'>{{message}}</div>
</div>
</template>

<script>
export default {
	name: "Alert",
	props: {
		message: {
			type: String,
			default: "Alert",
		},
		success: {
			type: Boolean,
			required: false,
		},
		info: {
			type: Boolean,
			required: false,
		},
		warning: {
			type: Boolean,
			required: false,
		},
		error: {
			type: Boolean,
			required: false,
		}
	},
	computed: {
		alertClasses: function() {
			let classList = [
				this.$style.alert_default,
				{[this.$style.alert_success]: this.success},
				{[this.$style.alert_warning]: this.warning},
				{[this.$style.alert_error]: this.error},
			];
			return classList;
		}
	}
};
</script>

<style module lang="scss">
.container {
	width: 100%;
}
.alert_default {
	background: lighten($color-info, 33%);
	color: $color-content;
	border-radius: $border-radius;
	width: 100%;
	padding: 5px 10px;
}
.alert_success {
	background: lighten($color-success, 33%);
}
.alert_warning {
	background: lighten($color-warning, 33%);
}
.alert_error {
	background: lighten($color-error, 33%);
}

</style>