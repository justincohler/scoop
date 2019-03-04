<template>
  <b-row style="min-height: 650px" id="submission_window" key="submission_window" align-v="center">
			<b-col cols="1"/>
			<b-col cols="4">	
				<b-card
    			style="max-width: 20rem; width: 40vw; min-width: 559px;"
    			class="mb-2 shadow-lg"
 				>

					<div class="my-4 lead_text" id="lead">
						Your optimized online ad campaign is just a few clicks away...	
					</div>

					<div class="border-bottom pb-4 mb-4 text-left support_text">
						Scoop takes your existing paper ad material, gives you feedback on it, and then 
						generates a complete, optimized marketing campaign across Facebook, Instagram, Google,
						and more.

					</div>
    			<b-form @submit="submitUser">

					<b-input 
							type="email" 
							id="textEmail" 
							placeholder="Enter email..."
							v-model="username"
							class="mb-4 support_text"
							required
							@click="$scrollTo('#submission_window', 500, {ease: 'ease-in'})"/>

    				<b-input 
							type="password" 
							id="textPassword" 
							aria-describedby="passwordHelpBlock"
							placeholder="Enter password..."
							v-model="password"
							class="mb-2 support_text"
							required
							@click="$scrollTo('#submission_window', 500, {ease: 'ease-in'})"/>
    				<b-form-text id="passwordHelpBlock" class="mb-4 support_text">
      				Your password must be 8-20 characters long, contain letters and numbers, and must not
      				contain spaces, special characters, or emoji.
    				</b-form-text>

						<b-button id="get_started" class="support_text" type="submit" v-ripple>Get started</b-button>

   				</b-form>

					<div style="font-size: 12px" class="pt-3 support_text">
						Try Scoop free for 14 days. No risk, and no credit card required.
					</div>

  			</b-card>
			</b-col>
			<b-col cols="1"/>
			<b-col cols="5" class="mx-5 text-left lead_text"> 

					<video controls loop width="600">
  						<source src="../assets/Scoop_promo_video.mp4" type="video/mp4"/>
  							Your browser does not support the video tag.
					</video>

			</b-col>
			<b-col cols="1"/>
		</b-row>
</template>

<script>
export default {
  name: "Hero",
  computed: {
	  	username: {
			get: function() {
				return this.$store.state.form.username
			},
			set: function(input) {
				this.$store.commit('updateForm', 'username', input)
			}
		},
		password: {
			get: function() {
				return this.$store.state.form.password
			},
			set: function(input) {
				this.$store.commit('updateForm', 'password', input)
			}
		}
  },
  methods: {
		submitUser(evt) {
			evt.preventDefault()
			this.submitted = true
			this.$router.push({path: "/signup"})
		},
		updateBanner(typedString) {
			this.currentStepIdx = (this.currentStepIdx+1) % 3
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
