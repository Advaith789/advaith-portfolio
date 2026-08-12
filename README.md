# advaith-portfolio

Personal portfolio — a static, dependency-free multi-page site.

```
index.html          home: intro, key numbers, section index
experience.html     roles at Lands' End, AmFam, Bajaj Finserv, Teamlease, ADP
projects.html       selected projects with generated cover art
publications.html   IEEE NEleX paper + NUS research
skills.html         tooling grouped by what it's for
education.html      degrees, certifications, leadership
contact.html        every way to reach me
index.css           the whole design system (tokens at the top)
index.js            nav state, mobile menu, scroll reveals — no libraries
assets/             resume pdf, profile photo
assets/logos/       employer + university marks (transparent svg/png)
assets/photos/      on-site photos shown beside each role
assets/projects/    generated cover art, one svg per project
```

## Notes

- No build step. Open `index.html`, or run `python3 -m http.server` and visit
  `localhost:8000`.
- Nav, menu and footer markup are duplicated per page on purpose — static
  hosting, no includes, no framework.
- Project covers in `assets/projects/*.svg` are generated line art, one per
  project, drawn from the shape of the problem each one solves.
- Design tokens (colour, type, spacing) live in `:root` at the top of
  `index.css` — change them there, not inline.
- Logos sit greyscale at rest and return to full colour on entry hover. Their
  `height` is set inline per logo: a wide wordmark and a stacked lockup need
  different heights to look the same size, so there is no shared value.
- Role photos are cropped by the `.entry-photo` frame (4:5 on desktop, 16:10
  stacked). Where the subject is off-centre, `object-position` is set inline.
