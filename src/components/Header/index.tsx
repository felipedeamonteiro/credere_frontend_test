import React, { useCallback, useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

// import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

const Header: React.FC = () => {
  const [initials, setInitials] = useState<string>('JD');
  // const { signOut, user } = useAuth();

  // useEffect(() => {
  //   if (user) {
  //     setInitials(
  //       user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase(),
  //     );
  //   }
  // }, [user]);

  const handleSignOut = useCallback(() => {
    console.log('Saiu da aplicação');
    // signOut();
  }, []);

  return (
    <Container>
      <div className="left-div">
        <h2>Mars Probe Management Dashboard</h2>
      </div>
      <div className="right-div">
        <h3>PILOT:</h3>
        <h4>JOHN DOE</h4>
        {/* <h4>{user?.name}</h4> */}
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