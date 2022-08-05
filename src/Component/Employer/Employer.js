import { Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import {  useNavigate } from "react-router-dom";

export default function Employer() {
  const navigate = useNavigate();
  const login = async () => {
    navigate("/signin",{ replace: true })
  };
  return (
    <Container>
         <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
            >
              post
          </Button>

          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={login}
            >
              edit
          </Button>

          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={login}
            >
              view 
          </Button>

          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={login}
            >
              delete
          </Button>
          
        
    </Container>
  )
}
