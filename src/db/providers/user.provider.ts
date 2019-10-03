import { Connection } from 'mongoose';

import { UserSchema } from './../schema/user.schema';
import { USER_PROVIDER } from '../../constants/provider.constants';

export const userProvider = {
  provide: USER_PROVIDER,
  useFactory: (connection: Connection) => connection.model('user', UserSchema),
  inject: [Connection],
};
