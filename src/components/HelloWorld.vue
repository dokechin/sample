<template>
  <div class="hello">
    <v-form v-model="valid1" ref="form">
      <v-text-field id="name1" :rules="nameRules" v-model="name" required></v-text-field>
    </v-form>
    <v-btn id="new" @click.stop="dialog = true" slot="activator">new</v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <v-form v-model="valid2" ref="form">
        <v-text-field id="name2" :rules="nameRules" v-model="name" required></v-text-field>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      dialog: false,
      valid1: false,
      valid2: false,
      name1: '',
      name2: '',
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
