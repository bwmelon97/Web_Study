import axios from "axios";

export const getGithubUser = async (username: string) => {
    const res = await axios.get<GithubUser>(`https://api.github.com/users/${username}`)

    return res.data;
}

export type GithubUser = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
    name:                string;
    company:             null;
    blog:                string;
    location:            null;
    email:               null;
    hireable:            null;
    bio:                 string;
    twitter_username:    null;
    public_repos:        number;
    public_gists:        number;
    followers:           number;
    following:           number;
    created_at:          Date;
    updated_at:          Date;
}