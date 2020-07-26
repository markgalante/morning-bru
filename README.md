# Morning Bru! ☕

During my continous learning about [React](https://reactjs.org/), I dedicated some time to familiarise myself with calls to APIs with the [Redux-Saga](https://redux-saga.js.org/) middleware. Redux with React itself presented quite a learning curve and I heard that Redux-Saga presents the same. So I started off by practicing with calls to APIs: to [NewsAPI](https://newsapi.org/) and to [The Internet Chuck Norris Database](https://api.icndb.com/) (Chuck Norris jokes are <em>still</em> a joke apparently). Moreover, I also made use of Reacts new hooks: [useEffect](https://reactjs.org/docs/hooks-effect.html) and [useState](https://reactjs.org/docs/hooks-state.html) to get information on COVID-19 case numbers from [Postman APIs](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest). I'm sure a lot of the cases are incorrect but South Africa's case number is correct. So with all of this, I've created a perfect website for the trimmed-bearded-individual based in Cape Town's city centre who'll enjoy some news headlines, Chuck Norris jokes and scoff over the case numbers while sipping his morning brew. Enjoy! 

## Table of Contents 
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Stack](#stack)
- [License](#license)

## Screenshots
### News: 
![News](/screenshots/morning-bru-news.png)

### Jokes: 
![Joke](/screenshots/morning-bru-joke.png)

### Covid Cases: 
![Covid](/screenshots/morning-bru-covid.png) 

## Installation

Clone the repository into your local system
```
   $ git clone https://github.com/markgalante/crwn-clothing.git
```

Install dependencies
```
   $ npm install
```

Navigate to client directory and run
```
   $ npm start
```

## Stack
- Front-end framework with [React](https://reactjs.org/)
- State management with [React-Redux](https://react-redux.js.org/)

### React-Redux Middleware: 
- Calls to APIs with [Redux-Saga](https://redux-saga.js.org/)
- Logging redux events with [ReduxLogger](https://github.com/LogRocket/redux-logger)

## License
#### [MIT](./LICENSE)