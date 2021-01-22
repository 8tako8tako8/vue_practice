<template>
  <div>
    <p>いいね({{halfNumber}})</p>
    <button v-on:click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ["number"],
  //propsを使うことで親から子へ値を渡せる
  //propsはオブジェクトでも書ける。
  /**
   * props {
   *  number: {
   *    type: Number
   *    default: 10
   *  }
   * }
   **/
  computed: {
    halfNumber() {
      return this.number / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.number + 1);
      //子から親へは$emitを使う。第二引数はなくても親のmethodを実行するイベントを作れる。
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>
