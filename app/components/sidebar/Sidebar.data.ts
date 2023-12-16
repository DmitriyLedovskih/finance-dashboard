import {
  Codepen,
  Figma,
  Github,
  Gitlab,
  LayoutGrid,
  LineChart,
  LogOut,
  MessageCircleMore,
  PieChart,
  Plus,
  User,
  Wallet,
  Youtube,
} from "lucide-react";

export const MENU = [
  {
    id: 1,
    link: "/app",
    icon: LayoutGrid,
  },
  {
    id: 2,
    link: "/statistics",
    icon: LineChart,
  },
  {
    id: 3,
    link: "/statistics-chart",
    icon: PieChart,
  },
  {
    id: 4,
    link: "/wallet",
    icon: Wallet,
  },
  {
    id: 5,
    link: "/message",
    icon: MessageCircleMore,
  },
  {
    id: 6,
    link: "/profile",
    icon: User,
  },
];

export const MENU_APP = [
  {
    id: 1,
    link: "/github",
    icon: Github,
    color: "255, 255, 255",
    size: "small",
  },
  {
    id: 2,
    link: "/gitlab",
    icon: Gitlab,
    color: "219, 100, 21",
    size: "small",
  },
  {
    id: 3,
    link: "/figma",
    icon: Figma,
    color: "180, 88, 12",
    size: "small",
  },
  {
    id: 4,
    link: "/codepen",
    icon: Codepen,
    color: "255, 255, 255",
    size: "small",
  },
  {
    id: 5,
    link: "/youtube",
    icon: Youtube,
    color: "255, 0, 0",
    size: "small",
  },
  {
    id: 6,
    link: "/add",
    icon: Plus,
    color: "63, 63, 63",
    size: "small",
  },
  {
    id: 7,
    link: "/logout",
    icon: LogOut,
    color: "63, 63, 63",
    size: "small",
  },
];
