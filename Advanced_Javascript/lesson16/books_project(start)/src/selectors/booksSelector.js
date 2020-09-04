import { createSelector} from 'reselect'

const books = state => state.books;
const categories = state => state.categoriesBooks.categories;

export const bookSelector = createSelector(books, categories, (books, categories) => {
    return books.map(book => ({
        ...book,
        categoryName: categories[book.categoryId].title
    }))
}

)
