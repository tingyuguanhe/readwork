<template>
    <div class="app-mian">
        <nav-bar></nav-bar>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <bottom></bottom>
        <div class="back_top">
            <span>返回顶部</span>
        </div>
    </div>
</template>


<script>
import navBar from './nav'
import Bottom from './bottom'
export default {
  components: {navBar, Bottom}
}
</script>

<style>
    .back_top{
        position: fixed;
        right: 100px;
        bottom: 150px;
        width: 42px;
        height: 42px;
        background: #f85415;
        color:#fff;
        text-align: center;
        font-size: 12px;
        padding: 5px;
        box-sizing: border-box;
        cursor: pointer;
    }
</style>