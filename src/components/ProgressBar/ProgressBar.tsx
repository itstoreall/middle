import useProgressBar from '../../hooks/useProgressBar';
import s from './ProgressBar.module.scss';

const ProgressBar = ({ percent }: { percent: number }) => {
  const { width, counter } = useProgressBar(percent);
  return (
    <div className={s.progressBar} style={{ width: `${width}%` }}>
      <span className={s.progressCounter}>{`${counter}%`}</span>
    </div>
  );
};

export default ProgressBar;
