Login.js
update profile -after user is successfullly authenticated we need to update the name and photoURL so this API is for that purpose

Ques. -> if is user is not signed in then it should not go to browse page and if user is on browse page then it should not directly go auth page until i click sign out button
Soln -> onAuthStateChange
when we sign up or sign out everytime authstate change is called and routing will be done and this solve our above issue also

new Features in Modal

1. add genres
2. add screenshots of that images
3. some changes in existing features
4. similar movies
5. movies Clickable
6. User Reviews
7. Name Validator
