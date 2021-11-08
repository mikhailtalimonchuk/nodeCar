import Joi from 'joi';
import {Request} from "express";

const carSchema = {
    price: Joi.number().required(),
    firstRegistrationDate: Joi.date(),
    manufacturer: Joi.object({
        name: Joi.string().required(),
        phone: Joi.string(),
        rate: Joi.number(),
    }),
    owner: Joi.object({
        name: Joi.string(),
        purchaseDate: Joi.date()
    })
};
const schema = Joi.object().keys(carSchema);
const schemaId = Joi.object().keys({
    id: Joi.string().required()
});
const schemaUpdate = Joi.object().keys({
    query: Joi.object({
        id: Joi.string().required()
    }),
    body: Joi.object(carSchema)
});
export default (data: object) => {
    return schema.validate(data);
}
export function validationId (data: any) {
    return schemaId.validate(data);
}
export function validationUpdate (data: Request) {
    return schemaUpdate.validate({query: data.query, body: data.body});
}