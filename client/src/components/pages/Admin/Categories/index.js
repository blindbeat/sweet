import { useRouteMatch, Switch, Route } from "react-router-dom";
import CategoriesList from "./CategoriesList";
import CreateCategory from "./Create";

export default function Categories() {

  const { url, path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <CategoriesList url={url} />
      </Route>

      <Route exact path={`${path}/create`}>
        <CreateCategory url={url} />
      </Route>
    </Switch>
  )
}