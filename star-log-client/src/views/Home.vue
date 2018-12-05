<template>
  <div class="home">
    <h3>Star Date Logs</h3>
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
    computed: {
      logs() {
        return this.$store.state.logs;
      }
    },
    components: {
      logs
    }
  }
</script>