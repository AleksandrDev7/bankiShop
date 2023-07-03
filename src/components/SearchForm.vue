<template>
  <form class="v-searchForm"  @submit.prevent="" >
    <input class="v-searchForm__input" type="text" placeholder="Поиск по названию картины" v-model="searchValue" @keyup.enter="search(searchValue)"  />
    <button class="v-searchForm__button btn" type="button" @click="search(searchValue)">Найти</button>
  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-searchForm",
  props: {},
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
        'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    search(search) {
      this.GET_SEARCH_VALUE_TO_VUEX(search);
    }
  }
}

</script>

<style scoped lang="scss">
.v-searchForm {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  &__input {
    border: 1px solid #E1E1E1;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #343030;
    padding: 13px 16px;
    width: 260px;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #9F9F9F;
    }
  }
}

@media screen and (max-width: 1050px) {
  .v-searchForm__input {
    width: 230px;
  }
}

@media screen and (max-width: 450px) {
  .v-searchForm__input {
    width: 190px;
  }

  .v-searchForm__button {
    padding: 14px 15px;
  }
}

@media screen and (max-width: 400px) {
  .v-searchForm__button {
    display: none;
  }
}



</style>