<template>
  <header>
    <div>
      <div><img src="./imgs/logo.png" alt=""></div>
      <Navbar :navs="nav" role="nav"/>
      <Search />
      <ul>
        <li><a href="#">登录</a></li>
        <li><a href="#">开通VIP</a></li>
        <li><a href="#">充值</a></li>
      </ul>
    </div>
    <div>
      <Navbar :navs="subNav" />
    </div>
  </header>
</template>

<script>
import Search from '../search'

export default {
  name: "Header",
  data(){
    return {
      nav: ['音乐馆', '我的音乐', '客户端', '开放平台', 'VIP'],
      subNav: ['首页', '歌手', '新碟', '排行榜', '分类歌单', '电台', 'MV', '数字专辑', '票务'],
    }
  },

  components: {
    Search,

  }
}
</script>

<style lang="less" scoped>
header>div {
  width: 1200px;
  margin: 0 auto;

  &:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    >div:first-of-type {
      margin-right: -60px;
    }

    >ul li {
      display: inline-block;
      margin-left: 12px;
      font-size: 15px;

      a {
        color: #000;
      }
    }
  }

  &:last-of-type {
    border-top: 1px solid #f2f2f2;
    text-align: center;
  }
}
</style>
