import React, {Component} from 'react';
import Post from "./components/Post";
import './App.css'

class App extends Component {

    render() {

        return (
            <div className="wrapper">
                <div className="container">
                    <Post/>
                </div>
            </div>
        );
    }
}


export default App;
