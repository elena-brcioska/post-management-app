# Post Management Application

This is a simple posting application built with React, TypeScript, and Material-UI. The app allows users to create, read, update, and delete blog posts, as well as filter posts by authors and search by title. It utilizes JSON Server for mock REST API functionality and TanStack Query for efficient data fetching and state management.

## Features

- **Create, Read, Update, and Delete Posts:** Users can add new posts, view existing posts, edit them, or remove them.
- **Search Functionality:** Users can search for posts by title using a debounce search input.
- **Author Filtering:** Users can filter posts by author.
- **Infinite Scroll:** Automatically fetch more posts when scrolling down.

## Tech Stack

- **Frontend:** React, TypeScript, Material-UI
- **State Management:** TanStack Query
- **Mock API:** JSON Server
- **Routing:** React Router

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation and Running the Application

1. Clone the repository:
```bash
git clone https://github.com/elena-brchioska/post-management-app.git
```
2. Navigate to the project directory:
```bash
cd post-management-app
```
3. Install the dependencies:
```bash
npm install
```
4. Start the application:
```bash
Start the application:
```

5. Open your browser and go to:
```bash
http://localhost:5173/
```

* If you want to access the api endpoint:
```bash
http://localhost:3000/
```

## Usage

- **Creating a Post:** Use the provided form to enter the title, content, author, and an image URL.
- **Editing a Post:** Click on the post title to view the post details and use the edit button to make changes.
- **Deleting a Post:** Click on the delete button to remove a post.
- **Filtering Posts:** Use the dropdown to filter posts by author.
- **Searching Posts:** Use the search bar to find posts by title.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

