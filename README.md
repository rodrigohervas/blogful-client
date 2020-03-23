# Blogful React client

React client to fetch CRUD operations from blogful-server repo

Technologies used: HTML, CSS, Javascript, React, React-Router, Fetch API


## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone https://github.com/rodrigohervas/blogful-client NEW-PROJECT-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -r Force .git` and `git init`
4. Make sure that the .gitignore file is encoded as 'UTF-8'
5. Install the node dependencies `npm install`
6. Add an `.env` file with the following content:
    1. REACT_APP_API_ENDPOINT='https://blogfulrh.herokuapp.com/api/articles/' [or a localhost endpoint if using repo blogful-server]
    2. REACT_APP_API_KEY=[your_api_key_here]
    * Note: The endpoint url and api key depends on what you generate in: https://github.com/rodrigohervas/blogful-server
7. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "blogful-client",`


## Related repos:

https://github.com/rodrigohervas/blogful-server


## Scripts

Start the application `npm start`


## Live Site

https://blogfulrh.now.sh/