import {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {useTheme} from './theme/useTheme';

import './styles/index.scss'


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>Theme</button>
        <Link to={'/'}>Main Page</Link>
        <Link to={'/about'}>About Page</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainPageAsync/>}/>
                <Route path="/about" element={<AboutPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>
}