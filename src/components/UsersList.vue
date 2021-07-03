<template>
  <div>
    <table class="table table-hover">
    <thead>
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
    </thead>
    <tbody>
      <tr v-for="item in users" v-bind:key="item.id">
        <td># {{ item.id }}</td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.isActive }}</td>
        <td>{{ item.balance }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.registered }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="8">
          Всего пользователей: {{ total }}
        </th>
      </tr>
    </tfoot>
  </table>
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
      total: function() {
        return this.users.length;
      }
    }
}
</script>

