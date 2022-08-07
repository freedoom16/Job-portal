import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { db } from "../../../firebaseConfig"
import {
    collection,
    getDocs
  } from "firebase/firestore";
  
const theme = createTheme();

function View() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "job");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, );

//   users.map((user) => {
  return (
    <Container>
            {users.map((user) => {
                return (
                <Container>
                    {" "}
                       <ThemeProvider theme={theme}>
                         <Container component="main" maxWidth="xs">
                           <CssBaseline />
                           <Box
                          sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                            {" "}
                          <Typography component="h1" variant="h5">
                            jobTitle : {user.jobTitle}
                          </Typography>
                          <Typography component="h1" variant="h5">
                            jobType : {user.jobType}
                          </Typography>
                          <Typography component="h1" variant="h5">
                            jobSalary : {user.jobSalary}
                          </Typography>
                          <Typography component="h1" variant="h5">
                            posted job : {user.jobDescrption}
                          </Typography>
                        </Box>
                      </Container>
                    </ThemeProvider>
                </Container>
                );
            })}
    </Container>
    
  );
}
// );
// }
export default View