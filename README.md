# Project Description

Projectr is a beautifully designed full-stack project manager app built for teams. <br>
The project roadmap is set in stages where we begin as a simple to-do list and gradually expand functionalities.<br>

## Roadmap

| status | version | functionality         | notes                                                                               |
| ------ | ------- | --------------------- | ----------------------------------------------------------------------------------- |
|        | v1      | Project managment CRUD app  | Full CRUD app. Each project get their own view and projects can hold subtasks. Subtasks will be be grouped together by the status. The prorities and assignees are shown on the each subtasks' show page. |
|        | v2 (Nice to have)| sharing               | users can now share projects with other users                                       |


## List of React Router Routes

| Route Name | Endpoint | Method | Description | 
|------------|----------|--------|-------------|
| Landing | /projects | GET | Renders all projects on a page|
| ProjectShow | /projects/:id | GET | Renders a project and its subtasks|
| ProjectCreate | /projects/create | POST | Creates a project |
| ProjectDelete | /projects/delete/:id | DELETE | Deletes a project |
| TaskShow | /tasks/:id | GET | Renders a project subtask|
| TaskEdit | /tasks/:id | PUT | Updates a project subtask|
| TaskCreate | /tasks/create | POST | Creates a project subtask|
| TaskDelete | /tasks/delete/:id | DELETE | Deletes a project subtask|



## React Architecture (Expected Tree of React Components)
<img src="https://i.imgur.com/PPCL1tC.png"></img>


## Mockups
Main page
<img src="https://i.imgur.com/UGo81Dh.png"></img>
Project showpage
<img src="https://i.imgur.com/Zqeuhuh.png"><img>
Task showpage
<img src="https://i.imgur.com/umR3ZGc.png"><img>
Creat page
<img src="https://i.imgur.com/MpcYrwK.png"><img>