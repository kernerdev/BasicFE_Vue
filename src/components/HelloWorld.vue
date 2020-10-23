<template>
  <button v-on:click="getData">getData</button>
  <p id="message">{{info}}</p>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      info: null
    }
  },
  methods: {
    getData(){
      axios
        .get('http://127.0.0.1:1234/hello')
        .then(response => (this.info = response.data.message))
        .catch(error => this.info = error)
    }
  }
}
</script>
