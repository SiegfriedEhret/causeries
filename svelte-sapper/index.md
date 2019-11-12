title: Svelte & Sapper
class: animation-fade
layout: true

<!-- This slide will serve as the base layout for all your slides -->
.bottom-bar[
  \#BlendWebMix
]

---

class: impact

# {{title}}
## Les frameworks qui vous veulent du bien.

---

class: impact

# Les gens 

## VS 

# Les apps JS...

---

## Y'a de la richesse dans nos âmes

## Y'a de la misère dans nos yeux

&mdash; Pnl - Autre Monde

---

## You suffer

## But why?

&mdash; Napalm Death - You Suffer

---

# Rich Harris (New York Times)

.col-6.twitter[
![Image Twitter de Rich Harris](./images/rich-harris.jpeg)
]
.col-6[
- [Ractive](https://ractive.js.org/)
- [Rollup](https://rollupjs.org/)
- [Interview](https://changelog.com/podcast/332)

À voir:

- [The Return of 'Write Less, Do More' by Rich Harris | JSCAMP 2019](https://www.youtube.com/watch?v=BzX4aTRPzno)
]

---

# Svelte

- [svelte.dev (v3)](https://svelte.dev/): « Cybernetically enhanced web apps »
--

- Pour démarrer une app: [sveltejs/template](https://github.com/sveltejs/template)
	- `npx degit sveltejs/template my-app`
--

- Pour démarrer un composant: [sveltejs/component-template](https://github.com/sveltejs/component-template)
	- `npx degit sveltejs/component-template my-component`

---

# Reactivité

- [Virtual DOM is pure overhead (DEC 27 2018)](https://svelte.dev/blog/virtual-dom-is-pure-overhead)
- [Shift Dev 2019: "Rethinking Reactivity"](https://www.youtube.com/watch?v=gJ2P6hGwcgo)

![](/images/rethinking-reactivity.png)

---

# Faire confiance au compilateur

- Pas de «framework front» !
--

- Il y a des choses «bizarres»...
--

- ... Mais c'est comme ça !

---

# Sapper

- [sapper.svelte.dev](https://sapper.svelte.dev/): « Sapper, which is short for **S**velte **app** mak**er**, is your courageous and dutiful ally. »
--

- Pour démarrer une app: [sapper-template](https://github.com/sveltejs/sapper-template)
	- `npx degit "sveltejs/sapper-template#rollup" my-app`
	- `npx degit "sveltejs/sapper-template#webpack" my-app`

---

class: impact

# Demo time !

![Stop ! Hammer Time !](./images/hammer-time.gif)

---

class: impact

# Ce qu'on en dit

---

## J'ai pas vraiment le temps mais je crois que je vais refaire une partie de mon outil de slides. [...] Je me dis que je tenterai bien svelte.

&mdash; [Hubert Sablonnière](https://twitter.com/hsablonniere)

---

## Très facile à faire arriver dans une codebase legacy : le coté "disappearing framework" révèle tout son avantage : le refactoring iteratif sans surcoût est complètement possible.

&mdash; [Augustin Chassine](https://twitter.com/0gust1) et [Quentin Lefevre](https://twitter.com/Hyerelle) .small[(Decathlon)]

---

# + / -

## C'est cool


- On fait confiance au langage et au compilo.
--

- On n'embarque pas un framework (taille, perf).
--

- Expérience agréable.
--

- Sapper c'est vraiment chouette.
--

- Ça ouvre des discussions entre frameworks.

---

# + / -

## C'est moins cool

- Le passage à v2 vers v3 n'était pas évident.
--

- Sapper encore non stable (v0.27.x).
--

- Peu de devs, peu de clients... Pour l'instant !

![Quelques compagnies qui utilisent Svelte](./images/svelte-users.png)

---

class: impact

# Merci !

.left[
- Code: [frama.link/svelte-sapper-code](https://frama.link/svelte-sapper-code)
- Slides: [frama.link/svelte-sapper](https://frama.link/svelte-sapper)
]

.col-4.left[
## whoami

- Siegfried Ehret
- [SonarSource](https://www.sonarsource.com/)
]
.col-4.twitter[
![](./images/sieg.jpg)
]
.col-4.left[
## Social

```
@SiegfriedEhret
```

- [twitter](https://twitter.com/SiegfriedEhret)
- [mastodon.ehret.me](https://mastodon.ehret.me/@SiegfriedEhret)
]