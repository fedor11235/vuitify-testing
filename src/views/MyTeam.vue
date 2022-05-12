<template>
  <div>
    <h1>My Team</h1>
    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <img src="@/assets/avatar.png" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn block text color="grey">
                <v-icon small left>mdi-email</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>


      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MyProjects',

  data: () => {
    return {
      team: [
        {name: "Fedor", role:"gogogo"},
        {name: "Lina", role:"gogogo"},
        {name: "Kira", role:"gogogo"},
        {name: "Manana", role:"gogogo"},
      ]
  }},
};
</script>