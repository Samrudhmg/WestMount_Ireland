import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import type { paths } from './schema';

const client = createFetchClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  headers: {
    Accept: 'application/json',
  },
});

const $api = createClient(client);
export { $api, client };
