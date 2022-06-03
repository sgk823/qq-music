<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="220px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          
        </el-header>
        <el-main>
          <img src="./assets/ui_7.png" alt="">
        </el-main>
        <el-footer>

        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {
  defineComponent,

} from 'vue'
import Aside from './components/Aside'


export default defineComponent({
  setup(props, ctx){

  },
  components: {
    Aside
  }
 
})

</script>

<style lang="less" scoped>
.common-layout, .el-container {
  height: 100%;

}

.el-aside {
  background-color: #27292b;
}

.el-header {
  background-color: #fff;
}

.el-main {
  background-color: #e8eaef;
}

.el-footer {
  background-color: #c1c3cc;
}

</style>
