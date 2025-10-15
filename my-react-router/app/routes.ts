// route.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // The root layout route
  route("/", "root.tsx", [
    // 👇 Child routes inside <Outlet /> of root.tsx
    index("routes/home.tsx"), // default / route
    route("about", "routes/about.tsx"),
    route("product", "routes/product.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;