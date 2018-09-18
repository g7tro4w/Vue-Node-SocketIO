<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form class="" @submit.prevent="sendMessage()">
      <input type="text" v-model="message">
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>

import io from 'socket.io-client'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    this.socket.on('news', (data) => {
      console.log(data)
    })
  },
  data () {
    return {
      socket: io('192.168.140.10:8050'),
      message: ''
    }
  },
  methods: {
    sendMessage () {
      this.socket.emit('chat message', this.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
