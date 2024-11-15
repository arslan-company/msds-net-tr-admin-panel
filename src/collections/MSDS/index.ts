import path from 'path'
import { fileURLToPath } from 'url'

import { CollectionConfig } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const MSDS: CollectionConfig = {
  slug: 'msds',
  admin: {
    description: {
      tr: 'Lütfen dosya isimlerini olabildiğince benzersiz ayarlamaya çalışın.',
      en: 'Please you set as unique filenames.',
    },
    defaultColumns: ['msdsName'],
    useAsTitle: 'msdsName',
  },
  labels: {
    plural: {
      tr: "MSDS'ler",
      en: 'MSDS',
    },
    singular: {
      tr: 'MSDS',
      en: 'MSDS',
    },
  },
  fields: [
    {
      name: 'msdsName',
      label: {
        tr: 'MSDS İsmi',
        en: 'MSDS Name',
      },
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // Upload to the public/msds directory in Next.js making them publicly accessible even outside of Payload
    staticDir: path.resolve(dirname, '../../../public/msds'),
    bulkUpload: true,
    mimeTypes: ['application/pdf'],
  },
}

export default MSDS
