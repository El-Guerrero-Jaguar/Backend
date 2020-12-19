const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} = require("graphql");
const {
    GraphQLDateTime,
} = require("graphql-iso-date");
const QueryVacant = new GraphQLObjectType({
    name: "QueryVacant",
    type: "query",
    fields:{
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        company: { type: GraphQLString },
        description: { type: GraphQLString },
        town: { type: GraphQLString },
        status: { type: GraphQLString },
        rating: { type: GraphQLInt },
        modality: { type: GraphQLString },
        date: { type: GraphQLString},
        salary: { type: GraphQLString },
        urlVacant: { type: GraphQLString },
        urlCompany: { type: GraphQLString }
    },
});
const MutationVacant = new GraphQLObjectType({
    name: "MutationVacant",
    type: "mutation",
    fields:{
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        company: { type: GraphQLString },
        description: { type: GraphQLString },
        town: { type: GraphQLString },
        status: { type: GraphQLString },
        rating: { type: GraphQLInt },
        modality: { type: GraphQLString },
        date: { type: GraphQLString },
        salary: { type: GraphQLString },
        urlVacant: { type: GraphQLString },
        urlCompany: { type: GraphQLString }
    },
});

module.exports = { QueryVacant, MutationVacant };