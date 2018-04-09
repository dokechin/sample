<template>
  <div class="hello">
    <v-form v-model="formValid" ref="form">
      <v-text-field id="name" :rules="nameRules" v-model="name" required></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      formValid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'empty'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
