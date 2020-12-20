<template>
  <Page>
    <h2>{{ config.name }}</h2>
    <card>
      <nuxt-link class="btn btn-success" :to="`${config.crudName}/form`"
        >Добавить {{ config.singleName }}</nuxt-link
      >
      <icwt-table
        :columns="columns"
        :actions="actions"
        :data="items"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      />
    </card>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// setup
import { columns, actions, config } from './setup'

export default {
  name: config.pageName,
  components: {
    IcwtTable: () => import('@/components/IcwtTable'),
    Card: () => import('@/components/Card'),
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
