<template>
  <v-app>
    <NavbarTool/>
    <v-main class="px-4 pb-4 grey">
      <router-view></router-view>
      
    </v-main>
  </v-app>
</template>

<script>
import NavbarTool from './components/NavbarTool';
// import DashBoard from "./views/DashBoard"
// import MyProjects from "./views/MyProjects"
// import MyProjects from "./views/MyProjects"
// import ButtonIcons from './components/ButtonIcons';

export default {
  name: 'App',

  components: {
    NavbarTool,
  },

  data: () => ({
    //
  }),
};
</script>
