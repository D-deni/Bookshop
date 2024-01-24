import React, {useEffect, useState} from 'react';
import BookNav from "@/components/Book/BookNav";
import BookList from "@/components/Book/BookList";
import {useFetching} from "@/hooks";
import GoogleBooks from "@/store/googleBooks";
import Preloader from "@/components/UI/Preloader";

const Book = () => {
  const [books, setBooks] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchBooks, isBooksLoading, booksError] = useFetching(async (limit: any, page: any) => {
    const res = await GoogleBooks.getAll(limit, page)
    setBooks(res.data)
  })

  useEffect(() => {
    fetchBooks(limit, page)
  }, [])

  return (
    <div className={' mb-20 relative'}>
      <BookNav/>
      {isBooksLoading
        ? <Preloader/>
        : <BookList books={books}/>
      }

    </div>
  );
};

export default Book;