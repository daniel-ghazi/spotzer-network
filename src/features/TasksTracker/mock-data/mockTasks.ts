import { Task } from "../model/task";

const MOCK_TASKS: Array<Task> = [
  {
    id: 1,
    name: "Design Homepage",
    description:
      "Create a responsive homepage design for the new client's website.",
    status: "Available",
    assignee: null,
    amount: "200$",
  },
  {
    id: 2,
    name: "Develop Contact Form",
    description: "Implement a secure contact form with email notifications.",
    status: "Available",
    assignee: null,
    amount: "150$",
  },
  {
    id: 3,
    name: "SEO Optimization",
    description: "Optimize the website for better search engine ranking.",
    status: "In Progress",
    assignee: "admin",
    amount: "300$",
  },
  {
    id: 4,
    name: "Set Up Hosting",
    description:
      "Choose and set up a web hosting solution for the new website.",
    status: "In Progress",
    assignee: "Carol Danvers",
    amount: "100$",
  },
  {
    id: 5,
    name: "Create Blog Page",
    description:
      "Develop a blog page where the client can post updates and news.",
    status: "Done",
    assignee: "admin",
    amount: "250$",
  },
  {
    id: 6,
    name: "Database Migration",
    description:
      "Migrate the existing database to a new, more scalable platform.",
    status: "Done",
    assignee: "Derek Hale",
    amount: "400$",
  },
];

export default MOCK_TASKS;
