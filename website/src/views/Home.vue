<template>
  <b-container class="home px-0" fluid>
		
		<!-- Nav bar -->
		<b-navbar id="navbar" class="py-3">
			<b-navbar-brand id="title" href="#" class="float-left ml-5 font-italic">Scoop</b-navbar-brand>
		</b-navbar>
	<b-row>
		<b-col>
		<b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000; z-index:0"
    fade
		interval="5"
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
			<b-container class="home px-0" fluid>
					<b-row>
						<b-col cols="1"/>
						<b-col>
							<b-card
    						title="Card Title"
    						img-src="https://picsum.photos/600/300/?image=25"
    						img-alt="Image"
    						img-top
    						tag="article"
    						style="max-width: 20rem; z-index: 1;"
    						class="mb-2"
  						>
   	 						<b-card-text>
      						Some quick example text to build on the card title and make up the bulk of the card's content.
    						</b-card-text>

    						<b-button href="#" variant="primary">Go somewhere</b-button>
  						</b-card>
						</b-col>
					</b-row>
			</b-container>
		</b-carousel>


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
#navbar
	background-color #ff5757
#title
	font-size 32px
	color white
</style>
