import axios from 'axios'

export const getRepositories = async (username) => {
    let repositories = await axios.get(`https://api.github.com/users/${username}/repos`)
   return repositories.data
}

export const getCommits = async (username, repository) => {
    let commits = await axios.get(`https://api.github.com/repos/${username}/${repository}/commits`)
    return commits.data
}

