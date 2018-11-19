export interface IBook {
    id: string,
    name: string,
    productCode: string,
    releaseDate: Date,
    description: string,
    author: string,
    genre: string,
    specifications: string,
    inStock: boolean,
    price: number,
    starRating: number,
    imageUrl: string
}
/* export interface IBook {
    bookAuthor:  string,
    bookTitle:  string,
    bookPrice:  number,
    bookDescription:  string,
    publishedOn: Date,
    inStock: string,
    bookReviews:  number,
    bookImageUrl:  string,
    hardcover?: boolean,
    productCode?: string,
  } */