import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from 'react';
import { db } from "../../../firebaseConfig"
import {
    collection,
    getDocs
  } from "firebase/firestore";
import { Container } from '@mui/system';

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


export default function Dashboard() {
  const [Expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!Expanded);
  };
  
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "job");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, );

  return (
    <Container >
            {users.map((user) => {
              return ( 
                <Container >
                {" "}
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title= {user.jobTitile}
                    subheader="September 14, 2016"
                    
                  />
                  {" "}
                  <Typography >jobType : {user.jobType}</Typography>
                  <Typography >salary : {user.jobSalary}</Typography>
                  <CardMedia
                    component="img"
                    height="194"
                    image="/logo.png"
                    alt="photo"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {user.jobDescrption}
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={Expanded}
                      onClick={handleExpandClick}
                      aria-expanded={Expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  
                </Card>
              </Container>
        );})}
        </Container>
  );
  }
