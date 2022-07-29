<template>
  <div class="product">
    <v-container style="max-width:990px">
        <headernav />
      <v-layout wrap class="pt-12 d-flex align-start">
<v-flex xs12 md8 class="d-flex align-center ">
      <v-layout wrap>
      <v-flex xs12>
        <v-card color="grey lighten-5" style="border-radius:5px"  class=" pa-4 mb-8">
     
            <v-avatar tile height="300px" width="100%">
              <v-img contain :src="product.image || 'https://res.cloudinary.com/base-uni/image/upload/v1658076722/alpha_connect/C7E03945-30FB-49E5-90AF-FE6D67322900_kegufu.png'"></v-img>
            </v-avatar>
            <v-flex  class=" align-center px-3" xs12>
    <p style="font-size:30px" class="grey--text mb-2 text--darken-3 text-capitalize font-weight-bold">{{product.name}} </p>
    <p style="font-size:20px" class="font-weight-bold grey--text text--darken-2">N{{product.price | price}}</p>
              <v-btn :loading="loading" rounded @click="buyItem()" class="teal--text text--lighten-3 font-weight-bold" color="#10417d" large dark>Buy this  item<v-icon size="15" class="ml-2">mdi-cart</v-icon></v-btn>
             <p class="mt-4 grey--text text--darken-1">{{product.description}}</p>
              </v-flex>
        </v-card>
      </v-flex>
      </v-layout>
</v-flex>
<v-flex :class="$vuetify.breakpoint.smAndUp? 'pl-4': ''" xs12 md4>
<adcard /></v-flex>
      </v-layout>


    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
const headernav = () => import("../components/headernav.vue");
const adcard = () => import("../components/adcard.vue");

export default {
  name: 'product',
    components: {
    headernav,
    adcard,
    },
  data: () => ({
      loading: false,
    img: "https://res.cloudinary.com/base-uni/image/upload/v1658076824/alpha_connect/GWC_ALt_logo_1_zkglzr.png"
  }),
  mounted(){
    //   if (!this.product.id) {
    //     //   this.getProduct()
    //   }
  },
computed:{
    token(){
      return this.$store.getters.getToken
    },
    user(){
      return this.$store.getters.getUser
    },
    product: {
      get() {
        return this.$store.getters.getProduct;
      },
      set(val) {
        this.$store.dispatch("setProduct", val);
      }
    },
    products: {
      get() {
        return this.$store.getters.getProducts;
      },
      set(val) {
        this.$store.dispatch("setProducts", val);
      }
    },
  },
  methods:{
      buyItem(){
          if (this.token) {
              this.loading = true
          axios.post('/product/buy_product',{
              id: this.product.id,
          }).then(()=>{
              this.loading = false
              alert('Thank you, the seller will contact you for more details')
          })
          }else{
              this.$router.push('/signup')
          }

      },
      getProduct() {
          axios.get('/product/get_lesson?id='+this.$route.params.id)
      }
  }
}
</script>
