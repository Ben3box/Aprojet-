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
 
