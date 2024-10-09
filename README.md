## Project Overview

The goal is to create a search engine using a React.js frontend, primarily styled with `styled-components`. This project should be implemented as a Single Page Application (SPA), reflecting the design accurately while providing an interactive user experience.

### Technologies Used

- **React.js**: Latest version for building UI components.
- **Styled-components**: For modular and reusable component styling.
- **JavaScript (ES6+)**: For leveraging modern language features.

## Project Structure

The project is structured as follows:

```
├── public/
├── src/
│    └── components/
│    │    └── common/ # Reusable UI elements (buttons, input fields)
│    │    └── features/ # Feature-specific components (search bar, search results)
│    │    └── layout/ # Layout components (header, footer, sidebar)
│    │    └── pages/ # Page-level components (SearchPage)
│    └── services/ # Services for API calls, data fetching, etc.
├── App.js
├── index.js
├── README.md # Project documentation
└── package.json # Project dependencies and scripts
```

## Getting Started

To get started with running the application locally, follow these steps:

### Prerequisites

Ensure you have **Node.js** (v14 or later) and **npm** installed on your machine.

### Installation

1. Clone the repository to your local machine:

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The React app should now be running at `http://localhost:3000`.

4. Run test

   ```bash
   npm run test
   ```
