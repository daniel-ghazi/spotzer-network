# Spotzer Network

## Overview

This project is a web portal, that enables freelance users to log in, view available tasks, assign tasks to themselves, mark tasks as complete, and view their task history along with earnings.

Project is implemented with React, TypeScript and TailwindCSS.

## [Live Demo](https://daniel-ghazi.github.io/spotzer-network/)

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Starting Project Locally](#starting-project-locally)
  - [Running Tests](#running-tests)
  - [Linting](#linting)
  - [Deploying](#deploying)
- [User Scenarios](#user-scenarios)
- [Design and Architecture Choices](#design-and-architecture-choices)
  - [Technologies](#technologies)
  - [Architecture](#architecture)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Improvements](#future-improvements)

## Getting Started

### Prerequisites

- Node.js (v20.0 or higher)
- npm (v9.0 or higher)

### Installation

To install Spotzer Network, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/daniel-ghazi/spotzer-network.git
   ```
2. Navigate into the project directory:
   ```
   cd spotzer-network
   ```
3. Install dependencies:
   ```
   npm i
   ```

### Starting Project Locally

To use Spotzer Network, follow these steps:

1. Start the server:
   ```
   npm run dev
   ```
2. Open your browser and navigate to:
   ```
    http://localhost:5173/
   ```

### Running Tests

To run tests, use the following command:

```
 npm test
```

### Linting

To run lint, use the following command:

```
 npm run lint
```

### Deploying

Deployment is implemented with Github Pages and `gh-pages` library.

Firstly, run tests and lint to verify quality:

```
 npm test
 npm run list
```

If no problems are found, build project:

```
 npm run build
```

Then run preview command and check production build locally:

```
 npm run preview
```

If no problems are found run:

```
 npm run deploy
```

It would deploy build to GitHub and it would be automatically hosted at `https://daniel-ghazi.github.io/spotzer-network` in couple of minutes.

## User Scenarios

- **Login Page**: Use admin / 12345 to log in. Authentication is simulated.
- **Viewing Tasks**: Once logged in, the homepage displays available tasks from the Spotzer system.
- **Assigning Tasks**: Click on "Assign" button to assign task to yourself. It would move to "In Progress" status automatically.
- **Marking Tasks as Complete**: Tasks that are assigned to you in "In Progress" status can be marked as complete. They would be moved to "Done" column"
- **Viewing History**: Navigate to the history page to view history of your actions. Statuses changes are tracked.
- **Viewing Invoices**: Navigate to the invoices page to view your earnings. Earnings for current month are calculated. The value is equal to sum of amounts of tasks in "Done" assigned to you.

## Design and Architecture Choices

### Technologies

- **React**: strong in component-based architecture, modular and reusable UI components.
- **TypeScript**: saving from myriad of types bugs and makes code safe and easier to work with (self-documenting)
- **Tailwind CSS**: helps with rapid UI development while keeping enterprise-level quality for responsiveness and customization.
- **Context API**: Used for state management to share global state across components without prop drilling. Native and lightweight of small-to-mid-sized apps.
- **Vite**: modern, powerful and fast bundler with easy setup. Great choice for new projects, that do not want to fight Webpack configs.
- **Vitest + React Testing Library**: Vite’s testing library, which is seamlessly integrated into it, and has Jest’s level of unit testing capabilities. RTL adds ability to test components in a user-eccentric way, increasing quality and accessibility.
- **React Router**: routing capabilities provider, de-factor industry standard for React.
- **gh-pages + Github Pages**: quick and easy deployment choice for static websites.

### Architecture

- **API Imitation**: To emulate interaction with a backend service, the application leverages local storage as a persistent data store. Initial data is seeded from predefined mock objects. As users interact with the application, their actions dynamically update the stored data, reflecting changes in real-time and maintaining state across sessions. Delay is simulated by setTimeouts.
- **Global State Management**: The application adopts the React Context API coupled with the Provider pattern to manage and distribute application state globally. This design choice eliminates the complexity and prop-drilling associated with passing data through multiple component layers. Specifically, the useTasks hook encapsulates context usage and simplifies API for other part of App. This approach not only simplifies state management but also enhances component modularity and reusability, laying a foundation for scalable and maintainable code.
- **Authentication**: simulated via cookies. Credentials are checked against mocked data and fake JWT token is placed in cookies after successful login. If token is deleted/expired, then all pages will redirect to Login page. With real authentication, token cookie should be set by server with attributes Secure, HttpOnly, and SameSite=Lax to prevent XSS and CSRF attacks.
- **Folders structure**. The feature-based structure was chosen for its strength in modularity and reusability of components. Notable folders:
  - _assets_: Contains static assets like images.
  - _components_: Contains all common components (Button, Link, etc.) and layouts (Header, Sidebar, etc.).
  - _pages_: Contains top-level component for each page, helping quickly navigate to searched module.
  - _providers_: Houses wrapper Provider components, which abstract usage of Context API for state management. This simplifies usage of common data within project.
  - _hooks_: Contains common pieces of logic stateful logic. They operate in conjunction with Providers to encapsulate Context data and use it in components.
  - _routing_: Contains all routing routing configuration of React Router.
  - _utils_: Contains helper classes and functions (e.g. Logger).
  - _features_: Contains each major feature of the App. All relevant logic is contained within each feature folder. Such an approach allows them to big extracted and reused in other projects later if needed.
    - _components_: Contains sub-components of feature
    - _services_: Contains classes for fetching data and simulating API calls.
    - _model_: Contains data models used in feature,
    - _hooks_: Contains feature-specific hooks for logic reusability and abstraction,
- **Tests**: spread throughout project with name pattern _\*.test.tsx_, placed in the same folder as tested element for easier coupling.

## Challenges and Solutions

- **Challenge**: GitHub Pages is using its own 404 page by default, ignoring project-specific _ErrorPage.tsx_ component.
- **Reason**: it was happening, because GitHub checks for 404.html file and uses own if custom is not provided.
- **Solution**: adding "cp dist/index.html dist/404.html" to build script. This trick would create a copy of index.html as 404.html page. Github Pages would see, that there is 404.html file and would return control to App router. Router would properly navigate user to _ErrorPage.tsx_ component, showing custom error page.

## Future Improvements

- **Security**: when implementing real authentication, token cookie should be set by server with attributes Secure, HttpOnly, and SameSite=Lax to prevent XSS and CSRF attacks.
- **Layout**: different layout components should be used for authenticated and not authenticated users, to prevent usage of location comparisons, as this solution is hard to maintain
- **User Context**: create context for logged user and serve it globally instead of using mock data
- **Performance**: Optimize SVGs with SVGO and implement caching strategies using libraries like TanStack Query.
- **CI/CD**: setup proper CI/CD, automatically running tests, linter check, build and
  deployment
- **Logging**: implement Logger with Sentry/other error tracker
- **Localization**: Implement i18n to support multiple languages and move all strings to strings.js.
- **Accessibility**: Further enhance accessibility features following WCAG guidelines.
- **Features**:
  - implement reset passwords page
  - implement download invoice button
  - make DateFilters empty by default
- **Testing**:
  - fill left tests stubs with real tests
  - fix warning in TasksTracker.test.tsx and AuthenticationForm.test.tsx by mocking async functions of TasksProvider, which cause the issue
