import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Table';

const App = () => {
    var posts = [
        {
            'title': 'post 1',
            'content': 'Hello World!',
            'author': 'Sergio',
            'created': '12-02-2020 17:52:00',
            'updated': '12-02-2020 17:52:00'
        },
        {
            'title': 'post 2',
            'content': '  Hi :D :P ^^',
            'author': 'Sergio',
            'created': '12-02-2020 17:52:00',
            'updated': '12-02-2020 17:52:00'
        }
    ];

  return (
    <Table data={posts}></Table>
  );
}

export default App;
