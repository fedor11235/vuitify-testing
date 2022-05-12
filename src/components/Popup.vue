<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" class="success" darck>Add New Project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Title"></v-text-field>
          <v-text-field label="Information"></v-text-field>
          <v-btn text class="success mx-0 mt-3" :loading="flagLoad"
            >Add Project</v-btn
          >
          <v-btn text class="success mx-0 mt-3" @click="flagLoad = !flagLoad"
            >Add Project</v-btn
          >

          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NavbarTool",

  data: () => {
    return {
      drawer: false,
      flagLoad: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Project", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>
