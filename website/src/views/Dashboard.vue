<template>

  <b-container class="home px-0" fluid>	
		<!-- Nav bar -->
		<b-navbar id="navbar" class="d-flex">
			<b-navbar-brand id="title" href="#" class="px-5 mr-auto lead_text">Scoop</b-navbar-brand>
			<b-nav-text class="nav_link px-5 support_text"><router-link tag="span" to="/">Login</router-link></b-nav-text>
		</b-navbar>

        <b-row align-h="center">
            <b-col cols="12" style="background: white; min-height:650px">
                <ul class="list-unstyled m-4">
                    <b-media v-for="ad in ads" tag="li" class="mb-5 border-bottom">
                        <b-img rounded slot="aside" :src="ad.image" width="64" height="64" alt="placeholder" />

                        <h5 class="mt-0 mb-1 text-left"> {{ ad.name }}</h5>
                        <p class="mb-0 text-left">
                            {{ ad.description }}

                        <b-container fluid class="my-4">
                            <b-row>
                                <b-col cols="6">
                                <div class="ml-4 text-left">
                                    Traffic generated: {{ ad.metrics.genTraffic }} views + clicks
                                    <div class="ml-2">
                                        Facebook: {{ ad.metrics.fbTrafficViews }} views + {{ ad.metrics.fbTrafficClicks }} clicks
                                    </div>
                                    <div class="ml-2">
                                        Instagram: {{ ad.metrics.igTrafficViews }} views + {{ ad.metrics.igTrafficClicks }} clicks
                                    </div>

                                </div>
                                </b-col>

                                <b-col cols="6">
                                <div class="ml-4 text-left">
                                    Traffic generated: {{ ad.metrics.genTraffic }} views
                                    <div class="ml-2">
                                        Facebook: {{ ad.metrics.fbTraffic }} views
                                    </div>
                                    <div class="ml-2">
                                        Instagram: {{ ad.metrics.igTraffic }} views
                                    </div>

                                </div>
                                </b-col>
                            </b-row>
                            <b-row align-h="center" class="mt-4">
                                <b-col cols="6" class="text-center">
                                    Budget: $50 out of $200 used (14 days left)
                                </b-col>
                            </b-row>

                        </b-container>

                        </p>
                    </b-media>

                </ul>
            </b-col>
        </b-row>
		<b-row class="invisible-lg"/>
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
import axios from 'axios'
export default {
	name: "home",
    data() {
        return {
            ads: [
            {
                name: "Fresh Parfait",
                image: "http://www.californiastrawberries.com/wp-content/uploads/2017/05/Strawberry-Breakfast-Parfait-1.jpg",
                description: `We found this ad to be very helpful with generating traffic on Facebook. Specifically, it appealed 
                              to middle-aged mothers with an interest in organic food.`,
                metrics: {
                    genTraffic: 500,
                    igTrafficViews: 200,
                    igTrafficClicks: 50,
                    fbTrafficViews: 225,
                    fbTrafficViews: 25
                }
            },
            {
                name: "Crepe",
                image: "https://www.handletheheat.com/wp-content/uploads/2014/02/Homemade-Crepes-01-Square-550x550.jpg",
                description: `We found this ad to be very helpful with generating traffic on Instagram. Specifically it appealed
                              to college-aged students between the hours of 8PM and midnight.`,
                metrics: {
                    genTraffic: 500,
                    igTrafficViews: 200,
                    igTrafficClicks: 50,
                    fbTrafficViews: 225,
                    fbTrafficViews: 25
                }
            }
        ]
        }
    },
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
	async mounted() {
        /*
        let res = undefined
        try {
                res = await axios({
                    method: "post",
                    url: "http://localhost:3000/login_user",
                    data: { "username": this.username, "password": this.password},
                    config: { headers: { "Content-Type": "application/json" } }
                });
                this.ads = res.data.ads
            } catch (e) {
                console.log(e)
        }
        */
    },
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
