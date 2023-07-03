<template>
  <section>
    <div class="wrapper">
      <div class="VCatalog">
        <h1>Картины эпохи Возрождения</h1>
        <div class="v-catalog__list">
          <VCatalogItem
              v-for="product in filteredProducts"
              :key="product.id"
              :id="product.id"
              :product_data="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import VCatalogItem from "@/components/catalog-item";

export default {
  name: "VCatalog",
  components: {
    VCatalogItem
  },
  props: [],
  data() {
    return {
      sortedProducts: [],
      cart: [],
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'SEARCH_VALUE',
      'CART'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS;
      }
    },
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log('data arrived');
            this.sortProductsBySearchValue(this.SEARCH_VALUE);
          }
        });

  },


  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
    ]),

    sortProductsBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase()) ||
              item.author.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },


    watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    }
  }

</script>

<style scoped lang="scss">
.VCatalog {
  padding-top: 45px;
}

.v-catalog__list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}


@media screen and (max-width: 540px) {
  .v-catalog__list {
    justify-content: center;
  }
}
</style>