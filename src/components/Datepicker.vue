<template>
  <input type="text" ref="picker" class="form-control" v-model="date" />
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
export default {
  name: 'Datepicker',
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
    fp: null,
    date: null
  }),
  watch: {
    value: 'updateDatepicker'
  },
  mounted() {
    this.initDatepicker()
  },
  created() {
    this.date = this.value
  },
  beforeUnmount() {
    if (this.fp) {
      this.fp.destroy()
    }
  },
  methods: {
    initDatepicker() {
      this.fp = flatpickr(this.$refs.picker, {
        dateFormat: 'd.m.Y',
        onChange: (selectedDates, dateStr) => {
          this.$emit('update:value', dateStr)
        }
      })
    },
    updateDatepicker() {
      if (this.fp) {
        this.fp.setDate(this.date)
      }
    }
  }
}
</script>

<style></style>
