import styled from 'styled-components';
import { Card, Spin } from 'antd';
import { useSelector } from 'react-redux'; 

const StyledDisplay = styled.div`
  height: 213px;
  text-align: center;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Display = () => {
  const { observation, isLoading, hasObservation } = useSelector(state => state);

  return (
    <StyledDisplay>
      {
        (!hasObservation && !isLoading) && (
          <div>
            <span>Clique em uma cidade acima</span>
            <br />
            <span>para buscar a temperatura</span>
          </div>
        )
      }
      { 
        (isLoading) && (
          <div>
            <span>Buscando informações da cidade...</span>
            <br />
            <Spin 
              size="large"
              style={{
                margin: '10px 0'
              }} 
            />
          </div>
        )
      }
      {
        (hasObservation && !isLoading) && (
          <Card 
            title={observation.city}
            bordered={true} 
            style={{ width: 300 }}
          > 
            <CardContent>
              <div>
                <p><strong>Atual:</strong> {observation.temp}<sup>o</sup> C</p>
                <p><strong>Mín:</strong> {observation.min}<sup>o</sup> C</p>
                <p><strong>Máx:</strong> {observation.max}<sup>o</sup> C</p>
              </div>     
              <img src={`http://openweathermap.org/img/wn/${observation.icon}@2x.png`} />
            </CardContent>
            
          </Card>
        )
      }
    </StyledDisplay>
  );
};

export default Display;
