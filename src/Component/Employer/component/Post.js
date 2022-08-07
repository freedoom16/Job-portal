import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { db } from "../../../firebaseConfig"
import {
  collection,
  addDoc
} from "firebase/firestore";

const theme = createTheme();
export default function Post() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      jobTitle: data.get('JobTitle'),
      jobType: data.get('JobType'),
    });
  };


  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobDescrption, setJobDescrption] = useState("");

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);


  const usersCollectionRef = collection(db, "job");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { jobTitile: jobTitle, jobType: jobType ,jobSalary: jobSalary, jobDescrption: jobDescrption});
  };
  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, { jobTitle: JobTitle, jobType: JobType});
  // };

  return (
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
          <Typography component="h1" variant="h5">
            post job
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="job-title"
                  required
                  fullWidth
                  id="job-title"
                  label="job title"
                  autoFocus
                  onChange={(event) => {
                    setJobTitle(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="job-type"
                  label="job type"
                  name="job-type"
                  autoComplete="job type"
                  onChange={(event) => {
                    setJobType(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="salary"
                  label="salary"
                  name="salary"
                  autoComplete="salary"
                  onChange={(event) => {
                    setJobSalary(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  height="100px"
                  name="descrption"
                  label="descrption"
                  type="descrption"
                  id="descrption"
                  autoComplete="descrption"
                  onChange={(event) => {
                    setJobDescrption(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: 'none' }}
                  onChange={e => setSelectedImage(e.target.files[0])}
                />
                <label htmlFor="select-image">
                  <Button variant="contained" color="primary" component="span">
                    Upload Image
                  </Button>
                </label>
                {imageUrl && selectedImage && (
                  <Box mt={2} >
                    <img src={imageUrl} alt={selectedImage.name} height="100px" />
                  </Box>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={createUser}
            >
              post
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}