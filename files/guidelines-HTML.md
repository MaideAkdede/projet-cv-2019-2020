# Guidelines HTML

> - [Guidelines Alsacreations Github](https://github.com/alsacreations/guidelines/blob/master/Guidelines-HTML.md)
> - [Guidelines W3Schools](https://www.w3schools.com/html/html5_syntax.asp)
> - [MDN HTML Guidelines]()
* * *
## Généralités 

- [ ] pas de protocole dans les liens par exemple : 
        `href="//www.alsacreations.fr/" et non href="http://www.alsacreations.fr"`
- [ ] Choisir des noms en anglais pour les ID, class, img etc
- [ ] Séparer nom des fichiers, id, class, img par un **tiret**
- [ ] noms des éléments attribut en minuscules
- [ ] Préconiser double quotes html, et simple quote dans PHP et JS 
## HEAD 

- [ ] `<!doctype html>`
- [ ] Langue 
- [ ] Encodage charset
- [ ] Titre page (title)
- [ ] Meta  Viewport
- [ ] IE compatibilité
- [ ] Fav Icon
- [ ] Bien lier le CSS

## BODY

- [ ] Faire attention à la sémantique globale
- [ ] Lien d'évittement 
- [ ] Accessibilité [Guide de l'intégrateur](https://github.com/DISIC/guide-integrateur) ou encore [Les directives d'Anysurfer](https://www.anysurfer.be/fr/en-pratique/directives) 
- [ ] Microdata : [SCHEMA.org](http://schema.org) & [Outil de text des microdatas Google](https://search.google.com/structured-data/testing-tool/u/0/?hl=fr)
- [ ]  États des éléments préfixés (.`is-paused`, .is-opened`, `.is-hidden`)
- [ ] tout événement ou comportement JavaScript sera préfixé par "js-". Ex. `.js-nav-button`, `.js-menu`, .`js-is-hidden`
- [ ] pas plus de 5 classes par élément
- [ ] Toujours utiliser `rel="noopener noreferrer"` sur des liens `target="_blank"`
- [ ] faire attention à l'indentation 
- [ ] Lier JS 
## NOM DES ID & CLASS

- [ ] Utiliser [OOCSS ou BEM](https://www.alsacreations.com/article/lire/1641-Bonnes-pratiques-en-CSS--BEM-et-OOCSS.html)

## PERFORMANCES

- [ ] Limiter le nombre de ressources (css, images, scripts, fonts)
- [ ]

## TERMINER AVEC 
- [ ] Total validator 
- [ ] Verifier le HTML avec [Markup Validation Service from W3C](https://validator.w3.org/)