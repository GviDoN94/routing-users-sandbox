import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { UsersPage } from '@/pages/UsersPage';
import { UserInfoPage } from '@/pages/UserInfoPage';
import './app.css';

export function App() {
  return (
    <BrowserRouter>
      <div className="header">_</div>

      <div className="section">
        <nav className="navMenu">
          <Link to={'/'}>Главная</Link>
          <Link to={'/users'}>Пользователи</Link>
        </nav>

        <main className="content">
          <Routes>
            <Route
              path="/"
              element={<MainPage />}
            />
            <Route
              path="/users"
              element={<UsersPage />}
            />
            <Route
              path="/users/:userId"
              element={<UserInfoPage />}
            />
          </Routes>
        </main>
      </div>

      <div className="footer">
        <a href="https://skillbox.ru/code/">https://skillbox.ru/</a>
      </div>
    </BrowserRouter>
  );
}
