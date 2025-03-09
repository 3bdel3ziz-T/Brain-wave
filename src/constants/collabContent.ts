export const collabText: string =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export type CollabContent = { id: string, title: string, text?: string }
export const collabContent: CollabContent[] = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];