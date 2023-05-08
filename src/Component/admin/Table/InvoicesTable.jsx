import { Button } from '@mui/material';
import { Table } from 'antd';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id'
    },
    {
        title: 'Invoice from',
        dataIndex: 'school',
    },
    {
        title: 'Subscription',
        dataIndex: 'plan',
    },
    {
        title: 'Created On',
        dataIndex: 'start_date',
    },
    {
        title: 'Amount (UGX)',
        dataIndex: 'amount',
    },
    {
        title: 'Status',
        dataIndex: 'is_paid',
        render: (item) => (
            <button className='paid_btn'>{item === 1 ? 'Paid' : 'Unpaid'}</button>
        ),
    },
    {
        title: 'Details',
        render: (item) => (
            <Button variant='outlined' size='medium'>Details</Button>
        ),
    }
];

const InvoicesTable = ({ data }) => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    );
};

export default InvoicesTable;
