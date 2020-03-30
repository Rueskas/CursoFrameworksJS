<template src="./CreateArticle.html"></template>

<script>
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import ArticleModel from "../models/Article.js";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      url: Global.url,
      submitted: false,
      isEdit: true,
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
      this.getArticle(this.$route.params.id);
  },
  methods: {
    getArticle(id) {
      axios.get(this.url + "article/" + id).then(res => {
        if (res.data.status == "Success") {
          this.article = res.data.article;
        }
      });
    },
    save() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/" + this.$route.params.id, this.article)
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
                        "Articulo Editado",
                        "El articulo se ha editado correctamente.",
                        "success"
                      );
                      this.$router.push("/articulo/" +  + res.data.status.article._id);
                    } else {
                      swal(
                        "Error",
                        "Ha habido algun problema durante la edicion",
                        "error"
                      );
                    }
                  })
                  .catch(error => {
                    swal(
                      "Error",
                      "Ha habido algun problema durante la edicion",
                      "error"
                    );
                    console.log(error);
                  });
              } else {
                swal(
                  "Articulo Editado",
                  "El articulo se ha editado correctamente.",
                  "success"
                );

                this.$router.push("/articulo/" + res.data.article._id);
              }
            }
          })
          .catch(error => {
            swal(
              "Error",
              "Ha habido algun problema durante la edicion",
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