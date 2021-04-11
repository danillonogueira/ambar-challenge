import { Table } from 'antd';
// import { useSelector } from 'react-redux';

const columns = () => [
  {
    title: 'Cidade',
    dataIndex: 'city',
    key: 'key'
  },
  {
    title: 'Temperatura',
    dataIndex: 'temp',
    key: 'key'
  },
  {
    title: 'Mínima',
    dataIndex: 'min',
    key: 'key'
  },
  {
    title: 'Máxima',
    dataIndex: 'max',
    key: 'key'
  }
];

const Observations = ({ observations }) => {
  return (
    <Table columns={columns} dataSource={observations} />
  );
};

export default Observations;
