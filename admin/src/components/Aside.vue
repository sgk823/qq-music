<template>
  <div class="logo">
    <div></div>
    <div>
      <el-button type="primary">
        <el-icon :size="20">
          <Position />
        </el-icon>
        发送邮件
      </el-button>
    </div>
  </div>
  <div class="menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#27292b"
      text-color="#e2e2e2"
    >
      <template v-for="(item, idx) in menuList">
        <el-sub-menu :index="idx + 1" v-if="item.children">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item :index="idx + 1" v-else>
          <el-icon><location /></el-icon>
          <template #title>{{item.title}}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
  <div class="admin"></div>
</template>

<script>
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Aside",
  setup() {
    const menuList = [
      {
        title: "家",
        icon: '',
        path: "",
      },
      {
        title: "工作目录",
        children: [],
      },
      {
        title: "用户列表",
      },
      {
        title: "历史记录",
      },
      {
        title: "帮助",
      },

      {
        title: "服务",
        children: [],
      },
    ];

    return {
      menuList,
    };
  },
});
</script>

<style>
</style>