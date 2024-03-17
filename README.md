# AppWrite Redux Blog

Welcome to AppWrite Redux Blog! This React-based application integrates AppWrite for backend services and Redux for efficient state management, offering features like managing blog posts, user authentication, and more.

## Overview

AppWrite Redux Blog provides a user-friendly interface for creating, editing, and managing blog posts efficiently. It utilizes various components and features, including user authentication, blog post creation, editing, and deletion.


## Getting Started

Follow these simple steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository

```bash
git clone https://github.com/lokeshwar777/appwrite-redux-blog.git
cd appwrite-redux-blog
```

Install dependencies

```bash
npm install
```

Install Tailwind CSS

```bash
npx tailwindcss init -p
```

### Running the App

Before starting the development server, you need to configure the necessary environment variables for AppWrite. Follow these steps:

1. **Create an AppWrite Account**: If you haven't already, sign up for an account on [AppWrite](https://appwrite.io/).

2. **Create a Project**: Log in to your AppWrite dashboard and create a new project for your Redux Blog application.

3. **Configure Environment Variables**: Set up the following environment variables either in your local environment or using a `.env` file in the root directory of your project from the `.env.sample` file:

   ```plaintext
   VITE_APPWRITE_URL=your-appwrite-endpoint
   VITE_APPWRITE_PROJECT_ID=your-appwrite-project-id
   VITE_APPWRITE_DATABASE_ID=your-appwrite-database-id
   VITE_APPWRITE_COLLECTION_ID=your-appwrite-collection-id
   VITE_APPWRITE_BUCKET_ID=your-appwrite-bucket-id
   ```
   
   Replace values of the variables with your AppWrite endpoint URL, project ID, database ID, collection ID, and bucket ID respectively.


Start the development server.

```bash
npm run dev
```

### Building for Production

Build the project for production.

```bash
npm run build
```

## Usage

1. Authentication: Users can sign up and log in to access the blogging features.

2. Create New Posts: Authenticated users can create new blog posts using the "Add Post" feature.

3. Edit and Delete Posts: Users can edit or delete their own posts using the corresponding options available.

4. View All Posts: The "All Posts" section allows users to view all published blog posts.

## Built With

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): A predictable state container for JavaScript applications.
- [Redux Toolkit](https://redux-toolkit.js.org/): The official, opinionated, batteries-included toolset for efficient Redux development.
- [Vite](https://vitejs.dev/): Next-generation frontend tooling.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [AppWrite](https://appwrite.io/): A secure backend server for building web and mobile applications.


## Contribute to the Project

This project is open for contributions, and your input is highly valued. If you encounter any issues or have ideas for improvements, please feel free to contribute. Follow the steps below to get started:

1. Fork the repository to your GitHub account.

2. Clone the forked repository to your local machine:

```
git clone https://github.com/your-username/appwrite-redux-blog.git
cd appwrite-redux-blog
```

3. Create a new branch for your contribution:

```
git checkout -b feature/your-feature
```

4. Make your changes and commit them:

```
git add .
git commit -m "Add your concise commit message"
```

5. Push your changes to your forked repository:

```
git push origin feature/your-feature
```

6. Create a pull request from your branch to the main repository.

## Issues

If you come across any issues or have suggestions, please [create an issue](https://github.com/lokeshwar777/appwrite-redux-blog/issues).

## Credits

Projects inspired by the "Chai aur React" Playlist from [Hitesh Choudhary](https://www.youtube.com/@chaiaurcode).

This project benefited from the assistance of ChatGPT, a language model developed by OpenAI. ChatGPT provided guidance and help in refining certain aspects of the project.

## License

This project is licensed under the [MIT License](LICENSE).