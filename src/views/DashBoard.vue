<template>
  <div>
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <p>The first argument is the root component. The second optional argument is the props to be passed to the root component.</p>
      <p>The first argument is the root component. The second optional argument is the props to be passed to the root component.</p>
      <p>The first argument is the root component. The second optional argument is the props to be passed to the root component.</p>
      <v-layout row wrap >
        <v-flex xs12 md6>
          <v-btn outlined block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block class="primary">3</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block class="primary">4</v-btn>
        </v-flex>
        <v-flex></v-flex>
        <v-flex></v-flex>
      </v-layout>

      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn outlined block class="success">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outlined block class="success">2</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',

  data: () => ({
    //
  }),
};
</script>