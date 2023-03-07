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
    matchup: [Matchup]
    tech: [Tech]
  }

  type Mutation {
    addMatchup(tech1: String!, tech2: String!, tech1_votes: Number!, tech2_votes: Number!): Matchup
    
  }
`;

module.exports = typeDefs;
