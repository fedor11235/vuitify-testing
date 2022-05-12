<template>
    <div class="home">
        <h1>HomePage</h1>
        <v-btn class="pink white--text">click me</v-btn>
        <v-btn dark class="pink">click me</v-btn>
        <v-btn depressed class="pink">click me</v-btn>
        <v-btn text class="pink">click me</v-btn>

        <v-btn depressed class="pink white--text">
            <v-icon left>mdi-email</v-icon>
            <span>email me</span>
        </v-btn>

        <v-btn depressed small class="pink white--text">
            <v-icon left>mdi-email</v-icon>
            <span>email me</span>
        </v-btn>

        <v-btn depressed large class="pink white--text">
            <v-icon right>mdi-email</v-icon>
            <span>email me</span>
        </v-btn>

        <v-btn fab depressed small dark color="purple">
            <v-icon small>mdi-heart</v-icon>
        </v-btn>

        <v-btn outlined small dark color="purple">
            <v-icon small>mdi-heart</v-icon>
        </v-btn>
    </div>
</template>

<script>

export default {
  name: 'ButtonIcons',


  data: () => ({
    //
  }),
};
</script>
