import { Card } from 'antd';

const Display = ({ local, current, min, max }) => {
  return (
    <Card 
      title={local}
      bordered={true} 
      style={{ width: 300 }}
    >
      <p>{current} <sup>o</sup>C</p>
      <p>Máx: {max} <sup>o</sup>C</p>
      <p>Mín: {min} <sup>o</sup>C</p>
    </Card>
  );
};

export default Display;
