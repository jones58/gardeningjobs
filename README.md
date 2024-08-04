// cloned from my main london frontend jobs repo: https://github.com/jones58/jobseeker //

# Jobseeker

- A job board that refreshes daily.
- Built in React and Tailwind CSS, bootstrapped with Vite.

## Why?

I built this tool because I wanted a way to collect job sites. Initially, I tried doing this through an RSS reader but given most sites don't have RSS, an API, or need a login - I decided to build something myself.

I read recently about Cory Doctorow's [unusual use of 100 or so open tabs](https://pluralistic.net/2024/01/25/today-in-tabs/), as a way to check all the websites he wants to look through daily. I already have some tabs that open every time I open Firefox, so using this method for job sites seemed too overhwhelming - better to use a website I could edit and share with friends.

## How I Built It

- Used React and Vite. I really like using React for the ability to split a complex site into components. Whilst this is a relatively simple single-page site, the ability to split code into silos is very useful and keeps the code clean and organised.

- Used Tailwind CSS for styling - again, a really quick solution that enables rapid prototyping.

- Added animation with Framer Motion.
- Added confetti with React Confetti.

## How to deploy

NPM install
NPM run dev - for local development
NPM run build - for production

## Contributions

- I welcome any contributions to the project! Feel free to fork it if you want too - it's quite front-end/design focussed atm so would welcome a backend version. It could also be helpful for other industries.

## TO DO:

- When new day, sometimes have to reload the page to get new set of sites because it's loading from cache. Fix this by forcing reload.
