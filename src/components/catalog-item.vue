<template>
<div class="catalog-item" :key="product_data.id"  v-bind:class="{ 'disabled': product_data.sold }">
  <VPopup
      v-if="isPopupVisible"
      @closePopup="closePopup"
      :popupTitle="product_data.name"
      :popupSubtitle="product_data.author"
      :buyButton="buyButton"
      @AddBtnAction="addToCart"
  >
    <vCarousel
      :carousel_data="product_data.sliderImages"
    />
    <div class="catalog-item__desc popup_desc">
      <p class="popup_desc_text">{{product_data.description}}</p>
      <div class="desc__price">
        <div class="price popup-price">
          <p class="old_cost" >{{product_data.sale}}</p>
          <p class="cost">{{product_data.price}}</p>
        </div>
      </div>
    </div>
  </VPopup>
  <img :src="require('../assets/images/' + product_data.image)"
       alt="img"
       @click="showPopupInfo">
  <div class="catalog-item__desc">
    <p class="desc-name"
       @click="showPopupInfo">
      «{{product_data.name}}»
    </p>
    <p class="desc-author">{{product_data.author}}</p>
    <div class="desc__price">
      <div class="price">
        <p class="old_cost" >{{product_data.sale}}</p>
        <p class="cost">{{product_data.price}}</p>
      </div>
      <button
          class="v-catalog-item__add-to-cart btn"
          type="button"
          v-on:click="addToCart($event)"
          :class="[{InCart: btnInCart},{'btn__loading': loading},]">
        {{buyButton}}
      </button>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import {mapGetters} from "vuex";
import VPopup from '@/components/popup';
import vCarousel from '@/components/v-carousel';


Vue.use(VueAxios, axios);

export default {

  name: "VCatalogItem",
  components: {
    VPopup,
    vCarousel,
  },
  props: {
    'star': null,
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },

  data(){
    return{
      info: null,
      buyButton: 'Купить',
      cartItem: [],
      isPopupVisible: false,
      btnInCart: false,
      loading: false,
      itemID: this.product_data.id
    }
  },

  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ]),
  },

  mounted() {
    if (localStorage.getItem('cartItem')) {

      try {
        this.cartItem = JSON.parse(localStorage.getItem('cartItem'));
        let storage = JSON.parse(localStorage.getItem('cartItem'));

        storage.forEach((item) => {
          if(item === this.itemID) {
            this.buyButton = 'В корзине';
            this.btnInCart = true;
            debugger; // eslint-disable-line no-debugger
          }
        });

      } catch (e) {
        console.log(this.cartItem)
      }
    }
  },

  methods: {

    addToCart() {
      this.cartItem = JSON.parse(localStorage.getItem('cartItem'));
      if (this.cartItem.length === 0) {
        this.productInCart();
        this.savedProducts();

      }  else if (this.cartItem.find(cartId => cartId === this.itemID)) {

        this.cartItem = this.cartItem.filter(elem => elem !== this.itemID);
        this.productOutCart();
        this.savedProducts();

        } else {

        this.productInCart();
        this.savedProducts();

      }
    },

    savedProducts() {
      let parsed = JSON.stringify(this.cartItem)
      debugger; // eslint-disable-line no-debugger
      localStorage.setItem('cartItem', parsed);
    },

    productInCart() {
      this.cartItem.push(this.itemID);
      this.loading = true;
      this.buyButton = 'Обрабатывается';
      setTimeout(() => {
        this.buyButton = 'В корзине';
        this.btnInCart = true;
      }, 2000);
    },

    productOutCart() {
      this.loading = true;
      this.btnInCart = false;
      this.buyButton = 'Обрабатывается';
      setTimeout(() => {
        this.buyButton = 'Купить';
        this.btnInCart = false;
        this.loading = false;
      }, 2000);
    },

    showPopupInfo() {
      this.isPopupVisible = true;
      if(this.product_data.sold) {
        this.isPopupVisible = false;
      }
    },

    closePopup() {
      this.isPopupVisible = false;
    }
  }
}

</script>

<style scoped lang="scss">

.catalog-item {
  display: flex;
  flex-direction: column;
  width: 23%;
  margin: 20px 0;

  img {
    width: 100%;
  }

  &__desc {
    padding: 20px 24px 24px 24px;
    border: 1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .desc-name,
    .desc-author {
      margin: 0;
      font-size: 18px;
      line-height: 27px;
      font-weight: 400;
      color: #343030;
    }

    .desc__price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      margin-top: 22px;

      .price {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        p {
          margin: 0;
        }

        .old_cost {
          font-weight: 300;
          font-size: 14px;
          line-height: 21px;
          color: #a0a0a0;
          text-decoration: line-through;
        }

        .cost {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #343030;
        }
      }

    }
  }
}

@media screen and (max-width: 1255px) {
  .catalog-item {
    &__desc {
      padding: 15px;
    }
  }
}

@media screen and (max-width: 1050px) {
  .catalog-item {
    width: 30%;
  }
}

@media screen and (max-width: 800px) {
  .catalog-item {
    width: 45%;
  }
}

@media screen and (max-width: 540px) {
  .catalog-item {
    width: 80%;
  }

}
</style>