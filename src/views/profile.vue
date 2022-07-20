<template>
  <div class="profile">
    <v-container style="max-width:990px">
      <headernav />
      <v-layout wrap class="pt-12 d-flex align-start">
<v-flex xs12 md8 class=" align-center ">
<p class=" grey--text " style="font-size:20px">My Profile</p>
<v-form onSubmit="return false;"  style="max-width:500px" >
 
     
        <v-text-field
          v-model="user.name"
          
          label="Name"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="user.phone"
          :counter="11"
          label="Phone Number"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="user.email"
          label="E-mail"
          required
        ></v-text-field>
   
        <v-select
          v-model="user.faculty"
          :items="faculties"
          label="Select your faculty"
          required
        ></v-select>
        <v-select
          v-model="user.department"
          :items="departments"
          label="Select your department"
          required
        ></v-select>
        <v-select
          v-model="user.level"
          :items="levels"
          label="Select your level"
          required
        ></v-select>
 
        <!-- <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Recieve notifications"
          type="checkbox"
          required
        ></v-checkbox> -->
   
      <v-btn
        class="font-weight-bold mr-4" color="#0b3054"
        type="submit" large dark
        :loading="loading"
        @click="update()"
      >
        submit
      </v-btn>
     </v-form>
          <v-btn text
        class="mt-4 font-weight-bold mr-4" color="red"
        type="submit" large dark
        :loading="logout_loading"
        @click="logout()"
      >
        logout
      </v-btn>
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
  name: 'profile',
   components: {
    headernav,
    adcard
    },
  data: () => ({
         levels: ['100','200','300','400','500'],
      level:'',
          phone:'',
      name:'',
      email:'',
      image:'',
      department:'',
      faculty:'',
      loading:false,
      logout_loading:false,
    img: "https://res.cloudinary.com/base-uni/image/upload/v1658076824/alpha_connect/GWC_ALt_logo_1_zkglzr.png",
    departments: ['Mechanical Engineering', 'Electrical Engineering' ],
    faculties: ['Engineering', 'Agriculture','Art' ]
  }),
    computed:{
    token(){
      return this.$store.getters.getToken
    },
    user(){
      return this.$store.getters.getUser
    },
        lesson: {
      get() {
        return this.$store.getters.getLesson;
      },
      set(val) {
        this.$store.dispatch("setLesson", val);
      }
    },
        lessons: {
      get() {
        return this.$store.getters.getLessons;
      },
      set(val) {
        this.$store.dispatch("setLessons", val);
      }
    },
  },
  methods:{
      logout(){
          axios.get('user/logout').then(()=> {
              this.$store.dispatch("logout")
          }).catch(()=>{
        delete axios.defaults.headers.common["Authorization"]
        this.$store.dispatch("setUser", {})
        this.$store.dispatch("setToken", null)
        this.$router.push("/")
    
          })
      },
      update() {
          this.loading = true
          axios.post('user/update',{
              name: this.user.name,
              phone: this.user.phone,
              email: this.user.email,
              image: this.user.image,
              department: this.user.department,
              level: this.user.level,
              faculty: this.user.faculty,
          }).then((res)=>{
              this.loading = false
              alert('Submission Complete')
              this.$store.dispatch("setUser", res.data.success);
          }).catch(()=>{
              this.loading = false
              alert('An error occured')
              
          })
      }
  }
}
</script>
