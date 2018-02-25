# Pizza Bonga !

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

## Disclamer

L'application peut s'avèrer lente sur des appaareil de type mobile. L'utilisation dans le navigateur propose une expérience bien plus confortable.

## Utilisation de l'application

Cette section regroupe divers conseils et information importantes sur l'utilisatoin de l'application

### Installation

*Sachez que vous pouvez remplacez 'android' par 'browser' pour un déploiement sur navigateur ou par 'ios' si vous visez un public plus restreint.*

Il y a deux manière différentes pour procéder à l'installation. Si vous souhaitez directement utiliser l'application **dans les meilleurs conditions** il suffit d'uiliser la commande suivante:

```bash
$ ionic cordova run android --prod
```

N'oubliez pas de valider quand l'application proposera d'installer les node_modules.

```bash
$ npm install
$ ionic cordova platform add android
$ ionic cordova build android
$ ionic cordova run android
```


### Administration

Au sein de la partie administration il est possible d'ajouter une pizza depuis le **bandeau de navigation avec le signe +** et de modifier/supprimer des pizza de manière individuel.
Si vous souhaitez voir les détails d'une pizza, il est possible de **cliquer sur la carte** pour afficher les details.

### Client

Au sein de la partie client il est possible d'ajouter des pizza à son panier. Bien entendu le panier est perssistant.
Si vous souhaitez voir les détails d'une pizza, il est possible de **cliquer sur la carte** pour afficher les details. Un bouton est aussi disponible pour les plus archaïques.
