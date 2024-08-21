/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Container, { containerEnum } from '../../Container';
import ResumeContent from './ResumeContent';
import useToast from '../../../hooks/useToast';
import toastConfig from '../../Toast/config';

const { position } = toastConfig.label;
const { Label } = containerEnum;

const toastStartDelay = 120000;
// const toastStartDelay = 2000;

const Resume = () => {
  const { addToast } = useToast();

  useEffect(() => {
    setTimeout(() => addToast(position), toastStartDelay);
    // setTimeout(() => addToast('error'), 15000); // *
  }, []);

  return (
    <Container label={Label.PAGE}>
      <Container label={Label.MAIN}>
        <Container label={Label.CONTENT}>
          <ResumeContent />
        </Container>
      </Container>
    </Container>
  );
};

export default Resume;
