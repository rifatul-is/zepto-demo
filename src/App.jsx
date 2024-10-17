import { useState } from 'react';
import Homepage from './pages/HomePage.jsx';
import { RouterProvider } from 'react-router-dom';
import routes from './components/Routes.jsx';

function App() {
    return (
        <div className="mx-auto px-4 w-full xl:w-[1200px] text-black bg-white font-roboto text-base tracking-wide">
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
