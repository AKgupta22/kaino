import React from 'react'
import styles from '@/styles/adminFinance.module.css'
import { Box, Button } from '@mui/material'
import InvoicesTable from '../Table/InvoicesTable'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from 'antd'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { BiBookmarkAltMinus, BiNotepad } from 'react-icons/bi'
import { AiOutlineDollarCircle } from 'react-icons/ai'

const AdminAllInvoicesContent = () => {
  const [data, setData] = useState([])
  const [response, setResponse] = useState({})
  const router = useRouter()
  return (
    <div>
      <div className={styles.invoicesBtn}>
        <p>Invoices</p>
        <p>Dashboard / <span style={{ opacity: .7 }}>Invoices</span></p>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tabs
          defaultActiveKey="1"
          style={{ marginTop: "2rem" }}
          items={[
            {
              label: `All Invoice`,
              key: '1',
            },
            {
              label: `Paid`,
              key: '2',
            },
            {
              label: `Overdue`,
              key: '3',
            },
            {
              label: `Draft`,
              key: '4',
            },
            {
              label: `Reccuring`,
              key: '5',
            },
            {
              label: `Cancelled`,
              key: '6',
            },
          ]}
        />
        <Button sx={{ height: '4rem' }} variant='contained' size='large' onClick={() => router.push('/dashboard/admin/new-invoice')}>New Invoice</Button>
      </Box>
      <div className={styles.finance_card_container}>
        <div className={`${styles.finance_card} ${styles.invoices_card}`}>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <FaFileInvoiceDollar size={'3.2rem'} />
            <p style={{ fontSize: '1.8rem', fontWeight: '700' }}>$8,78,797</p>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', marginTop: 4, alignItems: 'center' }}>
            <p style={{ fontSize: '1rem', fontWeight: '600' }}>All Invoices</p>
            <p style={{ fontSize: '12px' }}>50</p>
          </Box>
        </div>

        <div className={`${styles.finance_card} ${styles.invoices_card}`} style={{ background: '#3A93D6' }}>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <BiBookmarkAltMinus size={'3.2rem'} />
            <p style={{ fontSize: '1.8rem', fontWeight: '700' }}>$4,5884</p>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', marginTop: 4, alignItems: 'center' }}>
            <p style={{ fontSize: '1rem', fontWeight: '600' }}>Paid Invoices</p>
            <p style={{ fontSize: '12px' }}>60</p>
          </Box>
        </div>

        <div className={`${styles.finance_card} ${styles.invoices_card}`} style={{ background: '#9E4EE0' }}>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <AiOutlineDollarCircle size={'3.2rem'} />
            <p style={{ fontSize: '1.8rem', fontWeight: '700' }}>$2,05,545</p>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', marginTop: 4, alignItems: 'center' }}>
            <p style={{ fontSize: '1rem', fontWeight: '600' }}>Unpaid Invoices</p>
            <p style={{ fontSize: '12px' }}>70</p>
          </Box>
        </div>

        <div className={`${styles.finance_card} ${styles.invoices_card}`} style={{ background: '#EA8858' }}>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <BiNotepad size={'3.2rem'} />
            <p style={{ fontSize: '1.8rem', fontWeight: '700' }}>$8,797</p>
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', marginTop: 4, alignItems: 'center' }}>
            <p style={{ fontSize: '1rem', fontWeight: '600' }}>Over due</p>
            <p style={{ fontSize: '12px' }}>80</p>
          </Box>
        </div>
        
      </div>
      <div className={styles.invocesContainer}>
        <p className={styles.tableText}>Latest Payments</p>
        <InvoicesTable data={data} />
        <div className={styles.bottom_Pagination}>
          <p>Showing {response?.count ? 1 : 0} to {response?.count || 0} of {response?.count || 0} entries</p>
          <Button variant='outlined' size='large'>Show More</Button>
          <div>
            <Button disabled={!response.previous} variant="outlined" onClick={() => handlePagination(response.previous)} size="medium">Previous</Button>
            <Button variant="contained" size="medium">1</Button>
            <Button disabled={!response.next} variant="outlined" onClick={() => handlePagination(response.next)} size="medium">Next</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminAllInvoicesContent
