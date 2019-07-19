- Use ES6+ features and write down in the readme why you used and for what, for at least 2 of them;


## Scope Variables and Constants

In commits file:

``` 
    let scroll = this.scrollY;
```

## .map() .filter() .reduce()

in commits file:

``` 
    commits.slice(begin, end).reverse().map((commit, index) =>
        <div style={{display: 'flex',justifyContent: 'space-between', paddingLeft: 10, height: 70, background: 'pink',border: '1px solid black', alignItems: 'center'}}>
            <h2 style={{width: '4%'}}>{index}</h2>
            <img style={{width: '4%'}} src={commit.author.avatar_url} height="50px" style={{borderRadius: 30}} />
            <span style={{width: '15%'}}>{commit.commit.author.name}</span>
            <span style={{width: '15%'}}>{commit.commit.author.email}</span>
            <span style={{width: '15%'}}>{commit.commit.author.date}</span>
            <span style={{width: '47%'}}>{commit.commit.message}</span>
        </div>
    )
 ```

## restructuring

in commits file:

``` 
    getCommits(location.state.username, location.state.repository)
``` 

``` 
    <span style={{flexGrow: '0', paddingLeft:40}}onClick={() => history.goBack()}>Go back</span>
``` 

``` 
    export default function Commits({location, history}) {
``` 