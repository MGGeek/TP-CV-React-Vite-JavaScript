# Creation du projet avec Vite

## Lancer la création du projet 

Dans le terminal de VS Code, exécuter la commande suivante :

npm create vite@latest

Cette commande lance l'assistant interactif de création de projet de Vite. Il pose plusieurs questions afin de configurer le projet.

## Choisir un nom de projet 

Vite demande le nom du projet. Par exemple :

Project name: my-first-app

Ce nom sera utilisé pour créer le dossier du projet.

## Choisir le framework

Vite propose plusieurs frameworks et modèles. Pour ce projet, il faut choisir :

React

React permet de construire l'interface utilisateur à partir de composants réutilisables.

## Choisir la variante JavaScript

Après avoir sélectionné React, choisir la variante :

JavaScript

Cette option permet d'écrire les composants React en JavaScript.

## Choisir le linter

Selon la version de Vite et les options proposées par l'assistant, il est possible de sélectionner un outil de vérification du code.

Dans ce projet, le linter choisi est ESLint.

ESLint analyse le code JavaScript et React afin de signaler certaines erreurs potentielles et de mauvaises pratiques.

Il peut notamment détecter des variables inutilisées et des problèmes de syntaxe ou de règles de programmation.

## Installation et  démarrage automatique

en acceptant l’option « Install with npm and start now? », Vite installe les dépendances et lance directement le serveur de développement, sans qu’il soit nécessaire d’exécuter manuellement `npm install` et `npm run dev`.

# Roles des dossiers et fichiers indispensables

## README.md

Ce fichier contient la description du projet au format Markdown.

Il peut présenter :

- Le nom et l'objectif du projet.
    
- Les instructions d'installation.
    
- Les commandes pour lancer le projet.
    
- Les technologies utilisées.
    

Publié sur un projet GitHub, le contenu du fichier `README.md` est généralement affiché sur la page principale du dépôt.

## package.json

Ce fichier contient les informations essentielles du projet, notamment :

- Le nom et la version du projet.
    
- Les dépendances utilisées, comme React et React DOM.
    
- Les dépendances de développement, comme Vite et ESLint.
    
- Les scripts qui permettent d'exécuter certaines commandes.

## package-lock.json

Ce fichier enregistre les versions précises des dépendances installées et les informations nécessaires à la résolution de leur arbre de dépendances.

Par exemple, dans `package.json`, une dépendance peut autoriser plusieurs versions compatibles. Dans `package-lock.json`, npm conserve la version exacte qui a été résolue.

L'objectif est de permettre aux développeurs d'une équipe d'installer un ensemble de dépendances cohérent.

## node_modules/

Ce dossier contient les packages installés par npm à partir des dépendances du projet et de leurs dépendances indirectes.

Ce dossier peut devenir très volumineux. Il n'est donc généralement pas envoyé sur GitHub.

À la place, on versionne `package.json` et `package-lock.json`. Un autre développeur peut ensuite récupérer le projet et installer ses dépendances avec : `npm install`

## .gitignore

Ce fichier indique à Git quels fichiers et dossiers il doit ignorer, c'est-à-dire ne pas suivre automatiquement dans le dépôt.

## public/

Ce dossier contient les ressources statiques que l'on souhaite rendre accessibles directement, sans que Vite les traite comme des modules importés.

## src/

C'est le dossier principal du code source de l'application React.

Il contient généralement les composants, les styles, la logique JavaScript et les ressources importées dans le code.

## vite.config.js

Ce fichier contient la configuration de Vite.

Il permet de personnaliser le fonctionnement du serveur de développement et du processus de compilation, notamment grâce à des plugins et à différentes options.

Dans le modèle standard React + Vite, `index.html` est placé à la racine parce que Vite le considère comme le point d'entrée HTML de l'application.

## index.html

Dans le modèle standard React + Vite, `index.html` est placé à la racine parce que Vite le considère comme le point d'entrée HTML de l'application.

Contrairement à certains autres environnements, Vite traite directement ce fichier : il analyse ses références aux scripts et aux ressources et les adapte si nécessaire pendant la compilation.

## App.jsx 

Il est le composant principal de ton application React. 

Il sert à construire l'interface principale en regroupant les composants que tu souhaites afficher.