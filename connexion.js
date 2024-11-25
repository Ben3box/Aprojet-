 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC7G6AFEblsR0AnidMvL3yqgjtTnWzQSTU",
   authDomain: "uijuuh-cb30e.firebaseapp.com",
   projectId: "uijuuh-cb30e",
   storageBucket: "uijuuh-cb30e.firebasestorage.app",
   messagingSenderId: "191683631926",
   appId: "1:191683631926:web:d6e69e3d33360915227197"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
 //ajout du gestionnaire d'evenement
document:getElementById("submit").addeventlistener('click',function(e) {
    e.preventDefault();//empecher          le rechargement de la page
    console.log('click detecte');
    set(ref(db,'contact/'+ document.getElementByID("name").Value),{
        nom:document.getElementById("name").Value,
        Prenom:document.getElementById("pname").Value, 
        email:document.getElementById("mail").Value, 
        Sujet:document.getElementById("subject").Value,
        Message:document.getElementById("sms").Value,
         Date_envoi:document.getElementById("date").Value
    });
    alert("Reussie");
 })
 