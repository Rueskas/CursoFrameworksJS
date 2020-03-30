<template>
    <h1>Buscando...</h1>
</template>

<script>
export default {
    name:"Redirect",
    mounted(){
        this.$router.push("/buscador/" + this.$route.params.search);
    }
}
</script>