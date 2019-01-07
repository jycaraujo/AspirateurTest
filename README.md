# Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.


## Description

La société “iHoover” a décidé de développer un aspirateur automatique.

L’aspirateur doit pouvoir parcourir l'intégralité d’une pièce donnée, sa position est représentée par ses coordonnées (x,y) et d'une lettre indiquant l'orientation selon la notation cardinale anglaise (N,E,W,S). Une pièce est modélisée par une grille rectangulaire.

Par exemple, l’aspirateur peut se trouver dans la position « 0, 0, N », ce qui signifie qu’il se situe dans le coin inférieur gauche de la pièce, et orientée vers le Nord.

Pour contrôler l’aspirateur, une séquence de commandes symbolisée par une suite de lettres lui est envoyée. Les commandes possibles sont « D », « G » et « A ». « D » et « G » font pivoter l’aspirateur de 90° à droite ou à gauche respectivement, sans la déplacer. « A » signifie que l'on avance d'une case dans la direction à laquelle elle fait face, et sans modifier son orientation.

On définit que la case directement au Nord de la position (x, y) a pour coordonnées (x, y+1).

Pour programmer l’aspirateur, on lui fournit des données en entrée:

Les dimensions de la grille à savoir le nombre de carrés sur l’axe x puis y.
La position initiale de l’aspirateur, ainsi que son orientation.
Une série d'instructions que l’aspirateur exécutera.

Lorsque l’aspirateur achève une série d'instruction, il communique sa position et son orientation.

OBJECTIF
Concevoir et développer une page web permettant de paramétrer la dimension de la grille, de positionner l’aspirateur et d’exécuter une liste d’instructions. On doit alors pouvoir visualiser le déplacement de l’aspirateur lorsque la suite d’instructions est exécutée et en connaître sa position finale. L’utilisation d’un backend ou base de données n’est pas nécessaire.

Le langage de programmation est libre, le livrable doit être un site statique fournit en PJ. L’utilisation de librairie ou framework tierce est autorisé.
TEST 1
Dimension de la grille: x=10 y=10
Position initiale de l’aspirateur: x=5 y=5 orientation=N
Instructions: DADADADAA

On attend comme position finale : x=5 y=6 orientation=N

NB : le programme doit pouvoir évoluer facilement en fonction de nouvelles contraintes qui vous seront communiquées lors de l’entretien.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
