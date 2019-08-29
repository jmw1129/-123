<template>
    <div class="cs">
        <h1>{{this.$store.state.a}}</h1>
    </div>
</template>


<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'    
export default{
    name:'Cs',
    computed: {
        ...mapState([
            'a'
        ])
    },
}    
</script>

<style>

</style>