<template>
  <div class="d-flex align-center justify-space-between">
    <p @click="$router.push('/')" class="font-weight-black primary--text text--darken-4 mb-0" style="font-size: 25px">Ever<span class="teal--text text--lighten-3 ">Cart</span></p>
    <v-btn v-if="token" to="/myshop" depressed> my shop </v-btn>
    <v-avatar @click="$router.push('/profile')" size="60" class="">
      <v-img :src="img2"></v-img>
    </v-avatar>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "headernav",
 
  data: () => ({
      img2:'https://res.cloudinary.com/base-uni/image/upload/v1658076722/alpha_connect/C7E03945-30FB-49E5-90AF-FE6D67322900_kegufu.png'
  }),
     computed:{
    token(){
      return this.$store.getters.getToken
    },
     }
};
</script>
