<template>

  <b-container class="home px-0" fluid>	
		<!-- Nav bar -->
		<b-navbar id="navbar" class="d-flex">
			<b-navbar-brand id="title" href="#" class="px-5 mr-auto">Scoop</b-navbar-brand>
			<b-nav-text class="nav_link px-5"><router-link tag="span" id="nav_link" to="/">Login</router-link></b-nav-text>
		</b-navbar>

		<b-row class="invisible-md"/>

		<b-row>
			<b-col cols="1"/>
			<b-col cols="4">	
				<b-card
    			style="max-width: 20rem; width: 40vw; min-width: 559px;"
    			class="mb-2 shadow-lg"
 				>

					<div class="my-4" id="lead">
						Your optimized online ad campaign is just a few clicks away...	
					</div>

					<div class="border-bottom pb-4 mb-4 text-left">
						Scoop takes your existing paper ad material, gives you feedback on it, and then 
						generates a complete, optimized marketing campaign across Facebook, Instagram, Google,
						and more.

					</div>
    			<b-form  @submit.prevent>

						<b-input 
							type="email" 
							id="textEmail" 
							placeholder="Enter email..."
							class="mb-4"/>

    				<b-input 
							type="password" 
							id="textPassword" 
							aria-describedby="passwordHelpBlock"
							placeholder="Enter password..."
							class="mb-2"/>
    				<b-form-text id="passwordHelpBlock" class="mb-4">
      				Your password must be 8-20 characters long, contain letters and numbers, and must not
      				contain spaces, special characters, or emoji.
    				</b-form-text>

						<b-button id="get_started" type="submit" v-ripple>Get started</b-button>

   				</b-form>

					<div style="font-size: 12px" class="pt-3">
						Try Scoop free for 14 days. No risk, and no credit card required.
					</div>

  			</b-card>
			</b-col>
			<b-col cols="1"/>
			<b-col cols="5 mx-5 text-left">
					<div class="invisible-lg"/>

					<div class="step pb-3" style="color: white">
						<span class="num"> 1. </span>
						Submit pictures of your paper ads.
					</div>
					<div class="step pb-3" style="color: white">
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

		<b-row class="invisible-lg"/>
		<b-row class="invisible-lg"/>

		<b-row align-h="center">
			<b-col cols="3">
				
				hi
			</b-col>
			<b-col cols="3">
				hi
			</b-col>
			<b-col cols="3">
				hi
			</b-col>

		</b-row>


	</b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="stylus">

@import url("https://fonts.googleapis.com/css?family=Archivo")
@import url("https://fonts.googleapis.com/css?family=Varela+Round")


#title
	font-size 60px
	font-weight bold
	color white
.nav_link
	font-size 40px 
	font-weight normal !important
	color white !important
	&:hover
		cursor pointer
.home
	background url("../assets/hero_long.png") top center no-repeat
	min-height 650px
	font-family 'Varela Round', sans-serif
	color #433E3F
#lead
	font-size 38px
	font-weight bold
	text-align left
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
</style>
