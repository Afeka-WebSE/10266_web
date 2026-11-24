# Session 5 – React Forms and Client-Side Routing (Instructor Version)

Course 10266 – Web Platform Development, Afeka College of Engineering.

This project contains the live demos of the session and the full solutions of the
exercises. **Do not share it with students** - the student project
(`session05-student`) contains the same exercises as starters.

## Getting started

Requirements: Node.js 20.19 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
```

The tab bar follows the order of the slides.

## Tabs and slides

| Tab                  | Source                                          | Slides  |
|----------------------|-------------------------------------------------|---------|
| Controlled Input     | `src/demos/demo1-controlled-input`              | 5-6     |
| Prevent Default      | `src/demos/demo2-form-submit`                   | 7-8     |
| Multi-Field Form     | `src/demos/demo3-unified-state`                 | 9-11    |
| Live Validation      | `src/demos/demo4-validation`                    | 12      |
| Ex 1: Escape Room    | `src/exercises/ex1-escape-room`                 | 13      |
| Add To List          | `src/demos/demo5-add-to-list`                   | 15-16   |
| Filter List          | `src/demos/demo6-list-filtering`                | 17      |
| Multi Filter         | `src/demos/demo7-multi-filter`                  | 18-19   |
| Ex 2: Squad Builder  | `src/exercises/ex2-squad-builder`               | 20      |
| Final: HR Portal     | `src/exercises/ex3-hr-portal`                   | 31-33   |

The exercise files have the same names and paths as in the student project,
so a file-by-file diff shows exactly what the students need to write.

## Notes on the solutions

### Exercise 1 – Escape Room

- `handleChange` handles checkbox (`checked`), number (`Number(value)`) and text/select.
- All the validation is derived on every render - there is no State for errors.
- The challenge rule crosses two fields:
  `difficulty !== 'Extreme' || participants >= 4`.

### Exercise 2 – Squad Builder

- `filteredHeroes` is Derived State; `heroes` is never overwritten.
- `visiblePower` is computed with `reduce` on the **filtered** list
  (cascading Derived State).
- Two empty states: the source is checked first, then the derived list.

### Final Exercise – HR Portal

- The employees State lives in `EmployeePortal`, above `<Routes>`, with the three
  callbacks `handleAdd`, `handleDelete`, `handleUpdate`.
- Employee ids are numbers, so `EmployeeProfile` must convert the URL parameter
  with `Number(id)` - the point made on the `useParams` slide.
- The id of a new employee is created in `handleAdd` (an event handler).
  Calling `Date.now()` while rendering the form breaks the purity rule
  (`react-hooks/purity`).
- `EmployeeForm` is reused by `/add` and by `EditEmployee` (`/edit/:id`).
  `EditEmployee` passes `key={employee.id}`, so moving from `/edit/101` to
  `/edit/102` creates a new form instance. Without the key the form keeps the
  State of the previous employee - a good discussion point that connects to
  the `key` lesson of session 3.
- `NavLink` gets the `active` class automatically; `portal.css` styles
  `.nav-link.active`.
- Home challenges are included: safe delete with `window.confirm`, and
  `localStorage` with a lazy `useState` initializer + `useEffect`.

## Quality checks

```bash
npx tsc -b        # type check
npm run build     # production build
npm run lint      # ESLint - 0 problems in this project
```
