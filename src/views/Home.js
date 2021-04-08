import { Row, Col, Button, Card } from 'antd';
import 'antd/dist/antd.css';

const Home = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Button type="primary" size="large">Ribeirão Preto</Button>
          <Button type="primary" size="large">Araraquara</Button>
          <Button type="primary" size="large">São Carlos</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="Card title" bordered={true} style={{ width: 300 }}>
            <p>Local</p>
            <p>200 graus C</p>
            <p>Max 245 graus</p>
            <p>Min 145 graus</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button type="primary" size="large">Mostrar Min/Máx</Button>
        </Col>
      </Row>
    </>
  );
};

export default Home;