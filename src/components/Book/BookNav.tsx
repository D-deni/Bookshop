import React from 'react';
import {Link} from "react-router-dom";

const BookNav = () => {
  const navBookArray = [
    {
      id: 0,
      title: 'Art & Fashion',
      link: '/'
    },
    {
      id: 1,
      title: 'Biography',
      link: '/'
    },
    {
      id: 2,
      title: 'Business',
      link: '/'
    },
    {
      id: 3,
      title: 'Crafts & Hobbies',
      link: '/'
    },
    {
      id: 4,
      title: 'Drama',
      link: '/'
    },
    {
      id: 5,
      title: 'Fiction',
      link: '/'
    },
    {
      id: 6,
      title: 'Food & Drink',
      link: '/'
    },
    {
      id: 7,
      title: 'Health & Wellbeing',
      link: '/'
    },
    {
      id: 8,
      title: 'History & Politics',
      link: '/'
    },
    {
      id: 9,
      title: 'Humor',
      link: '/'
    },
    {
      id: 10,
      title: 'Poetry',
      link: '/'
    },
    {
      id: 11,
      title: 'Psychology',
      link: '/'
    },
    {
      id: 12,
      title: 'Science',
      link: '/'
    },
    {
      id: 13,
      title: 'Technology',
      link: '/'
    },
    {
      id: 14,
      title: 'Travel & Maps',
      link: '/'
    },
  ]
  return (
    <div className={'max-xl:relative absolute w-3/12 z-0 bg-[#EFEEF6] py-10 max-xl:pt-10 max-xl:pb-0 left-0 -top-10 max-xl:top-0 pl-10 max-xl:pl-0 max-xl:w-full overflow-hidden '}>
      <h2 className={"font-montserratBold text-lg before:content-['•'] before:absolute before:-left-6 before:text-[#756AD3] relative max-xl:text-center max-xl:before:content-none"}>Architecture</h2>
      <div className={'max-xl:overflow-x-auto max-xl:pb-10'}>
        <nav className={'flex flex-col max-xl:flex-row gap-y-6 mt-6 max-xl:justify-center max-xl:mx-auto text-[#5C6A79] text-sm max-xl:overflow-x-auto max-xl:max-w-screen max-xl:w-max max-xl:text-center'}>
          {navBookArray.map((item) => (
            <Link to={'/'} className={'hover:bg-[#4C3DB2] transition-all w-[140px] hover:text-white max-xl:hover:bg-transparent max-xl:hover:text-black rounded-r-none rounded-l px-2 py-1'}>{item.title}</Link>
          ))
          }
        </nav>
      </div>
    </div>
  );
};

export default BookNav;