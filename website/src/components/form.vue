<template>
  <b-row style="min-height: 650px" id="submission_window" key="submission_window" align-v="center" align-h="center">
			<b-col cols="5">	
				<b-card
    			style="max-width: 20rem; width: 40vw; min-width: 559px;"
    			class="mb-2 shadow-lg"
 				>
					
					<!--<v-stepper :steps="steps" v-model="step"></v-stepper>-->
					<b-list-group horizontal class="support_text">
    					<b-list-group-item class="flex-fill border-0" >
							<font-awesome-icon v-if="visited[0]" icon="check-circle" size="lg" color="#ec7373" class="mr-2"/>
							<font-awesome-icon v-else icon="question-circle" size="lg" color="#7A7265" class="mr-2"/>
							<span :class="[ stage==0 ? activeClass : '' ]">General Information</span>
						</b-list-group-item>
    					<b-list-group-item class="flex-fill border-0">
							<font-awesome-icon v-if="visited[1]" icon="check-circle" size="lg" color="#ec7373" class="mr-2"/>
							<font-awesome-icon v-else icon="question-circle" size="lg" color="#7A7265" class="mr-2"/>
							<span :class="[ stage==1 ? activeClass : '']">Setup</span>
						</b-list-group-item>
   						<b-list-group-item class="flex-fill border-0">
							<font-awesome-icon v-if="visited[2]" icon="check-circle" size="lg" color="#ec7373" class="mr-2"/>
							<font-awesome-icon v-else icon="question-circle" size="lg" color="#7A7265" class="mr-2"/>
							<span :class="[ stage==2 ? activeClass : '' ]">Payment</span>   
						</b-list-group-item>
  					</b-list-group>

					<router-view @nextStep="updateStep" style="z-index: -1"></router-view>


  			</b-card>
			</b-col>

		</b-row>
</template>

<script>
export default {
  name: "Form",
  data() {
	  return {
		  stage: 0,
		  activeClass: "active",
		  visited: [false, false, false]
	  }
  },
  methods: {
	  updateStep: function (nextStep) {
		  if (nextStep > this.stage) {
			  this.visited[this.stage] = true
		  }
		  this.stage = nextStep
	  }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.support_text
	font-family 'Montserrat', sans-serif !important
.lead_text 
	font-family 'Varela Round', sans-serif !important
.active
	font-weight bold

</style>

