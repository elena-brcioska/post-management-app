# Post Management Application
## Overview

This is a simple posting application built with React, TypeScript, and Material-UI. The app allows users to create, read, update, and delete blog posts, as well as filter posts by authors and search by title. It utilizes JSON Server for mock REST API functionality and TanStack Query for efficient data fetching and state management. While this version does not include authentication because of the scale of the project, future iterations may incorporate user login features to allow personalized experiences. 

It consists of a few pages:

 - **Home page** - a page where the user can view all the listed posts. 
Each individual post, contains a Read More button, that navigates to the detailed post page.
The home page contains an action bar at the top, that gives users the option to filter and sort throught the posts, and a button that navigates to the Add New Post Form.
- **Add New Post** - A page containing the Add New Post form, that gives users the option to create a new post, that by default will be listed at the top of the home page.
- **Post Details** - A page dedicated to an individual post, with the option to Edit or Delete the post.
- **User Page** - A page with user information. The page offers three sections that are accessible through a side drawer. A user can edit each section and save the new info.
 
The primary goal of the application is to provide a seamless platform for users to perform CRUD (Create, Read, Update, Delete) operations on their blog posts. Users can easily create new posts, read and navigate through existing ones, update content as necessary, and delete posts that are no longer relevant. It gives the option to filter the posts, sort by date, or filter by author. The user can create a new post, as well as edit existing posts.

## Key Functionalities

- **Post Creation** - Users can add new posts through a simple form that collects the title, content, author information, and an optional image URL. This feature includes custom validation funtionality to ensure all necessary fields are filled out correctly. The date property is added automatically when you submit the post.

- **Post Management** - Each post is displayed with relevant metadata, allowing users to see who authored the post and when it was created. Users can click on a post to view its details, edit, or delete it. The edit button opens a custom modal displayed in the DOM via React Portal, and contains a form allowing users to change the information about the post.

- **Search Funtionality** -  The application includes a search bar that allows users to quickly find posts. The search is executed server-side, ensuring efficient data retrieval. Additionally, a debouncing mechanism is implemented, which introduces a 300-millisecond delay after the user stops typing. This helps prevent unnecessary API calls and optimizes performance.

- **Filter Posts** - Users can filter posts by specific authors, allowing for easier navigation through a large number of entries. The filtering process involves fetching all posts to create a unique list of authors on the front end. When a user selects an author, a parameter is sent to the server to execute the filtering server-side, ensuring efficient data retrieval.

- **Infinite Scrolling** - To enhance usability, the application implements infinite scrolling, loading more posts dynamically as users reach the bottom of the page. This keeps the user interface clean and responsive without overwhelming users with too many posts at once.

- **User Profile** - While user authentication is not yet implemented due to the current scale of the project, the application is designed with future scalability in mind, allowing for authentication features to be integrated seamlessly. For now, the application supports a single user account, which is fetched from a custom API.

- **User Profile Management** -  Users can view and edit their profile information, including personal details, educational background, and contact information. Changes can be made through an intuitive form, ensuring that user information is kept current and accurate. Users can save their updates with a single click, which triggers validation to ensure data integrity. The new information is saved on the server and is accessable right away.

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

