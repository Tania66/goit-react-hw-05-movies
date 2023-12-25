import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, List, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <List>
          <li>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </List>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
