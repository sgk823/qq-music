<template>
  <div class="content">
    <h2>{{title}}</h2>
    <Navbar :navs='navs'/>
    <Swiper />
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: ['title', 'navs'],

}
</script>

<style lang='less' scoped>
.content {
  background: url(./imgs/bg.jpg) no-repeat;
  text-align: center;

  h2 {
    padding: 50px 0 24px 0;
    font-weight: 500;
    letter-spacing: 8px;
  }
}
</style>