<template>
  <header>
    <div class="wrapper">
      <div class="VHeader">
        <burgerBtn
            v-on:click.native="openBrgMenu"
            :class="{'burger-btn__active':showNavBarVisible}"
        />
        <NavBar
            :class="{'show':showNavBarVisible}"
        />
        <v-search-form/>
      </div>
    </div>
  </header>
</template>

<script>
import NavBar from "@/components/navBar/navBar";
import VSearchForm from "@/components/searchForm/searchForm";
import burgerBtn from "@/components/burgerBtn/burgerBtn";
import {hideBodyOverflow, showBodyOverflow} from "@/App";

export default {
  name: 'VHeader',
  components: {
    VSearchForm,
    NavBar,
    burgerBtn
  },

  data() {
    return {
      showNavBarVisible: false
    }
  },

  methods: {

    openBrgMenu() {
      this.showNavBarVisible = this.showNavBarVisible !== true;
      hideBodyOverflow();

      if(this.showNavBarVisible !== true) {
        showBodyOverflow();
      }
    }

  }
}
</script>

<style scoped>

.VHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

</style>