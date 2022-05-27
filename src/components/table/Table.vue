<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { MySorting, MyInput, MySelect } from '../'

const store = useStore()
const search = ref('')
const SUMMARY_MAX = 5

const setSearchData = (value) => {
  search.value = value
}

const date = computed(() => {
  return store.state.dateVariants
})

const selectedDate = computed(() => {
  return store.state.selectedDate
})

const sortData = computed(() => {
  return store.state.data[selectedDate.value]?.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase()),
  )
})

const summaries = computed(() => {
  const summaries = {
    summary1: 0,
    summary2: 0,
    summary3: 0,
    summary4: 0,
    summary5: 0,
  }
  sortData.value.forEach((option) => {
    Object.keys(summaries).forEach((key) => (summaries[key] += option[key]))
  })
  return summaries
})

onMounted(() => { })
</script>

<template>
  <div class="select">
    <MySelect :selectedDate="selectedDate" />
    <div class="select__btn">
      <svg width="14" height="14">
        <use xlink:href="../../assets/icons.svg#reports"></use>
      </svg>
    </div>
    <div class="select__btn">
      <svg width="14" height="15">
        <use xlink:href="../../assets/icons.svg#download"></use>
      </svg>
    </div>
  </div>

  <div class="table">
    <div class="table__header">
      <div>
        <MySorting />
        Data
      </div>
      <div>Summary 1</div>
      <div>Summary 2</div>
      <div>Summary 3</div>
      <div>Summary 4</div>
      <div>Summary 5</div>
    </div>

    <div class="table__body">
      <div class="table__body-row" v-for="item in sortData" :key="item.id">
        <div>{{ item.name }}</div>
        <div>{{ item.summary1 }}</div>
        <div>{{ item.summary2 }}</div>
        <div>{{ item.summary3 }}</div>
        <div>{{ item.summary4 }}</div>
        <div>{{ item.summary5 }}</div>
      </div>
    </div>

    <div class="table__footer">
      <div class="table__footer-row">
        <MyInput :width="330" :placeholder="'Search...'" @update:model-value="setSearchData" />
        <div class="summary" v-for="(summary, index) in summaries" :key="index">
          {{ summary }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select {
  display: flex;
  justify-content: end;

  &__btn {
    width: 32px;
    height: 32px;
    background: #f7f9fa;
    border-radius: 4px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 8px;
    cursor: pointer;
  }
}

.summary {
  border: 1px solid #c6cacc;
  border-radius: 10px;
  padding: 6px 12px;
  background: none;
  width: 86px;

  &:not(first-child) {
    margin-left: auto;
  }
}

table {
  border-collapse: collapse;
}

tr:not(:last-child) {
  border-bottom: 2px solid #e3e5e6;
}

.table {
  width: 920px;
  font-family: 'Roboto';
  margin-top: 20px;

  &__header,
  &__body-row,
  &__footer-row {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;

    div {
      &:not(:first-child) {
        text-align: end;
      }
    }
  }

  &__footer {
    margin-top: 10px;
  }

  &__header {
    border-bottom: 2px solid #e3e5e6;
    padding: 12px 0;
    font-family: 'Quicksand';
    font-weight: 500;
    font-size: 16px;
    color: #919699;

    div {
      &:first-child {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }

  &__body-row {
    padding: 20px 0;
    font-size: 20px;
    font-weight: 500;

    &:not(:last-child) {
      border-bottom: 1px solid #e3e5e6;
    }
  }
}
</style>
