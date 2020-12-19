const { db } = require("../../lib/conexionDB");
const {
    GraphQLList 
} = require("graphql");
const QueryUser = require("../schemas/Users").QueryUser;

const GetAllUsers = {
    type: GraphQLList(QueryUser),
    resolve(parentValue, args){
        const values = true;
        const query = `SELECT id,name,email,type FROM Users`;
        return db
            .many(query,values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = GetAllUsers;