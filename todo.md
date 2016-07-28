# Todos

Styles
  - [ ] Nav Bar
  - [X] Forms
  - [X] Buttons
  - [X] Footer
  - [ ] Grid
  - [X] Alerts

User can...

- [X] Register with Email and Password
  - [X] Error Message
  - [X] Create User
  - [X] Success Redirect to Login
- [X] Login with Email and Password
  - [X] Error Message
  - [X] Login Attempt
  - [X] Success Redirect to Shows
- [ ] Shows List
  - [ ] See show title
  - [ ] See show is favorited
  - [ ] Click on Star to favorite/unfavorite show
- [ ] Show Create Form
  - [ ] Create show for currently logged in user
  - [ ] Success message


## Models

User
- email:string
- password:string (HASH)
- show:hasMany('Show')

Show
- title:string
- ep_time:integer
- num_ep:integer
- movie:boolean
- user:belongsTo('User')
