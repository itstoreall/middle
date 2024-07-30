import Container, { containerEnum } from '../../Container';
import ResumeContent from './ResumeContent';

const { Label } = containerEnum;

const Resume = () => (
  <Container label={Label.PAGE}>
    <Container label={Label.MAIN}>
      <Container label={Label.CONTENT}>
        <ResumeContent />
      </Container>
    </Container>
  </Container>
);

export default Resume;
