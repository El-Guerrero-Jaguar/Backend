const {
    GraphQLSchema
} = require("graphql");
const graphqlHTTP = require("express-graphql");
const schema = new GraphQLSchema({query:null , mutation: null});
function api(app){
    app.use("/api",
        graphqlHTTP.graphqlHTTP({
            schema:schema,
            graphiql: true,
        })
    );
}
module.exports = api;