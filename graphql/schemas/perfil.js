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
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        type: { type: GraphQLString },
        projectName: {type: GraphQLString },
        url:{ type: GraphQLString },
        description: {type: GraphQLString },
        technical: { type: GraphQLString },
        soft: {type: GraphQLString },
    }
});

module.exports = { QueryUser, MutationUser };