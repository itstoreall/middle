import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import './styles/_reset.scss';
import './styles/_global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<AppRoutes />);
