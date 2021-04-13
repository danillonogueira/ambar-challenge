import { Table } from 'antd';

const tableColumns = [
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
      pagination={{ pageSize: 10 }} 
      columns={tableColumns} 
      dataSource={observations} 
    />
  );
};

export default Observations;
