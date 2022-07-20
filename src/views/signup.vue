<template>
  <div class="signup">
    <v-container style="max-width:990px">
   <headernav />
      <v-layout wrap class="pt-12 d-flex align-start">
<v-flex xs12 md8 class=" align-center ">
<p class=" grey--text " style="font-size:20px">Register</p>

<v-form onSubmit="return false;" ref="form" style="max-width:500px" >
     
        <v-text-field
          v-model="name"
          
          label="Name"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="phone"
          :counter="11"
          :error-messages="errors"
          label="Phone Number"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
   
        <v-select
          v-model="faculty"
          :items="faculties"
          label="Select your faculty"
          required
        ></v-select>
        <v-select
          v-model="department"
          :items="departments"
          label="Select your department"
          required
        ></v-select>
        <v-select
          v-model="level"
          :items="levels"
          label="Select your level"
          required
        ></v-select>

        <v-text-field
          v-model="password"
          label="Password"
          required
        ></v-text-field>
      <v-btn
        class="font-weight-bold mr-4" color="#0b3054"
        type="submit" large dark
        :loading="loading" @click="save()"
      >
        sign up
      </v-btn>
      <v-btn text
        class="text-capitalize mr-4" color="#0b3054"
        type="submit" large dark
        :loading="loading" to="/login"
      >
        Have an account? <span class="font-weight-bold">Login</span>
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
  name: 'signup',
components: {headernav,adcard},
  data: () => ({
      password:'',
      phone:'',
      loading:false,
      name:'',
      email:'',
      image:'',
      department:'',
      faculty:'',
         levels: ['100','200','300','400','500'],
      level:'',
    img: "https://res.cloudinary.com/base-uni/image/upload/v1658076824/alpha_connect/GWC_ALt_logo_1_zkglzr.png",
    departments: ['Mechanical Engineering', 'Electrical Engineering' ],
    faculties: ['Engineering', 'Agriculture','Art' ],
    rules: {
        required: value => !!value || "Required.",
        required2: value =>
        !/[^a-zA-Z0-9&.,()\s]/.test(value) ||
        "Only letters, numbers, & and bracket are allowed."
    }
  }),
  methods:{
      save(){
          this.loading = true
          var url = 'user/save'
          axios.post(url, {
              name: this.name,
              phone: this.phone,
              email: this.email,
              image: this.image,
              department: this.department,
              level: this.level,
              faculty: this.faculty,
              password: this.password
          }).then(()=>{
              this.loading = false
              alert('your regiseration was successful')
              this.$router.push('/login')
          })
      }
  }
}
</script>
