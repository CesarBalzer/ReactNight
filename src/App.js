import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import './App.css';

const FIELDS = [
  'title', 'id', 'url'
]


// const iz = ['title', 'setTitle', 'id', 'setId', 'url', 'setUrl']

function App() {

  // const [title, setTitle, id, setId, url, setUrl] = useState('');

  // const r = FIELDS.map((field) => {
  //   // const F = `${field}`
  //   const o = {
  //     [field]: 0,
  //     [`set${field.toUpperCase()[0]}${field.slice(1)}`]: 0
  //   }

  //   return o
  // })

  // console.log({ r })
  // const toObj = (obj, e, i) => {
  //   // const f = 
  //   const [a1, a2] = useState('')

  //   return { ...obj, [e]: [a1, a2] }
  // }
  // const DATA = FIELDS.reduce(toObj, {})
  // console.log({ DATA })

  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {

  }, []);

  async function handleGetDev(data) {

    console.log(data);

    const devs = await listDevGithub(data);

    console.log(devs);
  }


  async function listDevGithub(data) {


    console.log({ data });

    const devs = (await axios.get(`https://api.github.com/users/${data.nome}`)).data;


    console.log({ devs });

    setTitle(devs.name);
    setId(devs.id);
    setUrl(devs.url);

    return devs.data;

  }

  return (
    <div className="App">
      <div className="">
        <h2>Pesquisar dev: {title} </h2>
        <Form onSubmit={handleGetDev} />
      </div>
      <div className="userData">
        <ul>
          <li>
            {id}
          </li>
          <li>
            {title}
          </li>
          <li>
            {url}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
