<template>
  <div>
    <h1>My Projects</h1>
    <!-- <v-container class="my-5">

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            color="primary"
            darck
          >Button</v-btn>
        </template>
        <span>Tooltip</span>
      </v-tooltip>

      <v-layout class="md-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
          <v-btn small text color="green" v-on="on">
            <v-icon>mdi-folder</v-icon>
            <span class="caption text-lowercase">By progect name</span>
          </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>
        <v-btn small text color="green">
          <v-icon>mdi-plus</v-icon>
          <span class="caption text-lowercase">By person</span>
        </v-btn>
      </v-layout>

      <v-card flat class="pa-3">
        <v-layout wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>Create a new website</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>The Net Ninja</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>1st Jan 2019</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div><v-chip class="white--text caption" small>ongoing</v-chip></div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container> -->

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header> Item </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MyProjects",

  data: () => ({
    //
  }),
};
</script>