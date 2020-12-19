const { db } = require("../../lib/conexionDB");
const {
    GraphQLList 
} = require("graphql");
const QueryVacant = require("../schemas/vacants").QueryVacant;

const GetAllVacants = {
    type: GraphQLList(QueryVacant),
    resolve(parentValue, args){
        const values = true;
        const query = `SELECT id,title,company,description,town,status,rating,modality,date,salary,"urlVacant","urlCompany" FROM vacants`;
        return db
            .many(query,values)
            .then((res) => res)
            .catch((err) => err);
    },
};

module.exports = GetAllVacants;