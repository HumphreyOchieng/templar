<template>
<div :class='$style.container'>
	<div :class='$style.aside'>
		Quote about time
	</div>
	<div :class='$style.login_container'>
		<div :class='$style.login'>
			<div :class='$style.title'>Log in</div>
			<p>or <router-link :to='{name: "signup"}' :class='$style.link'>create an account</router-link></p>
			<div :class='$style.form'>
				<base-input label="Email" type="email" :value.sync="email"></base-input>
				<base-input label="Password" type="password" :value.sync="password"></base-input>
				<base-button primary @click="logIn">Log In</base-button>
			</div>
			<div :class='$style.recover'>
				<router-link :to='{name: "forgot-password"}' :class='$style.link'>Forgot your password?</router-link>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import BaseInput from '@/shared/components/base/input';
import BaseButton from '@/shared/components/base/button';

export default {
	name: 'Login',
	data() {
		return {
			email: "",
			password: ""
		}
	},
	methods: {
		logIn: function () {
			this.$store.dispatch('logIn', {email:this.email, password:this.password});
		}
	},
	components: {
		BaseInput, BaseButton
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
}
.login_container {
	flex: 1;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
}
.login {
	flex: initial;
}
.title {
	font-size: ms(4);
	font-weight: $font-weight-bold;
}
.link {
	color: $color-content;
}
.form {
	margin: 45px 0px;
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