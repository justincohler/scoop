<template>
    <div>
    <div class="border-bottom pb-4 mb-4 text-left support_text">
		Now that that is out of the way, we just need a few more things to begin automating advertisements for you. Let's start 
        with 1-3 advertisements, a link to your website or Yelp, and a short description of your customers.
	</div>  


    <b-form @submit="nextStep">
    <b-form-file
            type="text" 
            placeholder="Choose file(s)..."
            drop-placeholder="Drop file here..."
            v-model="ad1"
            :value="ad1"
            required
            ref="ad1Ref"
            class="mb-4 support_text input_field"
            />

    <b-form-file
            type="text" 
            placeholder="Choose file(s)..."
            drop-placeholder="Drop file here..."
            v-model="ad2"
            :value="ad2"
            class="mb-4 support_text input_field"
            />

    <b-form-file
            type="text" 
            placeholder="Choose file(s)..."
            drop-placeholder="Drop file here..."
            v-model="ad3"
            :value="ad3"
            class="mb-4 support_text input_field"
            />

    <b-input 
            type="text" 
            placeholder="Enter website or yelp link"
            v-model="link1"
            :value="link1"
            required
            class="mb-4 support_text input_field"
            />

    <b-input 
            type="text" 
            placeholder="Enter website or yelp link (optional)"
            v-model="link2"
            :value="link2"
            class="mb-4 support_text input_field"
            />

    <b-form-textarea
            placeholder="Please describe your customers in a couple sentences..."
            v-model="customerDescription"
            rows="3" max-rows="6"
            class="mb-4 support_text text_field"
            required
            />

    <!-- add section on building brand awareness or leads -->

    <b-button id="get_started" class="support_text mr-3" @click="prevStep" v-ripple>Back</b-button>
    <b-button id="get_started" class="support_text" type="submit" v-ripple>Next</b-button>
    </b-form>
    </div>
</template>

<script>
export default {
  name: "General Information",
  methods: {
      nextStep: function(evt) {
        evt.preventDefault()
        this.$emit('nextStep', 2)
		this.$router.push({path: "/signup/payment"})
      },
      prevStep: function(evt) {
          this.$emit('nextStep', 0)
          this.$router.push({path: "/signup"})
      },
      uploadedFile: function(evt) {
          evt.preventDefault()
      }
  },
  computed: {
        ad1: {
			get: function() {
                return this.$store.state.form.ads["1"]
			},
			set: function(input) {
				this.$store.commit('updateAds', { "adNum": 1, file: input})
			}
		},
        ad2: {
			get: function() {
				return this.$store.state.form.ads[1]
			},
			set: function(input) {
				this.$store.commit('updateAds', { "adNum": 2, file: input})
			}
		},
        ad3: {
			get: function() {
				return this.$store.state.form.ads[2]
			},
			set: function(input) {
				this.$store.commit('updateAds', { "adNum": 3, file: input})
			}
		},
        link1: {
			get: function() {
				return this.$store.state.form.link1
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'link1', input})
			}
		},
        link2: {
			get: function() {
				return this.$store.state.form.link2
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'link2', input})
			}
		},
        customerDescription: {
			get: function() {
				return this.$store.state.form.customerDescription
			},
			set: function(input) {
				this.$store.commit('updateForm', {field: 'customerDescription',input})
			}
		}

  },
  mounted: function() {
      //this.$refs.ad1Ref.$emit('input')
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
</style>