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
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="(item, i) in 5" 
          :key="i"
        >
          <template v-slot:activator="{ on }">
            <div v-on="on">project title</div>
          </template>
          <v-card>
            <v-card-text>
              <div class="font-weight-bold">due by xx.xx.xx</div>
              <div>info</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content>
          <template v-slot:activator="{ on }">
            <div v-on="on">project title</div>
          </template>
          <v-card>
            <v-card-text>
              <div class="font-weight-bold">due by xx.xx.xx</div>
              <div>info</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>

  </div>
</template>

<script>
export default {
  name: 'MyProjects',

  data: () => ({
    //
  }),
};
</script>