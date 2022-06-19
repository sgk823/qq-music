<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'


export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,

  }
}
</script>

<style scoped>

</style>
