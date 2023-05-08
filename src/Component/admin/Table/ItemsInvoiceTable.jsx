import { Box, TextField, InputAdornment } from '@mui/material';
import { Table } from 'antd';
import { AiOutlineDelete, AiOutlinePlusCircle } from 'react-icons/ai';
import { BiCopy } from 'react-icons/bi';

const ItemsInvoiceTable = ({ data, setData }) => {

    const handlePlus = () => {
        const lastIndex = data.length - 1
        const newdata = [...data]
        const lastData = newdata[lastIndex]
        const newId = lastData.id + 1
        newdata.push(
            {
                id: newId,
                item_name: '',
                category: '',
                qty: '',
                price: '',
                amount: '',
                discount: '',
            }
        )
        setData(newdata)
    }

    const handleDeleteRow = ({ id }) => {
        let newdata = [...data]
        newdata = newdata.filter(item => item.id !== id)
        setData(newdata)
    }

    const handleCopy = (items) => {
        const lastIndex = data.length - 1
        const newdata = [...data]
        const lastData = newdata[lastIndex]
        const newId = lastData.id + 1
        let toCopiedItem = { ...items }
        toCopiedItem.id = newId
        newdata.push(toCopiedItem)
        setData(newdata)
    }

    const handleChange = (e, items) => {
        const name = e.target.name
        const value = e.target.value
        const copiedItems = { ...items }
        copiedItems[name] = parseInt(value) ? parseInt(value) : value
        copiedItems.amount = copiedItems.price * copiedItems.qty

        let newData = [...data]
        const index = newData.findIndex(item => item.id == copiedItems.id)
        newData[index] = copiedItems
        setData(newData)
    }

    const columns = [
        {
            title: 'Items',
            render: (item) => (
                <TextField
                    sx={{ width: '100%', background: '#fff' }}
                    focused
                    required
                    size='small'
                    placeholder='Item Name'
                    variant="outlined"
                    onChange={(e) => handleChange(e, item)}
                    name='item_name'
                    value={item.item_name}
                />
            ),
        },
        {
            title: 'Category',
            render: (item) => (
                <TextField
                    sx={{ width: '100%', background: '#fff' }}
                    focused
                    required
                    size='small'
                    placeholder='Category Name'
                    variant="outlined"
                    onChange={(e) => handleChange(e, item)}
                    name='category'
                    value={item.category}
                />
            ),
        },
        {
            title: 'Quantity',
            render: (item) => (
                <TextField
                    sx={{ width: '100%', background: '#fff' }}
                    focused
                    required
                    size='small'
                    type='number'
                    variant="outlined"
                    onChange={(e) => handleChange(e, item)}
                    name='qty'
                    value={item.qty}
                />
            ),
        },
        {
            title: 'Price',
            render: (item) => (
                <TextField
                    sx={{ width: '100%', background: '#fff' }}
                    focused
                    required
                    size='small'
                    type='number'
                    variant="outlined"
                    onChange={(e) => handleChange(e, item)}
                    name='price'
                    value={item.price}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
            ),
        },
        {
            title: 'Amount',
            render: (item) => (
                <TextField
                    sx={{ width: '100%', background: '#fff' }}
                    focused
                    required
                    size='small'
                    type='number'
                    variant="outlined"
                    onChange={(e) => handleChange(e, item)}
                    name='amount'
                    value={item.amount}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
            ),
        },
        {
            title: 'Discount',
            render: (item) => (
                <TextField
                    sx={{ width: '100%', background: '#fff' }}
                    focused
                    required
                    size='small'
                    type='number'
                    variant="outlined"
                    onChange={(e) => {
                        const value = parseFloat(e.target.value)
                        if (value >= 0 && value <= 100) {
                            handleChange(e, item)
                        }
                        else {
                            e.target.value = ""
                            handleChange(e, item)
                        }
                    }}
                    name='discount'
                    value={item.discount}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">%</InputAdornment>,
                        min: 0,
                        max: 100
                    }}
                />
            ),
        }, {
            title: 'Items',
            render: (item) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AiOutlinePlusCircle color='#869BEC' size={'1.4rem'} onClick={() => handlePlus()} />
                    <BiCopy color='grey' size={'1.4rem'} onClick={() => handleCopy(item)} />
                    {
                        data.length > 1 && <AiOutlineDelete color='red' size={'1.4rem'} onClick={() => handleDeleteRow(item)} />
                    }
                </Box>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    );
};

export default ItemsInvoiceTable;
