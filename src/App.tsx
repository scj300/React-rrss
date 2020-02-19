import React, {Component} from 'react';
import './App.css';
import Tabla from './Table';
import axios from 'axios';
import { Button } from '@material-ui/core';


class App extends Component {

    state = {
        posts: []
    };

    componentDidMount(): void {
        axios.get('http://127.0.0.1:8000/api/post/').then((response) => {
           // console.log(r.data);
           this.setState({
               posts: response.data
           });
        });

        axios.post('http://127.0.0.1:8000/api/post/');
    }

    render() {
        return (
            <div>
                <Tabla data={this.state.posts}></Tabla>
                <Button variant={"contained"} color="primary" onClick={() => {console.log("Button!!")}}>Send</Button>
            </div>
        );
    }
}

export default App;
