import { Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import {  useNavigate } from "react-router-dom";

export default function Employer() {
  const navigate = useNavigate();
  const post = async () => {
    navigate("/employer/post",{ replace: true })
  };
  const view = async () => {
    navigate("/employer/view",{ replace: true })
  };

  return (
    <Container>
         <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={post}
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
              onClick={view}
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
