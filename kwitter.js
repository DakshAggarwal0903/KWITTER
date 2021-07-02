function Login(){
    un=document.getElementById("username").value; 
    localStorage.setItem("Username",un);
    window.location="kwitter_room.html" 
}