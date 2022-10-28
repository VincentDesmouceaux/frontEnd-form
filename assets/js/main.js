//Ici avec DOMContentLoaded, on s'assure que toute la page soit bien chargée
document.addEventListener("DOMContentLoaded", () => {
  //   console.log("Hello from main.js".toLocaleUpperCase());
  //   const myH1 = document.querySelector("h1");
  //   console.log(myH1.textContent);

  //   const showButton = document.getElementById("show-btn");
  //   showButton.addEventListener("click", () => {
  //     document.getElementById("text").classList.add("show");
  //     // console.log(document.getElementById("text"));
  //   });

  //   const hiddenButton = document.getElementById("hidden-btn");
  //   hiddenButton.addEventListener("click", () => {
  //     document.getElementById("text").classList.remove("show");
  //   });

  //   const switchButton = document.getElementById("switch-btn");
  //   switchButton.addEventListener("click", () => {
  //     document.getElementById("text").classList.toggle("show");
  //   });

  //   console.log(document.getElementById("text").classList.contains("show"));
  //   switchButton.addEventListener("click", () => {
  //     document.getElementById("text").classList.toggle("show");
  //     if (document.getElementById("text").classList.contains("show")) {
  //       switchButton.textContent = "Masquer le texte";
  //     } else {
  //       switchButton.textContent = "Afficher le text";
  //     }
  //   });

  document
    .getElementById("contact-form")
    .addEventListener("submit", async (event) => {
      //Vient empêcher que le formulaire refresh la page
      event.preventDefault();
      //   console.log("Soumission du Formulaire");

      //1 Récupérer les différentes éléments du formulaire
      //   console.log(document.getElementById("firstname").value);
      //   console.log(document.getElementById("lastname").value);
      //   console.log(document.getElementById("email").value);
      //   console.log(document.getElementById("message").value);

      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      //2 Envoyer à un serveur les informations du formulaire
      const response = await axios.post(
        "http://localhost:4000/send-email",
        data
      );
      console.log(response.data);
      alert("Merci de votre réponse !");
    });
});
