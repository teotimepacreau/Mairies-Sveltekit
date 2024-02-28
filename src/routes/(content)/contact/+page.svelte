<script>
  import { error } from "@sveltejs/kit";

  const handleSubmit = async (e) => {
    e.preventDefault();
    let message = {
      nom: document.querySelector("#nom").value.trim(),
      prenom: document.querySelector("#prenom").value.trim(),
      messagecontent: document.querySelector("#message").value.trim(),
    };
    try {
      await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    } catch (error) {
      throw error(
        500,
        "Erreur côté serveur suite à la soumission de votre formulaire"
      );
    }
  };
</script>

<section class="mt-10">
  <h1 class="text-4xl font-bold">Contact</h1>
  <form on:submit={() => handleSubmit()} method="post" class="mt-6">
    <div class="flexer | flex flex-col">
      <label for="nom">Nom</label>
      <input type="text" name="nom" id="nom" />
      <label for="prenom">Prénom</label>
      <input type="text" name="prenom" id="prenom" />
      <label for="message">Votre message</label>
      <textarea name="message" id="message" cols="30" rows="4"></textarea>
    </div>
    <button type="submit">Envoyer</button>
  </form>
</section>

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
    @apply mt-4 bg-slate-800 px-3 py-0.5 text-slate-50 rounded-sm;
  }
  input:focus-within,
  textarea:focus-within {
    outline: none;
    @apply border-slate-800;
  }
</style>
