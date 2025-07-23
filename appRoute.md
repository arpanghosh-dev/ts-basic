
# 📘 Why `/app/(public)/page.tsx` Renders as Root (`/`) in Next.js App Router

## 🧩 Directory Structure Overview

```txt
app/
├── (admin)/
│   └── layout.tsx
├── (auth)/
│   ├── forget-password/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── login/
│       └── page.tsx
├── (public)/
│   ├── about/
│   │   └── page.tsx
│   ├── contact-us/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx         👈 This renders as the root page
├── (user)/
│   └── layout.tsx
├── error.tsx
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.module.css
```

## ❓ Why does `(public)/page.tsx` render as the root (`/`)?

### ✅ Because of **Route Groups**

Next.js uses **route groups** (folders wrapped in parentheses like `(public)`, `(auth)`, etc.) to **organize files** **without affecting the URL path**.

> So, `/app/(public)/page.tsx` is treated by the router as `/app/page.tsx` (i.e., `/`).

Since you **don’t have a real `/app/page.tsx`**, Next.js finds the first one inside a route group — here, it’s `/app/(public)/page.tsx` — and renders it for the home page.

## 🛑 What if `page.tsx` is missing completely?

- If no `page.tsx` exists in `/app` or any route group at the root level,
- And the user visits `/`,
- Then **Next.js will return a 404** (default or custom if defined).

## ❓ Why don't I see a `not-found.tsx`?

Because you **haven’t defined it yet**. If you want to show a **custom 404 page**, you must add:

```tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
```

Without this, Next.js uses its **default 404 page**.

## 🧭 Routing Summary

| File Location                      | URL Path Rendered |
|-----------------------------------|--------------------|
| `/app/(public)/page.tsx`          | `/`                |
| `/app/(public)/about/page.tsx`    | `/about`           |
| `/app/(public)/contact-us/page.tsx` | `/contact-us`    |
| `/app/(auth)/login/page.tsx`      | `/login`           |
| `/app/not-found.tsx` (optional)   | Custom 404 Page    |

## ✅ In Summary

- `(public)` is a route group — ignored in the URL.
- `/app/(public)/page.tsx` **acts as** the root page (`/`).
- No `page.tsx` → you get a 404.
- No `not-found.tsx` → you get the default 404.
- Add `/app/not-found.tsx` to customize your 404 error page.