<template>
  <v-app>
    <v-content>
      <ButtonIcons/>
    </v-content>
  </v-app>
</template>

<script>
import ButtonIcons from './components/ButtonIcons';

export default {
  name: 'App',

  components: {
    ButtonIcons,
  },

  data: () => ({
    //
  }),
};
</script>
