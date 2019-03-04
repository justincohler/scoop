<template>

  <b-container class="home px-0" fluid>	
		<!-- Nav bar -->
		<b-navbar id="navbar" class="d-flex">
			<b-navbar-brand id="title" href="#" class="px-5 mr-auto lead_text">Scoop</b-navbar-brand>
			<b-nav-text class="nav_link px-5 support_text"><router-link tag="span" to="/login">Login</router-link></b-nav-text>
		</b-navbar>

		<b-row class="invisible-md"/>

		<transition name="bounce" mode="out-in">
			<router-view/>
		</transition>

		<b-row class="invisible-lg"/>
		<b-row class="invisible-lg"/>

		<descriptions/>

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
import descriptions from "@/components/descriptions.vue"

export default {
	name: "home",
	components: {
		'descriptions': descriptions
	},
	data () { 
		return {
			bannerSteps: [
				"This is a test",
				"This is another test",
				"This is a third test"
			],
			currentStepIdx: 0
		}
	},
	computed: {
		currentBannerStep: function() {
			return this.bannerSteps[this.currentStepIdx]
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

.vue-typer
	@extend .support_text
	width 100%
	text-align center
</style>
