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
                    <b-media tag="li">
                        <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder" />

                        <h5 class="mt-0 mb-1 text-left">List-based media object</h5>
                        <p class="mb-0 text-left">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
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

export default {
	name: "home",
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
        try {
                let res = await axios({
                    method: "post",
                    url: "http://localhost:3000/login_user",
                    data: { "username": this.username, "password": this.password},
                    config: { headers: { "Content-Type": "application/json" } }
                });
            } catch (e) {
                console.log(e)
        }
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
