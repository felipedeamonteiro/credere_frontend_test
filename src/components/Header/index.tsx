import React, { useCallback, useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

/**
 * A standard Header component to be used many times in the application.
 * It has its style, but its possible to get it and change the original style,
 * if needed.
 */

const Header: React.FC = () => {
  // Usage of state to control the initials shown and usage of auth hook
  const [initials, setInitials] = useState<string>('');
  const { signOut, user } = useAuth();

  // useEffect to initialize the component with the name initials
  useEffect(() => {
    if (user) {
      setInitials(
        user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase(),
      );
    }
  }, [user]);

  // Function to Sign Out the application. The signout function is in the auth hook,
  // and it removes the data stored in browser localStorage
  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <div className="left-div">
        <h2>Painel de Controle da Sonda Marciana</h2>
      </div>
      <div className="right-div">
        <h3>PILOTO(A):</h3>
        <h4>{user?.name}</h4>
        <div className="user-initials">{initials}</div>
        <button type="button" onClick={handleSignOut} className="logout">
          <FaSignOutAlt size={20} />
          <p>Logout</p>
        </button>
      </div>
    </Container>
  );
};

export default Header;
