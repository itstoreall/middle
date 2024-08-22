import { useContext } from 'react';
import { PreloaderContext } from '../context/preloader';

const usePreloader = () => useContext(PreloaderContext);

export default usePreloader;
