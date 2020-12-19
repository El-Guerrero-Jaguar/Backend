const { GraphQLObjectType } = require("graphql");
const GetVacants = require("./vacants");
const GetUser = require ("./users");
const GetAllVacants =require("./allVacants");
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    type: "Query",
    fields: {
        GetVacants,
        GetUser,
        GetAllVacants,
    },    
});

module.exports = RootQuery;