import  { useContext } from 'react';
import { AuthContext } from './Authentication';

const LoginLogout = () => {
    const { isLoggedIn, login, logout } = useContext(AuthContext);

    const renderContent = () => {
        if (isLoggedIn) {
            return (
                <>
                    <h1>Welcome! You are logged in.</h1>
                    <button onClick={logout} >
                        Logout
                    </button>
                </>
            );
        } else {
            return (
                <>
                    <h1>Please log in to continue.</h1>
                    <button onClick={login} >
                        Login
                    </button>
                </>
            );
        }
    };

    return <div>{renderContent()}</div>;
};

export default LoginLogout;
