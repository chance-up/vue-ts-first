<template>
  <div>
    <div>
      <app-header></app-header>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Header from './header/header.vue';

@Component({
  components: {
    'app-header': Header,
  },
})
export default class Child extends Vue {
  // '!'는 초기화 속성에 붙이는 prefix (타입스크립트에게 미리 알려주는 역할)
  @Prop() private msg!: string;
}
</script>

<style scoped></style>
