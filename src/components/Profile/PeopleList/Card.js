import React from 'react';
import Button from '@material-ui/core/Button';
import { Paper, Typography, Dialog } from '@material-ui/core';
import { ProfileDetails } from '../../ProfileDetails/ProfileDetails';

const TeacherCard = (props) => {

   const [open, setOpen] = React.useState(false);
 return(
    <Paper variant="outlined" style={{marginBottom:'30px', backgroundColor:'white' ,marginLeft:'30px', borderRadius:'20px', marginTop:'30px', width:'400px', padding:'30px'}}>
        <img style={{width:'200px', marginBottom : '8px'}} src={props.data.profile_picture}/>
        <div>
           <Typography variant='h4'>{props.data.name}</Typography>
           <Typography variant='h6'>{props.data.designation}</Typography>
           
           <p>{props.data.email_secondary}</p>                 
           <Button onClick={(e)=> {
              e.preventDefault()
               setOpen(!open)
           }} style={{width:'150px', height:'40px'}} variant="contained" color="primary" name="submitbutton" id="submitbutton" disableElevation disableRipple >
             {open ? "Go Back" : "View Profile"}
           </Button>
           <Dialog open={open} onClose={()=> {setOpen(false)}}>
           <Button onClick={(e)=> {
                 e.preventDefault()
                  setOpen(!open)
              }} style={{width:'150px', height:'40px'}} variant="contained" color="primary" name="submitbutton" id="submitbutton" disableElevation disableRipple >
                {open ? "Go Back" : "View Profile"}
              </Button>
              
            <ProfileDetails data={props.data} user={props.user}/>
           </Dialog>
        </div>
    </Paper>
 )
}


export default TeacherCard;
