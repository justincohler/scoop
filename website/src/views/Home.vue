<template>

  <b-container class="home px-0" fluid>	
		<!-- Nav bar -->
		<b-navbar id="navbar" class="d-flex">
			<b-navbar-brand id="title" href="#" class="px-5 mr-auto lead_text">Scoop</b-navbar-brand>
			<!--<b-nav-text class="nav_link px-5 support_text"><router-link tag="span" to="/">Login</router-link></b-nav-text>-->
		</b-navbar>

		<b-row class="invisible-md"/>

		<transition name="bounce" mode="out-in">
		<b-row v-if="!submitted" style="min-height: 650px" id="submission_window" key="submission_window">
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
							v-model="form.username"
							class="mb-4 support_text"
							@click="$scrollTo('#submission_window', 500, {ease: 'ease-in'})"/>

    				<b-input 
							type="password" 
							id="textPassword" 
							aria-describedby="passwordHelpBlock"
							placeholder="Enter password..."
							v-model="form.password"
							class="mb-2 support_text"
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
					<div class="invisible-lg"/>

					<div class="step pb-3">
						<span class="num"> 1. </span>
						Submit pictures of your paper ads.
					</div>
					<div class="step pb-3">
						<span class="num"> 2. </span>
						Tell us a little about your typical customer.
						(Nothing too complicated. We promise.)
					</div>
					<div class="step pb-3">
						<span class="num"> 3. </span>
						Set your budget.			
					</div>
					<div class="step pb-3">
						<span class="num"> 4. </span>
						Sit back and let us handle the rest!						
					</div>

			</b-col>
			<b-col cols="1"/>
		</b-row>

		<b-row v-else style="min-height: 650px" align-v="center" align-h="center" id="submitted_window" key="submitted_window">
			<b-col align-self="center" cols="3">
					<b-card
    				style="max-width: 20rem;"
    				class="mb-2 border-0"
  				>

						<b-card-title class="lead_text">Thank you!</b-card-title>

    				<b-card-text class="support_text">
							One of our marketing consultants will reach out to you shortly for a free consultation. In the meantime,
							if you have any questions please feel free to email us at consultations@scoop.io.
						</b-card-text>
				  </b-card>

			</b-col>
		</b-row>
		</transition>

		<b-row class="invisible-lg"/>
		<b-row class="invisible-lg"/>

		<b-row align-h="center">
			<b-col cols="3">
					<b-card
    				style="max-width: 20rem;"
    				class="mb-2 border-0"
  				>

						<b-card-title><font-awesome-icon icon="seedling" size="lg" color="#ec7373"/></b-card-title>

    				<b-card-text>
										We help <strong>small businesses</strong> like you develop a complete online web presence.
										From buildinng <strong>brand awareness</strong> to generating <strong>conversions</strong>,
										we have you covered.
    				</b-card-text>
				  </b-card>

				
			</b-col>
			<b-col cols="3">
					<b-card
    				style="max-width: 20rem;"
    				class="mb-2 border-0"
  				>
    				<b-card-title><font-awesome-icon icon="users" size="lg" color="#ec7373"/></b-card-title>

						<b-card-text>
										Pulling data from sources such a <strong>diverse</strong> array of sources, we 
										generate <strong>custom user segments</strong>. Our marketing engine will help advertise
										to your current customers and <strong>predicted</strong> potential new customers.
						</b-card-text>
				  </b-card>

			</b-col>
			<b-col cols="3">
					<b-card
    				style="max-width: 20rem;"
    				class="mb-2 border-0"
  				>
					<b-card-title><font-awesome-icon icon="chart-line" size="lg" color="#ec7373"/></b-card-title>

    				<b-card-text>
										Since our platform is <strong>80%</strong> automated with <strong>artificial intelligence</strong>,
										we are able to provide <strong>cut-rate</strong> fees for our services, helping cash-strapped
										small businesses such as yourself <strong>make more with less</strong>.
						</b-card-text>
				  </b-card>
			</b-col>

		</b-row>

		<b-row class="invisible-lg"/>

		<b-row class="footer" align-h="center" align-v="center">
			<b-col class="support_text" style="color:white">
				© 2019 Scoop. All Rights Reserved
			</b-col>
		</b-row>


	</b-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
	data () { 
		return {
			submitted: false,
			form: {
				username: null,
				password: null
			}
		}
	},
	methods: {
		submitUser(evt) {
			evt.preventDefault()
			//this.$scrollTo("submitted_window")
			this.submitted = true
			// Add code to submit username, login to server
			//alert(JSON.stringify(this.form))
		}
	}
}
</script>

<style lang="stylus">

@import url("https://fonts.googleapis.com/css?family=Archivo")
@import url("https://fonts.googleapis.com/css?family=Montserrat|Varela+Round")


#title
	font-size 60px
	font-weight bold
	color white
.nav_link
	font-size 30px 
	font-weight !important
	color white !important
	&:hover
		cursor pointer
.home
	background url("../assets/hero_long.png") top center no-repeat
	min-height 650px
	color #433E3F
#lead
	font-size 38px
	font-weight bold
	text-align left
	font-family ''
.invisible-md
	min-height 25px
.invisible-lg
	min-height 50px
#get_started
	background-color #ec7373
	border-color #ec7373
	border-radius 20px
.num
	font-size 50px
	font-weight 900
.step
	font-size 26px
	font-weight bold
	min-width 510px

.footer
	min-height 100px
	background-color #ec7373

.support_text
	font-family 'Montserrat', sans-serif !important
.lead_text 
	font-family 'Varela Round', sans-serif !important

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>
