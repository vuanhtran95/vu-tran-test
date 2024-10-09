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
### How search feature works?
Search Input: Users can enter text in the search bar and click the search button to look up records based on their title or content.

Filters: Users can filter the search results using the following criteria:

Category: Filter records by category. Decision: Filter records by the decision status. Company: Filter records by the associated company. Date: Filter records by a specific date.

Pagination:
Items per page: A dropdown allows users to select the number of items displayed per page. Page navigation: Users can switch between pages, and the data will update accordingly based on the selected page.

Sorting: Users can sort records in four ways: Name (ASC/DESC): Sort by title in ascending or descending order. Date (ASC/DESC): Sort by date in ascending or descending order.
Automatic Search Update: Every time the filters, pagination, or sorting options are changed, the search results are updated automatically.
