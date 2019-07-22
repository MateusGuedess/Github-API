import React,{ useState, useEffect } from 'react';
import { getCommits } from '../../api/index'

import { StyledBar, StyledContainer, StyledItem } from './styles'

export default function Commits({location, history}) {

  const [commits, setCommits] = useState([])
  const [begin, setBegin] = useState(0)
  const [end, setend] = useState(20)
     function getData(){
      getCommits(location.state.username, location.state.repository)
      .then(res => setCommits(res))

      return(<>teste</>)
    }

    window.addEventListener("scroll", function (event) {
      let scroll = this.scrollY;

      if(document.body.offsetHeight - window.innerHeight == scroll ) {
        setend(end+20)
      }
    });
  
  return (
    <StyledContainer>
        <StyledBar>
          <span style={{flexGrow: '0', paddingLeft:40}}onClick={() => history.goBack()}>Go back</span>
          <h1 style={{flexGrow: '2'}}>commits</h1>
        </StyledBar>
        {  
          commits.length < 1 && 
          <>
            {getData()}
            
          </>
        }
        {
          commits.slice(begin, end).reverse().map((commit, index) =>
          <StyledItem>
            <h2 style={{width: '4%'}}>{index}</h2>
            <img style={{width: '4%'}} src={commit.author.avatar_url} height="50px" style={{borderRadius: 30}} />
            <span style={{width: '15%'}}>{commit.commit.author.name}</span>
            <span style={{width: '15%'}}>{commit.commit.author.email}</span>
            <span style={{width: '15%'}}>{commit.commit.author.date}</span>
            <span style={{width: '47%'}}>{commit.commit.message}</span>
          </StyledItem>
          )
        }
    </StyledContainer>
  );
}
