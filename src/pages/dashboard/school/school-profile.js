import React, { useEffect } from 'react';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';
import SchoolProfileContent2 from '@/Component/school/RightNavContent/school-profile/SchoolProfileContent2';

const SchoolProfile = () => {
    useEffect(() => {
        dispatch(setHeader('School Profile'))
    }, [])

    return (
        <SchoolProfileContent2 />
    );
};
export default SchoolProfile;