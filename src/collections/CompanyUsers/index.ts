import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

const CompanyUsers: CollectionConfig = {
  slug: 'companyUsers',
  labels: {
    plural: 'Company Users',
    singular: 'Company User',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'fullname',
  },
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },
  fields: [
    {
      name: 'fullname',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'turkishIdentity',
      type: 'number',
    },
    {
      name: 'personalNumber',
      type: 'text',
    },
  ],
  timestamps: true,
}

export default CompanyUsers
