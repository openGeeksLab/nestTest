import { Schema } from 'mongoose';

export const StandartSchema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    isDeleted: Boolean
})