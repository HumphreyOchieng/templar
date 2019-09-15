<template>
<div :class="$style.container">
	<div :class='$style.label'>{{label}}</div>
	<div :class='$style.hint'>{{hint}}</div>
	<div :class='inputClasses'>
		<input @mouseenter="setHover" @mouseleave="removeHover"
		:type="type" :class="$style.field" :placeholder="placeholder" :value="value" 
		@focus="onFocus" @blur="onBlur"
		@input="$emit('update:value', $event.target.value)"/>
		<component :is="icon" :class="$style.icon"></component>
	</div>
</div>
</template>

<script>

export default {
	name: 'Input',
	data () {
		return {
			focus: false,
			hover: false,
			success: false,
			error: false,
			warning: false,
			feedbackMessage: ""
		}
	},
	props: {
		value: {
			required: false,
		},
		label: {
			type: String,
			required: true
		},
		hint: {
			type: String,
			required: false
		},
		type: {
			type: String,
			required: false,
			default: 'text',
		},
		placeholder: {
			type: String,
			required: false,
			default: '',
		},
		icon: {
			type: String,
			required: false
		}
	},
	methods: {
		onFocus: function () {
			this.focus = true;
			this.success = false;
			this.error = false;
		},
		onBlur: function () {
			this.focus = false;
		},
		setHover: function () {
			this.hover = true;
		},
		removeHover: function () {
			this.hover = false;
		},
		validateInput: function() {
			var pattern, result;
			this.value ? console.log(this.value): console.log("No input");
			
			switch(this.type) {
				case 'email':
					pattern = /(\w+)[@](\w+)\.([a-zA-Z]){2,}/g;
					break;
				default:
					pattern = /(\w+)/
			}
			if(this.value) {
				result = (pattern.test(this.value));
				if (result) {
					this.success = true;
					console.log("Success");
					this.feedbackMessage = "Looks good";
				} else {
					this.error = true;
					console.log("Error");
					this.feedbackMessage = "There's a problem here"
				}
			} else {
				this.success = false;
				this.error = false;
				this.warning = false;
			}
			console.log(result);
		}
	},
	computed: {
		inputClasses() {
			let classList = [
				this.$style.input_default,
				{[this.$style.input_hover]: this.hover},
				{[this.$style.input_focus]: this.focus},
				{[this.$style.input_success]: this.success},
				{[this.$style.input_error]: this.error},
			];
			return classList;
		},
		feedbackClasses() {
			let classList = [
				{[this.$style.feedback_default]: this.error||this.success||this.warning},
				{[this.$style.feedback_success]: this.success},
				{[this.$style.feedback_error]: this.error}
			];
			return classList;
		}
	},
};
</script>

<style lang="scss" module>
@import "./style.scss";

.container {
	width: 100%;
	margin: 20px 0;
}
.label {
	font-weight: $font-weight-semibold;
	margin-bottom: 2px;
	font-size: ms(0);
}
.hint {
	font-weight: $font-weight-normal;
	font-size: 14px;
	color: $color-slate;
	margin-bottom: 2px;
}
.input_default {
	border: $border-width solid $color-border-input;
	border-radius: $border-radius;
	padding: 5px;
	display: block;
	margin-bottom: 2px;
}
.input_hover {
	border: $border-width solid darken($color-border-input, 40%);
}
.input_focus {
	border: $border-width solid $color-primary;
}
.input_success {
	border: $border-width solid $color-success;
}
.input_error {
	border: $border-width solid $color-error;
}
.field {
	width: 100%;
	font-size: $modular-scale-base;
	font-weight: $font-weight-normal;
	color: $color-content;
	//line-height: ms(3);
	outline: none;
	border-width: 0px;
	padding: 0.2em 0.5em;
}
.feedback_default {
	font-weight: $font-weight-normal;
	font-size: 14px;
}
@media only screen and (min-width: 1024px) {
	.feedback {
		font-weight: $font-weight-semibold;
	}
}
.feedback_error {
	color: darken($color-error, 10%);
}
.feedback_warning {
	color: darken($color-warning, 10%);
}
.feedback_success {
	color: $color-success;
}
</style>
