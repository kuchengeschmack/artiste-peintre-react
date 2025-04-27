import { List, ListItem, Typography } from "@mui/material";

export const Lesson = () => (
  <article>
    <Typography variant="h1">Cours de piano disponibles dès maintenant !</Typography>
    <Typography variant="h2">Bagnères de Bigorre</Typography>
    <Typography>
      Je suis une pianiste expériementée offrant des cours de piano
      personnalisés pour tous les âges et tous les niveaux.
    </Typography>
    <List>
      <ListItem>
        Apprenez dans une atmosphère chaleureuse et encourageante qui transforme
        chaque leçon en une expérience agréable et enrichissante.
      </ListItem>
      <ListItem>
        Chaque élève est unique, et mes cours sont adaptés à vos goûts musicaux,
        votre rythme d'apprentissage et vos objectifs personnels.
      </ListItem>
      <ListItem>
        Je possède plus de 20 ans d'expérience dans l'enseignement du piano que
        j'ai exercé entre autres en Centre Culturel.
      </ListItem>
      <ListItem>
        Ma méthodologie et mon grand sens relationnel m'ont toujours permis de
        développer une bonne ambiance de travail avec mes élèves.
      </ListItem>
      <ListItem>
        J'ai toujours voulu partager ma passion pour la musique et
        l'enseignement m'a apporté un réel épanouissment.
      </ListItem>
    </List>
    <Typography>
      L'efficacité de l'apprentissage dans la bonne humeur est mon objectif.
    </Typography>
    <Typography>
      Contactez-moi dès aujourd'hui au <strong>06.83.73.61.84</strong> afin de
      réserver votre première leçon et commencer votre voyage musical.
    </Typography>
  </article>
);
