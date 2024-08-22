Login.js
update profile -after user is successfullly authenticated we need to update the name and photoURL so this API is for that purpose

Ques. -> if is user is not signed in then it should not go to browse page and if user is on browse page then it should not directly go auth page until i click sign out button
Soln -> onAuthStateChange
when we sign up or sign out everytime authstate change is called and routing will be done and this solve our above issue also
