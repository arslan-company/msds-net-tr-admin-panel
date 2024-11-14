import { BeforeDeleteHook } from 'node_modules/payload/dist/collections/config/types'

const cantEraseYourself: BeforeDeleteHook = async function ({ req, id }) {
  const loggedInUserId = req?.user?.id

  if (loggedInUserId === id) {
    throw new Error('You cannot delete your own account.')
  }
}

export default cantEraseYourself
