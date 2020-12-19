const AddVacant = require ("./add/vacants");
const {
    GraphQLObjectType
} = require ("graphql");
const Addvacant = require("./add/vacants");
const RootMutation =  new GraphQLObjectType({
    name: "RootMutation",
    type: "Mutation",
    fields: {
        AddVacant
    },
});

module.exports =  RootMutation;