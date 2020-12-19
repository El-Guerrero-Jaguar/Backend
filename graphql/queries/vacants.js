const { db } = require("../../lib/conexionDB");
const {
    GraphQLID 
} = require("graphql");
const QueryVacant = require("../schemas/vacants").QueryVacant;

const GetVacant = {
    type: QueryVacant,
    args: { id: { type: GraphQLID } },
    resolve(parentValue, args){
        const values = [atgs.id];
        const query = 'SELECT * FROM public Vacants';
        return db
            .one(query,values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = GetVacant;