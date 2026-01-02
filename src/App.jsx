import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
