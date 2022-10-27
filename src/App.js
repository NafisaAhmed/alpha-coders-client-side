import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/routes';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
