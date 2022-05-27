<script setup>

</script>

<template>
  <div class="sorting">
    <div class="sorting-arrow">
      <svg width="10" height="6">
        <use xlink:href="../../assets/icons.svg#arrow-up"></use>
      </svg>
    </div>
    <div class="sorting-arrow">
      <svg width="10" height="6">
        <use xlink:href="../../assets/icons.svg#arrow-down"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sorting {
  display: flex;
  flex-direction: column;
  gap: 3px;

  &-arrow {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 6px;
  }
}
</style>