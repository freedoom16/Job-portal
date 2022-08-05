import { Container } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {UserAuth} from '../../context/AuthContext'
import Dashboard from './components/Dashboard';

function ProfileJ(){
    const { user, logout } = UserAuth();
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await logout();
        navigate('/');
        console.log('You are logged out')
      } catch (e) {
        console.log(e.message);
      }
    };  

    return(
      <Container>
        <Dashboard />
      </Container>
    
    );
}

export default ProfileJ;