
import { Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <>

            <Outlet />
            {/* <div>
                <h1>Welcome to the Base Page</h1>
                <p>Put the necessary page images for the a seemingly interesting Landing Page to the app.</p>
            </div>
            <div className="space-x-4">
                <button onClick={() => navigate("/login")} className="px-4 py-2 bg-green-700 text-white rounded">Go to Login</button>
                <button onClick={() => navigate("/sign-up")} className="px-4 py-2 bg-red-700 text-white rounded">Go to Sign-up</button>
            </div> */}
            <ToastContainer />
        </>
    )
}

export default MainLayout