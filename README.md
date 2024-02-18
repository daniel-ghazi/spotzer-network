# Spotzer Network

## Description

This project is a web portal, that enables freelance users to log in, view available tasks, assign tasks to themselves, mark tasks as complete, and view their task history along with earnings.

## [Live Demo](https://daniel-ghazi.github.io/spotzer-network/)

## Getting Started

### Prerequisites

- Node.js (v20.0 or higher)
- npm (v9.0 or higher)

### Installing Spotzer Network

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

## Starting Spotzer Network

To use Spotzer Network, follow these steps:

1. Start the server:
   ```
   npm run dev
   ```
2. Open your browser and navigate to:
   ```
    http://localhost:5173/
   ```

## Running Tests

To run tests, use the following command:

```
 npm test
```

## Running Lint

To run lint, use the following command:

```
 npm run lint
```

## Deploying

Deployment is implemented with Github Pages and `gh-pages` library.

Firstly, run tests and lint to verify quality:

```
 npm test
 npm run list
```

If no problems found, build project:

```
 npm run build
```

Then run preview command and check production build locally:

```
 npm run preview
```

If no problems found run:

```
 npm run deploy
```

It would deploy build to github and it would be automatically hosted at `https://daniel-ghazi.github.io/spotzer-network` in couple of minutes.
