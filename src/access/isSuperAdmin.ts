import { checkRole } from "@/collections/AdminUsers/checkRole"

export const isSuperAdmin = ({ req: { user } }: any) => {
  return checkRole(['superadmin'], user)
}
