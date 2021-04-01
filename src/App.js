import React from 'react';
import './css/App.css';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './component/Navigation';
import { HashRouter, Route} from 'react-router-dom';


function App() {
    return (
        <HashRouter>
            <Navigation/>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/movie_detail" component={Detail}/>
        </HashRouter>
    );
}

export default App;

//https://yts-proxy.now.sh/list_movies.json
//https://yts-proxy.now.sh/movie_details.json