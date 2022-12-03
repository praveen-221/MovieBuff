import React, { useState } from 'react';
import {
   Drawer,
   FormControl,
   List,
   ListItem,
   TextField,
   IconButton,
   Typography,
   ListItemText,
   Link,
   Divider,
   FormHelperText,
} from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import DrawerButton from './UI/DrawerButton.js';
import theme from '../theme.js';

import { ReactComponent as AppStoreIcon } from '../assets/app-store-badge.svg';
import { ReactComponent as PlayStoreIcon } from '../assets/google-play-badge.svg';
import axios from 'axios';

////////////////////////////////////////////////////////////////////////////////

const style = {
   margin: 'auto',
   width: '100%',
   maxWidth: 360,
};

/////////////////////////////////////////////////////////////////////////////////////

export default function AppDrawer(props) {
   const [mail, setMail] = useState("");
   const [pass, setPass] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('/login',{
         email: mail,
         password: pass
      })
      .then(function(response){
         console.log(response);
      })
      .catch(function(err){
         console.log(err);
      })
      setMail("");
      setPass("");
   }

   return (
      <>
         <Drawer elevation={8} anchor="right" open={props.isDrawer}>
            <List
               sx={{
                  mx: 2,
                  mt: 1,
                  [theme.breakpoints.down('md')]: {
                     mx: 3,
                  },
               }}
            >
               <ListItem>
                  <IconButton color="primary" onClick={props.toggleDrawer}>
                     <CloseIcon />
                  </IconButton>
                  <Typography
                     sx={{
                        margin: 'auto',
                     }}
                     variant="h4"
                  >
                     User Login
                  </Typography>
               </ListItem>

               <ListItem
                  sx={{
                     width: '100%',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                  }}
               >
                  <FormControl sx={{ minWidth: '25vw' }} onSubmit={handleSubmit}>
                     <TextField
                        color="primary"
                        variant="filled"
                        type="email"
                        label="Email"
                        value={mail}
                        onChange={e => setMail(e.target.value)}
                        required
                     />
                     <FormHelperText sx={{ mb: 2 }} id="my-helper-text">We'll never share your email.</FormHelperText>

                     <TextField
                        variant="filled"
                        type="password"
                        label="Pasword"
                        value={pass}
                        onChange={e=>setPass(e.target.value)}
                        required
                     />
                  </FormControl>
               </ListItem>

               <ListItem
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     gap: '0.5rem',
                     mb: '1rem',
                  }}
               >
                  <Link href="#" variant="body1" underline="hover">
                     Forgot Password?
                  </Link>

                  {/* <Link href="#" variant="body1" underline="hover">
                     Login with OTP
                  </Link> */}
               </ListItem>

               <ListItem>
                  <DrawerButton
                     style={{ width: '100%' }}
                     startIcon={<LoginIcon />}
                  >
                     Login
                  </DrawerButton>
               </ListItem>

               <ListItem sx={{ mb: 1 }}>
                  <DrawerButton
                     style={{ width: '100%' }}
                     color="secondary"
                     startIcon={<AppRegistrationIcon />}
                  >
                     Signup
                  </DrawerButton>
               </ListItem>

               <ListItem
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     gap: '0.5rem',
                     mb: '1.5rem',
                  }}
               >
                  {/* <DrawerButton
                     style={{
                        backgroundColor: '#3F5297',
                        width: '100%',
                        fontSize: '1.8rem',
                        borderRadius: '1rem',
                     }}
                  >
                     <i class="fab fa-facebook-f"></i>
                  </DrawerButton>

                  <DrawerButton
                     style={{
                        backgroundColor: '#DB5943',
                        width: '100%',
                        fontSize: '1.8rem',
                        borderRadius: '1rem',
                     }}
                  >
                     <i class="fab fa-google-plus-g"></i>
                  </DrawerButton> */}
               </ListItem>

               <Divider />

               <List sx={style} component="p">
                  <ListItem button>
                     <ListItemText primary="About Me" align="center" />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                     <ListItemText primary="Catch Up with Me" align="center" />
                  </ListItem>
                  <Divider />
               </List>
               <ListItem>
                  {/* <AppStoreIcon style={{ marginRight: '4px' }} /> */}
                  {/* <PlayStoreIcon /> */}
               </ListItem>
            </List>
         </Drawer>
      </>
   );
}
