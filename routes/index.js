const {
    GraphQLSchema
} = require("graphql");
const graphqlHTTP = require("express-graphql");
const RootQuery = require("../graphql/queries");
const schema = new GraphQLSchema({query:RootQuery , mutation: null});
function api(app){
    app.use("/api",
        graphqlHTTP.graphqlHTTP({
            schema:schema,
            graphiql: true,
        })
    );
}
module.exports = api;