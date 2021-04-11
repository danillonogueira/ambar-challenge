import styled from 'styled-components';
import { Card } from 'antd';
import { useSelector } from 'react-redux';
import Loader from './Loader';

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
      {(isLoading) && <Loader />}
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
              <img src={`http://openweathermap.org/img/wn/${observation.icon}@2x.png`} alt="weather icon" />
            </CardContent>
            
          </Card>
        )
      }
    </StyledDisplay>
  );
};

export default Display;
