# CandidateSearch
CandidateSearch is a web-based application that allows users to scan potential public profiles on GitHub and add them to a list of Potential Candidates for a job.
**Features**
GitHub Profile Exploration: Fetches and displays relevant GitHub user information and repositories for skill buddies.
Responsive Design: Optimized for seamless use across desktop and mobile devices

**Frontend**: React, TypeScript, JavaScript, CSS

## Table of Contents
- [CandidateSearch](#candidatesearch)
  - [Table of Contents](#table-of-contents)
  - [How it works](#how-it-works)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Questions](#questions)


## How it works
When the app is loaded, the user is presented with a potential candidate search page.  They can then click the plus or minus button.  Plus will add the candidate to the list of Potential Candidates (accessed through the navbar at top).  Minus will display the next candidate.

## Usage
Run npm run start:dev and navigate to the prompted URL to see your app in dev.
The app is deployed to render.Click the below link for working application.
[https://candidatesearch-6mel.onrender.com/]

## Installation
1. Clone the repository:
[https://github.com/kristivent/candidatesearch]

2.  Build
Install dependencies
```sh
npm i
```
3.  Start the server and the client using
```
npm run start:dev
```

## Questions
Please contact ventk84@gmail.com with any questions.
Starter code from Rutgers Bootcamp used for portions of application.
*Note - the API key, although acquired, was presenting with an error that prevented the page from loading correctly.  In office hours, we were unable to resolve this and commented out the use of the web token so that the application can still run, but it does have a rate limit. 
