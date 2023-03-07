const { Matchup, Tech } = require("../models");

const resolvers = {
  Query: {
    matchups: async () => {
      return Matchup.find().populate("techs");
    },
    matchup: async (parent, { _id }) => {
      return User.findOne({ _id }).populate("techs");
    },
    techs: async () => {
      return Tech.find();
    },
  },

  Mutation: {
    addMatchup: async (parent, { tech1, tech2, tech1_votes, tech2_votes }) => {
      return Matchup.create({ tech1, tech2, tech1_votes, tech2_votes });
    },
    addVote: async (parent, { _id, tech1_votes, tech2_votes }) => {
      return Matchup.findOneAndUpdate(
        { _id: _id },
        {
          $addToSet: { tech1_votes, tech2_votes },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
