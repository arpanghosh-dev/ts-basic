# Layouts in Next.js

## What is a Layout?

A layout in **Next.js** is a **React component** that defines the consistent structure shared across multiple pages of your application. Examples include headers, footers, navigation bars, or sidebars.

Layouts are used to:

* Ensure a **uniform look and feel** across pages.
* Reduce **code duplication** by defining shared UI components once.
* Improve **performance** by leveraging **partial rendering**, which means layouts do not re-render on route changes within their scope.

For example, if your layout includes a sidebar with expanded sections, that state will **persist** even as the user navigates between pages using the same layout.

---

## Root Layout vs Nested Layout in Next.js

| Feature        | Root Layout                                                        | Nested Layout                                      |
| -------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| **Definition** | The top-most layout in `/app`                                      | Layouts in subfolders for specific sections        |
| **Purpose**    | Sets global structure: `<html>`, `<body>`, site-wide header/footer | Adds section-specific UI, e.g., dashboard sidebars |
| **Scope**      | Applies to all routes and layouts                                  | Applies only to routes in its folder/subfolders    |
| **Example**    | `/app/layout.tsx`                                                  | `/app/dashboard/layout.tsx`                        |
| **Re-render**  | Persists across all navigations                                    | Persists within its scope only                     |

---

## How They Work Together

* The **Root Layout** is **always mounted** and wraps everything in the application.
* **Nested Layouts** provide **modular structure** and UI customization for specific app sections.

For example:

* `/app/layout.tsx` sets up `<html>`, `<body>`, and a global header.
* `/app/dashboard/layout.tsx` wraps dashboard routes with a sidebar or authenticated layout.

---

## Why Use Layouts?

### ✅ Consistency

Define shared elements once and reuse across multiple pages.

### ✅ Performance

Layouts persist across route changes — React does not unmount and re-render them unnecessarily, improving load time and retaining UI state.

### ✅ Flexibility

Nested layouts make it easier to manage complex UI structures (e.g., admin dashboards, user sections).

---

## Summary

* **Use Root Layout** for global structure and global UI.
* **Use Nested Layouts** for section-specific design and behavior.
* Layouts improve performance via **partial rendering** and help maintain UI **state preservation**.

---

## Related Topics

* How does Next.js use layouts to improve page performance and state preservation?
* What are the key differences between root layout and nested layouts in Next.js?
* Why is partial rendering with layouts beneficial for user experience in Next.js?
* How do nested layouts help manage complex UI sections in a Next.js app?
* In what scenarios would I prefer using a root layout over multiple nested layouts?


