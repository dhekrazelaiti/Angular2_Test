# Angular 4 Notes
## Outil d'installation 
- Node JS 
- Angular CLI (Command Line Interface) qui permet de générer, compiler, tester et déployer des projets angular (https://cli.angular.io/):
npm install -g @angular/cli
- pour vérifier si angular CLI est bien installer **ng- v**

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

   ## Routage et Navigation
   - Le routeur angular permet la navigation d'une vue à une autre lorsque les utilisateurs éxécute des taches d'application .
   - C'est un service qui présente une vue de composant particulière pour une URL donnée.
   - IL ne fait pas partie du noyau Angular
   - Pour utilisé se module (@angular/router) il faut l'importer dans "src/app/app.modules.ts" en écrivant **import { RouterModule.Routes } from '@angular/routre'**
   - De plus il faut déclarer les routes que nous allons l'utiliser.
   - Les routes est un tableau d'objet et chaque objet représente une route.
   - Chaque route est composé d'un path ('nom de la route') et component('composant associé à cette route')
   - Déclaration des routes dans "app.modules.ts"
   - path :'', redirectTo : la route qui s'affiche par défaut; pathMatch 'full' signifie qu'il faut écrire le nom complet de la route 

