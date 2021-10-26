import { Button, Paper, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "actions/categoriesActions";
import CategoryButton from "components/CategoryButton";

export default function CategoriesList({ url }) {

  // const [categories, setCategories] = useState([])
  // const [loaded, setLoaded] = useState(false)
  // useEffect(() => {
  //   async function setData() {
  //     const { data } = await getCategories(getCategories())
  //     setCategories(data)
  //     setLoaded(true)
  //   }
  //   setData()
  // }, [])

  // return (
  //   <>
  //     <Button variant='contained' component={Link} to={`${url}/create`}>Create</Button>
  //     <Paper sx={{
  //       display: `flex`,
  //       p: 3
  //     }}>
  //       {loaded ?
  //         categories.map(data => {
  //           const { id, ...rest } = data
  //           return <CategoryButton key={id} clickHandler={console.log} {...rest} />
  //         })
  //         :
  //         <Skeleton width={132} height={74} sx={{
  //           borderRadius: '12px'
  //         }} />
  //       }
  //     </Paper>
  //   </>
  // )

  return null
}