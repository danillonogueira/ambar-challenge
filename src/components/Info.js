import { Card } from 'antd';
import styled from 'styled-components';

const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Info = ({ observation }) => {
  const { city, temp, min, max, icon } = observation;

  return (
    <Card 
      title={city}
      bordered={true} 
      style={{ width: 300 }}
    > 
      <CardContent>
        <div>
          <p><strong>Atual:</strong> {temp}<sup>o</sup> C</p>
          <p><strong>Mín:</strong> {min}<sup>o</sup> C</p>
          <p><strong>Máx:</strong> {max}<sup>o</sup> C</p>
        </div>     
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
      </CardContent>
    </Card>
  );
};

export default Info;
