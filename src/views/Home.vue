<template>
  <v-container style="max-width:990px" class="home">
  <headernav />
<div style="overflow-x:scroll" class="py-3">
<div style="" class="d-inline-flex pt-0">
<v-chip :dark="category== ''" @click="getProducts()" style="width:auto" class="mr-3">All</v-chip>
<v-chip :dark="category== n" @click="getProductsByCategory(n)" style="width:auto" class="mr-3" v-for="(n, i) in categories" :key="i">{{n}}</v-chip>
<div class="px-5"></div>
</div>
</div>
<v-layout class="pt-5" wrap>
  <v-flex xs12 md8>
    <v-layout wrap>
      <v-flex v-show="loading" class="pa-3" v-for="(n) in ['j', 'k', 'l']" :key="n" xs6 sm4>
        <v-card flat color="grey lighten-3" width="100%" height="308px" >
          
        </v-card>
      </v-flex>
      <v-flex v-show="!loading" class="pa-3" v-for="(n, i) in products" :key="i" xs6 sm4>
        <v-card @click="openProduct(n)">
          <v-avatar tile height="200px" width="100%"><v-img contain :src="n.image || 'https://res.cloudinary.com/base-uni/image/upload/v1658076722/alpha_connect/C7E03945-30FB-49E5-90AF-FE6D67322900_kegufu.png'"></v-img></v-avatar>
          <div class="pa-2">

<p class="mb-2 text-capitalize text-truncate font-weight-medium">{{n.name}}</p>
<p class="mb-2">N{{n.price}}</p>
<v-btn color="#10417d" dark class="font-weight-bold" small>buy now</v-btn>
          </div>
        </v-card>
      </v-flex>
      <p v-if="!loading && !products.length">No items in this category yet</p>
    </v-layout>
  </v-flex>
<v-flex :class="$vuetify.breakpoint.smAndUp? 'pl-4': ''" xs12 md4>
<adcard />
</v-flex></v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

const headernav = () => import("../components/headernav.vue");
const adcard = () => import("../components/adcard.vue");

export default {
  name: 'Home',
  components: {
    headernav,
     adcard
    },
      data: () => ({
    loading:false,
   category: '',
    categories: ['Clothes', 'Phones', 'Laptops', 'Provisions', 'Stationaries'],
    description: '',
    img2: "https://res.cloudinary.com/base-uni/image/upload/v1658076722/alpha_connect/C7E03945-30FB-49E5-90AF-FE6D67322900_kegufu.png",
  }),
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
    mounted(){
this.getProducts()
  },
  methods:{
      getProducts(){
        this.loading = true
        this.category = ''
        axios.get('/product').then((res)=>{
          this.products = res.data.products
          this.loading = false
  })
      },
      getProductsByCategory(x){
        this.loading = true
        this.category = x
        axios.get('/product/category_products?category='+x).then((res)=>{
          this.products = res.data.products
          this.loading = false
  })
      },
    openProduct(x){
      this.product = x
      this.$router.push('/product')
    }
  }
}
</script>
