const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Number
    tech2_votes: Number
  }

  type Tech {
    _id: ID
    name: String
  }

  type Query {
    matchups: [Matchup]
    matchup(_id: ID): Matchup
    techs: [Tech]
  }

  type Mutation {
    addMatchup(tech1: String!, tech2: String!, tech1_votes: Number!, tech2_votes: Number!): Matchup
    addVote(tech1_votes: Number!, tech1_votes: Number!): Matchup
  }
`;

module.exports = typeDefs;
