import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'demoField',
      label: 'Demo Field',
      type: 'text',
      required: true,
      hooks: {
        beforeValidate: [({value}) => {
          // console.info(value)
          // return value
          return "you should see this"
        }],
      },
    },
  ],
}
