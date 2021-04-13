import { Button } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const CityButton = ({ clickHandler, city }) => {
  const { isLoading } = useSelector(state => state.temperatures);

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
