import { Schema } from 'mongoose';

export const extendSchema = (OriginalSchema: Object, definition: Object, options: Object): Schema => {
    return new Schema(
        { ...OriginalSchema, ...definition },
        options
    )
}