<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{ $route.params.id }}</h2>
    <h2 v-text='$route.params.username'></h2>
    <h2 v-text='$route.params.post_id'></h2>
    <p>This part is child router-view:</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'user message'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
