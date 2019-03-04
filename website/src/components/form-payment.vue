<template>
  <div>
    <div class="border-bottom pb-4 mb-4 text-left support_text">
      You're almost there! All that's left is setting up payment. We promise we won't charge you unless
      we are producing results. (And of course, we will never charge you more than your set budget.)
    </div>

    <b-input-group prepend="$" class="mb-4 input_field support_text">
      <b-input
        type="text"
        placeholder="Enter budget..."
        v-model="budget"
        required
        class="support_text input_field_no_border"
      />
    </b-input-group>

    <b-input
      type="text"
      placeholder="Full Name"
      v-model="name"
      required
      class="mb-4 support_text input_field"
    />

    <div style="display:flex" class="mb-5">
      <b-input type="text" placeholder="City" class="support_text input_field px-0 mx-1" required/>

      <b-input
        type="text"
        placeholder="State"
        class="support_text input_field px-0 mx-1"
        style="width: 50%"
        required
      />

      <b-input
        type="number"
        placeholder="ZIP"
        class="support_text input_field px-0 mx-1"
        style="width: 50%"
        required
      />
    </div>

    <!-- <div ref="card" class="my-4" @change="stripeErrorCheck($event)"/> -->
    <b-button id="get_started" class="support_text mr-3" @click="prevStep" v-ripple>Back</b-button>
    <b-button id="get_started" class="support_text" @click="submit" v-ripple>Complete</b-button>
  </div>
</template>

<script>
import axios from "axios";
var card = undefined;

export default {
  name: "General Information",
  mounted: function() {
    /*
    if (window.Stripe === undefined) {
      alert("Stripe V3 library is not loaded!");
    } else {
      const stripe = window.Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
      this.stripe = stripe;
    }

    const elements = this.stripe.elements();
    card = elements.create("card");

    card.mount(this.$refs.card);
    */
  },
  methods: {
    submit: async function(evt) {
      /*
      const { token, error } = await this.stripe.createToken(card);
      if (error) {
        const errorElement = document.getElementById("card-errors");
        errorElement.textContent = error.message;
      }
      */
      let form = this.$store.state.form;

      let res = await axios.post("http://localhost:3000/submit_user", {
        form
        // token
      });

      this.$router.push({ path: "/signup/payment" });
    },
    prevStep: function(evt) {
      this.$emit("nextStep", 1);
      this.$router.push({ path: "/signup/setup" });
    },
    stripeErrorCheck: function(evt) {
      var displayError = document.getElementById("card-errors");
      if (evt.error) {
        displayError.textContent = evt.error.message;
      } else {
        displayError.textContent = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.input_field_no_border {
  border: none;

  &:hover {
    box-shadow: none;
  }

  &:focus {
    box-shadow: none;
    border-color: #EC7373;
  }
}

.input_field {
  border: none;
  border-radius: 0px;
  border-bottom: thin solid #b1b1b1;

  &:hover {
    box-shadow: none;
  }

  &:focus {
    box-shadow: none;
    border-color: #EC7373;
  }
}

.input-group-text {
  color: #495057;
  background-color: white;
  border: none;
  padding-right: 2px;
}
</style>