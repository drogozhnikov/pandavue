<template>
  <div class="btn_wrapper">
    <p-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createAccount"
    >
      <strong>Создать</strong>
    </p-button>
    <p-button
        style="align-self: flex-end; margin-top: 15px"
        @click="close"
    >
      <strong>Закрыть</strong>
    </p-button>
    <p-button
        style="align-self: flex-end; margin-top: 15px"
        @click="clear"
    >
      <strong>Очистить</strong>
    </p-button>
  </div>
  <form @submit.prevent>
    <div class="wrapper">
      <p-input
          v-model.trim="account.name"
          v-focus
          type="text"
          placeholder="Название:"
          maxlength="20"
      />

      <p-input
          v-model.trim="account.mail"
          type="text"
          placeholder="Почта:"
          maxlength="40"
      />

      <p-input
          v-model.trim="account.password"
          type="text"
          placeholder="Пароль:"
          maxlength="30"
      />

      <panda-button @click="generatePassword">
        generate
      </panda-button>

      <p-input
          v-model.trim="account.account"
          type="text"
          placeholder="Аккаунт:"
          maxlength="40"
      />

      <p-input
          v-model.trim="account.link"
          type="text"
          placeholder="Ссылка:"
          maxlength="100"
      />
      <p-input
          v-model.trim="account.owner"
          type="text"
          placeholder="Владелец:"
          disabled="true"
      />
      <panda-select
          v-model="selectedSort"
          :options="options">
        Type:
      </panda-select>
    </div>

  </form>
  <div class="description">
    <p-input
        v-model.trim="account.description"
        type="text"
        placeholder="Описание:"
        maxlength="200"
    />
  </div>

</template>

<script>
import PInput from "@/components/UI/PInput";
import PButton from "@/components/UI/PButton";
import PandaButton from "@/components/UI/PButton";
import PandaSelect from "@/components/UI/PSelect";
import AccountsService from "@/services/accounts.service";

export default {
  components: {PandaSelect, PandaButton, PButton, PInput,
  },
  emits: ["create", "hide"],
  data() {
    return {
      account: {
        name: '',
        account: '',
        mail: '',
        owner: '',
        password: '',
        link: '',
        type: '',
        description: '',
      },
      selectedSort: '',
    }
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
  },

  methods: {
    createAccount() {
      this.account.type = this.selectedSort;
      this.$emit('create', this.account);
    },
    clear() {
      this.account = {
        name: '',
        account: '',
        mail: '',
        owner: 'Ditar',
        password: '',
        link: '',
        type: '',
        description: '',
      }
    },
    generatePassword() {
      AccountsService.generatePassword().then(
          (response) => {
            this.account.password = response.data;
          }
      );
    },
    close() {
      this.$emit('hide')
    }
  }
}
</script>

<style scoped>
/* растягивание */
form {
  padding: 5px;
}

.btn_wrapper {
  padding-left: 5px;
  padding-right: 5px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.wrapper {
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 1fr;
}

.input {
  border: 1px solid #00800b;
  border-radius: 4px;
  padding: 5px;
}

.description {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 5px;
  width: 100%;
}
</style>