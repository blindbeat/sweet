import { Button } from "@mui/material";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import CreateEvent from "./Create";

export default function Events() {

  const { url, path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Button variant='contained' component={Link} to={`${url}/create`}>Create</Button>
      </Route>

      <Route exact path={`${path}/create`}>
        <CreateEvent url={url} />
      </Route>
    </Switch>
  )
}