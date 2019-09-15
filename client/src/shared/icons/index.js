import Vue from 'vue'
import "vue-material-design-icons/styles.css"

import TasksIcon from "icons/CheckBoxOutline.vue";
import CalendarIcon from "icons/CalendarMonth.vue";
import NotesIcon from "icons/FileDocumentBoxOutline.vue";
import MoreIcon from "icons/DotsHorizontal.vue";
import AddIcon from "icons/PlusBoxOutline.vue";
import ProfileIcon from "icons/AccountBoxOutline.vue";
import SettingsIcon from "icons/Settings.vue";
import InboxIcon from "icons/Inbox.vue";
import ProjectIcon from "icons/CircleOutline.vue";
import TodayIcon from "icons/Calendar.vue";
import NextWeekIcon from "icons/CalendarText.vue";
import ThisWeekIcon from "icons/CalendarWeek.vue"

Vue.component('tasks-icon', TasksIcon);
Vue.component('calendar-icon', CalendarIcon);
Vue.component('notes-icon', NotesIcon);
Vue.component('more-icon', MoreIcon);
Vue.component('add-icon', AddIcon);
Vue.component('profile-icon', ProfileIcon);
Vue.component('settings-icon', SettingsIcon);
Vue.component('inbox-icon', InboxIcon);
Vue.component('project-icon', ProjectIcon);
Vue.component('today-icon', TodayIcon);
Vue.component('next-week-icon', NextWeekIcon);
Vue.component('this-week-icon', ThisWeekIcon);