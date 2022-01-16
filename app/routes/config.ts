import { LoaderFunction, json } from 'remix';

export let loader: LoaderFunction = async ({ request }) => {
  return json({});
};
