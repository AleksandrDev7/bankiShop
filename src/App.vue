<template>
<div class="page">
  <VHeader/>
  <VCatalog/>
  <VFooter/>
</div>
</template>
<script>
import VHeader from "@/components/header/header";
import VCatalog from "@/components/catalog/catalog";
import VFooter from "@/components/footer/footer";
let documentBody = document.getElementsByTagName('body')[0];

export const showBodyOverflow = () => {
  documentBody.style.overflow = null
  documentBody.style.position = null
}
export const hideBodyOverflow = () => {
  documentBody.style.overflow = 'hidden'
  documentBody.style.position = 'fixed'
}
export default {
  name: 'App',
  components: {
    VHeader,
    VCatalog,
    VFooter,
  }
}
</script>

<style scoped>

</style>
