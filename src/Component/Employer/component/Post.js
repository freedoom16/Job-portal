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


const theme = createTheme();

export default function Post() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

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
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}