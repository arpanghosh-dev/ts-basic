# SSR, CSR, SSG, ISR: Rendering Strategies Compared

A concise comparison of SSR (Server-Side Rendering), CSR (Client-Side Rendering), SSG (Static Site Generation), and ISR (Incremental Static Regeneration) with real-world examples.

---

## Rendering Strategies: Definitions & Examples

| Rendering Type | What it Does | When to Use | Examples (React/JS Libraries & Frameworks) |
| -------------- | ------------ | ----------- | ------------------------------------------ |
| **SSR**        | Renders HTML on the server for every request and sends it to the client. | Dynamic data, SEO, personalization | Next.js (`getServerSideProps`), Nuxt.js (Vue), SvelteKit |
| **CSR**        | Ships a minimal HTML and JavaScript bundle; rendering happens in the browser. | SPAs, dashboards, apps, less SEO need | Create React App, Vite, Gatsby (CSR mode), Vue CLI, Angular CLI |
| **SSG**        | Renders HTML at build time; pages are static and fast to serve. | Blogs, docs, marketing, rarely-changing data | Next.js (`getStaticProps`), Gatsby, Hugo, Jekyll, Eleventy |
| **ISR**        | Like SSG, but allows updating static pages after build (on-demand or timed). | Content sites needing auto-refresh | Next.js (`revalidate` in `getStaticProps`) |

---

## 1. Server-Side Rendering (SSR)

- **How:** HTML is generated on the server for every page request.
- **SEO:** Excellent, as crawlers see full content.

**Example (Next.js):**
```js
// pages/index.js
export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return { props: { data } };
}
```
Use SSR for fresh data on every request or personalized content.

**Frameworks/Libraries:**
- Next.js (`getServerSideProps`)
- Nuxt.js (`asyncData`)
- SvelteKit (`load` with SSR enabled)

---

## 2. Client-Side Rendering (CSR)

- **How:** Browser gets a shell HTML and JS bundle; React (or other lib) renders everything in the browser.
- **SEO:** Poor by default, as crawlers may not see content.

**Example (React):**
```js
// App.js (Create React App)
function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/api/data').then(res => res.json()).then(setData);
    }, []);
    return <div>{data ? data.message : "Loading..."}</div>;
}
```
**Frameworks/Libraries:**
- Create React App
- Vite + React/Vue/Svelte
- Angular CLI
- Gatsby (CSR mode)

---

## 3. Static Site Generation (SSG)

- **How:** HTML is generated at build time, not per request.
- **SEO:** Excellent, as pages are static and crawlable.

**Example (Next.js):**
```js
// pages/index.js
export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return { props: { data } };
}
```
Use SSG for blogs, docs, landing pages—content that rarely changes.

**Frameworks/Libraries:**
- Next.js (`getStaticProps`)
- Gatsby
- Hugo, Jekyll, Eleventy

---

## 4. Incremental Static Regeneration (ISR)

- **How:** Like SSG, but lets you update static pages after deployment, either on a schedule or on-demand.
- **SEO:** Excellent.

**Example (Next.js):**
```js
export async function getStaticProps() {
    // ...
    return { props: { data }, revalidate: 60 }; // Regenerate every 60 seconds
}
```
Use ISR for news, e-commerce, or blog sites that need static speed but also regular updates.

**Frameworks/Libraries:**
- Next.js (ISR is built-in)
- Some headless CMSs offer similar features

---

## How Next.js Handles All These

- **SSR:** `getServerSideProps`
- **SSG:** `getStaticProps`
- **ISR:** `getStaticProps` + `revalidate`
- **CSR:** Default for any component/page not using special data fetching methods

---

## Summary Table

| Rendering | Next.js API | Example Use Case | SEO   |
| --------- | ----------- | --------------- | ----- |
| SSR       | getServerSideProps | User dashboards | Great |
| SSG       | getStaticProps     | Blog, docs      | Great |
| ISR       | getStaticProps + revalidate | News, e-commerce | Great |
| CSR       | None (default)     | Internal tools, SPAs | Poor |

---

## Related

- How can I implement server-side rendering using React and Express examples
- What are some popular libraries for SSR in React like Next.js or Gatsby
- How do I choose between Next.js, Nuxt.js, or other frameworks for SSR
- Can you show me a simple example of SSR with Vue.js and Nuxt
- What are the benefits of using a framework like Next.js for SSR over manual setup




# Incremental Static Regeneration (ISR) in Next.js

Incremental Static Regeneration (ISR) allows you to update static pages after build time in Next.js. This combines the speed of Static Site Generation (SSG) with the flexibility of Server-Side Rendering (SSR). ISR enables fast delivery of static content while keeping it fresh by regenerating pages in the background.

---

## How ISR Works

1. **Build Time**: Static HTML is generated using available data.
2. **On Request**: Cached static page is instantly served.
3. **Background Regeneration**:

   * If the page is older than the `revalidate` interval, Next.js regenerates it in the background.
   * The stale page is served to the first user.
   * Fresh version is cached and served to subsequent users.
4. **On-Demand Generation**: Pages not created at build time can be generated the first time they're requested (if allowed).

---

## ISR with App Router (Next.js 13+)

```tsx
// app/blog/[id]/page.tsx

interface Post {
  id: string
  title: string
  content: string
}

// Revalidate every 60 seconds
export const revalidate = 60;

// Pre-render known pages at build time
export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then(res => res.json());
  return posts.map(post => ({ id: String(post.id) }));
}

// Allow ISR for new pages
export const dynamicParams = true;

export default async function Page({ params }: { params: { id: string } }) {
  const post: Post = await fetch(`https://api.vercel.app/blog/${params.id}`).then(res => res.json());
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
```

### Key Points:

* Pages are pre-rendered for known posts at build.
* Pages are revalidated in the background after 60 seconds.
* New posts are generated on-demand if requested.

---

## ISR with Pages Directory

```tsx
// pages/blog/[id].tsx

import type { GetStaticPaths, GetStaticProps } from 'next';

interface Post {
  id: string;
  title: string;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch('https://api.vercel.app/blog').then(res => res.json());
  const paths = posts.map((post: Post) => ({
    params: { id: String(post.id) },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetch(`https://api.vercel.app/blog/${params!.id}`).then(res => res.json());
  return {
    props: { post },
    revalidate: 60,
  };
};

export default function Page({ post }: { post: Post }) {
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
```

---

## Benefits of ISR

* ⚡ **Performance**: Static pages load instantly.
* 🔄 **Freshness**: Content stays up to date without full rebuilds.
* 🧩 **Scalability**: Ideal for large dynamic sites with lots of pages.
* 🛠️ **Flexibility**: Supports both scheduled and on-demand regeneration.

---

## FAQs

### 1. How does ISR combine static and dynamic rendering?

By serving pre-built static pages while allowing updates on a defined interval or on-demand.

### 2. What does the `revalidate` property do?

It sets the interval (in seconds) after which a page becomes eligible for regeneration.

### 3. How does ISR help large content sites?

It avoids long build times by only generating or updating pages as needed.

### 4. What is on-demand regeneration?

Next.js generates a page when it's first requested if it wasn’t pre-built, then caches it.

### 5. How do `getStaticProps` and `generateStaticParams` enable ISR?

They define what data is used at build time and allow dynamic page generation later.

---

## Supported Frameworks

* ✅ **Next.js** (primary support)
* ✅ **Nuxt.js**, **Angular Universal** (similar concepts)

---

ISR empowers developers to achieve the best of both worlds: blazing fast static content delivery and seamless content updates.

