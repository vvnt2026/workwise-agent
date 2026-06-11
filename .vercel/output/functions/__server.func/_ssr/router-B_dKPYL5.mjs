import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-D-RaQKFQ.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Bajaj Finserv Connect is an agentic workforce platform for managing employee operations." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Bajaj Finserv Connect is an agentic workforce platform for managing employee operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Bajaj Finserv Connect is an agentic workforce platform for managing employee operations." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a249fdcf-ca36-493b-9d0c-d3edc68bc3a2/id-preview-5a32f8f8--03785747-ca12-423a-8e31-def3b402a218.lovable.app-1780561331026.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a249fdcf-ca36-493b-9d0c-d3edc68bc3a2/id-preview-5a32f8f8--03785747-ca12-423a-8e31-def3b402a218.lovable.app-1780561331026.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./index-VeUsaRUI.mjs");
const Route$6 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Bajaj Finserv Group · Agentic Workforce Platform"
    }, {
      name: "description",
      content: "Built for Bajaj Finserv's 1,04,668 people across 7 entities."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./cockpit.sunita-xsyFCyjj.mjs");
const Route$5 = createFileRoute("/cockpit/sunita")({
  head: () => ({
    meta: [{
      title: "Sunita Rao · Claims Lead · Bajaj General Insurance"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cockpit.rohit-DYbKEJWd.mjs");
const Route$4 = createFileRoute("/cockpit/rohit")({
  head: () => ({
    meta: [{
      title: "Rohit Kapoor · HRBP Field Sales · Bajaj Finance"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./cockpit.priya-By5lQXBy.mjs");
const Route$3 = createFileRoute("/cockpit/priya")({
  head: () => ({
    meta: [{
      title: "Priya Deshmukh · HR Head · Bajaj Life Insurance"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./cockpit.anupam-Dm_g3kgG.mjs");
const Route$2 = createFileRoute("/cockpit/anupam")({
  head: () => ({
    meta: [{
      title: "Anupam Sirbhaiya · Group CHRO · Bajaj Finserv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./cockpit.aarav-CBUoTmDJ.mjs");
const Route$1 = createFileRoute("/cockpit/aarav")({
  head: () => ({
    meta: [{
      title: "Aarav Mehta · Day 23 · Bajaj Finance"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./cockpit._persona._section-DZdEaX5v.mjs");
const Route = createFileRoute("/cockpit/$persona/$section")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const CockpitSunitaRoute = Route$5.update({
  id: "/cockpit/sunita",
  path: "/cockpit/sunita",
  getParentRoute: () => Route$7
});
const CockpitRohitRoute = Route$4.update({
  id: "/cockpit/rohit",
  path: "/cockpit/rohit",
  getParentRoute: () => Route$7
});
const CockpitPriyaRoute = Route$3.update({
  id: "/cockpit/priya",
  path: "/cockpit/priya",
  getParentRoute: () => Route$7
});
const CockpitAnupamRoute = Route$2.update({
  id: "/cockpit/anupam",
  path: "/cockpit/anupam",
  getParentRoute: () => Route$7
});
const CockpitAaravRoute = Route$1.update({
  id: "/cockpit/aarav",
  path: "/cockpit/aarav",
  getParentRoute: () => Route$7
});
const CockpitPersonaSectionRoute = Route.update({
  id: "/cockpit/$persona/$section",
  path: "/cockpit/$persona/$section",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  CockpitAaravRoute,
  CockpitAnupamRoute,
  CockpitPriyaRoute,
  CockpitRohitRoute,
  CockpitSunitaRoute,
  CockpitPersonaSectionRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
