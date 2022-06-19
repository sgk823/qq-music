<template>
  <header>
    <div>
      <div><img src="./imgs/logo.png" alt=""></div>
      <Navbar :navs="nav" role="nav"/>
      <Search />
      <ul>
        <li><a href="#">登录</a></li>
        <li>
          <a href="#">开通VIP</a>
          <ul>
            <li><a href="#">开通绿钻豪华版</a></li>
            <li><a href="#">开通付费包</a></li>
          </ul>
        </li>
        <li>
          <a href="#">充值</a>
          <ul>
            <li><a href="#">购买乐币</a></li>
            <li><a href="#">充值饭票</a></li>
          </ul>
        </li>
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

    >ul>li {
      display: inline-block;
      position: relative;
      margin-left: 12px;
      font-size: 15px;

      a {
        display: inline-block;
        position: relative;
        color: #000;
      }

      &:not(:nth-of-type(1))>a {
        font-size: 13px;
        line-height: 38px;
        padding: 0 15px 0 10px;
        box-sizing: border-box;
        border-radius: 3px;
        text-align: center;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 12px;
          margin-top: -3px;
          width: 0;
          height: 0;
          border-width: 6px 4px;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
        }

        &:hover {
          &::after {
            margin-top: -8px;
            border-color: transparent transparent #fff transparent;
          }
        }
      }

      &:nth-of-type(2)>a {
        width: 122px;
        color: #fff;
        background-color: #31c27c;
        border: 1px solid #31c27c;
      }

      &:nth-of-type(3)>a {
        width: 82px;
        border: 1px solid #c9c9c9;

        &::after {
          border-color: #000 transparent transparent transparent;
        }

        &:hover {
          color: #fff;
          background-color: #31c27c;
        }
      }

      >ul {
        display: none;
        position: absolute;
        top: 38px;
        left: 0;
        right: 0;
        background-color: #fff;
        z-index: 999;
        border: 1px solid #c9c9c9;
        text-align: center;
        font-size: 13px;

        li {
          line-height: 38px;

          &:hover {
            background-color: #31c27c;
            a {
              color: #fff;
            }
          }
        }

        li:nth-of-type(2) {
          border-top: 1px solid #c9c9c9;
        }


      }

      &:hover {
        >ul {
          display: block;
        }
      }
    }
  }

  &:last-of-type {
    border-top: 1px solid #f2f2f2;
    text-align: center;
  }
}
</style>
