<template>
  <footer>
    <div class="wrapper">
      <div class="VFooter">
        <nav-bar/>
        <FooterContacts/>
      </div>
    </div>
  </footer>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterContacts from "@/components/footerContacts";

export default {
  name: "VFooter",
  components: {
    FooterContacts,
    NavBar
  }
}
</script>

<style scoped lang="scss">
.VFooter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>