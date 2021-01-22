<template>
  <div>
    <LikeHeader>
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:number>        
        <h2>{{number}}</h2>
      </template>
    </LikeHeader>
    <LikeNumber :number="number" @my-click="number = $event"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      number: 10
    }
  },
  components: {
    LikeHeader
  }
  //ローカル登録
  //LikeHeader: LikeHeaderでもいい（ES5の書き方）
}
</script>

<style>
  div {
    border: 1px solid blue;
  }
</style>
