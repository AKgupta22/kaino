import React, { useEffect, useState } from 'react'
import { Modal } from 'antd'
import styles from '@/styles/adminUserRoles.module.css'
import { TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Button } from '@mui/material'
import Axios from '@/utils/axios'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { addNewUserRequest, addNewUserReset } from '@/redux/slices/admin/addNewUser'
import { dispatch } from '@/redux/store'

export default function AddAdminModal({ setIsModal, isModal }) {
    const [permissions, setPermissons] = useState([])
    const [errorMessages, setErrorMessages] = useState({})
    const addNewUserState = useSelector(state => state.addNewUser)

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            role: 1,
            permission: []
        },
        onSubmit: (values) => {
            setErrorMessages({})
            dispatch(addNewUserRequest(values))
        }
    })

    const getPermissions = async () => {
        try {
            const response = await Axios.get('api/auth/permissions/')
            if (response.data?.data)
                setPermissons(response.data?.data)
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPermissions()
    }, [])


    const handleCheckBoxes = (e) => {
        const value = e.target.value
        const checkPermissions = formik.values.permission
        if (checkPermissions.includes(value)) {
            const newArray = checkPermissions.filter(item => item !== value)
            formik.setFieldValue('permission', newArray)
        }
        else {
            const copiedArray = [...checkPermissions]
            copiedArray.push(value)
            formik.setFieldValue('permission', copiedArray)
        }
    }

    useEffect(() => {
        if (addNewUserState.isError && addNewUserState.data?.message) {
            setErrorMessages(addNewUserState.data?.message)
            dispatch(addNewUserReset())
        }

    }, [addNewUserState.isError])

    useEffect(() => {
        if (addNewUserState.isSuccess) {
            formik.resetForm()
            setIsModal(false)
            dispatch(addNewUserReset())
        }

    }, [addNewUserState.isSuccess])

    return (
        <Modal
            title="Basic Deatils"
            width={'900px'}
            centered
            open={isModal}
            onCancel={() => setIsModal(false)}
            footer={null}
        >
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.modalForm}>
                    <div>
                        <TextField
                            focused
                            sx={{ width: "100%" }}
                            required
                            size='small'
                            id="outlined-adornment-first_name"
                            label="First Name"
                            placeholder='First Name'
                            variant="outlined"
                            name='first_name'
                            value={formik.values.first_name}
                            onChange={formik.handleChange}
                        />
                        {errorMessages?.first_name && <p className='formErrorText'>{errorMessages?.first_name[0]}</p>}
                    </div>
                    <div>
                        <TextField
                            focused
                            sx={{ width: "100%" }}
                            required
                            size='small'
                            id="outlined-adornment-last_name"
                            label="Last Name"
                            placeholder='Last Name'
                            variant="outlined"
                            name='last_name'
                            value={formik.values.last_name}
                            onChange={formik.handleChange}
                        />
                        {errorMessages?.last_name && <p className='formErrorText'>{errorMessages?.last_name[0]}</p>}
                    </div>
                    <div>
                        <TextField
                            focused
                            sx={{ width: "100%" }}
                            required
                            size='small'
                            type='email'
                            id="outlined-adornment-email"
                            label="Email"
                            placeholder='Email'
                            variant="outlined"
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {errorMessages?.email && <p className='formErrorText'>{errorMessages?.email[0]}</p>}
                    </div>
                    <FormControl size='small' focused
                        sx={{ width: "100%" }} required>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            id="country-role"
                            label="Role"
                            name='role'
                            value={formik.values.role}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value={1}>Admin</MenuItem>
                            <MenuItem value={5}>Head of Curicullum</MenuItem>
                            <MenuItem value={6}>Content Creator</MenuItem>
                            <MenuItem value={7}>Finance</MenuItem>
                        </Select>
                        {errorMessages?.role && <p className='formErrorText'>{errorMessages?.role[0]}</p>}
                    </FormControl>
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <p style={{ color: '#4C4C4C', fontWeight: '700', fontSize: '1.4rem' }}>Permissions</p>
                    <div className={styles.chechBoxContainer}>
                        {
                            permissions.map((item, i) => <FormControlLabel key={i} control={<Checkbox />} value={item?.id} label={item?.code_name} onChange={(e) => handleCheckBoxes(e)} />)
                        }
                        {errorMessages?.permission && <p className='formErrorText'>{errorMessages?.permission[0]}</p>}

                    </div>
                    <div className={styles.modalBtnContainer}>
                        <Button variant='outlined' onClick={() => setIsModal(false)}>Cancel</Button>
                        <Button type='submit' variant='contained' style={{ background: "#7367F0" }}
                            disabled={addNewUserState.isLoading}>{addNewUserState.isLoading ? 'Please wait...' : 'Save details'}</Button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
