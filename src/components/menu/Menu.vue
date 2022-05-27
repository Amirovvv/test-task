<template>
  <div class="menu">
    <router-link :to="'/'" active-class="active-router">
      <div class="menu__button">Analyze</div>
    </router-link>
    <router-link :to="'/campaigns'" active-class="active-router">
      <div class="menu__button">My campaigns</div>
    </router-link>
    <router-link :to="'/configure'" active-class="active-router">
      <div class="menu__button">Configure</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  border-bottom: 1px dashed #E3E5E6;

  &__button {
    border-radius: 4px 4px 0px 0px;
    font-family: 'Roboto';
    font-size: 16px;
    padding: 14px;
    top: 1px;
    position: relative;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}

a {
  text-decoration: none;
  color: black;
}

.active-router {
  border: 1px solid #C6CACC;
  border-bottom: 1px solid white;
  border-radius: 4px 4px 0px 0px;
  position: relative;
  top: 1px;
}
</style>