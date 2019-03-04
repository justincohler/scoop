<template>
  <b-container class="home px-0" fluid>
    <!-- Nav bar -->
    <b-navbar id="navbar" class="d-flex">
      <b-navbar-brand id="title" href="#" class="px-5 mr-auto lead_text">Scoop</b-navbar-brand>
      <b-nav-text class="nav_link px-5 support_text">
        <router-link tag="span" to="/">Login</router-link>
      </b-nav-text>
    </b-navbar>

    <b-row class="invisible-md"/>

    <b-row align-h="center" align-v="center" style="min-height: 500px">
      <b-col cols="4">
        <!-- SIGN IN -->
        <b-card style="max-width: 20rem; width: 40vw; min-width: 559px;" class="mb-2 shadow-lg">
          <div class="my-4 lead_text text-center" id="lead">Login</div>

          <b-form @submit="loginUser">
            <b-input
              type="email"
              id="textEmail"
              placeholder="Email"
              v-model="username"
              class="mb-4 support_text"
              required
              @click="$scrollTo('#submission_window', 500, {ease: 'ease-in'})"
            />

            <b-input
              type="password"
              id="textPassword"
              aria-describedby="passwordHelpBlock"
              placeholder="Password"
              v-model="password"
              class="mb-4 support_text"
              required
              @click="$scrollTo('#submission_window', 500, {ease: 'ease-in'})"
            />

            <b-form-text
              v-show="loginFailed"
              id="passwordHelpBlock"
              class="mb-4 support_text"
              style="color: red !important"
            >Your password and/or username is incorrect. Please try again.</b-form-text>

            <b-button id="get_started" class="support_text mt-4" type="submit" v-ripple>Login</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>

    <!-- ...................................... -->
    <b-row class="invisible-lg"/>
    <b-row class="invisible-lg"/>

    <b-row class="footer" align-h="center" align-v="center">
      <b-col class="support_text" style="color:white">© 2019 Scoop. All Rights Reserved</b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      loginFailed: false
    };
  },
  methods: {
    loginUser: async function(evt) {
      evt.preventDefault();
      let res = undefined;
      // Authenticate user
      try {
        res = await axios({
          method: "post",
          url: "http://localhost:3000/login_user",
          data: { username: this.username, password: this.password },
          config: { headers: { "Content-Type": "application/json" } }
        });
        console.log(res);
      } catch (e) {
        console.log(e);
        this.loginFailed = true;
      }

      if (res.status == "200") {
        this.loginFailed = false;
      } else {
        this.loginFailed = true;
      }

      if (!this.loginFailed) {
        this.$router.push({ path: "/dashboard" });
      }
    }
  },
  computed: {
    username: {
      get: function() {
        return this.$store.state.form.username;
      },
      set: function(input) {
        this.$store.commit("updateForm", { field: "username", input });
      }
    },
    password: {
      get: function() {
        return this.$store.state.form.password;
      },
      set: function(input) {
        this.$store.commit("updateForm", {field: "password", input});
      }
    }
  }
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Archivo');
@import url('https://fonts.googleapis.com/css?family=Montserrat|Varela+Round');

#title {
  font-size: 60px;
  font-weight: bold;
  color: white;
}

.nav_link {
  font-size: 30px;
  font-weight: @css { !important };
  color: white !important;

  &:hover {
    cursor: pointer;
  }
}

.home {
  background: url('../assets/hero_long.png') top center no-repeat;
  min-height: 650px;
  color: #433E3F;
}

#lead {
  font-size: 38px;
  font-weight: bold;
  text-align: left;
}

.invisible-md {
  min-height: 25px;
}

.invisible-lg {
  min-height: 50px;
}

#get_started {
  background-color: #ec7373;
  border-color: #ec7373;
  border-radius: 20px;
}

.num {
  font-size: 50px;
  font-weight: 900;
}

.step {
  font-size: 26px;
  font-weight: bold;
  min-width: 510px;
}

.footer {
  min-height: 100px;
  background-color: #ec7373;
}

.support_text {
  font-family: 'Montserrat', sans-serif !important;
}

.lead_text {
  font-family: 'Varela Round', sans-serif !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active in <2.1.8 */
  opacity: 0;
}

.vue-typer {
  @extend .support_text;
  width: 100%;
  text-align: center;
}
</style>
