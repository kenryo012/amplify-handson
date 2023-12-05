// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Application } = initSchema(schema);

export {
  Application
};