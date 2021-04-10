import { Row, Col, Button } from 'antd';
import CityButton from './../components/CityButton';
import styled from 'styled-components';
import { UnorderedListOutlined } from '@ant-design/icons';
import Display from './../components/Display';
// import { useEffect } from 'react';
// import { db } from './../services/Firebase';

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #EEE;
`;

const Home = () => {
  // useEffect(() => {
  //   db.ref('observations')
  //     .on('value', (snapshot) => {
  //       console.log(
  //         snapshot.val()
  //       );
  //     });
  // })

  return (
    <StyledHome>
      <Row>
        <Col span={24}>
          <CityButton city={'Ribeirão Preto'} />
          <CityButton city={'Araraquara'} />
          <CityButton city={'São Carlos'} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Display />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button 
            type="primary" 
            size="large"
            shape={'round'}
            icon={<UnorderedListOutlined />}
          >
            Mostrar Mín/Máx
          </Button>
        </Col>
      </Row>
    </StyledHome>
  );
};

export default Home;