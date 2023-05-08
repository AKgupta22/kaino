import { Table } from 'antd';
import { Button } from '@mui/material';

const columns = [
    {
        title: 'Browser',
        dataIndex: 'browser',
        key: 'browser',
    },
    {
        title: 'IP Address',
        dataIndex: 'ip_address',
        key: 'ip_address',
    },

    {
        title: 'Date/Time',
        dataIndex: 'date',
    },
    {
        title: 'Action',
        render: () => (
            <Button variant='contained' size='medium'>Action</Button>
        )
    },
];

const ActivityLogTable = ({ data }) => <div style={{ marginTop: "1rem", }}>
    <Table columns={columns} dataSource={data} pagination={false} />
</div>;

export default ActivityLogTable;