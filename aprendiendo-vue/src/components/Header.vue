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
                <li><a href="index.html">Inicio</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="form.html">Formulario</a></li>
                <li><a href="#">Pagina 1</a></li>
                <li><a href="#">Pagina 2</a></li>
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