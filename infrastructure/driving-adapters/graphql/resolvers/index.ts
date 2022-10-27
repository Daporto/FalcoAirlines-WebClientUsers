import { userMutations } from './user'
import { userQueries } from './user'

const resolvers = {
  Query: {
    ...userQueries
  },
  Mutation: {
    ...userMutations
  }
}

export default resolvers