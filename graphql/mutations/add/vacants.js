const { db } = require("../../../lib/conexionDB");
const {
    GraphQLString,
    GraphQLInt
} = require("graphql");
const  {
    GraphQLDate
} = require("graphql-iso-date");
const MutationVacant =require("../../schemas/vacants").MutationVacant;
const AddVacant = {
    type: MutationVacant,
    args: {
        title: { type: GraphQLString },
        company: { type: GraphQLString },
        description: { type: GraphQLString },
        town: { type: GraphQLString },
        status: { type: GraphQLString },
        rating: { type: GraphQLInt },
        modality: { type: GraphQLString },
        date: { type: GraphQLDate },
        salary: { type: GraphQLString },
        urlVacant: { type: GraphQLString },
        urlCompany: { type: GraphQLString },
    },
    resolve(parentValue, args){
        const query = `INSERT INTO vacants (title ,company,town,description,status,rating,modality,date,salary,urlVacant,urlCompany) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING id`;
        const values = [
            args.title,
            args.company,
        ];
        return db
            .one(query,values)
            .then((res) => res )
            .catch((err) => err);
    },
};

module.exports = AddVacant;