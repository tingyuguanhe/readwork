<template>
    <div class="app-mian">
        <nav-bar></nav-bar>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <!-- <bottom></bottom> -->
        
    </div>
</template>


<script>
import navBar from './nav'

export default {
  components: {navBar}
}
</script>