import { Box, Container, Divider, Drawer, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import Categories from "./Categories";
import Events from "./Events";

const drawerWidth = '140px'

export default function Admin() {

  const { path, url } = useRouteMatch()

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant='permanent' sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}>
        <Toolbar />
        <Divider />
        <List>
          {['Events', 'Categories', 'Swiper'].map(text => (
            <ListItemButton key={text} component={NavLink} activeStyle={{ backgroundColor: '#c9c9c9' }} to={`${url}/${text.toLowerCase()}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Container>
        <Switch>
          <Route path={`${path}/events`}>
            <Events />
          </Route>
          <Route path={`${path}/categories`}>
            <Categories />
          </Route>
        </Switch>
      </Container>
    </Box>
  )
}