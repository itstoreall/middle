import Container, { containerEnum } from '../../Container';
import PortfolioContent from './PortfolioContent';

const { Label } = containerEnum;

const Portfolio = () => {
  return (
    <Container label={Label.PAGE}>
      <Container label={Label.MAIN}>
        <Container label={Label.CONTENT}>
          <PortfolioContent />
        </Container>
      </Container>
    </Container>
  );
};

export default Portfolio;
