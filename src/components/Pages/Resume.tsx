import Container, { containerEnum } from '../Container';

const { Label } = containerEnum;

const Resume = () => {
  return (
    <Container label={Label.PAGE}>
      <div>Resume</div>
    </Container>
  );
};

export default Resume;
