import fastify from "fastify";
import cors from "@fastify/cors";
import sgMail from "@sendgrid/mail"

// SECRET ENREGISTRE VIA NODE20.0 5node package.json : --env-file=.env
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = fastify();

// CORS
await app.register(cors, {
  origin: "*",
  methods: "GET, POST",
});

// ROUTES

app.get("/", async (req, res) => {
  res.send({ message: "Hello from the route handler!" });
});

app.post("/api", async (req, res) => {
  //it's the handler function
  try {
    let receivedForm = {
      nom: req.body.nom,
      prenom: req.body.prenom,
      telephone: req.body.telephone,
      email: req.body.email,
      messagecontent: req.body.messagecontent,
    };
    console.log(receivedForm);

    let msg = {
      to: 'teotime.pac@outlook.fr',
      from: process.env.FROM_EMAIL,
      subject: 'Demande de contact - site mairie',
      html: `<strong>${receivedForm.prenom}</strong></br><strong>${receivedForm.nom}</strong></br><span>${receivedForm.email}</span></br><span>${receivedForm.telephone}</span></br><p>${receivedForm.messagecontent}</p>`,
    };

    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })();

    res
      .status(201)
      .send({ confmessage: "Form received on backend with success" });
  } catch (error) {
    res
      .status(500)
      .send({
        errMessage:
          "Erreur côté serveur suite à la soumission de votre formulaire",
      });
  }
});
//fonction qui permet de démarrer notre serveur
const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    console.error(err);
    process.exit(1); //permet de finir le processus en cas d'erreur avec le code erreur 1
  }
};
// appel de la fonction pour démarrer serveur
start();
