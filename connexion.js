 
// gutora exact location zum user
if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const apiKey = "79df72f8f59fed8cd904ba8e32e31cce";
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        fetch(url)
          .then(response => response.json())
          .then(data => {
            const weatherDescription = data.weather[0].description;
            const icon = data.weather[0].icon;
            const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            const temp = Math.round(data.main.temp - 273.15);
            console.log('temperature : ',temp);
            console.log('url : ',imageURL);
            document.getElementById("imgURL").src = imageURL;
            document.getElementById("temp").innerHTML = temp + '°C';

          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
            

          });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
 import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

document.getElementById('id').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const pname = document.getElementById('pname').value;
    const email = document.getElementById('mail').value;
    const Sujet = document.getElementById('suject').value;
    const Message = document.getElementById('sms').value;
    
    console.log("nom:", name, "Prenom:", pname,"email", email,"Sujet", Sujet, "Message:", Message);
    try {
        // Ajouter un document à la collection "contacts"
        const docRef = await addDoc(collection(window.db, "id"), {
            Nom: name,
            Prenom: pname,
            email: email,
            sujet: Sujet,       
            message: Message,
           // timestamp: new Date() // Ajoute un horodatage
        });
        console.log("Message écrit avec ID: ", docRef.id);

        alert("Message envoyé avec succès !");
    } catch (e) {
        console.error("Erreur lors de l'ajout du message: ", e);
        alert("Une erreur s'est produite lors de l'envoi de votre message : " + e.message);
    }
    // Réinitialiser le formulaire
    document.getElementById('id').reset();
 })
 
