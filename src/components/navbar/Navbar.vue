<script setup>
import {
  MyButton,
} from '../'
</script>

<template>
  <div class="navbar">
    <div class="navbar__logo">
      <div class="navbar__logo-icon">D</div>
      <div class="navbar__logo-title">Dashboard</div>
    </div>
    <div class="navbar__controls">
      <button class="navbar__controls-help">
        <div>Help</div>
        <svg width="20" height="20">
          <use xlink:href="../../assets/icons.svg#question"></use>
        </svg>
      </button>
      <MyButton :upperCase="true" :fontSize="14" :padding="8" :borderRadius="10">upgrade</MyButton>
      <div class="navbar__controls-avatar"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;

  &__logo {
    display: flex;
    font-size: 24px;
    font-family: 'Racing Sans One', cursive;
    cursor: pointer;

    &-icon {
      box-shadow: 0px 2px 6px rgba(8, 35, 48, 0.16), 0px 1px 2px rgba(8, 35, 48, 0.24);
      border-radius: 10px;
      color: #367BF5;
      width: 40px;
      height: 40px;
      align-items: center;
      display: flex;
      justify-content: space-around;
      margin-right: 10px;
    }

    &-title {
      color: #5E6366;
      display: flex;
      align-items: center;
    }
  }

  &__controls {
    display: flex;
    font-family: 'Roboto';
    align-items: center;

    &-help {
      border-radius: 10px;
      outline: none;
      border: none;
      background: #FFFFFF;
      display: flex;
      font-size: 16px;
      align-items: center;
      padding: 8px;
      width: 78px;
      justify-content: space-between;
      margin-right: 25px;
      cursor: pointer;
    }

    &-avatar {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-left: 16px;
      background-image: url('@/assets/user.png');
      cursor: pointer;
    }
  }
}
</style>