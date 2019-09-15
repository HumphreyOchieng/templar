<template>
<div :class='$style.container'>
	<div :class='$style.aside'>
		Quote about time
	</div>

	<div :class='$style.signup_container'>
		<div :class='$style.signup'>
			<h2 :class='$style.title'>Create an account</h2>
			<p>or <router-link :to='{name: "login"}' :class='$style.link'>log in</router-link></p>
			
			<div :class='$style.form'>
				<base-input label="Email" type="email" hint="e.g. thetaskmaster@gmail.com"
				:value.sync="email"></base-input>
				<base-input label="Password" type="password" hint="Combine letter, numbers and symbols"
				:value.sync="password"></base-input>
				<base-button primary @click="signUp">Sign Up</base-button>
			</div>

			<p :class='$style.recover'>
				<router-link :to='{name: "projects"}' :class='$style.link'>Try Templar without signing up
				</router-link>
			</p>
			<p>No strings attached.</p>
		</div>
	</div>
</div>
</template>

<script>
import BaseButton from '@/shared/components/base/button';
import BaseInput from '@/shared/components/base/input';

export default {
	name: 'SignUp',
	data() {
		return {
			email: "",
			password: ""
		}
	},
	components: {
		BaseButton, BaseInput
	},
	methods: {
		signUp: function () {
			this.$store.dispatch('signUp', {email: this.email, password: this.password});
		}
	}
};
</script>

<style module lang="scss">
.container{
	height: 100%;
	display: flex;
	flex-flow: row nowrap;
}
.aside {
	display: none;
	background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}
.signup_container {
	flex: 1;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	//align-items: center;
}
.signup {
	max-width: 450px;
}
.feedback {
	background: lighten($color-error, 33%);
	color: $color-content;
	border-radius: $border-radius;
	width: 100%;
	padding: 5px 10px;
}
.title {
	font-size: ms(4);
	font-weight: $font-weight-bold;
}
.link {
	color: $color-content;
}
.form {
	margin: 40px 0px;
}
@media only screen and (min-width: 768px) {
	.aside {
		display: block;
		flex: 2;
		border-right: $border-width solid $color-border;
		margin-right: 20px;
	}
}
</style>