const { db } = require("../../lib/conexionDB");
const {
    GraphQLID 
} = require("graphql");
const QueryVacant = require("../schemas/vacants").QueryVacant;

const GetVacant = {
    type: QueryVacant,
    args: { id: { type: GraphQLID } },
    resolve(parentValue, args){
        const values = [args.id];
        const query = `SELECT * FROM Vacants WHERE id=$1`;
        return db
            .one(query,values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = GetVacant;