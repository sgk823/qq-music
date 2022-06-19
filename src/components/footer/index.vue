<template>
  <footer>
    <div>
      <dl>
        <dt>下载QQ音乐客户端</dt>
        <dd><a href=""><i></i>PC版</a></dd>
        <dd><a href=""><i></i>Mac版</a></dd>
        <dd><a href=""><i></i>Android版</a></dd>
        <dd><a href=""><i></i>iPhone版</a></dd>
      </dl>
      <dl>
        <dt>特色产品</dt>
        <dd><a href=""><i></i>全民K歌</a></dd>
        <dd><a href=""><i></i>银河音效</a></dd>
        <dd><a href=""><i></i>QPlay</a></dd>
        <dd><a href=""><i></i>Fan直播伴侣</a></dd>
        <dd><a href="">车载互联</a></dd>
        <dd><a href="">QQ演出</a></dd>
      </dl>
      <dl>
        <dt>合作链接</dt>
        <dd><a href="">CJ ENM</a></dd>
        <dd><a href="">腾讯视频</a></dd>
        <dd><a href="">手机QQ空间</a></dd>
        <dd><a href="">最新版QQ</a></dd>
        <dd><a href="">腾讯社交广告</a></dd>
        <dd><a href="">电脑管家</a></dd>
        <dd><a href="">QQ浏览器</a></dd>
        <dd><a href="">腾讯微云</a></dd>
        <dd><a href="">腾讯云</a></dd>
        <dd><a href="">企鹅FM</a></dd>
        <dd><a href="">智能电视网</a></dd>
        <dd><a href="">当贝市场</a></dd>
        <dd><a href="">酷我音乐</a></dd>
        <dd><a href="">酷我听书</a></dd>
      </dl>
      <dl>
        <dt>开发平台</dt>
        <dd><a href="">QQ音乐开发平台</a></dd>
        <dd><a href="">腾讯音乐人</a></dd>
        <dd><a href="">音乐推</a></dd>
      </dl>
      <dl>
        <dt>TEM集团官网</dt>
        <dd><a href="">腾讯音乐</a></dd>
      </dl>
    </div>
    <div>
      <p>
        <a href="">关于腾讯</a> | <a href="">About Tencent</a> | <a href="">服务条款</a> |
        <a href="">用户服务协议</a> | <a href="">隐私政策</a> | <a href="">权利声明</a> | 
        <a href="">广告服务</a> | <a href="">腾讯招聘</a> | <a href="">客服中心</a> | <a href="">网站导航</a>
      </p>
      <p>Copyright © 1998 - 2022 Tencent. <a href="">All Rights Reserved</a> .</p>
      <p>
        腾讯公司 <a href="">版权所有</a> | <a href="">营业执照</a> |
        网络文化经营许可证：粤网文[2020]3396-195号 | 客服电话：<a href="">4006016666</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
footer {
  width: 100%;
  color: #999;
  background-color: #333;

  a {
    color: #999;

    &:hover {
      color: #31c27c;

      i {
        background-position-y: -50px !important;
      }
    }
  }

  >div:first-of-type {
    width: 1200px;
    margin: auto;

    padding-bottom: 45px;
    border-bottom: 1px solid #353535;

    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    line-height: 1.5;

    dl {
      width: 33.33%;

      &:nth-of-type(3) dd {
        width: 33.33%;
        margin-bottom: 12px;
      }

      &:not(:nth-of-type(3)) dd a {
        display: block;
        text-align: center;
      }

      &:nth-of-type(2) {
        dd:nth-of-type(-n+4) {
          margin-bottom: 18px;
        }

        dd:not(:nth-of-type(-n+4)) {
          margin-right: 32px;
        }
      }

      &:nth-of-type(4) dd {
        margin-right: 32px;
      }
    }

    dl:nth-of-type(1) dd {
      &:nth-of-type(2) i {
        background-position: -92px 0;
      }

      &:nth-of-type(3) i {
        background-position: -190px 0;
      }

      &:nth-of-type(4) i {
        background-position: -279px 0;
      }
    }

    dl:nth-of-type(2) dd {
      &:nth-of-type(1) i {
        background-position: -370px 0;
      }

      &:nth-of-type(2) i {
        background-position: -463px 0;
      }

      &:nth-of-type(3) i {
        background-position: -563px 0;
      }

      &:nth-of-type(4) i {
        background-position: -650px 0;
      }
    }


    dt {
      font-size: 15px;
      padding: 80px 0 30px 0;
    }

    dd {
      font-size: 14px;
      display: inline-block;

      i {
        display: block;
        width: 48px;
        height: 48px;
        background: url(./imgs/footer.png) no-repeat;
        margin: 0 22px 12px;
      }

      &:first-of-type  {
        a {
          text-align: left !important;
        }

        i {
          margin-left: 0;
        }
      }
    }
  }

  >div:last-of-type {
    text-align: center;
    font-size: 12px;
    padding: 24px 0;
    line-height: 28px;
  }
}

</style>
