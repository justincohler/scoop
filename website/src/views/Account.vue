<template>
  <b-container class="account px-0" fluid>
    <!-- Nav bar -->
    <b-navbar id="navbar" class="py-3">
      <b-navbar-brand id="title" href="#" class="float-left ml-5 font-italic">Scoop</b-navbar-brand>
    </b-navbar>
    <b-row>
      <b-col>
        <h1>Account</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "account",
  components: {
    HelloWorld
  }
};
</script>

<style lang="stylus">
#navbar {
  background-color: #ff5757;
}

#title {
  font-size: 32px;
  color: white;
}
</style>
