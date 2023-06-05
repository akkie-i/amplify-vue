<template>
  <authenticator :services="services">
    <template v-slot:header>
      <div style="padding: var(--amplify-space-large); text-align: center">
        <img
          class="amplify-image"
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </div>
    </template>
    <template v-slot:sign-in-header>
      <h3
        class="amplify-heading"
        style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
      >
        ID / Password でのログイン
      </h3>
    </template>
    <template v-slot:footer>
      <div style="padding: var(--amplify-space-large); text-align: center">
        <p class="amplify-text" style="color: var(--amplify-colors-neutral-80)">
          © All Rights Reserved
        </p>
      </div>
    </template>

    <template v-slot="{ signOut, user }">
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld :user="user" />
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import "@aws-amplify/ui-vue/styles.css";
import { Hub, Auth } from "aws-amplify";
import { Authenticator, translations } from "@aws-amplify/ui-vue";
import { I18n } from "aws-amplify";
I18n.putVocabularies(translations);
I18n.setLanguage("ja");
I18n.putVocabularies({
  ja: {
    "Sign In": "ログイン",
    "Create Account": "アカウント作成",
    Email: "Eメールアドレス",
    "Enter your Email": "Eメールアドレスを入力",
    Password: "ログインパスワード",
    "Enter your Password": "ログインパスワードを入力",
    "Sign in": "ログイン",
    "Forgot your password?": "パスワードを再設定する",
  },
});

const services = {
  async handleSignIn(formData) {
    const { username, password } = formData;
    try {
      return await Auth.signIn(username, password);
    } catch (error) {
      console.log("error signing in", error);
    }
  },
};

const listener = (data) => {
  const { payload } = data;
  console.log(payload.data);
  switch (payload.event) {
    case "configured":
      console.log(`event: ${payload.event}`);
      break;
    case "signIn":
      console.log(`event: ${payload.event}`);
      break;
    case "signIn_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "signUp":
      console.log(`event: ${payload.event}`);
      break;
    case "signUp_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "confirmSignUp":
      console.log(`event: ${payload.event}`);
      break;
    case "completeNewPassword_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "autoSignIn":
      console.log(`event: ${payload.event}`);
      break;
    case "autoSignIn_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "forgotPassword":
      console.log(`event: ${payload.event}`);
      break;
    case "forgotPassword_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "forgotPasswordSubmit":
      console.log(`event: ${payload.event}`);
      break;
    case "forgotPasswordSubmit_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "verify":
      console.log(`event: ${payload.event}`);
      break;
    case "tokenRefresh":
      console.log(`event: ${payload.event}`);
      break;
    case "tokenRefresh_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "cognitoHostedUI":
      console.log(`event: ${payload.event}`);
      break;
    case "cognitoHostedUI_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "customOAuthState":
      console.log(`event: ${payload.event}`);
      break;
    case "customState_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "parsingCallbackUrl":
      console.log(`event: ${payload.event}`);
      break;
    case "userDeleted":
      console.log(`event: ${payload.event}`);
      break;
    case "updateUserAttributes":
      console.log(`event: ${payload.event}`);
      break;
    case "updateUserAttributes_failure":
      console.log(`event: ${payload.event}`);
      break;
    case "signOut":
      console.log(`event: ${payload.event}`);
      break;
  }
};

Hub.listen("auth", listener);
</script>

<style>
.amplify-tabs {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
