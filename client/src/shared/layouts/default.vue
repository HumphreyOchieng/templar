<template>
<div :class='$style.container'>
  <top-nav-bar></top-nav-bar>
	<slot></slot>
	<tab-bar :routes="routes"></tab-bar>
</div>
</template>

<script>
import TopNavBar from '@/shared/components/base/top-navbar';
import TabBar from '@/shared/components/base/tab-bar';
export default {
  name: 'Default',
  data() {
    return {
      routes: [
        { label: "Tasks", routeName: "projects", icon: "tasks-icon", primary: true },
        { label: "Calendar", routeName: "calendar", icon: "calendar-icon", primary: true },
        { label: "Notes", routeName: "notes", icon: "notes-icon"},
        { label: "Profile", routeName: "settings", icon: "profile-icon"}
      ]
    };
  },
  components: {
    TabBar, TopNavBar
  },
};
</script>

<style module lang="scss">
.container {
  
}
</style>