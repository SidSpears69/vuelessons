<template>
  <div>
    <h2>Список пользователей</h2>
    <div v-if="!haveUsers" class="alert alert-warning">Загрузка...</div>
    <user-list v-else :users="users"></user-list>
  </div>
</template>

<script>
import axios from '@/axios.js'
import { defineAsyncComponent } from 'vue'

export default {
  name: 'UsersListPage',
  components: {
    'user-list': defineAsyncComponent(() => import('@/components/UsersList.vue'))
  },
  data: () => ({
    users: []
  }),
  computed: {
    haveUsers() {
      return this.users.length > 0
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get('users')
        .then((response) => {
          this.users = response.data
        })
        .catch((error) => console.error(error))
    }
  }
}
</script>
