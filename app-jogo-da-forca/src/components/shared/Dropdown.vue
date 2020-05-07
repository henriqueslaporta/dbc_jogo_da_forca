<template>
  <div class="form-group row">
    <label v-bind:for="id" class="col-form-label">{{ this.label }}</label>
    <select v-bind:id="id" v-model="valor" class="form-control">
      <option v-for="element in lista" v-bind:value="element.texto" v-bind:key="element.id">
        {{ element.texto }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'Dropdown', 
  props: {
      model: Object,
      lista: Array,
      id: String, 
      label: String 
  },  
  data: () => {
    return {
      valor: ''
    }
  }
}
</script>

