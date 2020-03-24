<template>
    <header id="header">
        <div class="center">
            <div id="logo">
                <img src="../assets/images/logo.png" alt="logo" class="app-logo">
                <span id="brand">
                    <strong>Curso</strong>Vue
                </span>
            </div>
            
        <nav id="menu">
            <ul>
                <li><router-link to="/home" active-class="active">Inicio</router-link></li>
                <li><router-link to="/blog" active-class="active">Blog</router-link></li>
                <li><router-link to="/formulario"  active-class="active">Form</router-link></li>
                <li><router-link to="/mi-componente" active-class="active">Pagina 1</router-link></li>
                <li><router-link to="Peliculas"  active-class="active">Peliculas</router-link></li>
                
            </ul>
        </nav>

        <!-- LIMPIAR FLOTANTES -->
        <div class="clearfix"></div>
        </div>

    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>