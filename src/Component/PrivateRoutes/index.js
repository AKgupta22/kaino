import { useRouter } from 'next/router';

const PrivateRoutes = ({ children }) => {
    const router = useRouter();
    const noAuthRoute = ['/', '/requestAccess', '/resetPassword']
    const token = localStorage.getItem('token')
    const isProtectedRoutes = noAuthRoute.includes(router.pathname)
    if (isProtectedRoutes && token)
        router.push('/dashboard/admin')
    else if (!isProtectedRoutes && !token)
        router.push('/')
    else
        return (
            <>
                {children}
            </>
        )
}

export default PrivateRoutes
