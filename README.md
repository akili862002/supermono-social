# Supermonos

Supermonos is a web application built with the Next.js framework that allows users to create and host social events. Users can enter information such as the title, description, and date/time of the event and then click the "Create Social" button to create the event.

## Demo

- [Live Demo](https://supermono-social.vercel.app/)

## Feature

- Users can create and host social events
- Users can enter information about the event such as the title, description, and date/time
- Responsive design
- Built with `next.js` framework
- Uses `formik` and `yup` for form validation
- Uses `dayjs` for date and time formatting
- Uses `styled-components` for styling components
- Uses `next-seo` for SEO optimization and meta tags
- Uses `react-hot-toast` for toast notifications
- Uses `react-query` for data fetching and caching
- Uses `axios` for HTTP requests
- Uses `@headlessui/react` for useful UI components
- Use `typescript` for type checking to improve code quality and reduce bugs

## Route structure

- `/` - Home page, where users can create and host social events
- `/post/:id` - Post page, where users can view the event information

## Folder structure

The application follows a typical Next.js folder structure:

- `components`: Contains all the reusable components used throughout the application
- `config`: Contains the configuration files for the application, such as axios global config
- `containers`: Contains the container components that wrap the presentational components
- `layouts`: Contains the layout components used to wrap the pages
- `pages`: Contains all the page components for the application
- `theme`: Contains the theme files for styled-components
- `types`: Contains the TypeScript type definitions used throughout the application
- `utils`: Contains the utility functions used throughout the application

## Getting Started

To get started, follow these steps:

1. Clone the repository to your local machine
2. Install the dependencies using the following command:

```
yarn install
```

3. Run the development server using the following command:

```
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

To use the Supermonos application, follow these steps:

Fill out the form with the event information such as the title, description, and date/time
Click on the "Create Social" button to create the event

View the event on the Post page

## License

Supermonos is licensed under the MIT License. See the LICENSE file for more information.

# Author

Dung Nguyen (dung862002@gmail.com)
