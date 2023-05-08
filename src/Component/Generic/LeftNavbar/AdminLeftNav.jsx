import { FaRegBuilding } from 'react-icons/fa'
import { BsTerminal } from 'react-icons/bs'
import { GoBook } from 'react-icons/go'
import { Layout, Menu } from 'antd';
import styles from '@/styles/adminNavbar.module.css'
import { AiOutlineHome, AiOutlineLogout, AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const { Sider } = Layout;

function AdminLeftNav({ collapsed }) {
    const router = useRouter()
    const pathname = router.asPath.split('/dashboard/admin/')[1];

    const [defaultSelectedItem, setDefaultSelectedItem] = useState('1')

    useEffect(() => {
        if (pathname) {
            if (pathname === 'create-school')
                setDefaultSelectedItem('2')
            else if (pathname === 'term-system')
                setDefaultSelectedItem('3')
            else if (pathname === 'manage-lessons')
                setDefaultSelectedItem('4')
            else if (pathname === 'user-roles')
                setDefaultSelectedItem('5')
            else if (pathname === 'finances')
                setDefaultSelectedItem('6')
            else if (pathname === 'account-settings')
                setDefaultSelectedItem('7')
        }
        else
            setDefaultSelectedItem('1')
    }, [])

    const handleChange = ({ key }) => {
        if (key === '1')
            router.push('/dashboard/admin')
        else if (key === '2')
            router.push('/dashboard/admin/create-school')
        else if (key === '3')
            router.push('/dashboard/admin/term-system')
        else if (key === '4')
            router.push('/dashboard/admin/manage-lessons')
        else if (key === '5')
            router.push('/dashboard/admin/user-roles')
        else if (key === '6')
            router.push('/dashboard/admin/finances')
        else if (key === '7')
            router.push('/dashboard/admin/account-settings')
        else if (key === '8') {
            localStorage.clear()
            router.push('/')
        }
    }

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}
            collapsedWidth={'85px'}
            width={'270px'}
            style={{ minHeight: '100%' }}
            className={styles.layout_nav}
        >
            <div className={styles.logo} >
                {
                    collapsed ? 'K' : 'KAINO'
                }
            </div>
            <Menu
                theme="dark"
                mode="inline"
                style={{
                    background: '#891b55',
                    padding: "10px 16px",
                    borderRadius: "0 20px 16px 0",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "1.1rem"
                }}
                defaultSelectedKeys={['1']}
                selectedKeys={[defaultSelectedItem]}
                onSelect={(info) => handleChange(info)}
                items={[
                    {
                        key: '1',
                        icon: <AiOutlineHome size={"1.6rem"} />,
                        style: { width: "100%" },
                        label: 'Dashboard'
                    },
                    {
                        key: '2',
                        icon: <FaRegBuilding size={"1.6rem"} />,
                        style: { width: "100%" },
                        label: 'Create School',
                    },
                    {
                        key: '3',
                        icon: <BsTerminal size={"1.6rem"} />,
                        style: { width: "100%" },
                        label: 'Term System',
                    },
                    {
                        key: '4',
                        icon: <GoBook size={"1.6rem"} />,
                        style: { width: "100%" },
                        label: 'Lessons',
                    },
                    {
                        key: '5',
                        icon: <AiOutlineUserAdd size={"1.6rem"} />,
                        style: { width: "100%" },
                        label: 'User roles',
                    },
                    {
                        key: '6',
                        icon: <CgNotes size={"1.6rem"} />,
                        style: { width: "100%" },
                        label: 'Finances',
                    },
                    {
                        key: '7',
                        icon: <AiOutlineSetting size={"1.6rem"} />,
                        style: { width: "100%" },
                        label: 'Settings',
                    },
                    {
                        key: '8',
                        icon: <AiOutlineLogout size={"1.6rem"} />,
                        style: { width: "100%" },
                        label: 'Log out'
                    },
                ]}
            />
        </Sider>
    )
}

export default AdminLeftNav