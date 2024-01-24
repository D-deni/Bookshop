import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@/style.css'
import Slider from "@/components/UI/Slider";
import Navbar from "@/components/UI/Navbar";
import Book from "@/components/Book/Book";

export const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Slider/>
      <Book/>
    </div>
  );
};

