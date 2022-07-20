/* eslint-disable no-unused-vars */
// import store from "../../store"
import router from "../../router"
const axios = require("axios")

export const user = {
  state: {
      token: '',
      user: {},
      products: [
        {
          name: 'Nivea cream',
          image: 'https://res.cloudinary.com/payhospi/image/upload/v1657613021/nivea_xfhnbl.jpg',
          price: 2000,
          description: 'Nivea (German pronunciation: [niˈveːa] ( listen), stylized as NIVEA) is a German personal care brand that specializes in skin and body-care. It is owned by the Hamburg-based company Beiersdorf Global AG. The company was founded on 28 March 1882, by Paul Carl Beiersdorf. In 1890, it was sold to Oscar Troplowitz.'
        },
        {
          name: 'IPhone 12',
          image: 'https://store.bellestoreinc.com/wp-content/uploads/2021/09/iphone-13-pro-family-hero.png',
          price: 100000,
          description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.'
  
        },
        {
          name: 'Iphone 14',
          image: 'https://res.cloudinary.com/payhospi/image/upload/v1658240010/iphone3_mquxer.webp',
          price: 20000,
          description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.'
        },
        {
          name: 'Iphone 13',
          image: 'https://res.cloudinary.com/payhospi/image/upload/v1658240156/iphone_pjnggo.webp',
          price: 2000,
          description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.'
        },
        {
          name: 'Iphone 7',
          image: 'https://res.cloudinary.com/payhospi/image/upload/v1658240439/iphone-7-plus-32gb-black-unlocked-apple_s0wfil.png',
          price: 2000,
          description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.'
        },
        {
          name: 'Iphone 5',
          image: 'https://res.cloudinary.com/payhospi/image/upload/v1658240518/iphone5_ozmazx.jpg',
          price: 2000,
          description: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.'
        },
     
      ],
      my_products:[],
      product:{}
  },
  actions: {
    setToken({ commit, state, dispatch }, data) {
        commit('setToken', data)
    },

    setProducts({ commit, state, dispatch }, data) {
        commit('setProducts', data)
    },
    setProduct({ commit, state, dispatch }, data) {
        commit('setProduct', data)
    },
    setMyProducts({ commit, state, dispatch }, data) {
        commit('setMyProducts', data)
    },
    setUser({commit}, data){
        commit('setUser', data)
    },
    logout({commit}, data){
        delete axios.defaults.headers.common["Authorization"]
        commit("setUser", {})
        commit("setToken", null)
        router.push("/")
    }
  
  },
  mutations: {
      setToken(state, data){
          state.token = data
      },
      setProducts(state, data){
          state.products = data
      },
      setProduct(state, data){
          state.product = data
      },
      setMyProducts(state, data){
          state.my_products = data
      },
      setUser(state, data){
          state.user = data
      },
  },
  getters: {
      getToken(state){
          return state.token
      },
      getProducts(state){
          return state.products
      },
      getProduct(state){
          return state.product
      },
      getMyProducts(state){
          return state.my_products
      },
      getUser(state){
          return state.user
      }
  }
}

