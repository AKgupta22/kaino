import React, { useEffect } from 'react';
import AdminCreateSchoolContent from '@/Component/admin/RightNavContent/schools/AdminCreateSchoolContent';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';

const CreateSchool = () => {

    useEffect(() => {
        dispatch(setHeader('Create School'))
    }, [])

    return (
        <AdminCreateSchoolContent />
    );
};
export default CreateSchool;