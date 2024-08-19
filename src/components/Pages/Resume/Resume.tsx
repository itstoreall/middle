/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Container, { containerEnum } from '../../Container';
import ResumeContent from './ResumeContent';
import useToast from '../../../hooks/useToast';

const { Label } = containerEnum;

const Resume = () => {
  const { addToast } = useToast();

  useEffect(() => {
    setTimeout(() => addToast('position'), 120000);

    /*
    setTimeout(() => {
      addToast('error');
    }, 15000);
    // */
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
