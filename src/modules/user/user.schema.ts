import { extendSchema } from '../../utils/extend.shema.util';

export const UserSchema = extendSchema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  salt: {
    type: String,
  },
  password: {
    type: String,
  },

  roles: {
    admin: { type: Boolean, default: false },
    user: { type: Boolean, default: true },
  },
});
