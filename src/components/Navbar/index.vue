<template>
<nav>
  <div class='container'>
      <ul>
        <li><a href="">首页</a></li>
        <li><a href="">歌手</a></li>
        <li><a href="">新碟</a></li>
        <li><a href="">排行榜</a></li>
        <li><a href="">分类歌单</a></li>
        <li><a href="">电台</a></li>
        <li><a href="">MV</a></li>
        <li><a href="">数字专辑</a></li>
        <li><a href="">票务</a></li>
      </ul>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
nav {
  background-color: #fff;
  .container{
    max-width: 1200px;
    margin: auto;
  }
  a {
    color: #000;
  }
}

.container>ul {
  height: 51px;
  line-height: 51px;
  border-top: 1px solid #f2f2f2;
  padding-left: 250px;
  font-size: 15px;

  li {
    float: left;
    margin-right: 47px;

    a:hover {
      color: #31c27c;
    }
  }
}

</style>