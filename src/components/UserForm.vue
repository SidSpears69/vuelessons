<template>
  <div>
    <Form v-slot="{ errors }" @submit="submitForm">
      <div class="form-group">
        <label>Имя</label>
        <Field
          type="text"
          name="firstName"
          class="form-control"
          :class="{ 'is-invalid': errors.firstName }"
          v-model="localUser.firstName"
          :rules="isRequired"
        />
        <ErrorMessage class="invalid-feedback" name="firstName" />
      </div>
      <div class="form-group">
        <label>Фамилия</label>
        <input type="text" class="form-control" v-model="localUser.lastName" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" v-model="localUser.email" />
      </div>
      <div class="form-group">
        <label>URL картинки</label>
        <br />
        <img :src="localUser.picture" class="img-thumbnail" />
        <input type="text" class="form-control" v-model="localUser.picture" />
        <avatar-uploader v-model:value="localUser.picture" />
      </div>
      <div class="form-group">
        <label>Возраст</label>
        <input type="text" class="form-control" v-model="localUser.age" />
      </div>
      <div class="form-group">
        <label>Активный</label>
        <div class="checkbox checkbox-inline">
          <input type="checkbox" v-model="localUser.isActive" /> Да
        </div>
      </div>
      <div class="form-group">
        <label>Уровень доступа</label>
        <select class="form-control" v-model="localUser.accessLevel">
          <option v-for="item in accessList" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>Баланс</label>
        <input type="text" class="form-control" v-model="localUser.balance" />
      </div>
      <div class="form-group">
        <label>Телефон</label>
        <input type="text" class="form-control" v-model="localUser.phone" />
      </div>
      <div class="form-group">
        <label>Адрес</label>
        <input type="text" class="form-control" v-model="localUser.address" />
      </div>
      <div class="form-group">
        <label>Компания</label>
        <input type="text" class="form-control" v-model="localUser.company" />
      </div>
      <div class="form-group">
        <label>Биография</label>
        <textarea class="form-control" v-model="localUser.about"></textarea>
      </div>
      <div class="form-group">
        <label>Дата регистрации</label>
        <datepicker v-model:value="localUser.registered" />
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </Form>
    <pre>{{ localUser }}</pre>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate'

export default {
  name: 'UsersForm',
  model: {
    prop: 'user'
  },
  components: {
    datepicker: defineAsyncComponent(() => import('@/components/Datepicker.vue')),
    avatarUploader: defineAsyncComponent(() => import('@/components/AvatarUploader.vue')),
    Field,
    Form,
    ErrorMessage
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    isSubmit: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    localUser: null,
    accessList: ['guest', 'user', 'admin'],
    localIsSubmit: false
  }),
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit('update:user', Object.assign({}, this.localUser))
      }
    },
    localIsSubmit: {
      handler() {
        this.$emit('update:isSubmit', this.localIsSubmit)
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    isRequired(value) {
      return value ? true : 'This field is required'
    },
    submitForm(evt) {
      console.log(evt)
      this.localIsSubmit = true
    }
  }
}
</script>
