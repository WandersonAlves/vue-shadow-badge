<template>
  <button class="oi tudo bom com vc">{{msg}}</button>
</template>
<script>
export default {
  props: ['msg']
}
</script>
<style lang="scss" scoped>
button {
  border: 2px solid #662a24;
  color: #662a24;
  font-weight: 600;
  background-color: transparent;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
}
</style>


