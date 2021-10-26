import { Button, Paper, TextField, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import { createCategory, uploadCategoryImage } from "actions/categoriesActions";

export default function CreateCategory({ url }) {
  const history = useHistory()

  const [requestPending, setRequestPending] = useState(false)
  const [form, setForm] = useState({
    name: '',
    iconId: null
  })
  const [iconName, setIconName] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value });
  }

  async function handleImage(event) {
    setRequestPending(true)
    try {
      setForm({ ...form, iconId: null })
      const image = event.target.files[0]
      const response = await uploadCategoryImage(image)
      setForm({ ...form, iconId: response.data.id })
      setIconName(image.name)
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
      await createCategory(form)
      history.push(url)
    } catch (error) {
      console.log(error);
    } finally {
      setRequestPending(false)
    }
  }

  return (
    <>
      <Button variant='contained' color='error' component={Link} to={`${url}`}>Cancel</Button>
      <Paper elevation={2} sx={{ mt: 2, p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Stack direction='row' justifyContent='space-between' spacing={2}>
            <Stack direction='row' spacing={2} >
              <TextField value={form.name} onChange={handleChange} name='name' label='name' required />
              <Button component='label' variant='contained'>
                Upload Icon
                <input onChange={handleImage} name='icon' type='file' accept='image/*' hidden></input>
              </Button>
              <Typography>
                {iconName}
              </Typography>
            </Stack>
            <Button
              type='submit'
              variant='contained'
              color="success"
              disabled={requestPending || form.iconId === null || form.name === ''}
            >Save</Button>
          </Stack>
        </form>
      </Paper>
    </>
  )
}