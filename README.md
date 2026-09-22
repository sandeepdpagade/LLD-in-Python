# LLD in Python — Revision Notes

Personal revision notes for Low-Level Design (LLD) interview preparation, focused on Python. Built as a small static site so the notes are easy to read, search, and deploy rather than living as scattered Markdown files.

🔗 **Live site:** [sandeepdpagade.github.io/LLD-in-Python](https://sandeepdpagade.github.io/LLD-in-Python/)
📦 **Repo:** [github.com/sandeepdpagade/LLD-in-Python](https://github.com/sandeepdpagade/LLD-in-Python)

## Structure

```
index.html                          Home page — topic grid / landing page
css/style.css                       Shared styling (light/dark theme, layout, code blocks, tables)
js/main.js                          Sidebar nav, auto-generated "on this page" TOC, theme toggle, copy buttons
topics/
  oops-in-python.html               OOP in Python
  solid-principles.html             SOLID principles (each with a violation + fixed example)
  uml-basics.html                   UML basics (class diagrams, relationships, sequence diagrams)
  creational-patterns.html          Singleton, Factory Method, Abstract Factory, Builder, Prototype
  structural-patterns.html          Adapter, Decorator, Facade, Composite, Proxy
  behavioral-patterns.html          Strategy, Observer, Command, State, Template Method, Chain of Responsibility
  parking-lot-system.html           Worked practice problem: requirements -> entities -> patterns -> code
  elevator-system.html              Worked practice problem: multi-elevator dispatch (State + Strategy)
  splitwise.html                    Worked practice problem: expense splitting (Strategy)
  bookmyshow.html                   Worked practice problem: seat booking concurrency (State + locking)
  tic-tac-toe.html                  Worked practice problem: NxN board game (Strategy for win rules)
  vending-machine.html              Worked practice problem: full State-pattern design
  cab-booking-system.html           Worked practice problem: ride matching (two independent Strategies)
  library-management-system.html   Worked practice problem: catalog vs physical copy modeling
  lru-cache.html                    Worked practice problem: O(1) cache (hashmap + doubly linked list)
```

Each topic is a standalone HTML page sharing the same header/sidebar/theme via `css/style.css` and `js/main.js`, with syntax-highlighted Python code samples (via highlight.js) and hand-drawn inline SVG diagrams where a visual helps (e.g. UML notation).

## Adding a new topic

1. Copy the structure of an existing page under `topics/`.
2. Add an entry to the `TOPICS` array in [js/main.js](js/main.js) — the sidebar on every page updates automatically.
3. Add/unlock the corresponding card on [index.html](index.html).

## Topics covered so far

**Fundamentals**
- **OOP in Python** — classes/objects, encapsulation, inheritance, polymorphism, abstraction, dunder methods, composition vs inheritance.
- **SOLID Principles** — SRP, OCP, LSP, ISP, DIP, each with a violating example and a fixed example.
- **UML Basics** — class diagram notation, relationship types (association, aggregation, composition, inheritance, realization, dependency), multiplicity, sequence diagrams.

**Design Patterns**
- **Creational** — Singleton, Factory Method, Abstract Factory, Builder, Prototype.
- **Structural** — Adapter, Decorator, Facade, Composite, Proxy, plus a comparison table for the "wrapper" patterns.
- **Behavioral** — Strategy, Observer, Command, State, Template Method, Chain of Responsibility.

**Practice Problems**
- **Parking Lot System** — Singleton + Strategy, requirements through a runnable implementation.
- **Elevator System** — multi-elevator dispatch combining State and Strategy.
- **Splitwise** — expense splitting with a pluggable Strategy per split type.
- **BookMyShow** — seat booking with per-seat locking to prevent double-booking.
- **Tic-Tac-Toe** — NxN board game with a swappable win-checking Strategy.
- **Vending Machine** — a full State-pattern design with inventory and change.
- **Cab Booking System** — ride matching and fare calculation as two independent Strategies.
- **Library Management System** — the catalog-vs-physical-copy modeling problem, plus fine calculation.
- **LRU Cache** — the classic O(1) get/put data-structure design (hashmap + doubly linked list).
