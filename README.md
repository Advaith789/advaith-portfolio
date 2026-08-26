# advaith-portfolio

Personal portfolio — a static, dependency-free single page.

```
index.html          the whole site: hero, index, experience (+ leadership),
                    education, projects, publications, skills, contact
blogs.html          the blog index, newest note first
blog/*.html         one page per post
index.css           the design system (tokens at the top)
index.js            nav state, mobile menu, scrollspy, scroll reveals — no libraries
assets/             resume pdf, profile photo, mahita certificate
assets/logos/       employer + university marks (transparent svg/png)
assets/photos/      on-site photos shown beside each role
assets/projects/    generated cover art, one svg per project
```

## Notes

- No build step. Open `index.html`, or run `python3 -m http.server` and visit
  `localhost:8000`.
- The portfolio is one page with anchored sections; the blog is the one
  separate page, at /blogs.html.
- To add a post: copy an existing file in `blog/`, then add a `.post-card` to the
  list in `blogs.html` with the next note number. Posts use `../` for assets.
- The posts are the story; the tables and raw numbers stay in each project's
  GitHub README. Each post carries exactly one `.numbers` block and links out for
  the rest. Prose is held to a 70ch measure; figures span the full column.
- Figures pulled from a project repo live in `assets/blog/`.
- One page, six anchored sections. The nav underlines whichever section is in
  view (IntersectionObserver in `index.js`), and `[id] { scroll-margin-top }`
  keeps anchor jumps clear of the fixed nav.
- Design tokens (colour, type, spacing) live in `:root` at the top of
  `index.css` — change them there, not inline.
- Project covers in `assets/projects/*.svg` are generated line art, one per
  project, drawn from the shape of the problem each one solves.
- Logos sit greyscale at rest and return to full colour on entry hover. Their
  `height` is set inline per logo: a wide wordmark and a stacked lockup need
  different heights to look the same size, so there is no shared value.
  `.on-white` is for marks lifted off a white document rather than supplied
  transparent — it multiplies the white away.
- Role photos are cropped by the `.entry-photo` frame (4:5 on desktop, 16:10
  stacked). Where the subject is off-centre, `object-position` is set inline.
- An entry can carry extra supporting shots in a `.photo-strip` (see the
  Toastmasters entry) — it spans the text and photo columns as a contact strip.
