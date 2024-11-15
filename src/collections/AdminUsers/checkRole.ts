import { AdminUser } from '@/payload-types'

export const checkRole = (allRoles: AdminUser['roles'] = [], user?: AdminUser): boolean => {
  if (user) {
    if (Array.isArray(allRoles)) {
      if (allRoles.some((role) => user?.roles?.some((individualRole) => individualRole === role)))
        return true
    }
  }

  return false
}
