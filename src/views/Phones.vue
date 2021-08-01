<template>
  <div>
    <h2>Телефонный справочник</h2>
    <div v-if="!users.length" class="alert alert-warning">Загрузка...</div>
    <user-list v-else :users="users">
      <template v-slot:header>Привет!</template>
      <template v-slot:footer>Пока!</template>
      <template v-slot:table-header>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Телефон</th>
        </tr>
      </template>
      <template v-slot:table-row="{ user, testChild }">
        <td>
          <router-link :to="'/edit/' + user.id"> # {{ user.id }} </router-link>
          <button @click="testParent">Parent</button>
          <button @click="testChild">Child</button>
        </td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.phone }}</td>
      </template>
    </user-list>
  </div>
</template>

<script>
import axios from '@/axios.js'
import { defineAsyncComponent } from 'vue'

export default {
  name: 'PhonesPage',
  components: {
    'user-list': defineAsyncComponent(() => import('@/components/UsersList.vue'))
  },
  data: () => ({
    users: []
  }),
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
    },
    testParent() {
      alert('Parent')
    }
  }
}
</script>
