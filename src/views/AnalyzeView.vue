<script setup>
import {
  MyButton,
  Table
} from '../components'
</script>

<template>
  <div class="analyze">
    <div class="analyze__create">
      <MyButton :fontSize="20" :borderRadius="99" class="analyze__create-btn">
        <svg width="17" height="16">
          <use xlink:href="../assets/icons.svg#create"></use>
        </svg>
        <span>Create new</span>
      </MyButton>

      <div class="analyze__type">
        <div class="analyze__type-icon">
          <svg width="20" height="20">
            <use xlink:href="../assets/icons.svg#metrics"></use>
          </svg>
        </div>
        <div>
          <div class="analyze__type-title">Metrics</div>
          <div class="analyze__type-desc">Track your apps across devices</div>
        </div>
      </div>
      <div class="analyze__type">
        <div class="analyze__type-icon">
          <svg width="20" height="20">
            <use xlink:href="../assets/icons.svg#results"></use>
          </svg>
        </div>
        <div>
          <div class="analyze__type-title">Results</div>
          <div class="analyze__type-desc">View your results as Excel file</div>
        </div>
      </div>
      <div class="analyze__type">
        <div class="analyze__type-icon">
          <svg width="20" height="20">
            <use xlink:href="../assets/icons.svg#reports"></use>
          </svg>
        </div>
        <div>
          <div class="analyze__type-title">Reports</div>
          <div class="analyze__type-desc">Get insights into the big data</div>
        </div>
      </div>
    </div>
    <div class="analyze__dashbord">
      <div class="analyze__dashbord-title">Dashboard</div>
      <Table />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.analyze {
  background-color: #E2F0F0;
  display: flex;
  font-family: 'Quicksand';
  flex-grow: 3;

  &__create {
    padding: 0px 86px;
    margin-top: 32px;

    & span {
      margin-left: 16px;
    }

    &-btn {
      width: 213px;
      height: 56px;
    }
  }

  &__type {
    display: flex;
    margin-top: 24px;

    &-icon {
      display: flex;
      align-items: center;
      margin-right: 16px;
    }

    &-title {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 500;
    }

    &-desc {
      font-weight: 400;
      color: #5E6366;
      font-size: 12px;
    }
  }

  &__dashbord {
    margin-top: 12px;

    &-title {
      font-weight: 500;
      font-size: 34px;
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
</style>