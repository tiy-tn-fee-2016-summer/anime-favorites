# Todos

User can...

- [ ] Register with Email and Password
  - [ ] Error Message
  - [ ] Create User
  - [ ] Success Redirect to Login
- [ ] Login with Email and Password
  - [ ] Error Message
  - [ ] Login Attempt
  - [ ] Success Redirect to Shows
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
