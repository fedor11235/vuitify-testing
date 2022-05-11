<template>
  <v-app>
    <NavbarTool/>
    <v-main class="px-4 pb-4 grey">
      <!-- <router-view></router-view> -->
      <MyProjects />
      
    </v-main>
  </v-app>
</template>

<script>
import NavbarTool from './components/NavbarTool';
// import DashBoard from "./views/DashBoard"
// import MyTeam from "./views/MyTeam"
import MyProjects from "./views/MyProjects"

export default {
  name: 'App',

  components: {
    NavbarTool,
    MyProjects,
  },

  data: () => ({
    //
  }),
};
</script>
