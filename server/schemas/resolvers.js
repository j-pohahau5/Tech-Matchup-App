const { AuthenticationError } = require('apollo-server-express');
const { Matchup, Tech } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    matchups: async () => {
      return Matchup.find().populate('techs');
    },
    matchup: async (parent, { _id }) => {
      return User.findOne({ _id }).populate('techs');
    },
    techs: async () => {
      return Tech.find();
    },
  },

  Mutation: {
    addMatchup: async (parent, { tech1, tech2, tech1_votes, tech2_votes }) => {
      const matchup = await Matchup.create({ tech1, tech2, tech1_votes, tech2_votes  });
      const token = signToken(matchup);
      return { token, matchup };
    },
    addVote: async (parent, { tech1_votes, tech2_votes  }) => {
        const matchup = await Matchup.create({ tech1_votes, tech2_votes  });
        const token = signToken(matchup);
        return { token, matchup };
      },
  },
};

module.exports = resolvers;
