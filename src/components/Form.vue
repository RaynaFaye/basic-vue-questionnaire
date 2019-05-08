<template>
  <form @submit.prevent="onSubmit">
    <div class="first-input">
      <label for="first-input">First Input</label>
      <input type="text" name="first-input" id="first-input" v-model="inputOne">
    </div>
    <div class="second-input">
      <label for="second-input">Second Input</label>
      <input type="text" name="second-input" id="second-input" v-model="inputTwo">
    </div>
    <div class="radio-input">
      <div>
        <label for="zero">0</label>
        <input type="radio" name="radio-input" value="0" id="zero" v-model="inputRadio">
      </div>
      <div>
        <label for="one">1</label>
        <input type="radio" name="radio-input" value="1" id="one" v-model="inputRadio">
      </div>
      <div>
        <label for="two">2</label>
        <input type="radio" name="radio-input" value="2" id="two" v-model="inputRadio">
      </div>
      <div>
        <label for="three">3</label>
        <input type="radio" name="radio-input" value="3" id="three" v-model="inputRadio">
      </div>
      <div>
        <label for="four">4</label>
        <input type="radio" name="radio-input" value="4" id="four" v-model="inputRadio">
      </div>
      <div>
        <label for="five">5</label>
        <input type="radio" name="radio-input" value="5" id="five" v-model="inputRadio">
      </div>
    </div>
    <div class="submit-button">
      <input type="submit" value="Send">
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputOne: "",
      inputTwo: "",
      inputRadio: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        inputOne: this.inputOne,
        inputTwo: this.inputTwo,
        inputRadio: this.inputRadio
      };
      console.log(formData);
      this.$store.dispatch("changeQuestionnaireComponent");
    }
  }
};
</script>

<style scoped>
form {
  height: 250px;
  width: 50%;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
}
.first-input,
.second-input {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.radio-input {
  display: flex;
  justify-content: space-around;
}
</style>
