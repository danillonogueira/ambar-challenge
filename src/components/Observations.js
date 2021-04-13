import { Table } from 'antd';


const tempRender = (text) => <span>{text}<sup>o</sup> C</span>;
const tableColumns = [
  {
    title: 'Cidade',
    dataIndex: 'city',
    key: 'city'
  },
  {
    title: 'Temperatura',
    dataIndex: 'temp',
    key: 'temp',
    render: (text) => tempRender(text)
  },
  {
    title: 'Mínima',
    dataIndex: 'min',
    key: 'min',
    render: (text) => tempRender(text)
  },
  {
    title: 'Máxima',
    dataIndex: 'max',
    key: 'max',
    render: (text) => tempRender(text)
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
