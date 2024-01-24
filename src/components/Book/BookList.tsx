import React, {useEffect, useState} from 'react';
import BooksItem from "@/components/Book/BooksItem";

interface BookElem {
  title: string,
  description: string,
  price: string,
  link: string,
  books: any[]
}
const BookList = (books: any ) => {
  const [selectedBook, setSelectedBook] = useState<string[]>([])

  const handleBookToggle = (bookId: any) => {
    const isBookSelected = selectedBook.includes(bookId)
    if (!isBookSelected) {
      setSelectedBook([...selectedBook, bookId])
        window.localStorage.setItem('cartCounter', JSON.stringify(selectedBook.length + 1))
    } else {
      window.localStorage.removeItem('cartCounter')
      window.localStorage.setItem('cartCounter', JSON.stringify(selectedBook.length - 1))
      const newSelected = selectedBook.filter((el) => el !== bookId)
      setSelectedBook(newSelected)
    }
  }
  return (
   <div>
     <div className={'flex flex-wrap justify-end max-xl:justify-center gap-x-10 gap-y-20 my-10 z-10 relative container mx-auto max-sm:mx-0 max-[500px]:gap-y-10'}>
       {books.books.items.map((book: any, id: string | number) => (
         <BooksItem book={book} key={id} onBookToggle={handleBookToggle} isSelected={selectedBook.includes(book.id)}></BooksItem>
       ))
       }
     </div>
     <div className={'flex justify-center mx-auto mt-6'}>
       <button className={'uppercase px-20 py-4 mt-10 border-[#4C3DB2] border hover:bg-[#4C3DB2] hover:text-white transition-all duration-200 text-[#4C3DB2] font-montserratBold'}>Load more</button>
     </div>
   </div>
  );
};

export default BookList;