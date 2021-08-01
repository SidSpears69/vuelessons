<template>
  <input type="text" class="form-control" v-model="picture" />
  <input type="file" ref="file" @change="upload" class="d-none" />
  <button type="button" class="btn btn-primary" @click="selectFile">Выберите файл</button>
</template>

<script>
export default {
  name: 'Uploader',
  model: {
    prop: 'value'
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    picture: null
  }),
  created() {
    this.picture = this.value
  },
  methods: {
    selectFile() {
      this.$refs.file.click()
    },
    upload() {}
  }
}
</script>
