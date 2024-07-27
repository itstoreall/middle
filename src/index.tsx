import ReactDOM from 'react-dom/client';
import './styles/_reset.scss';
import './styles/_global.scss';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Layout />);
