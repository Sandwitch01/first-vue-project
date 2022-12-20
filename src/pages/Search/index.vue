<template>
<div>
  <h2>params---{{$route.params.keyword}}</h2>
  <h2>query---{{$route.query.key}}</h2>
  <div>a的值：{{a}}</div>
  <button @click="add">点击加一</button>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "index",
  computed:{
    ...mapState('Search',['a'])
  },
  methods:{
    add(){
      this.$store.dispatch('Search/add')
    }
  }
}
</script>

<style scoped>
div{
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>