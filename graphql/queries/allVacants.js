const { db } = require("../../lib/conexionDB");
const {
    GraphQLList 
} = require("graphql");
const QueryVacant = require("../schemas/vacants").QueryVacant;

const GetAllVacants = {
    type: GraphQLList(QueryVacant),
    resolve(parentValue, args){
        const values = true;
        const query = `SELECT * FROM public Vacants WHERE id=$1`;
        return db
            .one(query,values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = GetAllVacants;