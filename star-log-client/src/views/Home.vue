<template>
  <div class="home">
    <form @submit.prevent="addLog">
      <input type="text" v-model="newLog.title" placeholder="name">
      <input type="text" v-model="newLog.body" placeholder="log">
      <button type="submit">Add Log</button>
    </form>
    <logs v-if="log._id" v-for="log in logs" :key="log._id" :logData="log"></logs>
  </div>
</template>

<script>
  // @ is an alias to /src
  import logs from '@/components/log/logs.vue'


  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getAllLogs')
    },
    data() {
      return {
        newLog: {
          title: '',
          body: ''
        }
      }
    },
    computed: {
      logs() {
        return this.$store.state.logs;
      }
    },
    methods: {
      addLog() {
        this.$store.dispatch('addLog', JSON.parse(JSON.stringify(this.newLog)))
        this.newLog.title = ''
        this.newLog.body = ''
      }
    },
    components: {
      logs
    }
  }
</script>