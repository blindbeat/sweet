import API_URI from "./baseUrl";
const { token } = JSON.parse(localStorage.getItem('user'))

export async function getCategoriesRequest() {
  const response = await fetch(`${API_URI}/category/findmany`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!response.ok) {
    console.log(response);
  }

  return await response.json()
}


export async function createCategoryRequest({ name, iconId }) {
  const response = await fetch(`${API_URI}/category/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      args: {
        data: {
          title: name,
          image: iconId
        }
      }
    })
  })

  if (!response.ok) {
    console.log(response);
  }

  return await response.json()
}

export async function uploadCategoryImagerequest(image) {

  const form = new FormData()
  form.append('image', image, image.name)

  const response = await fetch(`${API_URI}/category/imageupload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: form
  })


  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}