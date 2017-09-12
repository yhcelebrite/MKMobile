<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <button v-on:click='getData'>getData click me！</button>
    <button v-on:click='postCors'>postData click me！</button>
    <button v-on:click='postDataWithQS'>postDataWithQS click me！</button>

  </div>
</template>

<script>
import qs from 'qs'
import resConfig from '../assets/config/config.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    postData () {
    var instance = this.$http.create({
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        withCredentials: true
    });
    var param = qs.stringify({'random':212});
    debugger;
    instance.post('/api/User/ReturnCheckCode', param)
      .then(
        res => {
          console.log(res);
        }
      ).catch(function (response) {
           console.log(response);
         });
    },

    postCors(){
      debugger
      this.$http(resConfig).then(function(res){
        console.log(res);
      })
    },

    postDataWithQS (){
      this.$http.post('/api/User/ReturnCheckCode', qs.stringify({random:1}),{headers: {'content-Type':'application/json'}})
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
    },
    getData(){
//      console.log()
//      this.$http.get('http://172.18.10.189:5010/api/User/checkTel?tel=13631587454')
//        .then(function (response) {
//          debugger
//          console.log(response);
//        })
//        .catch(function (error) {
//          console.log(error);
//        });
      debugger
      let conf = resConfig
      conf.method = 'GET'
      conf.url = '/api/User/checkTel?tel=13631587454'
      this.$http(conf).then(function(res){
        console.log(res);
      })
    },
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
