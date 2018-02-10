# Angular 4_Test
## Outil d'installation 
- Node JS 
- Angular CLI (Command Line Interface) qui permet de générer, compiler, tester et déployer des projets angular (https://cli.angular.io/):
npm install -g @angular/cli

## Création d'un nouveau projet Angular 
 - Pour générer la structure d'un projet Angular , on utilise Angular CLI via sa commande "ng" suivi de "new" et nom du projet
 
- ng new FirstApp

- Cette commande permet de générer les différents fichiers d'una app basique Angula et installer toutes les dépendances requise .

## Exécution de projet 
- ng serve : commande pour exécuter l'app

- Cette commande compile le code sur: http://localhost:4200;
 
 ## Les modules
  - AppModule : module principale de l'application (se trouve dans app.module.ts)
  - Une application peut contenir plusieurs modules  
  - @NgModule: un décorateur 
  - Un module est une classe qui utilise le décorateur "NgModule";
  - Un NgModule sert à enregistrer tout ce que vous créez dans Angular. Il y a deux types de structures principales :
       - « declarations » sert à déclarer tous nos composants
       - « providers » pour les services (~ modèles : les classes récupérant et traitant les données
       - « imports » sert à la déclaration  d'autres modules (exemple le module http pour interagir avec le serveur, doit etre déclarer dans imports )
 ## Les Composants
  - Une application Angular est formé d'n ensembles de composants
  - Chaque composant peut imbriquer d'autres composants définissant ainsi une structure hiérarchique.
  - Le composant racine s'appelle «Root Component»
 ## Création d'un Composant 
   - Pour la création d'un nouveau composant:  ng generate component Nom_Composant
   - En tapant cette commande Angular CLI va nous créer un dossier dans lequel il va nous générer les fichiers de composant.
   - ngOnInit() : méthode d'initialisation du composant

   **NB : pour utiliser un composant , il faut qu'il soit déclarer dans le module car s'il n'est pas déclarer dans le module principale on ne peut pas l'utiliser, avec la commande "ng generate component" nous sommes pas obligé de le déclarer car il sera déclarer automatiquement**

