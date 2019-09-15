<template>
<div :class='$style.container'>
	<div :class='$style.projects'>
		<div :class='$style.list' v-for="(list, index) in lists" :key="index">
			<component :is="list.icon" :size="20" :class='$style.project_icon'></component>
			<h2 :class='$style.list_title'>{{list.name}}</h2>
		</div>
		<div :class='$style.project' v-for="(project, index) in projects" :key="index">
			<project-icon :class='$style.project_icon' :size="20"></project-icon>
			<h2 :class='$style.project_title'>{{project.name}}</h2>
		</div>
	</div>
	<div :class='$style.actions'>
		<base-button> + Add Project </base-button>
	</div>
</div>
</template>

<script>
import BaseButton from "@/shared/components/base/button";

export default {
	name: 'Projects',
	components: {
		BaseButton
	},
	data() {
		return {
			lists: [
				{name: "Inbox", icon: "inbox-icon"},
				{name: "Today", icon: "today-icon"},
				{name: "This Week", icon: "this-week-icon"},
				{name: "Next Week", icon: "next-week-icon"}
			],
			projects: [
				{name: "Management"},
				{name: "School"},
				{name: "Financial"},
				{name: "Work"}
			]
		}
	}
};
</script>

<style module lang="scss">
.container{

}
.actions {
	margin-top: 1em;
}
.list {
	display: flex;
	flex-flow: row nowrap;
	padding: 0.3em 0;
}
.list:hover {
	cursor: pointer;
}
.list_title {
	font-weight: $font-weight-semibold;
	padding-left: 0.5em;
	font-size: ms(1);
	border: 1px solid red;
}
.project_icon {
	//display: flex;
	border:1px solid blue;
}
.project {
	display: flex;
	flex-flow: row nowrap;
	padding: 0.4em 0;
	align-items: center;
}
.project:hover {
	cursor: pointer;
}
.project_title {
	font-size: ms(1);
	padding-left: 0.5em;
	font-weight: $font-weight-normal;
	border:1px solid red;
}
.project_icon {
	align-self: flex-end;
}
</style>