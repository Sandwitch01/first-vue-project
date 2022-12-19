<template>
<div>
  <TypeNav/>
  <ListContainer/>
  <Recommend/>
  <Like/>
  <Floor/>
  <Floor/>
</div>
</template>
<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

export default {
  name: "index",
  components:{
    ListContainer,
    Recommend,
    Like,
    Floor,
    Brand
  }
}
</script>

<style scoped>

</style>