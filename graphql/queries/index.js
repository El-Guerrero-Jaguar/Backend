const { GraphQLObjectType } = require("graphql");
const vacants = require("./vacants");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    type: "Query",
    fields: {
        vacants,
    },    
});

module.exports = RootQuery;