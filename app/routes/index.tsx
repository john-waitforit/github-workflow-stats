import type { MetaFunction } from 'remix';

import SiteLayout from '../components/SiteLayout';

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Github workflow stats',
    description: 'Welcome to Github workflow stats',
  };
};

export default function Index() {
  return (
    <SiteLayout>
      <div className="min-h-screen flex flex-col justify-center">
        <main>
          <h1 className="text-center text-2xl">Hello Github workflow stats</h1>
        </main>
      </div>
    </SiteLayout>
  );
}
