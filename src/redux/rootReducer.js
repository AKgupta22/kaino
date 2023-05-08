import { combineReducers } from "@reduxjs/toolkit";
import login from "./slices/login";
import requestAccess from "./slices/requestAccess";
import resetPassword from "./slices/resetPassword";
import createSchool from "./slices/admin/createSchool";
import getAllSchools from "./slices/admin/getAllSchools";
import createTermSystem from "./slices/admin/createTermSystem";
import getLessons from "./slices/admin/getLessons";
import createLesson from "./slices/admin/createLesson";
import getSingleLesson from "./slices/admin/getSingleLesson";
import editSingleLessons from "./slices/admin/editSingleLessons";
import addNewUser from "./slices/admin/addNewUser";
import deleteUser from "./slices/admin/deleteUser";
import getAllUsers from "./slices/admin/getAllUsers";
import ChangePassword from "./slices/admin/ChangePassword";
import getActivityLog from "./slices/admin/getActivityLog";
import Modify2F_Logs from "./slices/admin/Modify2F_Logs";
import get2fStatus from "./slices/admin/get2fStatus";
import getDashboardCount from "./slices/admin/getDashboardCount";
import verifyOtp from "./slices/verifyOtp";
import updateRole from "./slices/admin/updateRole";
import getAllParents from "./slices/admin/getAllParents";
import getAllTeachers from "./slices/admin/getAllTeachers";
import getAllStudents from "./slices/admin/getAllStudents";
import getNotifications from "./slices/getNotifications";
import clearNotification from "./slices/clearNotification";
import getAllOrgnizations from "./slices/admin/getAllOrgnizations";
import getTopOrg from "./slices/admin/getTopOrg";
import getFinanceHome from "./slices/admin/getFinanceHome";
import getChart from "./slices/admin/getChart";
import preInvoice from "./slices/admin/preInvoice";
import createInvoice from "./slices/admin/createInvoice";

const rootReducer = combineReducers({
    login: login,
    requestAccess: requestAccess,
    resetPassword: resetPassword,
    createSchool: createSchool,
    getAllSchools: getAllSchools,
    createTermSystem: createTermSystem,
    getLessons: getLessons,
    createLesson: createLesson,
    getSingleLesson: getSingleLesson,
    editSingleLessons: editSingleLessons,
    addNewUser: addNewUser,
    deleteUser: deleteUser,
    getAllUsers: getAllUsers,
    ChangePassword: ChangePassword,
    getActivityLog: getActivityLog,
    Modify2F_Logs: Modify2F_Logs,
    get2fStatus: get2fStatus,
    getDashboardCount: getDashboardCount,
    verifyOtp: verifyOtp,
    updateRole: updateRole,
    getAllParents: getAllParents,
    getAllTeachers: getAllTeachers,
    getAllStudents: getAllStudents,
    getNotifications: getNotifications,
    clearNotification: clearNotification,
    getAllOrgnizations: getAllOrgnizations,
    getTopOrg: getTopOrg,
    getFinanceHome: getFinanceHome,
    getChart: getChart,
    preInvoice: preInvoice,
    createInvoice: createInvoice
})
export default rootReducer