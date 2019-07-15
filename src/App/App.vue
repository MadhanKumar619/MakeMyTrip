<template>
  <div id="app">
      <app-header></app-header>
      <router-view></router-view>
  </div>
</template>

<script>
import './App.css'
import Header from '../Components/Header/Header'
export default {
  name: 'app',
  data: function() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
      'app-header' : Header
  }
}
</script>