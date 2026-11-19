# Session 5 – React Forms and Client-Side Routing (Student Exercises)

Course 10266 – Web Platform Development, Afeka College of Engineering.

## Getting started

Requirements: Node.js 20.19 or newer.

```bash
npm install      # installs React, React Router and the dev tools
npm run dev      # starts the dev server at http://localhost:5173
```

The app opens with a tab bar. Each tab shows one exercise.

## Project structure

```
src/
  App.tsx                         Tab bar that switches between the exercises
  index.css                       Global styles for the tab bar
  exercises/
    ex1-escape-room/              Exercise 1 - Escape Room Booking
      EscapeRoomForm.tsx
      EscapeRoom.css
    ex2-squad-builder/            Exercise 2 - Squad Builder
      SquadBuilder.tsx
      heroes.ts                   Hero interface + initial data
      SquadBuilder.css
    ex3-hr-portal/                Final Exercise - HR Portal
      EmployeePortal.tsx          Root: the employees State + the Router
      types.ts                    Employee interface + departments
      employees.ts                Initial data
      components/
        Navbar.tsx
        EmployeeForm.tsx          One form for Add (and Edit, in the home challenge)
      pages/
        Directory.tsx
        EmployeeProfile.tsx
        EditEmployee.tsx          Home challenge 1
        NotFound.tsx              Ready - an example of a 404 page
      portal.css
```

All the CSS files are ready. You only write TypeScript / JSX logic.

## How to work

Every task is marked in the code with a numbered comment:

```ts
// TODO 3: ...
```

Search the project for `TODO` (in WebStorm: `Ctrl+Shift+F`) and solve the tasks in order.

Until you finish, `npm run lint` shows warnings such as
`'handleAdd' is assigned a value but never used`. This is expected - the warnings
disappear as you complete the TODOs.

## Exercise 1 – Escape Room Booking

File: `src/exercises/ex1-escape-room/EscapeRoomForm.tsx`

A controlled form with one unified State object (text, select, number and checkbox).

- TODO 1 – One generic `handleChange` for all the fields
  (checkbox -> `checked`, number -> `Number(value)`).
- TODO 2 – Derived validation: team name has at least 3 characters,
  participants are between 2 and 6.
- TODO 3 (challenge) – "Extreme" requires at least 4 participants.
- TODO 4 – `isFormValid`: every rule passes and the terms are accepted.
- TODO 5-7 – Show the error messages.

## Exercise 2 – Squad Builder

File: `src/exercises/ex2-squad-builder/SquadBuilder.tsx`

- TODO 1-2 – Add a new hero to the start of the array - immutably, without `push`.
- TODO 3 – Filter by name as Derived State. Never call `setHeroes` to filter.
- TODO 4 (challenge) – "Visible Squad Power": the sum of the heroes that are
  currently visible after filtering.
- TODO 5 – Two empty states: no heroes at all / no search results.

## Final Exercise – HR Portal

Start in `src/exercises/ex3-hr-portal/EmployeePortal.tsx`.

`react-router-dom` is already listed in `package.json`. In a new project of your
own, install it inside the project folder with `npm install react-router-dom`.

When you open the HR Portal tab for the first time you will see the 404 page -
the `/directory` route does not exist yet (TODO 4).

| TODO  | File                  | Task                                                      |
|-------|-----------------------|-----------------------------------------------------------|
| 1-3   | EmployeePortal.tsx    | `handleAdd`, `handleDelete`, `handleUpdate` (immutably)    |
| 4-6   | EmployeePortal.tsx    | Routes: `/directory`, `/employee/:id`, `/add`              |
| 7-8   | Navbar.tsx            | Live employee count, `NavLink` to `/add`                  |
| 9-11  | EmployeeForm.tsx      | `handleChange`, validation, save + `navigate`             |
| 12-16 | Directory.tsx         | Search + department filter, links, delete                 |
| 17-18 | EmployeeProfile.tsx   | `useParams` + `Number(id)` + `find`                       |

### Home challenges

1. **Reusability** – Implement `EditEmployee.tsx` with the same `EmployeeForm`
   and add the `/edit/:id` route. Read the comment in the file about `key`.
2. **Safe delete** – Ask `window.confirm(...)` before deleting.
3. **localStorage** – Keep the employees after a page refresh
   (hint: a lazy initializer for `useState` + `useEffect`).
