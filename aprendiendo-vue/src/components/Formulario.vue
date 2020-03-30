<template>
  <div id="general">
    <div class="center">
      <section id="content"> <h1 class="subheader">Formulario</h1>
            <form action="" class="mid-form" @submit.prevent="mostrarUsuario">
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" name="nombre" v-model="user.nombre">

                    <div v-if="this.submitted && !$v.user.nombre.required">
                      Este campo es obligatorio
                    </div>
                </div>

                <div class="form-group">
                    <label for="surname">Apellidos</label>
                    <input type="text" name="nombre" v-model="user.apellidos">
                
                    <div v-if="this.submitted && !$v.user.apellidos.required">
                      Este campo es obligatorio
                    </div>
                </div>

                <div class="form-group">
                    <label for="bio">Biografía</label>
                    <textarea name="nombre" v-model="user.bio"></textarea>
                
                    <div v-if="this.submitted && !$v.user.bio.required">
                      Este campo es obligatorio
                    </div>
                </div>

                <div class="form-group radiobuttons">
                    <input type="radio" name="gender" value="man" v-model="user.genero"/>Hombre
                    <input type="radio" name="gender" value="woman" v-model="user.genero"/>Mujer
                    <input type="radio" name="gender" value="other" v-model="user.genero" checked/>Otro
                </div>
                <div class="clearfix"></div>

                <input type="submit" value="Enviar" class="btn btn-success">
            </form>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import { required, minLength} from 'vuelidate/lib/validators';

export default {
  name: "Formulario",
  components: {
    Sidebar
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellidos: {
        required,
        minLength: minLength(2)
      },
      bio: {
        required,
        minLength: minLength(10)
      }
    }
  },
  data(){
    return {
      submitted: false,
      user: {
        nombre: '',
        apellidos: '',
        bio: '',
        genero:''
      }
    }
  },
  methods: {
    mostrarUsuario(){
      this.submitted = true;
      console.log(this.user);

      this.$v.$touch();
      if(this.$v.$invalid){
        return false;
      }

      alert("valido");
    }
  }
};
</script>