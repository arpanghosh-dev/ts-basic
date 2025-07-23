# Next.js Navigation: `next/link` and `next/navigation` Explained

Next.js provides robust navigation tools for both client-side and server-side routing. The two main modules are:

* **`next/link`**: For declarative, client-side navigation via the `<Link>` component.
* **`next/navigation`**: For programmatic navigation and route information via hooks and functions.

This guide details all major methods, hooks, and use cases with examples.

---

## 1. `next/link`: The `<Link>` Component

### 📌 Purpose

* Enables **client-side navigation** between pages.
* Improves performance and UX via **prefetching**.

### ✅ Basic Usage

```tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
```

### 🔁 Dynamic Routing

```tsx
function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
```

### 🔧 With Custom Components

```tsx
<Link href={href} passHref legacyBehavior>
  <RedLink>{name}</RedLink>
</Link>
```

Use `passHref` and `legacyBehavior` for custom components wrapping `<a>`.

### 🎯 Active Link Styling with `usePathname`

```tsx
'use client';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link className={pathname === '/' ? 'active' : ''} href="/">Home</Link>
      <Link className={pathname === '/about' ? 'active' : ''} href="/about">About</Link>
    </nav>
  );
}
```

### ⚙️ Prefetching

* Enabled by default
* Disable with `prefetch={false}`

### 🌐 External Links

Use native `<a>` tag, not `<Link>`:

```tsx
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External</a>
```

---

## 2. `next/navigation`: Hooks and Functions

These are mainly used in the **App Router** (inside `app/`) for programmatic navigation and route handling.

### 🔑 Key Hooks and Functions

| Name                | Purpose                                           | Example                             |
| ------------------- | ------------------------------------------------- | ----------------------------------- |
| `useRouter()`       | Programmatic navigation (`push`, `replace`, etc.) | `const router = useRouter();`       |
| `usePathname()`     | Get current path                                  | `const pathname = usePathname();`   |
| `useSearchParams()` | Read query parameters                             | `const params = useSearchParams();` |
| `useParams()`       | Access dynamic route params                       | `const params = useParams();`       |
| `redirect()`        | Programmatic redirect                             | `redirect('/login')`                |
| `notFound()`        | Trigger 404 page                                  | `notFound()`                        |

---

### 🔀 `useRouter()`

```tsx
'use client';
import { useRouter } from 'next/navigation';

export default function Example() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/dashboard')}>
      Go to Dashboard
    </button>
  );
}
```

Methods: `push`, `replace`, `back`, `refresh`

### 📍 `usePathname()`

```tsx
import { usePathname } from 'next/navigation';
const pathname = usePathname();
console.log(pathname); // e.g. "/about"
```

Useful for dynamic styling and route-based logic.

### 🔍 `useSearchParams()`

```tsx
import { useSearchParams } from 'next/navigation';

const searchParams = useSearchParams();
const value = searchParams.get('key');
```

### 🧩 `useParams()`

```tsx
import { useParams } from 'next/navigation';

const params = useParams();
console.log(params); // e.g., { id: '123' }
```

### 🔁 `redirect()` and ❌ `notFound()`

```tsx
import { redirect, notFound } from 'next/navigation';

if (!user) redirect('/login');
if (!data) notFound();
```

Typically used in **server components** or **middleware**.

---

## ✅ Summary Table

| Feature             | Use Case                | Syntax                             |
| ------------------- | ----------------------- | ---------------------------------- |
| `<Link>`            | Declarative navigation  | `<Link href="/about">About</Link>` |
| `useRouter()`       | Programmatic navigation | `router.push('/about')`            |
| `usePathname()`     | Get current route       | `const pathname = usePathname()`   |
| `useSearchParams()` | Read query parameters   | `searchParams.get('key')`          |
| `useParams()`       | Dynamic route values    | `params.id`                        |
| `redirect()`        | Server/client redirect  | `redirect('/login')`               |
| `notFound()`        | Trigger 404 page        | `notFound()`                       |

---

## 🧠 Best Practices

* Use `<Link>` for internal links.
* Use `useRouter` and related hooks for programmatic needs.
* Use `<a>` for external links.
* Use `usePathname()` for active nav state.
* Use `redirect()` and `notFound()` in server logic where applicable.

---

Next.js navigation offers powerful capabilities to handle all routing scenarios effectively. Use `next/link` for simplicity and performance, and `next/navigation` for advanced logic and control.

# Navigating Back in Next.js

To navigate back to the previous page in a Next.js application—mimicking the browser's back button—you have several straightforward options depending on whether you are using the **Pages Router** or the **App Router**.

---

## ✅ Using the App Router (`next/navigation`)

If you are using the **App Router (Next.js 13+)**, you should use the `useRouter` hook from `next/navigation`. The `router.back()` method navigates back in the browser's history stack, just like clicking the browser's back button.

```jsx
'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()}>
      Go Back
    </button>
  )
}
```

> ✅ This will take the user to the previous page in their browsing history.

---

## ✅ Using the Pages Router (`next/router`)

If you are using the **Pages Router**, the pattern is nearly identical, but you import from `next/router` instead:

```jsx
import { useRouter } from 'next/router'

export default function BackButton() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()}>
      Go Back
    </button>
  )
}
```

> ✅ This also calls `window.history.back()` under the hood.

---

## ✅ Using the Native History API

If you want more direct control, you can use the browser's native History API:

```jsx
<button onClick={() => window.history.back()}>
  Go Back
</button>
```

> ✅ This works in both the App Router and Pages Router, but using `router.back()` is preferred for consistency and future compatibility.

---

## ⚠️ Additional Notes

* If the user **landed directly** on your page (no previous history entry), calling `router.back()` or `window.history.back()` will **do nothing**.
* For **advanced scenarios** (like preventing navigation or handling the back button event), you can listen to the `popstate` event and implement custom logic.
* Always:

  * Use `useRouter` from `next/navigation` in the App Router.
  * Use `useRouter` from `next/router` in the Pages Router.

---

## 📋 Summary Table

| Router Type  | Import From       | Back Navigation Method  |
| ------------ | ----------------- | ----------------------- |
| App Router   | `next/navigation` | `router.back()`         |
| Pages Router | `next/router`     | `router.back()`         |
| Native       | N/A               | `window.history.back()` |

---

## 🔗 Related Topics

* How can I implement a custom back button in Next.js that mimics browser behavior?
* What is the best way to use `router.back()` for navigating back in Next.js?
* How do `window.history.pushState` and `replaceState` help with navigation in Next.js?
* Can I prevent users from leaving my site when they click back using Next.js routing?
* What's the difference between `router.back()` and `window.history.back()` in Next.js?

---

This approach ensures a seamless and idiomatic way to navigate back in **Next.js applications**, matching user expectations for browser navigation.

