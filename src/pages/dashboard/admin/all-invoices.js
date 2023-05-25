import React, { useEffect } from 'react';
import AdminAllInvoicesContent from '@/Component/admin/RightNavContent/finance/AdminAllInvoicesContent';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';

const AllInvoices = () => {

    useEffect(() => {
        dispatch(setHeader('Invoices'))
    }, [])

    return (
        <AdminAllInvoicesContent />
    );
};
export default AllInvoices;