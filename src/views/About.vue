<template>
<div>
  <Scoped />
  <div class="ce">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#1a233c"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- 11////////////////////////////////////222 -->
      <el-submenu index="1">
        <template slot="title">
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/lieb">
            <el-menu-item index="1-1">商品列表</el-menu-item>
          </router-link>
          <router-link to="/xinz">
            <el-menu-item index="1-2">新增商品</el-menu-item>
          </router-link>
          <router-link to="/xingq">
            <el-menu-item index="1-3">商品详情</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
        <!-- 11////////////////////////////////////222 -->
      <el-submenu index="2">
        <template slot="title">
          <span>粮票管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">新增粮票</el-menu-item>
          <el-menu-item index="2-2">使用明细</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
<!-- 11////////////////////////////////////222 -->
     <el-submenu index="3">
        <template slot="title">
          <span>礼券管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">新增礼券</el-menu-item>
          <el-menu-item index="3-2">礼券详情</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
<!-- 11////////////////////////////////////222 -->
       <el-submenu index="4">
        <template slot="title">
          <span>稻田管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">新增稻田</el-menu-item>
          <el-menu-item index="4-2">稻田视频上传</el-menu-item>
          <el-menu-item index="4-3">稻田详情</el-menu-item>
          <el-menu-item index="4-4">租赁详情</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 11////////////////////////////////////222 -->
      <el-submenu index="5">
        <template slot="title">
          <span>财务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">收入列表</el-menu-item>
          <el-menu-item index="5-2">每笔收入详情</el-menu-item>
          <el-menu-item index="5-3">每日收入统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 11////////////////////////////////////222 -->
      <el-submenu index="6">
        <template slot="title">
          <span>问题反馈管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">常见问题列表</el-menu-item>
          <el-menu-item index="6-2">新增问题</el-menu-item>
          <el-menu-item index="6-3">问题详情</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 11////////////////////////////////////222 -->
      <el-submenu index="7">
        <template slot="title">
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">订单列表</el-menu-item>
          <el-menu-item index="7-2">订单详情</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 11////////////////////////////////////222 -->
      <el-submenu index="8">
        <template slot="title">
          <span>关注用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">用户列表</el-menu-item>
          <el-menu-item index="8-2">用户积分列表</el-menu-item>
          <el-menu-item index="8-3">用户积分明细</el-menu-item>
          <el-menu-item index="8-4">用户粮票列表</el-menu-item>
          <el-menu-item index="8-5">用户粮票明细</el-menu-item>
          <el-menu-item index="8-6">用户优惠券列表</el-menu-item>
          <el-menu-item index="8-7">用户优惠券明细</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       </el-menu>
  </div>
  <div class="luy">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Scoped from '../components/top'
export default {
  components : {
    Scoped
  }
}
</script>

<style lang="less" scoped>
  .ce{
    width: 200px;
    float: left;
  }
</style>
