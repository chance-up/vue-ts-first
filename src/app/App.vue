<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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

<style></style>
