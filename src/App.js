import './App.css';
import Users from "./layouts/Users"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { PrivateRoute } from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRouter";
import SliderLayoutAdmin from "./components/Slider";
import HeaderLayoutAdmin from "./components/Header";

function App() {
    return (
        <Router>
            <Route path="/admin">
                <Layout>
                    <HeaderLayoutAdmin />
                    <SliderLayoutAdmin />
                    <Layout className="site-layout">
                        <Switch>
                            <Route exact path="/admin/users" component={Users} />
                        </Switch>
                    </Layout>
                </Layout>
            </Route>
        </Router>
    );
}

export default App;
