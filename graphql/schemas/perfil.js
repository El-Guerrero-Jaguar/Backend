const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} = require("graphql");
const {
    GraphQLDate,
} = require("graphql-iso-date");
const QueryUser = new GraphQLObjectType({
    name: "QueryUser",
    type: "query",
    fields:{
        idUser: { type: GraphQLInt },
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
        type: { type: GraphQLString },
    }
});

module.exports = { QueryUser, MutationUser };