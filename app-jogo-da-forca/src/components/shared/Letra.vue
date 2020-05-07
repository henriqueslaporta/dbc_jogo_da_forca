<template>
  <div class="col mr-1 border-dark boxLetra">
    <span class="letra align-self-end" v-show="mostrar">{{ this.letra }}</span>
  </div>
</template>

<script>
export default {
  name: 'Letra',
  props: {
    letra: String,
    mostrar: Boolean
  },
  data: () => {
    return {
      // mostrar: true
    }
  }
}
</script>

<style>
.boxLetra{
  min-width: 50px;
  min-height: 6em;
  border-bottom: solid 5px;
}
.letra{
  font-size: 3em;
}
</style>
