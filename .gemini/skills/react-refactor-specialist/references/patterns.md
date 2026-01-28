# React Refactoring Patterns

## 1. Component Extraction
**Problem:** Component is too large (> 200 lines) or handles too many responsibilities.
**Solution:** Break it down into smaller, single-responsibility components.

### Pattern: Split by Logical Section
If a component renders a Header, a List, and a Footer, create `<Header />`, `<List />`, and `<Footer />`.

### Pattern: Presentational vs. Container
- **Container**: Handles logic, data fetching, and state.
- **Presentational**: Receives data via props and renders UI.

## 2. Conditional Rendering
**Problem:** Complex ternary operators or `&&` chains in JSX.
**Solution:** Extract to helper functions or sub-components.

```tsx
// Bad
{isLoggedIn ? (isAdmin ? <AdminDashboard /> : <UserDashboard />) : <Login />}

// Good
function Dashboard({ user }) {
  if (!user) return <Login />;
  if (user.isAdmin) return <AdminDashboard />;
  return <UserDashboard />;
}
```

## 3. Composition over Inheritance
**Problem:** Passing too many props down to children (Prop Drilling).
**Solution:** Use `children` prop or specialized composition.

```tsx
// Bad
<Layout headerProp={...} footerProp={...} />

// Good
<Layout>
  <Header {...} />
  <Body />
  <Footer {...} />
</Layout>
```
