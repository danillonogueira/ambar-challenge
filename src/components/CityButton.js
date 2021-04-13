import { Button } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';

const CityButton = ({ 
  clickHandler, 
  city, 
  isLoading 
}) => {
  return (
    <Button 
      type="primary"
      icon={<ThunderboltOutlined />}
      size="large"
      onClick={() => clickHandler(city)}
      block
      style={{ minWidth: 200 }}
      disabled={isLoading}
    >
      {city}
    </Button>
  );
};

export default CityButton;
