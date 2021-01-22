<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <p>いいね数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
//slotを使っても親から子へ渡せる。複数ならname属性をつける。親の方ではtemplateに入れる。書いてないが子から親もできる
</script>

<style>
</style>
