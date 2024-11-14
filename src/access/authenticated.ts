import type { AccessArgs } from 'payload'

import { type AdminUser } from '@/payload-types'

type isAuthenticated = (args: AccessArgs<AdminUser>) => boolean

export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}
