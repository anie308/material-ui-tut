import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router-dom'



const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})



export default function Create() {

  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('work')

  const handleSubmit = (e) => {
    e.preventDefault()
    setDetailsError(false)
    setTitleError(false)

    if (title == ''){
      setTitleError(true)
    }

    if (details == ''){
      setDetailsError(true)
    }

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method : 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category})
      }).then(() => history.push('/') )
    }
  }

  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'>
        Create a New Note
      </Typography>


      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label='Notes Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error= {titleError}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          error= {detailsError}
        />


        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel  value='work' control={<Radio/>} label='Work' />
          <FormControlLabel  value='todos' control={<Radio/>} label='Todos' />
          <FormControlLabel  value='reminders' control={<Radio/>} label='Reminders' />
        </RadioGroup> 
        </FormControl>
        

        <Button
          className={classes.btn}
         
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>


    </Container>
  )
}
