<template>
  <div class="login">
    <v-container style="max-width:990px">
   <headernav />
      <v-layout wrap class="pt-12 d-flex align-start">
<v-flex xs12 md8 class=" align-center ">
<p class=" grey--text " style="font-size:20px">Login</p>

<v-form  onSubmit="return false;" style="max-width:500px" >
     
  
  
        <v-text-field
          v-model="phone"
          :counter="11"
          :error-messages="errors"
          label="Phone Number"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          required
        ></v-text-field>
   
  
   

   
      <v-btn
        class="font-weight-bold mr-4" color="#0b3054"
        type="submit" large dark
        :loading="loading"
        @click="login()"
      >
        login
      </v-btn>
     </v-form>
</v-flex>
<v-flex :class="$vuetify.breakpoint.smAndUp? 'pl-4': ''" xs12 md4>
<adcard /></v-flex>
      </v-layout>


    </v-container>
  </div>
</template>

<script>
import axios from "axios";
const headernav = () => import("../components/headernav.vue");
const adcard = () => import("../components/adcard.vue");
// @ is an alias to /src

export default {
  name: 'login',
  components: {headernav,adcard},
loading: false,
  data: () => ({
      password:'',
      phone:'',
      loading:false,
    img: "https://res.cloudinary.com/base-uni/image/upload/v1658076824/alpha_connect/GWC_ALt_logo_1_zkglzr.png",
    departments: ['Mechanical Engineering', 'Electrical Engineering' ],
    faculties: ['Engineering', 'Agriculture','Art' ]
  }),
  methods:{
      login(){
          this.loading = true
          axios.post('/user/login', {
              phone: this.phone,
              password: this.password,
          }).then((res)=>{
              this.loading = false
              this.$store.dispatch('setToken', res.data.success.token)
              this.$store.dispatch('setUser', res.data.success.user)
              axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.success.token;

              this.$router.push('/')
          }).catch(()=>{
              this.loading = false
              alert('something went wrong')
          })
      }
  }
}
</script>
