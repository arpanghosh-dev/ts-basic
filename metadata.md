# How to Write Metadata for SEO in Next.js (TSX) in Root and Nested Layouts

This guide explains how to effectively manage SEO metadata in a Next.js project using TypeScript (`.tsx`) files, specifically focusing on usage in both **root** and **nested layouts** using the **App Router**.

---

## 📋 Table of Contents

- [Introduction](#introduction)
- [1. Root Layout Metadata](#1-root-layout-metadata)
- [2. Nested Layout Metadata](#2-nested-layout-metadata)
- [3. Metadata Inheritance and Overriding](#3-metadata-inheritance-and-overriding)
- [4. Do You Have to Add Metadata in Nested Layouts?](#4-do-you-have-to-add-metadata-in-nested-layouts)
- [Summary Table](#summary-table)
- [References](#references)
- [Related Questions](#related-questions)

---

## 📘 Introduction

Next.js App Router (introduced in v13+) provides a powerful way to define metadata for pages and layouts using the `metadata` export. This is especially useful for SEO (Search Engine Optimization), social sharing, and browser enhancements.

---

## 1. Root Layout Metadata

The **root layout (`app/layout.tsx`)** defines metadata that applies globally to your entire app.

### ✅ Example

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'My Website',
    template: '%s | My Website',
  },
  description: 'A great website built with Next.js',
  metadataBase: new URL('https://your-website.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## 2. Nested Layout Metadata

You can define metadata in **nested layouts** to override or extend global settings for specific sections (e.g., admin, public).

### ✅ Example

```tsx
// app/(admin)/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Admin Panel',
    template: '%s | Admin Panel',
  },
  description: 'Admin section of My Website',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Admin-specific layout */}
      {children}
    </section>
  );
}
```

---

## 3. Metadata Inheritance and Overriding

- ✅ **Inheritance**: Metadata from the root layout is passed down to all nested layouts and pages.
- 🔄 **Override**: Nested layouts or pages can override inherited metadata by defining their own `metadata` export.

---

## 4. Do You Have to Add Metadata in Nested Layouts?

Not required, but **recommended** when:
- You want to provide custom SEO metadata for different sections.
- You need unique titles, descriptions, or Open Graph tags.

If not defined, layouts/pages will **inherit metadata** from their parent layout (usually the root layout).

---

## 🧾 Summary Table

| Location                        | Metadata Scope                            | Required? | Inherits From | Can Override? |
|-------------------------------|-------------------------------------------|-----------|---------------|----------------|
| `app/layout.tsx`              | Whole application (global)                | ✅ Yes     | —             | —              |
| `app/(public)/layout.tsx`     | Pages in the `(public)` route group       | ❌ No      | Root Layout   | ✅ Yes         |
| `app/(admin)/layout.tsx`      | Pages in the `(admin)` route group        | ❌ No      | Root Layout   | ✅ Yes         |
| `app/(public)/about/page.tsx` | Specific page (e.g., About in Public)     | ❌ No      | Nested Layout | ✅ Yes         |

---

## 📚 References

- [Next.js Docs: Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Docs: generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js Learn: Adding Metadata](https://nextjs.org/learn/seo/introduction)
- [Practical Guide: SEO in Next.js](https://leerob.io/blog/nextjs-seo)

---

## ❓ Related Questions

- Do I need to add metadata in every nested layout or just in the root layout for SEO?
- How can I use `title.template` to avoid repeating site-wide titles?
- Can I dynamically generate metadata in nested layouts based on page data?
- Is it necessary to define separate metadata objects for each nested layout or can inheritance suffice?
- How does Next.js handle conflicting metadata between root and nested layouts?

---

✅ **In summary**:  
Add metadata in your root layout for global SEO. Use nested layouts to override or extend metadata for specific sections as needed. You do **not** have to add metadata in every nested layout, but you **should** when SEO relevance differs by section.
