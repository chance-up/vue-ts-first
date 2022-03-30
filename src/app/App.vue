<template>
  <div id="app">
    <router-link to="/"><button></button></router-link>
    <input type="text" v-model="name" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class App extends Vue {
  mounted() {
    console.log(window.innerWidth);
  }
  data() {
    return {
      name: 'value',
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
