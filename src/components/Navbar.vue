<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div v-if="!smallWindow">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="house"/>
            Home
          </router-link>
        </li>
      </div>
    </div>
    <div v-else>
      <sliding-panel-left><profile-vue></profile-vue></sliding-panel-left>
    </div>

    <div v-if="!currentUser" class="navbar-nav ml-auto" style="margin-left: auto">
      <li class="nav-item">
        <label @click="showRegisterDialog" class="nav-link">
          <font-awesome-icon icon="sign-in-alt"/>
          Sign In
        </label>
      </li>
      <li class="nav-item">
        <label @click="showLoginDialog" class="nav-link">
          <font-awesome-icon icon="sign-in-alt"/>
          Login
        </label>
      </li>
    </div>

    <panda-dialog
        v-model:show="logInDialogVisible">
      <log-in-form
          @hide="showLoginDialog"
      ></log-in-form>
    </panda-dialog>

    <panda-dialog
        v-model:show="registerDialogVisible">
      <register-form
          @hide="showRegisterDialog"
      ></register-form>
    </panda-dialog>

    <div v-if="currentUser" class="navbar-nav ml-auto" style="margin-left: auto">
      <li class="nav-item">
        <router-link to="/profile" class="nav-link">
          <font-awesome-icon icon="user"/>
          {{ currentUser.username }}
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="logOut">
          <font-awesome-icon icon="sign-out-alt"/>
          LogOut
        </a>
      </li>
    </div>
  </nav>
</template>

<script>
import PandaDialog from "@/components/UI/PDialog";
import LoginForm from "@/components/auth/LogInForm";
import RegisterForm from "@/components/auth/RegisterForm";
import SlidingPanelLeft from "@/components/slides/SlidingPanelLeft";
import ProfileVue from "@/components/ProfileVue";

export default {
  name: "MainVue",
  components: {ProfileVue, SlidingPanelLeft, RegisterForm, LogInForm: LoginForm, PandaDialog},

  data() {
    return {
      logInDialogVisible: false,
      registerDialogVisible: false,
      smallWindow: false
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  methods: {
    showLoginDialog() {
      this.logInDialogVisible = !this.logInDialogVisible;
    },
    showRegisterDialog() {
      this.registerDialogVisible = !this.registerDialogVisible;
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
    onResize() {
      this.smallWindow = window.innerWidth <= 800;
    },
  }
}
</script>
export default {

}
<style scoped>

.hello-image{
  max-height: 40px;
}

nav-item-home{
  margin-left: 100px;
}

.navbar {
  height: 50px;
  min-width: 600px;
  background-color: bisque;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

</style>