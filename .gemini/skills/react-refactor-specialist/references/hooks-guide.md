# Custom Hooks Extraction Guide

## When to Extract a Hook
1.  **Duplicate Logic**: The same logic (e.g., fetching data, form handling) is used in multiple components.
2.  **Complex Logic**: A component has too many `useState` and `useEffect` calls that clutter the view.
3.  **Testing**: You want to test the logic independently of the UI.

## How to Extract

### Step 1: Identify the Logic
Find the `useState`, `useEffect`, and related handlers that belong together.

### Step 2: Create the Hook Function
Name it starting with `use` (e.g., `useWindowSize`, `useAuth`).

### Step 3: Move Code
Copy the logic into the new function.

### Step 4: Return Values
Return only what the component needs (state variables and updater functions).

## Example

**Before:**
```tsx
function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    // fetch logic...
  }, [query]);

  return <input value={query} ... />;
}
```

**After:**
```tsx
// useSearch.ts
export function useSearch(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // fetch logic...
  }, [query]);

  return { query, setQuery, results };
}

// Search.tsx
function Search() {
  const { query, setQuery, results } = useSearch();
  return <input value={query} ... />;
}
```
