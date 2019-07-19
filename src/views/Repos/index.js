import React, { useState } from 'react';
import { getRepositories, getCommits } from '../../api/index'
import { Link } from "react-router-dom";

export default function Login() {

  const [username, setUsername] = useState('')
  const [repositories, setRepositories] = useState([])
  const [commits, setCommits] = useState({})
  function handleSubmit(evt) {
    evt.preventDefault()
    getRepositories(username)
    .then(repositories => setRepositories(repositories))

  }


  return (
    <>
      <form onSubmit={(evt => handleSubmit(evt))}>
        <input type="text" onChange={(evt) => setUsername(evt.target.value)} />
        <button type="submit">Click</button>
      </form>
        <table>
          <tr>
            <td>Repository</td>
            <td>Link</td>
            <td>language</td>
            <td>Go To</td>
          </tr>
      {
        repositories.length > 0 && repositories.map((repository, index) => {
         return ( <tbody key={repository.id}>
            <tr >
              <td>{repository.name}</td>
              <td><a href={repository.html_url}>Go to repository page</a></td>
              <td>{repository.language}</td>
              <td><Link to={{
                pathname: '/commits',
                state: {
                  username: username,
                  repository: repository.name
                }
              }}>See commits</Link></td>  
                      
           </tr>
          </tbody>
          )})
        }
        </table>
    </>
  );
}
