import { useEffect, useState, useRef, useContext, useCallback  } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth.context';

const SessionWarning = ({ onContinue, onLogout }) => {
    return (
        <div className="session-warning">
            <p>La sesión está a punto de expirar. ¿Desea continuar?</p>
            <button onClick={onContinue}>Continue</button>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

SessionWarning.propTypes = {
    onContinue: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
};

const SessionManager = () => {
    const { authenticateUser, isLoggedIn } = useContext(AuthContext);
    const [showWarning, setShowWarning] = useState(false);
    const [isSessionActive, setIsSessionActive] = useState(true);

    const inactivityTimer = useRef(null);
    const warningTimer = useRef(null);

    const handleLogout = useCallback(() => {
        setShowWarning(false);
        // Clear tokens and logout logic
        localStorage.removeItem('authToken');
        setIsSessionActive(false);
        window.location.href = '/login'; // Redirect to login page
    }, []);

    const resetTimers = useCallback(() => {
        if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
        if (warningTimer.current) clearTimeout(warningTimer.current);

        inactivityTimer.current = setTimeout(() => {
            setShowWarning(true);
            warningTimer.current = setTimeout(() => {
                handleLogout();
            }, 30000); // 30 seconds to respond
        }, 150000); // 2.5 minutes to show the warning
    }, [handleLogout]);

    const handleContinue = useCallback(() => {
        setShowWarning(false);
        resetTimers();
        authenticateUser();
    }, [resetTimers, authenticateUser]);

    useEffect(() => {
        if (isLoggedIn) {
            resetTimers();
            window.addEventListener('mousemove', resetTimers);
            window.addEventListener('keydown', resetTimers);
        }

        return () => {
            if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
            if (warningTimer.current) clearTimeout(warningTimer.current);
            window.removeEventListener('mousemove', resetTimers);
            window.removeEventListener('keydown', resetTimers);
        };
    }, [isLoggedIn, resetTimers]);

    if (!isSessionActive) return null;

    return (
        <>
            {showWarning && (
                <SessionWarning onContinue={handleContinue} onLogout={handleLogout} />
            )}
        </>
    );
};

export default SessionManager;
