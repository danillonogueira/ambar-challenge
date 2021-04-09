import { Row, Col, Button } from 'antd';
import Display from './../components/Display';
import { getCityData } from './../services/Get';

const Home = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Button 
            type="primary" 
            size="large"
            onClick={() => getCityData('Ribeirão Preto')}
          >
            Ribeirão Preto
          </Button>
          <Button 
            type="primary" 
            size="large"
            onClick={() => getCityData('Araraquara')}
          >
            Araraquara
          </Button>
          <Button 
            type="primary" 
            size="large"
            onClick={() => getCityData('São Carlos')}
          >
            São Carlos
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Display 
            local={'Araraquara'}
            current={200}
            max={245}
            min={199}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button 
            type="primary" 
            size="large"
          >
            Mostrar Mín/Máx
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Home;