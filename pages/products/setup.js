export const config = {
  name: 'Продукты',
  crudName: 'products',
  singleName: 'Продукт',
  pageName: 'ProductPage',
  formName: 'ProductForm',
  formTitle: 'Форма Продукта',
}

export const columns = [
  { key: 'title', name: 'Название продукта' },
  { key: 'amount', name: 'Доступное Кол-во' },
  { key: 'price', name: 'Цена' },
]

export const actions = [
  {
    className: 'btn btn-warning text-white',
    label: 'Изменить',
    emit: 'onEdit',
    actionKey: '_id',
  },
  {
    className: 'btn btn-danger text-white',
    label: 'X',
    emit: 'onDelete',
    actionKey: '_id',
  },
]
