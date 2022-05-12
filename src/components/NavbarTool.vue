<template>
  <nav>
      <v-snackbar  :timeout="4000" top color="success">
        <span>Awessome!!!!!</span>
      </v-snackbar>
      <v-app-bar flat app>
          <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">ToDO</span>
            <span>Ninja</span>
          </v-toolbar-title>

          <v-spacer></v-spacer>

     

          <v-btn text color="grey">
            <span>Sign Out</span>
            <v-icon right>mdi-plus</v-icon>
          </v-btn>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer" class="primary">
        <v-layout column align-center>
          <v-flex class="mt-4 mb-3">
            <Popup />

          </v-flex>
        </v-layout>

        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action>
              <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>

            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "@/components/Popup"

export default {
  name: 'NavbarTool',

  components: {
    Popup,
  },


  data: () => {
    return {
      drawer: false,
      links: [
        {icon:"dashboard", text:"Dashboard", route:"/"},
        {icon:"folder", text:"My Project", route:"/projects"},
        {icon:"person", text:"Team", route:"/team"},
      ],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }
  },
};
</script>
