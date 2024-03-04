<script>
  import { error } from "@sveltejs/kit";
  import { fade } from "svelte/transition";

  import { CheckCircle } from "phosphor-svelte";
  import { XCircle } from "phosphor-svelte"

  let displayFormSentNotif = false
  let displayErrorFormNotArrivedServer = false

  const handleSubmit = async () => {
    let message = {
      nom: document.getElementById("nom").value.trim(),
      prenom: document.getElementById("prenom").value.trim(),
      email: document.getElementById("email").value.trim(),
      telephone: document.getElementById("telephone").value.trim(),
      messagecontent: document.getElementById("message").value.trim(),
    };
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      if (response.ok) {
        const inputElements = document.querySelectorAll("input");
        inputElements.forEach((element) => (element.value = ""));
        let textArea = document.querySelector("textarea");
        textArea.value = "";

        // TRIGGER FADE-IN FOR TOAST NOTIF
        displayFormSentNotif = true;

        setTimeout(()=>{
            document.querySelector('.form-sent-success').remove()
        }, 4000)
      }
    } catch (e) {
      displayErrorFormNotArrivedServer = true
      throw error(
        500,
        "Erreur côté serveur suite à la soumission de votre formulaire"
      );
    }
  };
</script>

<section class="mt-10">
  <h1 class="text-4xl font-bold">Contact</h1>
  <form
    on:submit|preventDefault={() => handleSubmit()}
    method="post"
    class="mt-6"
  >
    <div class="flexer | flex flex-col">
      <label for="nom">Nom</label>
      <input required type="text" name="nom" id="nom" />
      <label for="prenom">Prénom</label>
      <input required type="text" name="prenom" id="prenom" />
      <label for="email">Email</label>
      <input required type="email" name="email" id="email" />
      <label for="telephone">Téléphone</label>
      <input required type="tel" name="telephone" id="telephone" />
      <label for="message">Votre message</label>
      <textarea required name="message" id="message" cols="30" rows="4"
      ></textarea>
    </div>
    <button type="submit">Envoyer</button>
  </form>
</section>

{#if displayFormSentNotif}
  <div transition:fade={{delay: 0, duration: 300}} role="alert" class="toast-notif form-sent-success">
    <CheckCircle />
    <span>Formulaire de contact envoyé</span>
  </div>
{/if}

{#if displayErrorFormNotArrivedServer}
  <div transition:fade={{delay: 0, duration: 300}} role="alert" class="toast-notif form-sent-error">
    <XCircle size="1.5rem" />
    <span>Erreur de traitement côté serveur suite à la soumission de votre formulaire</span>
  </div>
{/if}

<style>
  section {
    max-width: 40ch;
  }

  label {
    @apply text-slate-500;
  }

  .flexer label:not(:first-child) {
    @apply mt-4;
  }
  input,
  textarea {
    @apply border-b-2;
  }
  button[type="submit"] {
    @apply mt-4 bg-slate-800 px-3 py-1 text-slate-50 rounded-sm font-semibold;
  }
  input:focus-within,
  textarea:focus-within {
    outline: none;
    @apply border-slate-800;
  }
</style>
