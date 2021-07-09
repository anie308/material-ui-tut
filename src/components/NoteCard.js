import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, makeStyles, Avatar} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography'
import { blue, green, yellow } from '@material-ui/core/colors';


    const useStyles = makeStyles({
        avatar: {
           backgroundColor: (note ) => {
               if (note.category =='work'){
                   return yellow[700]
               }
               if (note.category =='todos'){
                   return green[500]
               }
               if (note.category =='reminders'){
                   return blue[700]
               }
           }
        }
    })



function NoteCard({ note, handleDelete }) {
    const  classes = useStyles(note)

    return (
        <div>
            <Card  elevation={1}
            className={classes.test}
            >

                <CardHeader  
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton  onClick={() => handleDelete(note.id)} >
                        <DeleteOutlined/>
                      </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />

                <CardContent>
                    <Typography  variant='body2' color='textSecondary'>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
