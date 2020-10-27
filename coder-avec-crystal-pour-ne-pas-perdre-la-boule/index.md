title: Coder avec Crystal pour ne pas perdre la boule
class: animation-fade
layout: true

<!-- This slide will serve as the base layout for all your slides -->
.bottom-bar[
  {{title}}
]

---

class: impact

# {{title}}

---

## Crystal, en bref

* Langage généraliste
--

* [«Fast as C, sleek as Ruby. A language for humans and computers»](https://manas.tech/projects/crystal/)
--

* GitHub ⭐: 15.2k (Scala: 13k, Elixir: 17,6k)
--

* Version 0.1.0 en juin 2014
--

* Version actuelle: 0.35.1 ([1.0 en approche !](https://crystal-lang.org/2020/03/03/towards-crystal-1.0.html))
--

* [Catalogue des installations](https://crystal-lang.org/install/)

---

## Qui utilise Crystal ?

* [manas.tech](https://manas.tech/projects/crystal/) (créateurs du langage)
* [84codes](https://www.84codes.com/) (DevOps as a service)
* [Invidious is an alternative front-end to YouTube](https://github.com/iv-org/invidious/)
* [etc !](https://github.com/crystal-lang/crystal/wiki/Used-in-production)
--

* [beulogue](https://github.com/SiegfriedEhret/beulogue) et [brrr](https://github.com/nyrst/brrr) (hey c'est moi ça !)

---

## Au menu

* Les commandes `crystal` et `shards`
--

* Un début d'application de gestion de contacts
--

* Un aperçu des tests
--

* Gestion de dépendance

---

## Aller, on code !

Pour créer un projet:

```shell
crystal init app bidule
```

---

## Verdict

### 👍

* Lisible et compréhensible
--

* API & doc 💖
--

* Concurrence inspirée de CSP (comme Go etc.)
--

* Le compilo est notre ami

### 👎

* Linux/MacOS, et [Windows?](https://github.com/crystal-lang/crystal/issues/5430)
--

* crystal vs shards?
--

* Coverage?
--

* Adoption?

---

## Références

* [Site officiel](https://crystal-lang.org/)
* [crystal](https://github.com/crystal-lang/crystal) et [shards](https://github.com/crystal-lang/shards) sur GitHub
* [shardbox.org](https://shardbox.org/)
* [Guide de démarrage](https://crystal-lang.org/reference/) et [documentation des API](https://crystal-lang.org/api/0.35.1/)
* [Support éditeurs](https://github.com/crystal-lang/crystal/wiki#editor-support)
* ["awesome-crystal"](https://github.com/veelenga/awesome-crystal)

---

## Merci ! Des questions ?

.col-6[
Slides & code:

* [frama.link/coder-avec-crystal-slides](https://frama.link/coder-avec-crystal-slides)
* [frama.link/coder-avec-crystal](https://frama.link/coder-avec-crystal)

La même chose en différent, sous forme d'articles:

* [1ère partie](https://ehret.me/fr/crystal-01.html)
* [2ème partie](https://ehret.me/fr/crystal-02.html)
* [3ème partie](https://ehret.me/fr/crystal-03.html)
]
.col-6.center[
.twitter[
[![](https://dev.ehret.me/siegfried-360.png)<br/>@SiegfriedEhret](https://twitter.com/SiegfriedEhret)
]

[![Logo du CyberPeace Institute](cpi-logo.svg)](https://cyberpeaceinstitute.org/)
]