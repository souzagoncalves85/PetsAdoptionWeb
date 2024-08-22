import { Button, Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Services = ({ services = [] }) => {
  return (
    <Row className="p-2">
      {services.map((service, i) => {
        return (
          <Col key={i}>
            <Card>
              <Card.Body>
                <Card.Title>{service.titulo}</Card.Title>
                <Card.Text>{service.descricao}</Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
