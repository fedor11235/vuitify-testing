<template>
  <div>
    <h1>My Projects</h1>
    <v-container class="my-5">

      <v-tooltip bottom>
        <v-btn
          slot="activator"
          color="primary"
          darck
        >Button</v-btn>
        <span>Tooltip</span>
      </v-tooltip>

      <v-layout class="md-3">
        <v-tooltip top>
          <v-btn small text color="green" slot="activator">
            <v-icon>mdi-folder</v-icon>
            <span class="caption text-lowercase">By progect name</span>
          </v-btn>
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