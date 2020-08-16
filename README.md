<img src="https://github.com/arturproj/React--Country_Info/blob/master/react-country.gif" alt="Bakery Gif" style="max-width:100%;">

# Konexio_Country_Info
Exercice ReactJs
Préparation
Créer un dossier react_country avec create-react-app
Analysez le JSON suivant : https://restcountries.eu/rest/v2/name/france
Etape 1 - Bootstrap
Importer Bootstrap dans votre fichier App.js

Etape 2 - App.js (Partie 1)
Créer les states :
name qui sera un string vide
capital qui sera un string vide
flag qui sera un string vide
population qui sera égale à 0
region qui sera un string vide
Créer le JSX pour que tous les states s’affichent sur la page
Créer la méthode componentDidMount dans laquelle vous ferez un fetch sur l’URL : https://restcountries.eu/rest/v2/name/france
Une fois que vous avez reçu la réponse du serveur, changez tous les states correspondant pour les afficher sur la page
Etape 3 - components/Button.js
Créer un composant bouton qui dispatche l’événement onClick.
En écrivant <Button>Send</Button> dans le composant parent, le bouton devra afficher le texte Send
Etape 4 - App.js (Partie 2)
Importer le composant Button
L’ajouter 3 fois avec les textes
France
Brazil
Croatia
Pour chaque bouton, au clic, ils exécuteront un appel fetch avec le nom du pays. Respectivement france, brazil et croatia. A la fin de ce fetch, vous mettrez à jour les states correspondant.
Etape 5 - components/Card.js
Une fois que chaque pays apparaît au click sur le bouton. Optimisez votre code pour le rendre plus lisible.

Créer un composant Card qui aura pour attributs tous les states (seul le state search ne sera pas utilisé)
Afficher toutes les informations du pays en les retirant du fichier App.js et en les mettant dans le composant Card
Ajouter les classes Bootstrap pour rendre votre composant agréable à l’oeil
Etape 6 - Optimisation
Si ce n’est pas déjà fait : créer une méthode qui aura pour paramètre/variable le nom du pays à afficher. Ainsi la fonction fetch ne sera écrite qu’une seule fois dans votre application.
Bonus - Formulaire
Ajouter un input et un bouton Search pour pour que la recherche se fasse en fonction du texte dans l’input
