import { Button, Box, Grid, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { createEvent, uploadEventImage } from "actions/eventActions";
import { getCategories } from "actions/categoriesActions";

export default function CreateEvent({ url }) {
  const history = useHistory()

  const [requestPending, setRequestPending] = useState(false)
  const [form, setForm] = useState({
    title: '',
    categories: [],
    description: '',
    imageId: null
  })
  const [categories, setCategories] = useState([])
  const [imageName, setImageName] = useState(null)


  function handleChange(event) {
    const { name, value } = event.target

    switch (name) {
      case 'title':
        setForm({ ...form, title: value });
        break;
      case 'categories':
        setForm({ ...form, categories: value });
        break;
      case 'description':
        setForm({ ...form, description: value });
        break;
      default:
        return;
    }
  }

  async function handleImage(event) {
    setRequestPending(true)
    try {
      setForm({ ...form, iconId: null })
      const image = event.target.files[0]
      const response = await uploadEventImage(image)
      setForm({ ...form, imageId: response.data.id })
      setImageName(image.name)
    } catch (error) {
      console.log(error);
    } finally {
      setRequestPending(false)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setRequestPending(true)
    try {
      await createEvent(form)
      history.push(url)
    } catch (error) {
      console.log(error);
    } finally {
      setRequestPending(false)
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await getCategories()
      setCategories(data)
    }
    fetchCategories()
  }, [])

  return (
    <>
      <Button variant='contained' color='error' component={Link} to={`${url}`}>Cancel</Button>
      <Paper elevation={2} sx={{ mt: 2, p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField value={form.title} onChange={handleChange} name='title' label='Title' fullWidth />
            </Grid>
            <Grid item xs={9}>
              <Select value={form.categories} onChange={handleChange} name='categories' label='Categories' multiple fullWidth>
                {categories.map(category => {
                  return <MenuItem key={category.id} value={category}>{category.title}</MenuItem>
                })}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField value={form.description} onChange={handleChange} name='description' label='Description' multiline rows='12' fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                  <Button component='label' variant='contained'>
                    Upload Image
                    <input onChange={handleImage} name='icon' type='file' accept='image/*' hidden></input>
                  </Button>
                  <Typography>
                    {imageName}
                  </Typography>
                </Box>

                <Button
                  type='submit'
                  variant='contained'
                  color="success"
                  disabled={requestPending || form.imageId === null || form.title === '' || form.categories.length === 0 || form.description === ''}
                >Save</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  )
}