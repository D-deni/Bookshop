import React, {useState} from 'react';
import Star from '@/assets/img/icons/star.svg'

interface BookItemProps {
  book: any
  onBookToggle: (bookId: number) => void
  isSelected: boolean
}

const BooksItem = (props: BookItemProps) => {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 1000))
  return (
    <div className={'flex gap-x-10 h-full justify-center w-5/12 max-[890px]:w-9/12 max-sm:w-full max-sm:px-10 max-sm:mx-20 max-[500px]:flex-col break-words max-[500px]:border max-[500px]:py-2 px-2 max-[500px]:rounded-lg '}>
      <div className={'w-[400px] max-[500px]:w-[250px] '}>
        <img className={'w-full border shadow-xl max-[500px]:rounded-lg'} src={props.book.volumeInfo.imageLinks.thumbnail} alt=""/>
      </div>
      <div className={'max-[500px]:mt-10 '}>
        <div>
          <p
            className={'text-[12px] text-gray-400 tracking-widest font-montserratRegular'}>{props.book.volumeInfo.authors[0]}</p>
          <p
            className={'text-xl font-montserratBold'}>{props.book.volumeInfo.title.length > 20 ? props.book.volumeInfo.title.slice(0, 20) + '...' : props.book.volumeInfo.title}</p>
        </div>
        <div className={'flex items-center gap-x-2 font-montserratRegular'}>
          <Star color={'#F2C94C'}></Star>
          <Star color={'#F2C94C'}></Star>
          <Star color={'#F2C94C'}></Star>
          <Star color={'#F2C94C'}></Star>
          <Star color={'lightgray'}></Star>
          <span className={'text-gray-400 text-sm'}>{randomNum + ' ' + 'review'}</span>
        </div>
        <div className={'break-words text-[#5C6A79] my-4 font-montserratRegular text-sm'}>
          {!props.book.volumeInfo.description
            ? <p> ipsum nemo nihil quae quo sapiente ut! Harum laborum placeat quod vitae voluptatum? Hic, ipsam...</p>
            : <p>{props.book.volumeInfo.description?.length > 100 ? props.book.volumeInfo.description.slice(0, 100) + '...' : props.book.volumeInfo.description}</p>
          }
        </div>
        <div>
          <p
            className={'font-montserratBold text-sm'}>{!props.book.saleInfo.listPrice ? props.book.saleInfo.saleability : '$' + props.book.saleInfo.listPrice.amount}
          </p>
          <button onClick={() => props.onBookToggle(props.book.id)}
                  className={props.isSelected ? 'uppercase w-7/12 mt-10 border-[#4C3DB2] border p-4 hover:bg-[#4C3DB2] bg-[#4C3DB2] text-white hover:text-white transition-all duration-200 text-[12px] font-montserratBold' : 'uppercase w-7/12 mt-10 border-[#4C3DB2] border p-4 hover:bg-[#4C3DB2] hover:text-white transition-all duration-200 text-[12px] text-[#4C3DB2] font-montserratBold'}>
            {props.isSelected ? 'Remove' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksItem;