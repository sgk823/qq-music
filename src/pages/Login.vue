<template>
  <el-dialog :visible="true" width="25%" title="QQ登录">
    <div class="sep"></div>
    <div class="form">
      <el-form>
        <el-form-item>
          <el-input placeholder="支持QQ号/邮箱/手机号登录"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="密码" v-model="input" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
      <div><a href="">忘了密码?</a><a href="">注册新账号</a></div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      dialogFormVisible: false,
      input: ''
    };
  },
};
</script>

<style lang="less" scoped>
.form {
  width: 60%;
  margin: auto;

  button {
    width: 100%;
  }

  >div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

div.sep {
  height: 2px;
  width: 100%;
  background-color: #ddd;
  margin: -25px auto 40px;
}
</style>