import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import cantEraseYourself from './hooks/cantEraseYourself'

const AdminUsers: CollectionConfig = {
  slug: 'adminUsers',
  labels: {
    singular: 'Admin User',
    plural: 'Admin Users',
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      required: true,
      defaultValue: 'admin',
      hasMany: true,
      options: [
        {
          label: 'superadmin',
          value: 'superadmin',
        },
        {
          label: 'admin',
          value: 'admin',
        },
      ],
    },
  ],
  hooks: {
    beforeDelete: [cantEraseYourself],
  },
  timestamps: true,
}

export default AdminUsers
