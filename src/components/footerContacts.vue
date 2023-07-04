<template>
<div class="contacts">
  <div class="contacts-tel">
    <a href="tel:+78125555555">+7 (812) 555-55-55</a>
  </div>
  <div class="contacts-address">
    <a href="https://yandex.ru/maps/-/CCUkIEctgA">г. Санкт-Петербург, ул. Ефимова, 3</a>
  </div>
</div>
</template>

<script>
export default {
  name: "FooterContacts"
}
</script>

<style scoped lang="scss">

.contacts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-tel a,
  &-address a {
    font-size: 14px;
    font-weight: 400;
    color: #555;
    text-decoration: none;
    position: relative;
    padding-left: 25px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 1px;
      left: 0;
      width: 14px;
      height: 14px;
      background-size: contain;
    }
  }

  &-tel a:before {
    background: url("../assets/images/phone.svg") no-repeat;
  }

  &-address a:before {
    background: url("../assets/images/address.svg") no-repeat;
  }

  &-tel {
    margin-right: 20px;
  }
}

@media screen and (max-width: 1050px) {
  .contacts {
    flex-direction: column;
    align-items: flex-start;
    margin-right: 20px;
  }
}

</style>