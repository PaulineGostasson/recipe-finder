# Recipe Finder

**Recipe Finder** is a web application built with **React** and **Vite** that allows users to search for recipes based on ingredients. It uses the **Spoonacular API** to fetch recipe details and display them to users in a clean and modern UI. Users can view basic information about recipes such as ingredients and preparation time, and also view detailed instructions.

## Features

- Search for recipes by ingredients.
- Fetch and display recipes using the **Spoonacular API**.
- View recipe details in a modal.
- Responsive design, optimized for desktop and mobile.
- Environment variable support for storing API keys securely.
- Built with Vite for fast development and bundling.

## Screenshots

![Recipe Finder Screenshot](https://imgur.com/a/BFkmOkB)  
*A screenshot of the Recipe Finder interface.*

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for faster builds and development.
- **Axios**: For making HTTP requests to the Spoonacular API.
- **Spoonacular API**: For retrieving recipe data.
- **CSS**: For styling the UI.

## Installation

To get a local copy of the project up and running, follow these steps.

### Prerequisites

1. [Node.js](https://nodejs.org/en/) (LTS version recommended).
2. [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/PaulineGostasson/recipe-finder.git
   cd recipe-finder

2. **Install dependencies**:
   
   ```bash
   npm install or yarn install

3. **Set up environment var**:
   
   - Create a .env file in the root of the project
   - Add the following environment var (replace your-api-key with yout actual Spoonacular API key):
     ```bash
     VITE_SPOONACULAR_API_KEY=your-api-key

4. **Run the application**:

   Using npm or Yarn:
   ```bash
   npm run dev or yarn dev

This will start the Vite development server, and the app will be accessible at your localhost.

### Usage

1. Enter an ingredient (e.g., "chicken") into the search bar and click Find Recipes.
2. A list of recipes will be displayed. Click on a recipe to view its details.
3. A modal will pop up with the full recipe, including instructions and other information.

### Env Variables

Make sure to use the following env variable to store your API key:
- VITE_SPOONACULAR_API_KEY: Your Spoonacular API key, used for accessing the Spoonacular API.

### How to Obtain an API Key

1. Visit the Spoonacular API website.
2. Sign up and obtain an API key.
3. Add the API key to your .env file as shown above.

### Vercel Deployment

I used Vercel to easily deploy my app and you can also do this if u follow these steps:

1. Set up a new project in Vercel.
2. Add your VITE_SPOONACULAR_API_KEY to the environment variables in the Vercel Dashboard.
3. Deploy your app by pushing to your GitHub repository or using the Vercel CLI.

### Author
- Pau Göstasson: [yourwebsite.com](https://paulinegostasson.vercel.app/)
- GitHub: @PaulineGostasson

### Acknowledgements

- Last but not least thanks to Spoonacular for providing the recipe API.
