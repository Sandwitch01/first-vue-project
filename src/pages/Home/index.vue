<template>
<div>
  <TypeNav/>
  <ListContainer/>
  <Recommend/>
  <Like/>
  <Floor v-for="floor in floors" :key="floor.id" :floor="floor"/>
</div>
</template>
<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'

export default {
  name: "Home",
  components:{
    ListContainer,
    Recommend,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('Home/getFloors')
  },
  computed:{
    ...mapState({
      floors:state => state.Home.floors
    })
  }
}
</script>

<style scoped>

</style>