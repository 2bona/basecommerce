<template>
  <v-app style="background-color:#f5f5f5">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
 *{
   font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif!important;
 }
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
