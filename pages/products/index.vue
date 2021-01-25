<template>
  <Page :title="config.name">
    <nuxt-link class="btn btn-success" :to="`${config.crudName}/form`"
      >Добавить {{ config.singleName }}</nuxt-link
    >
    <TablePageWrapper>
      <icwt-table
        :columns="columns"
        :actions="actions"
        :data="items"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      />
    </TablePageWrapper>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// setup
import { columns, actions, config } from './setup'

export default {
  name: config.pageName,
  middleware: 'auth',
  components: {
    IcwtTable: () => import('@/components/IcwtTable'),
    TablePageWrapper: () => import('@/components/TablePageWrapper'),
    Page: () => import('@/components/Page'),
  },
  computed: {
    ...mapGetters({
      items: `${config.crudName}/items`,
    }),
  },
  data: () => ({
    columns,
    actions,
    config,
  }),
  methods: {
    ...mapActions({
      fetchItems: `${config.crudName}/fetchAll`,
      deleteItem: `${config.crudName}/delete`,
    }),
    handleEdit({ id }) {
      this.$router.push(`/${config.crudName}/form/${id}`)
    },
    async handleDelete({ id }) {
      await this.deleteItem(id)
      this.fetchItems()
    },
  },
  mounted() {
    this.fetchItems()
  },
}
</script>
