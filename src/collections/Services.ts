import type { CollectionConfig } from 'payload'

const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Serviço',
    plural: 'Serviços',
  },
  admin: {
    useAsTitle: 'titulo',
  },
  fields: [
    {
      name: 'titulo',
      label: 'Título',
      type: 'text',
      required: true,
    },
    {
      name: 'icone',
      label: 'Ícone',
      type: 'text',
      required: true,
      admin: {
        description:
          'Ex: "fa-solid fa-heart" ou o nome de um ícone da biblioteca que você estiver usando.',
      },
    },
    {
      name: 'descricao',
      label: 'Descrição',
      type: 'textarea',
      required: true,
    },
  ],
}

export default Services
