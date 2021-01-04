import User from "./models/User";

export const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await User.findById(id);
    },
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_, { nickname, fullname, phone, city }) => {
      const user = new User({ nickname, fullname, phone, city });
      return await user.save();
    },
    deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id);
    },
  },
};
