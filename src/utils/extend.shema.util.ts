import { Schema } from 'mongoose';
import dbStandartField from './db.standart.field';

export const extendSchema = (
  OriginalSchema: Object,
  definition: Object= dbStandartField,
  options: Object= {}): Schema => {

  return new Schema(
        { ...OriginalSchema, ...definition },
        options,
    );
};
