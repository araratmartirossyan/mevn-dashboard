<template>
  <div>
    <h2>Продукты</h2>
    <icwt-table
      :columns="columns"
      :actions="actions"
      :data="products"
      @onEdit="handleEdit"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// components
import IcwtTable from '@/components/IcwtTable'

// setup
import { columns, actions } from './setup'

export default {
  name: 'ProductsPage',
  components: {
    IcwtTable,
  },
  computed: {
    ...mapGetters({
      products: 'products/items',
    }),
  },
  data: () => ({
    columns,
    actions,
  }),
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchAll',
    }),
    handleEdit() {
      console.log('изменяем')
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>
