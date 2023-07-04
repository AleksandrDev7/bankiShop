<template>
  <div>
    <img :src=" require('../assets/images/' + item_data.img) "
         alt="item_data.name">
  </div>
</template>

<script>
export default {
  name: "carouselItem",
  props: {
    item_data: {
      type: Object,
      default: () => {return {}}
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped lang="scss">

div {
  text-align: center;
  width: 100%;
  height: 350px;

  img {
    width: 450px;
    height: 100%;
  }
}

</style>