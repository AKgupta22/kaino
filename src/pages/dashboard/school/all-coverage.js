import React, { useEffect } from 'react';
import { dispatch } from '@/redux/store';
import { setHeader } from '@/redux/slices/HeaderTitle';
import SchoolLessonCoverage from '@/Component/school/RightNavContent/coverage/SchoolLessonCoverage';

const SchoolCoverage = () => {

    useEffect(() => {
        dispatch(setHeader("Coverage"))
    }, [])

    return (
        <SchoolLessonCoverage />
    );
};
export default SchoolCoverage;