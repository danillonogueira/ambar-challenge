import { Spin } from 'antd';

const Loader = () => {
  return (
    <div>
      <Spin 
        size="large"
        style={{
          margin: '20px 0'
        }} 
      />
      <br />
      <span>Buscando informações da cidade...</span>
    </div>
  );
};

export default Loader;
