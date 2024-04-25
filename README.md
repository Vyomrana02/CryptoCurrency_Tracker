# Crypto Manager

Crypto Manager WebApp built with React is a crypto currency tracking and portfolio site. It is a very handy tool for crypto currency investors. You can watch the price, marketcap graph of any crypto currency , and predict possible future price.

## Features
  - Various Crypto Currencies are available
  - Analyse of each cryptocoins prices and marketcap graph
  - Filter your search
  - Graph contains prices and marketcap data upto a year
  - Dark mode
  - Trending Coins Section

## Preview



https://github.com/Vyomrana02/CryptoCurrency_Tracker/assets/87069619/af766190-cf66-4f3c-96a5-a92481e245cc



## Tech Stack

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />   <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="ftailwind" />  ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## Credit
 - <a href="https://www.npmjs.com/package/react-chartjs-2" >Chart js</a>
 - <a href="https://www.npmjs.com/package/react-loading-skeleton" >React Loading Skleleton</a>
 - <a href="https://www.npmjs.com/package/react-alice-carousel" >React Alice Carouse</a>
 - <a href="https://v4.mui.com/" >Material ui</a>
 - <a href="https://www.coingecko.com/en/api/documentation" >CryptoGecko Api</a>

## To Do

<ul>
  <li>[ ] Portfolio</li>
  <li>[ ] Prediction using ML</li>
</ul>


### Installation

```
git clone https://github.com/Vyomrana02/CryptoCurrency_Tracker.git

npm install

npm start
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## To run using docker
### Prerequisites
Before running the application, make sure you have Docker installed on your system. You can download and install Docker from [here](https://www.docker.com/get-started).

## Getting Started

To run Crypto Tracker using Docker, follow these simple steps:

### Step 1: Pull the Docker Image

```bash
docker pull vyomrana02/crypto-tracker
```

Step 2: Run the Docker Container
```bash
docker run -d -it -p 3000:3000 --name crypto-tracker vyomrana02/crypto-tracker
```

Step 3: Access Crypto Tracker
Once the container is running, you can access Crypto Tracker by navigating to http://localhost:3000 in your web browser.

Stopping the Container
To stop the Crypto Tracker container, use the following command:

``` bash
docker stop crypto-tracker
```
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
