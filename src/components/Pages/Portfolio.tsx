import Container, { containerEnum } from '../Container';

const { Label } = containerEnum;

const Portfolio = () => {
  return (
    <Container label={Label.PAGE}>
      <div>Portfolio</div>
    </Container>
  );
};

export default Portfolio;
