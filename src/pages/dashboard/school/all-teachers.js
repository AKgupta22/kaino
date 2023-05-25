import React, { useEffect } from 'react';
import SchoolAllTeachers from '@/Component/school/RightNavContent/teachers/SchoolAllTeachers';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';

const AllTeachers = () => {

    useEffect(() => {
        dispatch(setHeader("Teachers"))
    }, [])

    return (
        <SchoolAllTeachers />
    );
};
export default AllTeachers;