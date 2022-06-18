<template>
  <nav>
    <ul :class="{topNav:role==='nav'}">
      <li v-for="(item, idx) in navs" :key="idx" @click="cur=idx"
          :class="{active:cur===idx, navActive:cur===idx && role==='nav'}">
        <a href="#">{{item}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ['navs', 'role'],
  data(){
    return {
      cur: 0
    }
  }
}
</script>

<style lang="less" scoped>
nav li {
  display: inline-block;
  margin-right: 47px;
  font-size: 15px;
  line-height: 50px;

  a {
    color: #000;

    &:hover {
      color: #31c27c;
    }
  }
}

.topNav li{
  font-size: 18px;
  line-height: 90px;
  padding: 0 20px;
  margin: 0;
}

.active {
  a {
    color: #31c27c;
  }
}

.navActive {
  background-color: #31c27c;
  a {
    color: #fff;

    &:hover {
      color: #fff;
    }
  }
}
</style>
