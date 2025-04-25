import { createRootRoute } from "@tanstack/react-router";
import { GlobalLayout } from "../patterns/GlobalLayout";

export const Route = createRootRoute({
  component: GlobalLayout,
});
