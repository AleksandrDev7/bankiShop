<template>
  <div class="popup__wrapper" ref="popup_wrapper">
    <div class="popup">
      <div class="popup-header">
        <span> «{{ popupTitle }}»</span>
        <span>{{ popupSubtitle }}</span>
        <span>
          <i class="material-icons icons-close"
            v-on:click="closePopup">
            close
          </i>
        </span>
      </div>
      <div class="popup-content">
        <slot></slot>
      </div>
      <button class="v-catalog-item__add-to-cart btn"
              type="button"
              @click="AddBtnAction"
              :class="{InCart: btnInCart}">
        {{buyButton}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VPopup',
  props: {
    popupTitle: {
      type: String,
      default: 'Popup name'
    },
    popupSubtitle: {
      type: String,
      default: 'Popup Subtitle'
    },
    buyButton: String
  },
  data() {
    return{
      btnInCart: false
    }
  },
  computed: {
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    AddBtnAction() {
      this.$emit('AddBtnAction');
    },
  },
  mounted() {

    let vm = this;
    document.addEventListener('click', function (item) {
      if(item.target === vm.$refs['popup_wrapper']) {
        vm.closePopup()
      }
    });

    if(this.buyButton === 'В корзине') {
      this.btnInCart = true;
    }

  }
}
</script>

<style scoped lang="scss">
.popup__wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
}

.popup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translate(0%, -50%);
  width: 450px;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
  padding: 15px 50px;

  &-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px 0;

    span {
      padding: 2px 0;
    }

    .icons-close {
      position: absolute;
      right: 0;
      top: 0;

      &:hover {
        cursor: pointer;
      }
    }
  }
  &-content {
    position: relative;

    .popup_desc {
      border: none;
      height: 150px;

      &_text {
        height: 100px;
        overflow: hidden;
      }

      .desc__price {
        .popup-price {
          align-items: center;
          width: 100%;
        }
      }
    }
  }

}
@media screen and (max-width: 585px) {
  .popup {
    width: 70%;
    padding: 10px 20px;
  }
}

@media screen and (max-width: 400px) {
  .popup {

  }
}
</style>