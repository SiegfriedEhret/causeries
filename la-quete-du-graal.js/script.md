# la-quete-du-graal.js

L'histoire de 2 chevaliers errants dans les plaines infinies du Front.

En gros, un peu un mode "jeu" où on explorer des châteaux / donjons, et faudrait trouver un boss pour chaque framework (avec ses difficultés, par exemple pour angular: perf et seo ?

## TODO

Là on a comme un semblant d'enchaînement d'idée pour faire comme un discours. C'est mal organisé et pas complet.

Doit-on parler de tout le bordel de tooling qu'on doit mettre en place pour développer depuis quelques années (grunt/gulp/webpack/whatever, es6/babel...) ?

## Intro

Bienvenue dans la-quete-du-graal.js, un nouveau jeu coopératif d'exploration dont vous êtes les héros !

### Présentation de nous

Joueur 1, parle nous de toi.

Joueur 2, à ton tour.

### Les règles du jeu

- Nous allons errer dans quelques châteaux pour vous faire découvrir notre vision du paysage JS front.
- Que cherche-t-on dans cette aventure ?
- Le Graal !
- C'est quoi ça ?
- Une légende, un objet magique encore secret, qui nous donnera des supers pouvoirs pour réaliser nos projets avec succès.

### Un peu d'histoire

- "JavaScript"... (soupir)
- Le monde du JavaScript, après avoir traîné pendant de longues années, a le vent en poupe et les frameworks front fleurissent.
- Effectivement ! Regarde cette carte (*slide avec carte + les logos*), il y a plusieurs communautés, plus ou moins en guerre parfois. Alors que le monde devrait être joli, les gens devraient s'aimer, et on devrait avoir des licornes et des petits poneys partout !
- Haha bon courage pour la fin !
- Les frameworks se suivent et se ressemblent parfois.
- Parfois c'est dur de lutter contre la «hype» de certaines technos.
- Comment faire pour s'y retrouver dans tout ça ?
- On va prendre nos plus belles montures et explorer les communautés et les châteaux.
- Ok. C'est long ?
- Ca devrait être supportable.
- J'en suis !

### Comment on compare ?

- Le classique outil de comparaison rapide: Todomvc.
- Tu crois vraiment qu'on peut utiliser ça pour se faire une idée de la globalité d'un framework ?
- Non, bien sûr. Ce n'est pas complet. Ça donne juste un avant-goût.
- Qu'est-ce qu'on a d'autre ?
- Et bien je ne sais pas... Les tutoriels ne poussent pas souvent plus loin que la Todo list ou une appli de blog, ça deviendrait trop long sinon.
- Ils sont souvent poussés par une entreprise, parfois pour un besoin spécifique.
- On peut leur faire confiance ?
- J'espère. Sinon Framasoft en aurait déjà créé un !
- Il faut que leurs documentations soit accessible facilement et compréhensible pour que j'y comprenne quelque chose en tous cas.

Références:
- https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51

## Château Angular

- Hey ! Voilà en voilà un beau château !
- En fait il est spécial, il y a 2 châteaux si tu regardes bien.
- Ah oui ! Mais pourquoi ?
- Le premier a de bonnes fondations et continue sur sa lancée, le deuxième, voulant tout révolutionner, est en travaux depuis longtemps. Nous ne sommes pas certains d'en voir la fin !
- On commence par l'ancien ?
- Aller, go !

### Angular v1.x

- Ca sent un peu le renfermé mais on s'y sent pas mal, j'aime bien.
- La construction a démarré il y a quelque années, il a commencé à devenir habitable en 2009.
- Il a été initié par Misko Hevery, qui travaille chez Google.
- Le code est apparu sur Github le 3 janvier 2010.
- C'est donc Google qui pousse le truc maintenant, ok. Et ça fait quoi de magique ?
- [Igor Minar](https://plus.google.com/+IgorMinar/posts/DRUAkZmXjNV) définit Angular comme étant du MVW (Model-View-Whatever): proche du MVC il y a quelques années, maintenant plus collé au MVVM.
- Sympa, on a donc plusieurs possibilités, pour faire comme on veut. Et il apporte quoi ?
- Le data-binding (sur lequel on a la main pour ne pas faire n'importe quoi), de l'injection de dépendance (pratique pour tester), des facilités pour créer des controller, des composants (ou des directives), une syntaxe pour brancher le tout dans la vue etc.
- Ah oui, c'est un gros truc quand même.
- Pas *si* gros au final, puisqu'il sait faire beaucoup de choses.
- Il n'y a pas de plan pour pouvoir s'y retrouver facilement...
- Ne t'inquiète pas ! Pour aider les développeurs, plusieurs personnes comme John Papa, ou Todd Motto, on sortit des guides pour organiser son code.
- Il y a encore du monde ici tu vois, la communauté est toujours très active. Sur Github, il y a plus de 1400 contributeurs !
- Les développeurs du framework continuent de rajouter des étages pour rajouter des fonctionnalités.
- Mais les gens ont peur qu'il s'écroule.
- Les client aussi non ?
- En ce moment, c'est compliqué... Mais il n'est pas mort, c'est certain.
- Pas *encore* mort, tu veux dire, non ?
- Oui ^^ On en est à la version 1.5, et on entend parler d'une version 1.6 qui devrait voir le jour. De plus, la philosophie et la façon de faire sont propre à cette version 1, elle continuera certainement à faire son chemin même après la sortie d'Angular 2.
- Cette partie là nous permet de rejoindre facilement le second château.
- Direction Angular 2 !

Boss: learning curve (cf img/feelings_about_angularjs_over_time.png), binding et watchers, SEO, futur de la v1 ?

Références:
- https://angularjs.org/
- https://github.com/angular/angular.js

### Angular v2.x

- Ouh là, c'est un peu comme la Sagrada Familia, on n'est pas encore au bout.
- Haha effectivement. Les bases sont là, mais c'est le polish qui prend du temps.
- C'est quand même vraiment différent de l'autre. Que c'est-il passé ?
- Ils ont tout tué, et reconstruit de façons plus moderne.
- Plusieurs fois on dirait.
- Haha oui, c'est l'effet "55 alpha et 13 beta" (pour l'instant ^^).
- Et les développeurs suivent ça ?
- Certains, oui. D'autres sont plus prudent. D'autres encore ont choisi de partir sur des chemins pas racontables (comme react haha).
- Je suis un peu perdu là...
- Tout le monde l'était un peu jusqu'à il y a peu de temps.
- C'est vrai, je me souviens de l'annonce d'Angular 2 à ng-europe. Ça a fait pas mal de dégât (mettre la slide avec les tombes RIP tout ça).
- Pour moi aussi. 
- Il était annoncé comme un framework mobile first à un moment, non ?
- Effectivement. Mais il a bien grandit... Ce qui me fait peur, c'est l'exemple du Hello World, avec sa lib de 1.3Mo (non minifé et avec les commentaires)... Angular, RxJS... Ca fait un peu beaucoup.
- Ça fait beaucoup de choses à mettre en place et à apprendre !
- Un dernier mot ?
- Oui: TypeScript !
- Heureusement que ce n'est pas obligatoire pour développer avec Angular 2.
- Mais recommandé ?
- Il faut toujours parier sur le JS. Le reste c'est pour faire joli. https://brendaneich.github.io/ModernWeb.tw-2015/#74

Boss: tout à apprendre (rien en commun avec la v1), rx.js, typescript

Références:
- https://angular.io/
- https://github.com/angular/angular

## Château backbone

- Il a l'air vieux...
- Mais solide ! Plein de gens sont passés par là, et de nouveaux n'hésitent pas à y aller car il ne bougera pas.
- On a qui comme visiteur de qualitay ?

Références:
- http://backbonejs.org/
- https://github.com/jashkenas/backbone

## Château react

- Ouh là, il est gros, non ?
- Carrément, pourtant il est juste là pour faire joli dans le paysage. Il s'occupe principalement de la vue.
- Il existe depuis lontemps ?
- Il a été créé en 2013 par Facebook qui n'arrivait pas à gérer ses notifications correctement à plusieurs endroits.
- Et a déjà plus de 600 contributeurs, après un passage à l'open source fin mai 2013.
- Il y a des hipsters partout, c'est normal ?
- Il n'y en a plus, il a dépassé le nombre d'étoiles autorisées et est là depuis déjà trop longtemps !
- Tout le monde en parle comme si c'était là que se trouve notre graal. On fouille ?
- Soyons fous !
- Il est aussi gros que le château Angular 1 mais ne fait pas tout...
- Marrant, leur HTML dans le JS...
- Alors ce n'est pas de l'HTML, déjà. Ensuite, c'est un point intéressant: c'est ce qu'ils appellent du JSX. Une représentation qui ressemble à de l'HTML, mais qui sera retransformée en JavaScript. Ca permet d'utiliser ReactDom pour obtenir de l'HTML en sortie, ou d'autres choses !
- Il est orienté composants réutilisables, donc on doit tout avoir au même endroit, ce n'est pas déconnant.
- Le coup du virtual DOM c'est intéressant, et ça permet d'appliquer la grosse force de react: le render à la demande.
- J'aime bien l'idée, ça évite d'avoir des watchers partout.
- Le gros classique qui accompagne React, c'est flux.
- Ca apporte quoi ?
- C'est un pattern, comme le MVC mais en pas pareil. Facebook l'a trouvé dans une cave et l'a dépoussiéré un peu, comme si c'était nouveau.
- Et react, c'est vraiment si bien que l'internet mondial le dit ?
- C'est une excellente question. C'est une librairie pour la vue. Pour des petites applis, ça fait très bien le boulot. Pour de gros projets, il faut le coupler à d'autres librairies pour être comparable à un angular ou un backbone.
- Unimorphic isoversal WTF ?
- "SEO, performance, code sharing and overall flexibility"
- J'ai l'impression que c'est beaucoup de boulot pour "le premier affichage".

Je ne sais pas si on doit partir sur le côté "fonctionnel" et "immutable" dont les gens parlent souvent autour de react.

Références:
- https://facebook.github.io/react/
- https://github.com/facebook/react
- https://facebook.github.io/flux/
- https://github.com/facebook/flux

- http://blog.andrewray.me/reactjs-for-stupid-people/
  - React is frankly bloated for how little functionality you get. Hopefully this will improve in the future.
- http://blog.500tech.com/is-reactjs-fast/

## Château web components

- Celui là est encore en construction !
- Oui, mais il faut s'y arrêter un peu pour comprendre l'architecture du truc.
- C'est original: il y a plusieurs parties qui n'ont rien à voir.
- Exactement: les web components est un terme qui regroupe en fait 4 spécifications du w3c et du whatwg.
- Des "spécifications" ?
- Des "spécifications". Ca signifie que lorsque les navigateurs auront implémenté ces spécifications, il n'y aura pas de librairie ou framework à ajouter pour que l'applications fonctionne !
- Oui, mais en attendant ?
- Il y a une prothèse d'émulation.
- C'est pas faux.
- Un polyfill.
- Ah ok.
- Celui-ci permet d'avoir un subsitut aux spécifications en JavaScript. Et un support dans plus de navigateurs !

Références:
- http://webcomponents.org/
- https://github.com/webcomponents/webcomponentsjs/

### Etage Polymer

- Hey ! D'ici, la vue est plutôt sympa.
- N'est-ce pas ? Polymer, c'est du sucre par dessus les web components.
- Ca vient d'où ?
- C'est poussé par Google.
- Il y a aussi x-tag, mais je n'ai pas joué avec.

Références:
- https://www.polymer-project.org/
- https://github.com/Polymer/polymer

## Châteaux lointains

### Châteaux Aurelia

- Tiens, on dirait le château Angular 2 !

Références:
- http://aurelia.io/
- https://github.com/aurelia/framework

### Château ember

- Il est loin mais il a l'air gros.
- Le chemin n'a pas l'air facile pour y accéder.
- Une fois qu'on y est, normalement, c'est peinard.

Références:
- http://emberjs.com/
- https://github.com/emberjs/ember.js

### Château vuejs

- C'est un bébé Angular ?

Références:
- http://vuejs.org/
- https://github.com/vuejs/vue

## Les petits villages gaulois

On n'a pas forcément à en parler beaucoup, mais peut être les mentionner comme alternatives ?

### riotjs

- http://riotjs.com/

### mithril

- http://mithril.js.org/

## Finalement ?

- Remarque 1: «La comparaison, c'est la fin de la joie»
- Remarque 2: vous n'allez pas convaincre n'importe quel client avec la techno que vous chérissez.
- Breaking news: ça dépend du projet !

- Comparatif des chiffres ?
