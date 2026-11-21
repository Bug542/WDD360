# W10 Other Frameworks Practice — React

This folder contains my Week 10 frontend framework practice for WDD 360.

## Tutorial

I used the official React tutorial **Thinking in React**:
https://react.dev/learn/thinking-in-react

The tutorial teaches how to break a product table into reusable components, pass data through props, store filter settings with state, and use events to update the screen.

## What I built

**Student Gear Finder** is a searchable list of school and desk supplies. It has:
- Reusable `SearchBar`, `ProductTable`, `ProductCategoryRow`, and `ProductRow` components
- Text search by product name or category
- An in-stock checkbox
- Results that update as the filters change
- A message when there are no matching results

This is my own version of the tutorial example, with different product data and styling.

## Run locally

From the `week10-react-practice` directory:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To check the production build, run `npm run build`.

## How React compared to Svelte

React and Svelte both let you build reusable components and pass information between them. React uses JSX and the `useState` hook to track changing data. With Svelte, I found the component syntax simpler because the HTML, JavaScript, and CSS can live together in one `.svelte` file, and updating reactive values requires less setup. React took me a little more code, especially for state and event handlers, but the component structure was similar.

## AI use attribution

OpenAI ChatGPT assisted with the React project scaffolding, code, and explanatory notes. The tutorial and component concepts came from the official React documentation linked above.
