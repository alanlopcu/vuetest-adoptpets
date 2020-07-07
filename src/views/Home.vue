<template>
  <div class="home">
    <h1>Adopt a new best friend</h1>
    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>

    <b-form @submit="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="formData.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Specie:" label-for="input-2">
        <b-form-select id="input-2" v-model="formData.specie" :options="['Cat','Dog']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
        <b-form-input id="input-3" type="number" v-model="formData.age" required placeholder="Enter age"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        specie: null
      }
    }
  },
  methods: {
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
    }
  }
}
</script>
