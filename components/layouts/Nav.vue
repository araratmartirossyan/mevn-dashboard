<template>
  <nav>
    <NavItem v-for="(item, key) in menu" :to="item.to" :key="key">
      {{ item.name }}
    </NavItem>
    <button class="btn btn-danger" @click="$emit('onLogout')">Выйти</button>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    NavItem: () => import('@/components/NavItem'),
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
nav {
  height: 100vh;
  width: 15vw;
  padding: 1rem;
  box-shadow: $menu-shadow;
  display: flex;
  flex-direction: column;
}
</style>
