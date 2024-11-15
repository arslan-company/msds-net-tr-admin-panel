import { CollectionConfig } from 'payload'

import { Country } from 'country-state-city'

const countries = Country.getAllCountries()

const formattedCountries = countries.map((c) => ({
  value: c.isoCode,
  label: c.name,
}))

const Companies: CollectionConfig = {
  slug: 'companies',
  labels: {
    plural: {
      tr: 'Şirketler',
      en: 'Companies',
    },
    singular: {
      tr: 'Şirket',
      en: 'Company',
    },
  },
  admin: {
    defaultColumns: ['companyName', 'status'],
    useAsTitle: 'companyName',
  },
  fields: [
    {
      name: 'companyName',
      label: {
        tr: 'Şirket İsmi',
        en: 'Company Name',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      label: {
        tr: 'Durum',
        en: 'Status',
      },
      type: 'select',
      options: [
        {
          value: 'active',
          label: {
            tr: 'Aktif',
            en: 'Active',
          },
        },
        {
          value: 'passive',
          label: {
            tr: 'Pasif',
            en: 'Passive',
          },
        },
      ],
      defaultValue: 'active',
    },
    {
      name: 'msdsContent',
      label: {
        tr: 'MSDS İçeriği',
        en: 'MSDS Content',
      },
      hasMany: true,
      type: 'relationship',
      relationTo: 'msds',
    },
    {
      name: 'companyUsers',
      label: {
        tr: 'Şirket Kullanıcıları',
        en: 'Company Users',
      },
      type: 'relationship',
      relationTo: 'companyUsers',
      hasMany: true,
    },
    {
      type: 'collapsible',
      label: {
        tr: 'Genel Bilgiler',
        en: 'General Informations',
      },
      fields: [
        {
          name: 'taxNumber',
          label: {
            tr: 'Vergi Numarası',
            en: 'Tax Number',
          },
          type: 'text',
        },
        {
          name: 'taxOffice',
          label: {
            tr: 'Vergi Dairesi',
            en: 'Tax Office',
          },
          type: 'text',
        },
        {
          name: 'tradeRegistryNumber',
          label: {
            tr: 'Ticaret Sicil Numarası',
            en: 'Trade Registry Number',
          },
          type: 'text',
        },
        {
          name: 'mersisNumber',
          label: {
            tr: 'Mersis Numarası',
            en: 'Mersis Number',
          },
          type: 'text',
        },
        {
          name: 'country',
          label: {
            tr: 'Ülke',
            en: 'Country',
          },
          type: 'select',
          options: formattedCountries,
        },
        {
          name: 'state',
          type: 'text',
          label: {
            tr: 'Eyalet',
            en: 'State',
          },
          admin: {
            condition: (_, siblingData) => {
              if (siblingData?.country) {
                return true
              }

              return false
            },
            components: {
              Field: 'src/collections/Companies/components/StatesComponent',
            },
          },
        },
        {
          name: 'city',
          type: 'text',
          label: {
            tr: 'İlçe',
            en: 'City',
          },
          admin: {
            components: {
              Field: 'src/collections/Companies/components/CitiesComponent',
            },
          },
        },
        {
          name: 'address',
          label: {
            tr: 'Adres',
            en: 'Address',
          },
          type: 'text',
        },
        {
          name: 'phoneNumber',
          label: {
            tr: 'Telefon Numarası',
            en: 'Phone Number',
          },
          type: 'text',
        },
      ],
    },
  ],
}

export default Companies
