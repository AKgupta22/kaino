import { Layout } from 'antd';
import React, { useState } from 'react';
import AdminLeftNav from '@/Component/Generic/LeftNavbar/AdminLeftNav';
import AdminHeader from '@/Component/Generic/Header/AdminHeader';
import RightContentWrapper from '@/Component/Generic/RightBarContent/RightContentWrapper';
import { useRouter } from 'next/router';
import AdminTeacherByCountryContent from '@/Component/admin/RightNavContent/AdminTeacherByCountryContent';

const TeachersByCountry = () => {

    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter()
    const { country } = router.query

    return (
        <Layout style={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
            <AdminLeftNav collapsed={collapsed} />
            <Layout className="site-layout" style={{ maxHeight: "100vh", overflow: 'scroll', overflowX: "hidden" }}>
                <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} headerText='Total Teachers' />
                <RightContentWrapper padding='12px'>
                    <AdminTeacherByCountryContent country={country} />
                </RightContentWrapper>
            </Layout>
        </Layout>
    );
};
export default TeachersByCountry;