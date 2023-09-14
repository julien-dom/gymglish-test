# Art by Women - The Cleveland Museum of Art

https://github.com/julien-dom/women-art-cleveland/assets/124796074/da7eba7d-ccdf-4d7b-a29c-40654b00f755

## Documentation

### API
API utilisée : https://openaccess-api.clevelandart.org/
The Cleveland Museum of Art Open Access API
API open source du musée de Cleveland avec plus de 60 000 œuvres et ne nécessitant pas de clé d'authentification

### Description :
Le projet propose à partir de cette API de mettre en avant les œuvres de Femmes Artistes présentes dans le musée.

La HomeScreen  présente une galerie d'images obtenues depuis l'API, des informations succinctes sur les œuvres et la possibilité de les filtrer par départements & collections. Les œuvres sont cliquables.

L'ArtworkScreen présente plus de détails (technique, fun facts, description plus détaillée...) sur l'oeuvre choisie et la possibilité de l'ajouter ou supprimer des Favoris

La FavoriteScreen montre les favoris et offre la possibilité de supprimer tous les favoris d'un coup ou individuellement. Les œuvres sont aussi cliquables depuis cette page. 
Un composant principal (artwork) est utilisé dans chacune des screens avec à chaque fois un style différent et un nombre de données proposé à l'utilisateur variant d'une screen à l'autre.

### Difficultés rencontrées :
Les images provenant de l'API sont asssez lourdes même en choisissant le format web (temps de chargement des images trop long. Tentative avec FastImage mais abandonnée car non supporté pour Expo Go. Point à améliorer)
