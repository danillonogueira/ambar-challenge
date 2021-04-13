import { Table } from 'antd';

const columns = [
  {
    title: 'Cidade',
    dataIndex: 'city',
    key: 'city'
  },
  {
    title: 'Temperatura',
    dataIndex: 'temp',
    key: 'temp'
  },
  {
    title: 'Mínima',
    dataIndex: 'min',
    key: 'min'
  },
  {
    title: 'Máxima',
    dataIndex: 'max',
    key: 'max'
  }
];

const Observations = ({ observations }) => {
  return(
    <Table 
      columns={columns} 
      dataSource={observations} 
    />
  );
};

export default Observations;
