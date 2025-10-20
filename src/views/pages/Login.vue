<template>
  <div 
    class="c-app"
    style="height: 100vh; display: flex; align-items: center; justify-content: center; position: relative;"
  >


    <CContainer>
    </CContainer>
  </div>
</template>

<script>

  import Swal from "sweetalert2"
  import {signIn} from '../../assets/js/methods/functions.js'

  export default {
    name: 'Login',
    data () {
      return {
        prefix: "login",
        data: {
          username: "",
          password: "",
        },
        loading: false,
      }
    },
    methods: {
      async signIn(){
        
        this.loading = true;
        
        try {
        
          const url = this.$store.state.url;
          const response = await signIn(url + this.prefix, this.data);
                              
          if (response.status === 200) {
                        
            let data = response?.data;

            if(data.flag){
              
              sessionStorage.setItem('id', data.data?.id);
              sessionStorage.setItem('username', data.data?.username);
              sessionStorage.setItem('name', data.data?.name);
              sessionStorage.setItem('email', data.data?.email);
              sessionStorage.setItem('role_id', data.data?.role_id);
              sessionStorage.setItem('slug_role', data.data?.role?.slug);
              sessionStorage.setItem('role', data.data?.role?.name);
              sessionStorage.setItem('phone', data.data?.phone);

              this.$router.push({ 
                name: 'Perfil', 
              });

            } else {
              
              Swal.fire("Alerta", data.message, "warning");

            }

          }

        } catch (errors) {
          
          if (errors.length > 0) {
            Swal.fire("Alerta", errors[0], "warning");
          } else {
            Swal.fire("Alerta", "Ocurrió un error desconocido", "error");
          }

        } finally {

          this.loading = false;
        
        }

      },
    }
  }

</script>

<style src="spinkit/spinkit.min.css"></style>
