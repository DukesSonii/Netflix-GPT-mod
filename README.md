<div align='center'>



<h1>Movie Bix</h1>
<p>The Movie Bix is a movie recommendation platform similar to Netflix, featuring interactive posters that let users explore detailed information about movies and series. By clicking on a poster, users can view trailers, genres, popular screenshots, full cast lists, similar movies, and real-life reviews.

For series, users can toggle between movies and series with ease. Series data includes information for each season, and within a season, users can view details about every episode, including individual trailers and additional features similar to those for movies.

The platform includes categories such as Popular, Latest, and Upcoming, which help boost user engagement. A search function enables users to find and watch movies or series based on their search queries.

A GPT-powered search with multi-language support was added to provide AI-generated recommendations across multiple genres, improving search efficiency. OpenAI API integration also enhances content discovery with AI-generated movie descriptions.

To maintain high performance and responsiveness, Redux was used extensively for state management, which improved the platform's efficiency and user experience.</p>


<h4> <a href=https://dukeflixgpt.web.app/>View Demo</a> <span> · </span> <a href="https://github.com/DukesSonii/Netflix-GPT-mod/issues"> Report Bug </a> <span> · </span> <a href="https://github.com/DukesSonii/Netflix-GPT-mod/issues"> Request Feature </a> </h4>

</div>

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)

- [Contact](#handshake-contact)

## :star2: About the Project

### :dart: Features

- Authentication
- Form Validation
- Firebase Setup
- Deploying our app to production
- Implement Sign In user Api
- Implemented Sign out 
- Update Profile
- Regiter TMDB API & create an app & get access token
- Displaying Posters from TMDB
      -now playing movies list API
      -Popular movies list API
      -Top-Rated movies list API
      -Upcoming movies list API
 - Create movieSlice
- Fetch Data for Trailer Video in background
- Embedded the Yotube video and make it autoplay and mute
-  Made each movie and series poster clickable, allowing users to view detailed content, including trailers, genres, cast, and reviews.

Detailed Movie Modal Functionality:
- Movie Information Modal: Added an interactive modal for movies, which displays detailed information such as:
    - Movie trailer (autoplay with mute)
    - Full description
    - Cast and crew details
    - Release date, rating, and runtime
    - Popular screenshots from the movie
    - Similar Movies
    - User-generated reviews
    - Similar movie suggestions based on genre and user interest
- Make Each Similar Movie Clickable and navigate to their modal
- Dynamic Data Loading: Implemented lazy loading for content within the modal to optimize performance when switching between movies.

Detailed Series Modal Functionality:
Series-Specific Functionality:
-  Series Slider
-  Series Information Modal: Added an interactive modal for Series, which displays detailed information such as:
    - Seasonal Trailer: For each series, users can view all seasons in a collapsible format, making it easier to browse through episodes.
    - Full description
    - make season clickable to see season details like trailer and its episodes
      - See all Episode Trailer Integration: each episode trailer is embedded via YouTube with autoplay and mute functionality.
      - Popular Screenshots of particuar Season
    - Cast and crew details
    - Similar Series Suggestions: Similar series recommendations are displayed based on genres, helping users discover related content.
    - Make Each Similar Series Clickable and navigate to their modal

Enhanced User Experience:
- AI-Powered Recommendations: Integrated a GPT-powered search that provides AI-generated recommendations across various genres
- OpenAI API Integration: Enhanced movie and series exploration with AI-generated descriptions that provide richer content for users.
- Multi-Language Support: Search functionality supports multiple languages, catering to a diverse user base.
- Categories for Improved Interaction: Built category-based filtering (Popular, Latest, Upcoming) to improve content discovery and user engagement.
- Poster-Based Navigation: Clicking on posters dynamically loads detailed content into a modal, avoiding unnecessary page reloads and improving user experience.
 
- Made our Site Responsive


### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_OPENAPI_KEY`

`VITE_TMDB_KEY`

`VITE_FIRE_BASE_API_KEY`

## :toolbox: Getting Started

### :bangbang: Prerequisites

- Install Node Js in your computer<a href="https://nodejs.org/en"> Here</a>
- Setup Firebase <a href="https://firebase.google.com/"> Here</a>

- Get you OpenAI Platform API key<a href="https://platform.openai.com/"> Here</a>
- Get you TMDB API key<a href="https://developer.themoviedb.org/reference/intro/getting-started"> Here</a>

### :running: Run Locally

Clone the project

```bash
https://github.com/DukesSonii/Netflix-GPT-mod.git
```

Go to the project directory

```bash
cd netflix-gpt
```

Install dependencies

```bash
npm i
```

Start the server

```bash
npm run dev
```

## :handshake: Contact

Duke Soni -- dukesoni05@gmail.com

  
