<template>
  <div class="app">
    <icwt-nav :menu="menu" @onLogout="handleLogout" />
    <div class="content">
      <main>
        <Nuxt />
      </main>
      <icwt-footer />
    </div>
  </div>
</template>

<script>
import menu from './setup'

export default {
  name: 'DefaultLayout',
  data: () => ({
    menu,
  }),
  components: {
    IcwtFooter: () => import('@/components/layouts/Footer'),
    IcwtNav: () => import('@/components/layouts/Nav'),
  },
  methods: {
    async handleLogout() {
      localStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
.app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85vw;
}
main {
  height: 95%;
  background: $main-bg;
}
</style>
