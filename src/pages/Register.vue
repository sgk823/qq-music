<template>
  <main>
    <div>
      <div><a href=""><img src="../assets/img/logo.png" alt=""></a></div>
      <div></div>
    </div>
    <div>
      <div>
        <div><a href="">QQ靓号</a></div>
        <div><span>简体中文</span><img src="../assets/img/down.png" alt=""></div>
        <div><a href="">意见反馈</a></div>
      </div>
      <div>
        <div>
          <p>欢迎注册QQ音乐</p>
          <p>每一天, 乐在畅听</p>
        </div>
        <form action="">
          <div>
            <el-input v-model="name" placeholder="昵称"></el-input>
          </div>
          <div>
            <el-input placeholder="密码" v-model="password" show-password></el-input>
          </div>
          <div>
            <div>
              <el-select v-model="select" slot="prepend" placeholder="+86 ">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
            </div>
            <div>
              <el-input v-model="phone" placeholder="手机号码"></el-input>
            </div>
          </div>
          <div>
            <div>
              <el-input v-model="vercode" placeholder="短信验证码"></el-input>
            </div>
            <div>
              <el-button type="primary" disabled>发送短信验证码</el-button>
            </div>
          </div>
          <div>
            <el-button type="primary">立即注册</el-button>
          </div>
          <div>
            <el-checkbox v-model="checked">我已阅读并同意相关服务条款和隐私政策</el-checkbox>
            <img src="" alt="">
          </div>
          <div>Copyright &copy; 1998-2022 Tencent All Rights Reserved</div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Register',
  data(){
    return {
      name: '',
      password: '',
      vercode: '',
      phone:''
    }
  }

}
</script>

<style lang="less" scoped>
main {
  display: flex;
  justify-content: space-between;

  >div:first-child {
    position: relative;
    width: 480px;

    background: url('../assets/img/01-3.jpg') no-repeat;
    background-size: cover;
    background-position: center;

    a {
      position: absolute;
      top: 20px;
      left: 30px;
    }


  }

  >div:last-child {
    flex-grow: 2;
    >div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 20px 40px 56px 40px;

      >div {
        padding-top: 10px;
        margin-right: 40px;
      }
    }

    >div:nth-child(2) {
      width: 480px;
      margin: auto;

      p:nth-of-type(1) {
        margin-bottom: 20px;
        font-size: 42px;
      }

      p:nth-of-type(2) {
        font-size: 27px;
        margin-bottom: 64px;
        color: #666;
      }
    }

    form>div {
      margin-bottom: 48px;

      button {
        width: 100%;
      }

      &:nth-child(3),&:nth-child(4){
        display: flex;
        align-items: center;
        justify-content: space-between;

        >div {
          &:first-child {
            width: 36%;
          }

          &:last-child {
            width: 60%;
          }
        }
      }

      &:last-child {
        margin-top: 150px;
        text-align: center;
        color: #999;
      }

      

    }

    
  }

}



</style>