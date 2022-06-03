<template>
<footer>
  <div class="container">
    <div>
      <div>
        <h3>下载QQ音乐客户端</h3>
        <ul>
          <li><a href=""><i></i>PC版</a></li>
          <li><a href=""><i></i>Mac版</a></li>
          <li><a href=""><i></i>Android版</a></li>
          <li><a href=""><i></i>iPhone版</a></li>
        </ul>
      </div>
      <div>
        <h3>特色产品</h3>
        <ul>
          <li><a href=""><i></i>全民K歌</a></li>
          <li><a href=""><i></i>银河音效</a></li>
          <li><a href=""><i></i>QPlay</a></li>
          <li><a href=""><i></i>Fan直播伴侣</a></li>
          <li><a href="">车载互联</a></li>
          <li><a href="">QQ演出</a></li>
        </ul>
      </div>
      <div>
        <h3>合作链接</h3>
        <ul>
          <li><a href="">C J ENM</a></li>
          <li><a href="">腾讯视频</a></li>
          <li><a href="">手机QQ空间</a></li>
          <li><a href="">最新版QQ</a></li>
          <li><a href="">腾讯社交广告</a></li>
          <li><a href="">电脑管家</a></li>
          <li><a href="">QQ浏览器</a></li>
          <li><a href="">腾讯微云</a></li>
          <li><a href="">腾讯云</a></li>
          <li><a href="">企鹅FM</a></li>
          <li><a href="">智能电视网</a></li>
          <li><a href="">当贝市场</a></li>
          <li><a href="">酷我音乐</a></li>
          <li><a href="">酷狗听书</a></li>
        </ul>
      </div>
      <div>
        <h3>开放平台</h3>
        <ul>
          <li><a href="">QQ音乐开放平台</a></li>
          <li><a href="">腾讯音乐人</a></li>
          <li><a href="">音乐推</a></li>
        </ul>
      </div>
      <div>
        <h3>TME集团官网</h3>
        <ul>
          <li><a href="">腾讯音乐</a></li>
        </ul>
      </div>
    </div>

    <div>
      <p>
        <a href="">关于腾讯</a><a href="">About Tencent</a><a href="">服务条款</a>
        <a href="">用户服务协议</a><a href="">隐私政策</a><a href="">权利声明</a>
        <a href="">广告服务</a><a href="">腾讯招聘</a><a href="">客服中心</a>
        <a href="">网站导航</a>
      </p>
      <p>
        <span>Copyright © 1998 - 2022 Tencent.</span><a href="">All Rights Reserved.</a>
      </p>
      <p>
        <span>腾讯公司&nbsp;</span><a href="">版权所有</a><span>&nbsp;|&nbsp;</span>
        <a href="">营业执照</a><span>&nbsp;|&nbsp;网络文化经营许可证: </span><a href="">粤网文[2020]3396-195号</a>
      </p>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'

}
</script>

<style lang="less" scoped>
footer {
  color: #999;
  background-color: #333;
  
  a {
    color: #999;

    &:hover {
      color: #31c27c;
    }
  }

  .container {
    width: 1200px;
    margin: auto;

  }
}

.container>div:first-child {
  position: relative;
  padding-bottom: 45px;
  border-bottom: 1px solid #353535;
  overflow: hidden;
  font-size: 14px;

  h3 {
    font-size: 15px;
    font-weight: 400;
    margin: 0;
    padding: 80px 0 30px 0;
  }

  li {
    display: inline-block;

    i {
      display: block;
      width: 37px;
      height: 48px;
      margin: 0 29px 12px;
      background: url('../../assets/img/footer.e3352fc2.png');
    }
  }

  >div:nth-child(1) {
    position: absolute;
    top: 0;
    left: 10px;
    width: 360px;

    ul li {
      text-align: center;

      &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        i:hover {
          background-position-y: -49px;
        }
      }

      &:nth-child(1) {
        text-align: left;
      }

      &:nth-child(1) i {
        margin-left: 0;
        background-position: -2px 0;
      }

      &:nth-child(2) i {
        width: 46px;
        background-position: -92px 0;
  
      }

      &:nth-child(3) i {
        background-position: -190px 0;
      }

      &:nth-child(4) i {
        background-position: -279px 0;
      }
    }
    
  }

  >div:nth-child(2) {
    position: absolute;
    top: 0;
    left: 450px;
    width: 360px;

    ul li {
      text-align: center;
      margin-bottom: 18px;

      &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        i:hover {
          background-position-y: -49px;
        }
      }

      &:nth-child(1) {
        text-align: left;
      }

      &:nth-child(1) i {
        margin-left: 0;
        background-position: -370px 0;
      }

      &:nth-child(2) i {
        width: 46px;
        background-position: -463px 0;
      }

      &:nth-child(3) i {
        background-position: -563px 0;
      }

      &:nth-child(4) i {
        background-position: -650px 0;
      }

      &:nth-child(5) {
        margin-right: 32px;
      }
    }


  }

  >div:nth-child(3) {
    float: right;
    width: 300px;
    padding-bottom: 57px;

    ul li {
      min-width: 100px;
      margin-bottom: 12px;
    }
  }

  >div:nth-child(4) {
    margin: 300px 0 0 10px;

    ul>li {
      margin-right: 32px;
    }
  }

  >div:nth-child(5) {
    position: absolute;
    top: 300px;
    left: 476px;
    width: 304px;
  }

}

.container>div:last-child {
  text-align: center;
  padding: 24px 0;
  line-height: 28px;
  font-size: 12px;

  >p:first-child a {
    &::after{
      content: ' | ';
    }
    
    &:last-child::after {
      content: '';
    }
    
  }
 

}


</style>