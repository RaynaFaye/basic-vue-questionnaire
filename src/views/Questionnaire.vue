<template>
  <div class="questionnaire">
    <h1>This is the questionnaire page</h1>
    <component :is="whatComponent()"></component>
  </div>
</template>

<script>
export default {
  name: "questionnaire",
  data() {
    return {
      componentChanged: "",
      componentLoaded: ""
    };
  },
  methods: {
    whatComponent() {
      return (this.componentLoaded = this.$store.state.componentLoaded);
    }
  }
};
</script>

<style>
</style>