<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: WeChary
 * @Date: 2021-08-29 21:56:31
 * @LastEditors: WeChary
 * @LastEditTime: 2021-08-30 08:52:49
 * @FilePath: \java-connect-test\src\views\HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: ''
    }
  },
  created() {
    getHomeMultidata(this.iid)
    .then((res) => {
      console.log(res);
      this.msg =res
    })
    .catch((err) => {
      console.log(err);
      this.msg =err
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
