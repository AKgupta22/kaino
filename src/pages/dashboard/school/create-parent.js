import React, { useEffect } from 'react';
import SchoolCreateParentContent from '@/Component/school/RightNavContent/parents/SchoolCreateParentContent';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';

const CreateParent = () => {

    useEffect(() => {
        dispatch(setHeader("Create Parent"))
    }, [])

    return (
        <SchoolCreateParentContent />
    );
};
export default CreateParent;