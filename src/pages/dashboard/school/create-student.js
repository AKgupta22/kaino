import React, { useEffect } from 'react';
import SchoolCreateStudentContent from '@/Component/school/RightNavContent/students/SchoolCreateStudentContent';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';

const CreateStudent = () => {
    useEffect(() => {
        dispatch(setHeader("Create Student"))
    }, [])

    return (
        <SchoolCreateStudentContent />
    );
};
export default CreateStudent;