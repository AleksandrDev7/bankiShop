<template>
  <div class="burger-btn">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "burgerBtn"
}
</script>

<style scoped lang="scss">
  .burger-btn {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    &:hover {
      cursor: pointer;
    }

    span {
      width: 30px;
      height: 4px;
      background-color: #382e2b;
      display: block;
      transition: .3s ease-in;

      &:first-child {
        margin-bottom: 7px;
        transition: .3s ease-in;
      }

      &:last-child {
        margin-top: 7px;
        transition: .3s ease-in;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .burger-btn {
      display: flex;
      z-index: 7;

      &__active {
        padding: 10px 4px;
      }

      &__active span:first-child {
        transform: rotate(-45deg);
        transition: .3s ease-in;
        margin-bottom: -4px;
      }

      &__active span:nth-child(2) {
        background-color: transparent;
        transition: .3s ease-in;
        transform: rotate(45deg);
      }

      &__active span:last-child {
        transform: rotate(45deg);
        transition: .3s ease-in;
        margin-top: -4px;
      }
    }
  }
</style>