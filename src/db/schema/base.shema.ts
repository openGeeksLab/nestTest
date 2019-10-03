import { Schema } from 'mongoose';

// tslint:disable-next-line: variable-name
export const StandartSchema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  isDeleted: Boolean,
});
