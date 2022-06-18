<template>
  <div>
    <input type="text" placeholder="搜索音乐、MV、歌单、用户">
    <button><i></i></button>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style lang="less" scoped>
div {
  position: relative;
  width: 174px;
  height: 36px;
  line-height: 36px;
  border: 1px solid #c9c9c9;
  padding: 0 33px 0 11px;
  border-radius: 3px;

  input {
    border: none;
    outline: none;
  }

  button {
    position: absolute;
    top: 50%;
    right: 11px;
    margin-top: -8px;
    border: none;
    padding: 0;
    background-color: #fff;
    cursor: pointer;

    i {
      display: block;
      width: 16px;
      height: 16px;
      background: url("../../assets/images/icon.png") no-repeat 0 -40px;

      &:hover {
        background-position: 0 -60px;
      }
    }
  }
}
</style>
