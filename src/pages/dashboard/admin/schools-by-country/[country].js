import { Layout } from 'antd';
import React, { useState } from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import AdminSchoolByCountryContent from '@/Component/admin/RightNavContent/AdminSchoolByCountryContent';
import { useRouter } from 'next/router';

const SchoolByCountry = () => {

    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter()
    const { country } = router.query

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav collapsed={collapsed} />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} headerText='Total Schools' />
                <RightContentWrapper padding='12px'>
                    <AdminSchoolByCountryContent country={country} />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default SchoolByCountry;