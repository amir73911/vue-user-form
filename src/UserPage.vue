<template>
  <div id="app" class="user-page">

    <section class="user-page__section user-form" v-if="firstName || lastName || login || email">
      <h1>New User</h1>
      <p>
        {{ firstName }} {{ lastName }}
        <span v-if="(firstName || lastName) && login"> / </span>
        <span class="user-form__gray-text" v-if="login">{{ login }}</span>
      </p>
      <p>{{ email }}</p>
    </section>

    <section class="user-page__section registration-form">
      <h1>Sign Up</h1>
      <form class="user-page__grid" @submit.prevent="addUser">
        <label class="user-page__column-two">
          <span class="registration-form__input-caption registration-form__input-caption--required">Login</span>
          <input type="text" class="registration-form__input" v-model="login" required minlength="3" placeholder=" ">
        </label>
        <label class="user-page__column-two">
          <span class="registration-form__input-caption registration-form__input-caption--required">E-mail</span>
          <input type="email" class="registration-form__input" v-model="email" required placeholder=" ">
        </label>
        <label class="user-page__column-two">
          <span class="registration-form__input-caption registration-form__input-caption--required">Password</span>
          <input type="password" class="registration-form__input" v-model="password" required minlength="6" placeholder=" ">
        </label>
        <label class="user-page__column-one">
          <span class="registration-form__input-caption">First Name</span>
          <input type="text" class="registration-form__input" v-model="firstName">
        </label>
        <label class="user-page__column-one">
          <span class="registration-form__input-caption">Last Name</span>
          <input type="text" class="registration-form__input" v-model="lastName">
        </label>
        <label class="user-page__column-one">
          <span class="registration-form__input-caption">Country</span>
          <v-select type="text" v-model="country" :options="countries"></v-select>
        </label>
        <label class="user-page__column-one">
          <span class="registration-form__input-caption">City</span>
          <v-select type="text" v-model="city" :options="cities" :disabled="!country"></v-select>
        </label>
        <label class="user-page__column-one">
          <span class="registration-form__input-caption">Date of Birth</span>
          <datepicker v-model="dateOfBirth"></datepicker>
        </label>
        <label class="user-page__column-one">
          <span class="registration-form__input-caption">Zip Code</span>
          <input type="text" class="registration-form__input" v-model="zipCode">
        </label>
        <div class="registration-form__buttons user-page__column-two">
          <button type="submit" class="registration-form__button">Sign Up</button>
        </div>
      </form>
    </section>

    <div class="message-backdrop" :class="{'message-backdrop--showed': messageIsShowed}">
      <div class="message">{{ message }}</div>
    </div>

  </div>
</template>

<script>
import vSelect from "vue-select";
import Datepicker from "vuejs-datepicker";
import store from "./store";

// https://github.com/sagalbot/vue-select
// https://github.com/charliekassel/vuejs-datepicker

export default {
  name: "app",
  components: {
    vSelect,
    Datepicker
  },
  computed: {
    login: {
      get() {
        return store.state.user.login;
      },
      set(value) {
        store.commit("updateUserLogin", value);
      }
    },
    email: {
      get() {
        return store.state.user.email;
      },
      set(value) {
        store.commit("updateUserEmail", value);
      }
    },
    password: {
      get() {
        return store.state.user.password;
      },
      set(value) {
        store.commit("updateUserPassword", value);
      }
    },
    firstName: {
      get() {
        return store.state.user.firstName;
      },
      set(value) {
        store.commit("updateUserFirstName", value);
      }
    },
    lastName: {
      get() {
        return store.state.user.lastName;
      },
      set(value) {
        store.commit("updateUserLastName", value);
      }
    },
    country: {
      get() {
        return store.state.user.country;
      },
      set(value) {
        store.commit("updateUserCountry", value);
      }
    },
    city: {
      get() {
        return store.state.user.city;
      },
      set(value) {
        store.commit("updateUserCity", value);
      }
    },
    dateOfBirth: {
      get() {
        return store.state.user.dateOfBirth;
      },
      set(value) {
        store.commit("updateUserDateOfBirth", value);
      }
    },
    zipCode: {
      get() {
        return store.state.user.zipCode;
      },
      set(value) {
        store.commit("updateUserZipCode", value);
      }
    }
  },
  data() {
    return {
      message: "",
      messageIsShowed: false,
      countries: ["Russia", "Canada", "Andorra", "China"],
      cities: ["Moscow", "Toronto", "Andorra la Vella", "Beijing"]
    };
  },
  methods: {
    addUser() {
      if (this.validateForm) {
        this.showMessage("The user has been added successfully!");
      }
    },

    validateForm() {
      if (this.login && this.email && this.password) {
        return true;
      }
    },

    showMessage(message) {
      this.message = message;
      this.messageIsShowed = true;
      setTimeout(() => {
        this.messageIsShowed = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");

$color-white: #fff;
$color-gray: #adb1bd;
$color-red: #ec5b5c;
$color-green: #4be1ab;
$color-border: #d5dce6;
$color-label: #7a8196;
$color-background: #e9eff2;
$color-title: #343e5c;
$color-text: #3a405b;
$color-button: $color-green;

$base-transition: 0.3s;
$gutter: 20px;
$content-width: 570px;
$tablet: 740px;

$fontFamily: "Open Sans", Helvetica, Arial, sans-serif;

.user-page {
  font-family: $fontFamily;
  background: $color-background;
  min-height: 100vh;
  padding: $gutter;

  @media (min-width: $tablet) {
    padding: $gutter * 2.5 $gutter $gutter * 9.5;
  }

  &__section {
    max-width: $content-width;
    margin: auto;
    padding: $gutter;

    @media (min-width: $tablet) {
      padding-left: 70px;
      padding-right: 70px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 23px 30px;
  }

  &__column-one {
    grid-column: 1 / span 2;

    @media (min-width: $tablet) {
      grid-column: auto;
    }
  }

  &__column-two {
    grid-column: 1 / span 2;
  }

  h1 {
    color: $color-title;
    font-size: 32px;
    line-height: 40px;
    margin: 0 0 $gutter;
    font-weight: 300;
    text-align: center;
  }
}

.user-form {
  margin-bottom: 20px;
  background: $color-white;
  border-radius: 2px;
  text-align: center;

  &__gray-text {
    color: $color-gray;
  }

  p {
    &:empty {
      display: none;
    }
  }
}

.registration-form {
  background: $color-white;
  border-radius: 5px;
  padding-top: $gutter * 2;
  padding-bottom: $gutter * 2;

  &__input,
  .v-select .dropdown-toggle,
  .vdp-datepicker input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid $color-border;
    background-color: $color-white;
    color: $color-text;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    padding: 11px 13px;
    letter-spacing: 1.4px;

    &:invalid:not(:focus):not(:placeholder-shown) {
      border-color: $color-red;
    }
  }

  &__buttons {
    padding-top: 50px;
  }

  &__button {
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 0 21px 21px;
    background-color: $color-button;
    color: $color-white;
    font-size: 11px;
    line-height: 16px;
    padding: 13px $gutter;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    outline: none;
    cursor: pointer;
  }

  &__input-caption {
    display: block;
    color: $color-label;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    margin-bottom: $gutter / 2;

    &--required {
      &::after {
        content: "*";
        color: $color-red;
      }
    }
  }

  h1 {
    margin-bottom: $gutter * 2;
  }

  label {
    display: block;
  }

  .v-select {
    font-family: inherit;

    &.open {
      .open-indicator {
        bottom: 3px;
      }
    }

    .dropdown-toggle {
      padding: 0;
      position: relative;
    }

    .form-control,
    .form-control:focus,
    .selected-tag {
      height: auto;
      background-color: $color-white;
      color: $color-text;
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      padding: 11px 13px;
      letter-spacing: 1.4px;
      border-radius: 5px;
      border: none;
      margin: 0;
    }

    .selected-tag {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }

    .open-indicator {
      z-index: 2;

      &:before {
        border-color: $color-border;
      }
    }

    .clear {
      display: none;
    }
  }
}

.message-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 5;
  transition: $base-transition;
  visibility: hidden;
  opacity: 0;

  &--showed {
    visibility: visible;
    opacity: 1;
  }
}

.message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: $color-green;
  text-align: center;
  padding: $gutter;
  color: $color-white;
  font-size: 18px;
}
</style>
