# BlackSwan

Book recomendation system based on Machine Learning algorithm.

[Live Demo](https://theblackswan.herokuapp.com)

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

## About the Project
This is the final project of the AI & Machine Learning Course done by [Fundación Esplai](https://fundacionesplai.org). This project is a book recommendation system that collects data of books, users and their ratings. A machine learning algorithm takes all the data and, 
depending on which algorithm is activated, recommendations of a specific book are shown; in this initial version, there are two available algorithms, by correlation matrix and by distances ([KNN](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm))
### Built With
The front-end is done with [React](https://es.reactjs.org).<br />
The back-end is done with [Python](https://www.python.org) (Flask API)

The retrived data come from:<br />
[Book-Crossing Dataset: User Review Ratings](https://www.kaggle.com/ruchi798/bookcrossing-dataset)<br />

## Usage
Create a virtual enviroment and install the packages from requirements.txt with: <br />
`pip install -r requirements.txt`

Then, in client folder, install all the node packages: <br />
`npm install`

The back-end is an API done with Flask and use the production build of React front-end as the endpoint. So, in the client folder, create it:
`npm run build`

Finally, create the Flask App enviroment variable and start Flask service in the root folder:<br /><br />
Unix Bash:<br />
`export FLASK_APP=app`<br />
`flask run`<br /><br />
Windows CMD<br />
`set FLASK_APP=app`<br />
`flask run`<br /><br />
Windows PowerShell<br />
`$env:FLASK_APP = "app"`<br />
`flask run`<br /><br />

## Roadmap

This is a list of future implementations:

* Dark Mode.
* More data in the recommendations: thumbnails, author, links and genre.
* Layout improvement.
* Algorithm improvement

See the [open issues](https://github.com/ErixMV/BlackSwan/issues) for a list of proposed features (and known issues).

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Added some new feature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Erix Mamani Villacresis - [erixmv022@gmail.com](mailto:erixmv022@gmail.com) - [LinkedIn](https://www.linkedin.com/in/erixmamani/)<br />
Vladimir Smirnov - [vsmirn00@gmail.com](mailto:vsmirn00@gmail.com) - [LinkedIn](https://www.linkedin.com/in/vladismirn/)<br />
Adelina Muntean - [adelina.muntean97@gmail.com](mailto:adelina.muntean97@gmail.com) - [LinkedIn](https://www.linkedin.com/in/adelina-muntean/)<br />

Project Link: [https://github.com/ErixMV/BlackSwan](https://github.com/ErixMV/BlackSwan)
