<template>
  <h2>Редактирование пользователя {{ id }}</h2>
  <div v-if="!user" class="alert alert-warning">Загрузка...</div>
  <template v-else>
    <user-form v-model:user="user" v-model:isSubmit="isSubmit"></user-form>
    <hr />
    {{ user }}
  </template>
</template>

<script>
import axios from '@/axios.js'
import { defineAsyncComponent } from 'vue'

export default {
  name: 'UserEdit',
  model: {
    prop: 'value'
  },
  components: {
    'user-form': defineAsyncComponent(() => import('@/components/UserForm.vue'))
  },
  data: () => ({
    user: null,
    isSubmit: false
  }),
  watch: {
    isSubmit: {
      handler() {
        this.save()
      }
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return 'users/' + this.$route.params.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then((response) => {
          return (this.user = response.data)
        })
        .catch((error) => console.error(error))
    },
    save() {
      return axios
        .patch(this.url, this.user)
        .then(() => this.$router.push('/users'))
        .catch((error) => console.error(error))
    }
  }
}
</script>
