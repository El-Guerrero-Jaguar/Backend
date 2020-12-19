const { db } = require ("../../lib/conexionDB");
const {
    GraphQLID
} = require("graphql");
const QueryUser = require("../schemas/users").QueryUser;
const GetUser = {
    type: QueryUser,
    args: { id: {type: GraphQLID }},
    resolve(parentValues,args){
        const values = [args.id];
        const query = `SELECT name,email,type FROM users WHERE id = $1`;
        return db
            .one(query,values)
            .then((res) => res)
            .catch((err) =>  err);
    },
};
module.exports = GetUser;
