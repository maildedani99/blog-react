import './App.css';
import PostcardView from './pages/postcardview/postcardview';
import PostView from './pages/postview/postview';
import PostForm from './pages/postform/postform.view';
import PostUpdate from './pages/postupdateview/postUpdateview';
import 'materialize-css';
import {IconsProvider} from './contexts/iconscontext';

import {LANDING, POSTCARD, POST, POSTFORM, POSTUPDATE} from './routes/routes';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Switch>
            <IconsProvider>
              <Route exact path={LANDING}>
                <PostcardView />
              </Route>
              <Route exact path={POSTCARD}>
                <PostcardView />
              </Route>
              <Route exact path={POST}>
                <PostView />
              </Route>
              <Route exact path={POSTFORM}>
                <PostForm />
              </Route>
              <Route exact path={POSTUPDATE}>
                <PostUpdate />
              </Route>
            </IconsProvider>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
