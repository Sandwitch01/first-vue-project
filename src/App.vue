<template>
  <div id="app" class="outer">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch('Home/categoryList')
    if (this.$route.path != '/home'){
      this.show = false
    }

  }
}
</script>

<style>
.color-red{
  background-color: #e1251b;
}
</style>
