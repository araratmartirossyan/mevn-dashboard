<template>
  <h2>This is Categories</h2>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CategoriesPage',
  computed: {
    ...mapGetters({
      categories: 'categories/items',
    }),
  },
  methods: {
    ...mapActions({
      fetchCategories: 'categories/fetchAll',
    }),
  },
  mounted() {
    this.fetchCategories()
  },
}
</script>
