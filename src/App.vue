<template>
  <div id="app">
    <Header :seller="seller" ref="header"></Header>
  </div>
</template>

<script>
import Header from './components/v-header/header'
import { getSeller } from 'api'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      seller: {}
    }
  },
  methods: {
    _getSeller () {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  mounted () {
    this._getSeller()
    this.$refs.header.test()
  }
}
</script>
<style lang="stylus">
</style>
