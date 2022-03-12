<template>
  <div>Hello, {{userFullName}}</div>
  <div></div>
</template>

<script>
export default {
    computed: {
        userFullName() {
            return this.$store.state.profileFirstName + " " + this.$store.state.profileLastName
        },
        user() {
            return this.$store.state.user;
        }
    }
}
</script>

<style>

</style>