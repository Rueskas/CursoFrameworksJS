<template src="./CreateArticle.html"></template>

<script>
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import ArticleModel from "../models/Article.js";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "CreateArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      url: Global.url,
      submitted: false,
      file: null,
      article: new ArticleModel("", "", null, "")
    };
  },
  validations: {
    article: {
      title: {
        required
      },
      content: {
        required
      }
    }
  },
  mounted() {
    //console.log(this.article);
  },
  methods: {
    save() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
          .then(res => {
            if (res.data.status == "Success") {
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                //Subida de archivo
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                axios
                  .post(
                    this.url + "upload-image/" + res.data.article._id,
                    formData
                  )
                  .then(res => {
                    if (res.data.status == "Success") {
                      swal(
                        "Articulo Creado",
                        "El articulo se ha creado correctamente.",
                        "success"
                      );
                      this.$router.push("/blog");
                    } else {
                      swal(
                        "Error",
                        "Ha habido algun problema durante la creacion",
                        "error"
                      );
                    }
                  })
                  .catch(error => {
                    swal(
                      "Error",
                      "Ha habido algun problema durante la creacion",
                      "error"
                    );
                    console.log(error);
                  });
              } else {
                swal(
                  "Articulo Creado",
                  "El articulo se ha creado correctamente.",
                  "success"
                );
                
                this.$router.push("/blog");
              }
            }
          })
          .catch(error => {
            swal(
              "Error",
              "Ha habido algun problema durante la creacion",
              "error"
            );
            console.log(error);
          });
      }
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    }
  }
};
</script>