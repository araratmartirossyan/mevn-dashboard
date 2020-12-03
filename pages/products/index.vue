<template>
  <Page>
    <h2>Продукты</h2>
    <card>
      <nuxt-link class="btn btn-success" to="products/form"
        >Добавить продукт</nuxt-link
      >
      <icwt-table
        :columns="columns"
        :actions="actions"
        :data="products"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      />
    </card>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// setup
import { columns, actions } from './setup'

export default {
  name: 'ProductsPage',
  components: {
    IcwtTable: () => import('@/components/IcwtTable'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page'),
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
      deleteProduct: 'products/delete',
    }),
    handleEdit({ id }) {
      this.$router.push(`/products/form/${id}`)
    },
    async handleDelete({ id }) {
      await this.deleteProduct(id)
      this.fetchProducts()
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>
