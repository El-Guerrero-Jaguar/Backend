const {
    GraphQLSchema
} = require("graphql");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const bodyParser=require("body-parser");
const RootQuery = require("../graphql/queries");
const RootMutation =  require("../graphql/mutations");
const schema = new GraphQLSchema({query:RootQuery , mutation: RootMutation});

function api(app){
    app.use(cors());
    
    
    app.use("/api",
        bodyParser.json(),
        graphqlHTTP.graphqlHTTP({
            schema:schema,
            graphiql: true,
        })
    );
}
module.exports = api;