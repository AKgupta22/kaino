import React, { useEffect } from 'react';
import AdminTermSystemContent from '@/Component/admin/RightNavContent/term-system/AdminTermSystemContent';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';

const TermSystem = () => {

    useEffect(() => {
        dispatch(setHeader("Term System"))
    }, [])

    return (
        <AdminTermSystemContent />
    );
};
export default TermSystem;