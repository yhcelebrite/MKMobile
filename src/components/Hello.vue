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
      var config = {
        // `url` is the server URL that will be used for the request
        url: '/api/User/ReturnCheckCode',

        // `method` is the request method to be used when making the request
        method: 'post', // default

        // `baseURL` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
        // to methods of that instance.
        baseURL: 'http://172.18.10.189:5010',

        // `headers` are custom headers to be sent
        headers: {'X-Requested-With': 'XMLHttpRequest'},

        // `params` are the URL parameters to be sent with the request
        // Must be a plain object or a URLSearchParams object
        params: {
          random: 12345
        },

        // `paramsSerializer` is an optional function in charge of serializing `params`
        // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
        paramsSerializer: function(params) {
          return qs.stringify(params, {arrayFormat: 'brackets'})
        },

        // `data` is the data to be sent as the request body
        // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
        // When no `transformRequest` is set, must be of one of the following types:
        // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        // - Browser only: FormData, File, Blob
        // - Node only: Stream, Buffer
        data: {
        },

        // `timeout` specifies the number of milliseconds before the request times out.
        // If the request takes longer than `timeout`, the request will be aborted.
        timeout: 1000,

        // `withCredentials` indicates whether or not cross-site Access-Control requests
        // should be made using credentials
        withCredentials: false, // default

        // `responseType` indicates the type of data that the server will respond with
        // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        responseType: 'json', // default

        // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
        xsrfCookieName: 'XSRF-TOKEN', // default

        // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
        xsrfHeaderName: 'X-XSRF-TOKEN', // default

        // `onUploadProgress` allows handling of progress events for uploads
        onUploadProgress: function (progressEvent) {
          // Do whatever you want with the native progress event
        },

        // `onDownloadProgress` allows handling of progress events for downloads
        onDownloadProgress: function (progressEvent) {
          // Do whatever you want with the native progress event
        },

        // `maxContentLength` defines the max size of the http response content allowed
        maxContentLength: 2000,

        // `validateStatus` defines whether to resolve or reject the promise for a given
        // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
        // or `undefined`), the promise will be resolved; otherwise, the promise will be
        // rejected.
        validateStatus: function (status) {
          return status >= 200 && status < 300; // default
        },

        // `maxRedirects` defines the maximum number of redirects to follow in node.js.
        // If set to 0, no redirects will be followed.
        maxRedirects: 5, // default

      }
      this.$http(config).then(function(res){
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
      console.log()
      this.$http.get('http://172.18.10.189:5010/api/User/checkTel?tel=13631587454')
        .then(function (response) {
          debugger
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
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
