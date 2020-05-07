<template>
  <button v-on:click="click">{{ texto }}</button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    texto: String,
    click: Function
  }
} 
</script>
