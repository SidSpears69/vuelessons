<template>
  <div>
    <slot name="header"> </slot>
    <table class="table table-hover">
      <thead>
        <slot name="table-header">
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Активен</th>
            <th>Баланс</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Зарегистрирован</th>
          </tr>
        </slot>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.id">
          <slot name="table-row" :user="item" :testChild="testChild">
            <td>
              <router-link :to="'/edit/' + item.id"> # {{ item.id }} </router-link>
              <button @click="testChild">Child</button>
            </td>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.isActive }}</td>
            <td>{{ item.balance }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.registered }}</td>
          </slot>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">Всего пользователей: {{ total }}</th>
        </tr>
      </tfoot>
    </table>
    <slot name="footer"> </slot>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    total: function () {
      return this.users.length
    }
  },
  methods: {
    testChild() {
      alert('Child')
    }
  }
}
</script>
