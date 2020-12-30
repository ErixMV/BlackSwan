import numpy as np  # linear algebra
import pandas as pd  # data processing
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors
import pickle


class Algorithm:

    __path = "./data/"
    __files = ("BX-Users.csv", "BX_Books.csv", "BX-Book-Ratings.csv")
    __encoding = "latin-1"
    __columns = {"books": {'Book-Title': 'title', 'Book-Author': 'author', 'Year-Of-Publication': 'year', 'Publisher': 'publisher'},
                 "users": {'User-ID': 'user_id', 'Location': 'location', 'Age': 'age'},
                 "rating": {'User-ID': 'user_id', 'Book-Rating': 'rating'}}

    __pkl_model = "model.pkl"
    __pkl_matrix = "matrix.pkl"
    __pkl_sim = "simMatrix.pkl"
    __pkl_final_ratings = "final_ratings.pkl"

    def __init__(self):
        pass

    def __getCsvData(self):

        csv_data = (pd.read_csv(self.__path + file, sep=";",
                                error_bad_lines=False, encoding=self.__encoding) for file in self.__files)

        return csv_data

    def __formatted_data(self):

        users_data, books_data, rating_data = self.__getCsvData()

        books = books_data[['ISBN', 'Book-Title',
                            'Book-Author', 'Year-Of-Publication', 'Publisher']]

        books.rename(
            columns=self.__columns['books'], inplace=True)

        users_data.rename(
            columns=self.__columns['users'], inplace=True)

        rating_data.rename(
            columns=self.__columns['rating'], inplace=True)

        return (users_data, books, rating_data)

    def booksData(self):

        try:
            output = []

            with open(self.__pkl_matrix, 'rb') as handle:
                book_pivot = pickle.load(handle)

            df_books = list(book_pivot.index)

            for book in df_books:
                output.append({"title": book})
            return output
        except Exception as e:
            print(e)

    def train(self):

        users_data, books, rating_data = self.__formatted_data()

        x = rating_data['user_id'].value_counts() > 175
        y = x[x].index

        rating_data = rating_data[rating_data['user_id'].isin(y)]

        rating_with_books = rating_data.merge(books, on='ISBN')

        number_rating = rating_with_books.groupby(
            'title')['rating'].count().reset_index()  # total rating of each book

        number_rating.rename(
            columns={'rating': 'number of rating'}, inplace=True)

        final_ratings = rating_with_books.merge(number_rating, on='title')
        final_ratings = final_ratings[final_ratings['number of rating'] >= 50]
        final_ratings.drop_duplicates(['user_id', 'title'], inplace=True)

        book_pivot = final_ratings.pivot_table(
            columns='user_id', index='title', values='rating')

        sim_pivot = final_ratings.pivot_table(
            columns='title', index='user_id', values='rating')

        book_pivot.fillna(0, inplace=True)

        book_sparse = csr_matrix(book_pivot)

        model = NearestNeighbors(algorithm='brute')

        model.fit(book_sparse)

        with open(self.__pkl_model, 'wb') as handle:
            pickle.dump(model, handle, protocol=pickle.HIGHEST_PROTOCOL)

        with open(self.__pkl_final_ratings, 'wb') as handle:
            pickle.dump(final_ratings, handle, protocol=pickle.HIGHEST_PROTOCOL)

        with open(self.__pkl_matrix, 'wb') as handle:
            pickle.dump(book_pivot, handle, protocol=pickle.HIGHEST_PROTOCOL)

        with open(self.__pkl_sim, 'wb') as handle:
            pickle.dump(sim_pivot, handle, protocol=pickle.HIGHEST_PROTOCOL)

    def use(self, book_name, method="corr"):
        if method == "corr":
            try:
                with open(self.__pkl_sim, 'rb') as handle:
                    pivot_ratings = pickle.load(handle)
                with open(self.__pkl_final_ratings, 'rb') as handle:
                    final_ratings = pickle.load(handle)

                sample = book_name
                sampleRatings = pivot_ratings[sample]
                similarBooks = pivot_ratings.corrwith(sampleRatings)
                similarBooks = similarBooks.dropna()
                similarBooks.sort_values(ascending=False)

                bookStats = final_ratings.groupby('title').agg({'rating': [np.size, np.mean]})

                df = pd.DataFrame(similarBooks)
                df = bookStats.join(pd.DataFrame(similarBooks, columns=['similarity']))
                df = df.sort_values(['similarity'], ascending=False)[:15]
                result = list(df.index[1:5])

                return result
            except Exception as e:
                print(e)
        else:
    
            try:
                with open(self.__pkl_model, 'rb') as handle:
                    model = pickle.load(handle)

                with open(self.__pkl_matrix, 'rb') as handle:
                    book_pivot = pickle.load(handle)

                book_id = np.where(book_pivot.index == book_name)[0][0]

                distances, suggestions = model.kneighbors(
                    book_pivot.iloc[book_id, :].values.reshape(1, -1))

                for i in range(len(suggestions)):
                    if not i:
                        result = book_pivot.index[suggestions[i]]

                return list(result[1:])
            except Exception as e:
                print(e)
