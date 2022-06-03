<template>
<header>
  <div class="container">
    <div>
      <div><a href=""><img src="../../assets/img/logo.png" alt=""></a></div>
      <div>
        <ul>
          <li><a href="">音乐馆</a></li>
          <li><a href="">我的音乐</a></li>
          <li>
            <a href="">客户端</a><img src="../../assets/img/mark_1.png" alt="">
            <div>
              <p><i></i>HQ高品质 全员开启</p>
              <p><i></i>独家音效 全面升级</p>
              <p><i></i>轻盈视觉 动态皮肤</p>
              <a href="">下载体验</a>
            </div>
          </li>
          <li><a href="">开放平台</a></li>
          <li><a href="">VIP</a></li>
        </ul>
      </div>
      <div>
        <input type="text" placeholder="搜索音乐、MV、歌单、用户"><button><i></i></button>
      </div>
      <div>
        <span>
          <a href="">登录</a>
          <a href="">开通VIP<ul><li>开通绿钻豪华版</li><li>开通付费包</li></ul></a>
          <a href="">充值<ul><li>购买乐币</li><li>充值饭票</li></ul></a>
        </span>
      </div>
    </div>
    <Navbar />
  </div>
</header>
</template>

<script>
import Navbar from '../Navbar';

export default {
  name: 'Header',
  components: {
    Navbar
  }

}
</script>

<style lang="less" scoped>
header {
  background-color: #fff;

  .container {
    max-width: 1200px;
    margin: auto;

    >div:first-child {
      height: 90px;
    }

    >div:last-child {
      clear: both;
    }
  }

  a {
    color: #000;
  }
}

.container>div>div {
  float: left;
  font-size: 18px;

  &:nth-child(1) {
    margin-top: 22px;
  }

  &:nth-child(2) {
    margin-left: 45px;

    li {
      display: inline-block;

      a {
        display: block;
        height: 90px;
        line-height: 90px;
        padding: 0 20px;

        &:hover {
          color:#31c27c;
        }
      }

      &:first-child a {
        color: #fff;
        background-color: #31c27c;

        &:hover {
          color: #fff;
        }
      }

      &:nth-child(3) {
        position: relative;

        img {
          position: absolute;
          top: 18px;
          right: 0;
          height: 14px;
        }

        div {
          display: none;
          position: absolute;
          top: 68px;
          left: 20px;
          width: 160px;
          height: 140px;

          box-shadow: 0 0 4px rgb(0 0 0 / 35%);
          background-color: #fff;
          border-radius: 4px;
          z-index: 99;
          margin: 9px 0 18px 0;
          padding-top: 10px;
          font-size: 12px;
          color: #000;

          p {
            margin-left: 16px;
            padding: 5px 0;
            min-height: 22px;
            line-height: 1.5;

            i {
              display: inline-block;
              width: 14px;
              height: 14px;
              margin-right: 9px;
            
              background-image: url('../../assets/img/sprite_privilege.e6d0a775.png');
              background-position: 0 0; 
              
              vertical-align: -3px;
            }

            &:nth-child(2) i {
              background-position: 0 -30px;
            }

            &:nth-child(3) i {
              background-position: 0 -60px;
            }
          }

          a {
            display: block;
            width: 90px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            color: #fff;
            background-color: #31c27c;
            border-radius: 25px;
            margin: 6px auto 0;
          }
        }

        &:hover {
          div {
            display: block;
          }
        }
      }
    }
  }

  &:nth-child(3) {
    position: relative;
    height: 36px;
    line-height: 36px;
    margin: 26px 0 0 30px;
    padding: 0 33px 0 11px;
    border: 1px solid #c9c9c9;
    border-radius: 3px;
    background-color: #fff;

    input {
      width: 174px;
      height: 36px;
      border: none;
      padding: 0;
      vertical-align: bottom;
    }

    button {
      position: absolute;
      top: 0;
      right: 0;

      width: 38px;
      height: 35px;
      border: none;
      padding: 0;
      background-color: transparent;
      cursor: pointer;

      i {
        position: absolute;
        top: 50%;
        right: 11px;
        margin-top: -8px;
        height: 16px;
        width: 16px;

        background-image: url('../../assets/img/icon_sprite.630b3e60.png');
        background-position: 0 -40px;
      }

      &:hover {
        i {
          background-position: 0 -60px;
        }
      }

    }
  }

  &:nth-child(4) {
    height: 90px;
    line-height: 90px;
    margin-left: 10px;
    font-size: 13px;
    text-align: center;
    
    a {
      &:nth-of-type(1) {
        font-size: 16px;
        margin: 0 10px 0 20px;

        &:hover {
          color: #31c27c;
        }
      }

      &:nth-of-type(2) {
        width: 80px;
        background-color: #31c27c;
        color: #fff;
      }

      &:nth-of-type(3) {
        width: 38px;
        margin-left: 10px;

      }

      &:nth-child(2),&:nth-child(3) {
        position: relative;
        display: inline-block;
        line-height: 38px;
        
        border: 1px solid #c9c9c9;
        padding: 0 15px 0 10px;
        border-radius: 3px;

        &::after {
          position: absolute;
          content: "";
          right: 10px;
          top: 16px;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 6px solid;
        }

        ul {
          display: none;
          position: absolute;
          top: 38px;
          left: 0;
          width: 100%;
          z-index: 99;
          color: #000;
          line-height: 36px;

          li {
            border: 1px solid #c9c9c9;

            &:last-child {
              border-top: none;
            }

            &:hover {
              background-color: #31c27c;
              color: #fff;
            }
          }
        }

        &:hover {
          ul {
            display: block;
          }

          &::after {
            border-top: none;
            border-bottom: 6px solid;
          }
        }
      }

    }
  }
}

</style>