import figma from "../assets/icons/figma.svg";
import notion from "../assets/icons/notion.svg";
import discord from "../assets/icons/discord.svg";
import slack from "../assets/icons/slack.svg";
import photoshop from "../assets/icons/photoshop.svg";
import protopie from "../assets/icons/protopie.svg";
import raindrop from "../assets/icons/raindrop.svg";
import framer from "../assets/icons/framer.svg";

export type CollabApps = { id: string, title: string, icon: string, width: number, height: number }

export const collabApps: CollabApps[] = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];