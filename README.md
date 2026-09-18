# LLD in Python — Revision Notes

Personal revision notes for Low-Level Design (LLD) interview preparation, focused on Python. Built as a small static site so the notes are easy to read, search, and deploy rather than living as scattered Markdown files.

🔗 **Live site:** [sandeepdpagade.github.io/LLD-in-Python](https://sandeepdpagade.github.io/LLD-in-Python/)
📦 **Repo:** [github.com/sandeepdpagade/LLD-in-Python](https://github.com/sandeepdpagade/LLD-in-Python)

## Structure

```
index.html                     Home page — topic grid / landing page
css/style.css                  Shared styling (light/dark theme, layout, code blocks, tables)
js/main.js                     Sidebar nav, auto-generated "on this page" TOC, theme toggle, copy buttons
topics/
  oops-in-python.html          OOP in Python
  solid-principles.html        SOLID principles (each with a violation + fixed example)
  uml-basics.html              UML basics (class diagrams, relationships, sequence diagrams)
```

Each topic is a standalone HTML page sharing the same header/sidebar/theme via `css/style.css` and `js/main.js`, with syntax-highlighted Python code samples (via highlight.js) and hand-drawn inline SVG diagrams where a visual helps (e.g. UML notation).

## Adding a new topic

1. Copy the structure of an existing page under `topics/`.
2. Add an entry to the `TOPICS` array in [js/main.js](js/main.js) — the sidebar on every page updates automatically.
3. Add/unlock the corresponding card on [index.html](index.html).

## Topics covered so far

- **OOP in Python** — classes/objects, encapsulation, inheritance, polymorphism, abstraction, dunder methods, composition vs inheritance.
- **SOLID Principles** — SRP, OCP, LSP, ISP, DIP, each with a violating example and a fixed example.
- **UML Basics** — class diagram notation, relationship types (association, aggregation, composition, inheritance, realization, dependency), multiplicity, sequence diagrams.

## Planned

- Creational / Structural / Behavioral Design Patterns
- LLD practice problems (Parking Lot, Elevator, Splitwise, BookMyShow, etc.)
