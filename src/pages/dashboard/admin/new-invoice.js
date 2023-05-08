import { Layout } from 'antd';
import React, { useState } from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import AdminNewInvoiceContent from '@/Component/admin/RightNavContent/AdminNewInvoiceContent';

const NewInvoice = () => {

    const [collapsed, setCollapsed] = useState(false);


    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav collapsed={collapsed} />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} headerText='New Invoice' />
                <RightContentWrapper padding='12px'>
                    <AdminNewInvoiceContent />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default NewInvoice;