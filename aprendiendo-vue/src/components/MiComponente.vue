<template>
    <div id="micomponente">
        <hr/>
        <h1>Este es mi compontent</h1>
        <h2>{{subtitle}}</h2>
    </div>
</template>

<script>
export default {
    name: 'MiComponente',
    data(){
        return {
            subtitle: "Soy el subtitulo"
        }
    }
}
</script>