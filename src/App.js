// import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>

      </RouterProvider>

    </div>
  );
}

export default App;


//https://code-verse-server.vercel.app/