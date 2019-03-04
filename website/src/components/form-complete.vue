<template>
    <div>
        <div class="border-bottom pb-4 mb-4 text-center lead_text">
            You're done!
	    </div>  

        <div class="border-bottom pb-4 mb-4 text-center support_text">
            A Scoop consultant will reach out to you once we have set up your complete online marketing campaign. In the meantime,
            feel free to login <router-link to="/login">here</router-link> to view the advertisements in your campaign.
	    </div> 

    </div>
</template>

<script>
import axios from 'axios'
var card = undefined

export default {
  name: "General Information",
  mounted: function() {
  },
  methods: {
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