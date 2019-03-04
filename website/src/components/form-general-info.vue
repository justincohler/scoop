<template>
    <div>
    <div class="border-bottom pb-4 mb-4 text-left support_text">
		We are excited that you have decided to take your first steps towards automating your online advertising. We are thankful
        to have the opportunity to come along for the ride. In order to build a marketing profile for you, we need some general 
        information about your small business.
	</div>  
    
    <b-form @submit="nextStep">
        <b-form-input 
                type="text" 
                placeholder="Company Name"
                v-model="companyName"
                class="mb-4 support_text input_field"
                required
                />

        <b-form-input 
                type="text" 
                placeholder="Address"
                v-model="address"
                class="mb-4 support_text input_field"
                required
                />

        <div style="display:flex" class="mb-4">
            <b-input 
                    type="text" 
                    placeholder="City"
                    v-model="city"
                    :value="city"
                    class="support_text input_field px-0 mx-1"
                    required
                    />

            <b-input 
                    type="text" 
                    placeholder="State"
                    v-model="state"
                    :value="state"
                    class="support_text input_field px-0 mx-1"
                    style="width: 50%"
                    required
                    />

            <b-input 
                    type="number" 
                    placeholder="ZIP"
                    v-model="zipCode"
                    class="support_text input_field px-0 mx-1"
                    style="width: 50%"
                    required
                    />
        </div>

        <b-form-select
                type="text" 
                v-model="industry"
                :options="industryOptions"
                class="mb-4 support_text input_field"
                style="color:#788188 !important"
                required
                />

        <b-form-textarea
                placeholder="Please describe your business in a couple sentences"
                v-model="businessDescription"
                rows="3" max-rows="6"
                class="mb-4 support_text text_field"
                required
                />

        <b-button id="get_started" class="support_text" type="submit" v-ripple>Next</b-button>
    </b-form>

    </div>
</template>

<script>
export default {
  name: "GeneralInformation",
  data() {
      return {
          industryOptions: [
              {value: null, text: "Please select an industry"},
              {value: "retail,clothing", text: "Retail -- Clothing"},
              {value: "retail,other", text: "Retail -- Other"},
              {value: "services,food", text: "Services -- Food"},
              {value: "services,other", text: "Services -- Other"}
          ]
      }
  },
  computed: {
        companyName: {
			get: function() {
                console.log("hi")
                console.log(this.$store.state.form.companyName)
				return this.$store.state.form.companyName
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'companyName', input })
			}
		},
        address: {
			get: function() {
				return this.$store.state.form.address
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'address', input})
			}
		},
        city: {
			get: function() {
				return this.$store.state.form.city
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'city', input})
			}
		},
        state: {
			get: function() {
				return this.$store.state.form.state
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'state', input})
			}
		},
        zipCode: {
			get: function() {
				return this.$store.state.form.zipCode
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'zipCode', input})
			}
		},
        industry: {
			get: function() {
				return this.$store.state.form.industry
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'industry',input})
			}
		},
        businessDescription: {
			get: function() {
				return this.$store.state.form.businessDescription
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'businessDescription',input})
			}
		}
  },
  methods: {
      nextStep: function(evt) {
        evt.preventDefault()
        this.$emit('nextStep', 1)
		this.$router.push({path: "/signup/setup"})
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.input_field
    border none
    border-radius 0px
    border-bottom thin solid #b1b1b1
    &:hover
        box-shadow none
    &:focus
        box-shadow none
        border-color #EC7373

.text_field
    border thin solid #b1b1b1
    &:hover
        box-shadow none
    &:focus
        box-shadow none
        border-color #EC7373
</style>