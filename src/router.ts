import { createRouter } from "@tanstack/react-router";
import "./index.css";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({ routeTree, defaultPreload: "intent" });
