<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="$emit('setPageNo',pageNo-1)">上一页</button>
    <button v-if="pageStartAndEnd.start > 1" @click="$emit('setPageNo',1)">1</button>
    <button v-if="pageStartAndEnd.start > 2">···</button>

    <button v-if="page > pageStartAndEnd.start-1" v-for="page in pageStartAndEnd.end" @click="$emit('setPageNo',page)">
      {{page}}
    </button>

    <button v-if="pageStartAndEnd.end < totalPage-1">···</button>
    <button v-if="pageStartAndEnd.end < totalPage" @click="$emit('setPageNo',totalPage)">{{totalPage}}</button>
    <button :disabled="pageNo === totalPage" @click="$emit('setPageNo',pageNo+1)">下一页</button>
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  /*
    pageNo:当前页
    total:总数量,
    pageSize:当前页大小
    continues:连续多少页，比如连续5页，则：1..3 4 5 6 7...9
  */
  props:['pageNo','pageSize','total','continues'],

  computed:{
    totalPage(){
      return Math.ceil(this.total/this.pageSize)
    },
    pageStartAndEnd() {
      let {pageNo, continues, totalPage} = this
      let start = 0, end = 0
      //连续页数大于总页数
      if (continues > totalPage) {
        start = 1
        end = totalPage
      } else {
        start = pageNo - parseInt(continues / 2)
        end = pageNo + parseInt(continues / 2)

        if (start < 1) {
          start = 1
          end = continues
        }
        if (end > totalPage){
          end = totalPage
          start = totalPage - continues + 1
        }
      }
      return {start,end}
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
