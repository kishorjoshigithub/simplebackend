const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 4000;

const githubData = {
  login: "Kishorjoshi",
  id: 41635744,
  node_id: "MDQ6VXNlcjQxNjM1NzQ0",
  avatar_url: "https://avatars.githubusercontent.com/u/41635744?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Kishorjoshi",
  html_url: "https://github.com/Kishorjoshi",
  followers_url: "https://api.github.com/users/Kishorjoshi/followers",
  following_url:
    "https://api.github.com/users/Kishorjoshi/following{/other_user}",
  gists_url: "https://api.github.com/users/Kishorjoshi/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Kishorjoshi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Kishorjoshi/subscriptions",
  organizations_url: "https://api.github.com/users/Kishorjoshi/orgs",
  repos_url: "https://api.github.com/users/Kishorjoshi/repos",
  events_url: "https://api.github.com/users/Kishorjoshi/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Kishorjoshi/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2018-07-24T13:49:14Z",
  updated_at: "2022-03-21T19:47:02Z",
};

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login to your account</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

//Server listening
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
