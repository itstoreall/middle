import Container, { containerEnum } from '../Container';

const { Label } = containerEnum;

const Resume = () => {
  return (
    <Container label={Label.PAGE}>
      <Container label={Label.MAIN}>
        <div>
          <p>Resume</p>
        </div>
      </Container>
    </Container>
  );
};

export default Resume;
