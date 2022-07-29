<template>
<div>

  <v-card outlined :class="$vuetify.breakpoint.smAndUp? 'mt-3': 'mt-12'" :img="''" class="d-flex align-center justify-center" color="grey lighten-3" width="100%" height="80vh">
    <h2 class="px-4 grey--text text-center">Place your ads here.</h2>
  </v-card>
  <p class="font-weight-bold text--darken-2 grey--text mt-5 mb-0">Contact us</p>
  <v-layout wrap class="grey--text body-2">
<v-flex xs4 class="font-weight-bold mt-3">Phone No</v-flex>
<v-flex xs8 class="text-right mt-3"> 08033685498</v-flex>
<v-flex xs4 class="font-weight-bold mt-3">Email</v-flex>
<v-flex xs8 class="text-right mt-3">sayhitobona@gmail.com</v-flex>
    <v-flex xs12 class="mt-12"> © Copyright 2022 Ever Cart ltd.</v-flex>
  </v-layout>
</div>
</template>