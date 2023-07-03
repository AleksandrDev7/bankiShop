<template>
  <nav class="NavBar">
    <ul class="nav-list">
      <li><a>Каталог</a></li>
      <li><a>Доставка</a></li>
      <li><a>Оплата</a></li>
      <li><a>Контакты</a></li>
      <li><a>О компании</a></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
}

</script>

<style scoped lang="scss">

.NavBar {
  display: flex;
  width: 55%;

  .nav-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style-type: none;
    width: 100%;
    margin: 0;
    padding-left: 96px;

    li a {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      padding: 6px;

      &:hover {
        color: #776763;
        cursor: pointer;
      }
    }
  }
}


@media screen and (max-width: 1255px) {
  .NavBar {
    width: 45%;
  }
}

@media screen and (max-width: 1050px) {
  .NavBar {
    width: 50%;

    .nav-list {
      padding-left: 0;
    }
  }
}

@media screen and (max-width: 800px) {
  .NavBar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 40%;
    background-color: #fff;
    z-index: 6;
    transform: translate(-100%);
    transition: all .3s ease-in-out;

    .nav-list {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        padding: 10px;
      }
    }

  }

  .show {
    display: flex;
    transform: translate(0%);
    transition: all .3s ease-in-out;
  }
}

@media screen and (max-width: 540px) {
  .NavBar {
    width: 60%;
  }
}

@media screen and (max-width: 480px) {
  .NavBar {
    width: 100%;
  }
}
</style>
