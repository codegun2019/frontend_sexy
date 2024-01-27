// Card.js
import React,{ useState } from 'react';
import CardList from '../component/Cardlist';
import Pagination from '../component/Pagination';

const Card = () => {
  const itemsPerPage = 5; // จำนวนรายการที่แสดงต่อหน้า
  const [currentPage, setCurrentPage] = useState(1);


  const cardData = [
    {
      id: 1,
      name: 'ไบร์ท บุญวรา เลิศปรีชา',
      title: 'bright_berry',
      imageSrc: 'https://cute.thailandsuperstar.com/images/pix/206723333/T_2598587960547326928.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook',
        twitter: '#twitter',
        instagram: '#instagram',
      },
    },
    {
      id: 2,
      name: 'John Doe',
      title: 'CTO / Co-Founder',
      imageSrc: 'https://docs.material-tailwind.com/img/team-2.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook2',
        twitter: '#twitter2',
        instagram: '#instagram2',
      },
    },
    {
      id: 3,
      name: 'Jane Smith',
      title: 'Designer',
      imageSrc: 'https://docs.material-tailwind.com/img/team-1.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook3',
        twitter: '#twitter3',
        instagram: '#instagram3',
      },
    },
    {
      id: 4,
      name: 'Robert Johnson',
      title: 'Software Engineer',
      imageSrc: 'https://docs.material-tailwind.com/img/team-4.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook4',
        twitter: '#twitter4',
        instagram: '#instagram4',
      },
    },
    {
      id: 5,
      name: 'Natalie Paisley',
      title: 'CEO / Co-Founder',
      imageSrc: 'https://cute.thailandsuperstar.com/images/pix/350997913/T_2503090161510037191.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook',
        twitter: '#twitter',
        instagram: '#instagram',
      },
    },
    {
      id: 6,
      name: 'John Doe',
      title: 'CTO / Co-Founder',
      imageSrc: 'https://cute.thailandsuperstar.com/images/pix/350997913/T_2496639444784042413.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook2',
        twitter: '#twitter2',
        instagram: '#instagram2',
      },
    },
    {
      id: 7,
      name: 'Jane Smith',
      title: 'Designer',
      imageSrc: 'https://cute.thailandsuperstar.com/images/pix/350997913/T_2487864148983348438.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook3',
        twitter: '#twitter3',
        instagram: '#instagram3',
      },
    },
    {
      id: 8,
      name: 'Robert Johnson',
      title: 'Software Engineer',
      imageSrc: 'https://cute.thailandsuperstar.com/images/pix/350997913/T_2468209861873390158.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook4',
        twitter: '#twitter4',
        instagram: '#instagram4',
      },
    },
    {
      id: 9,
      name: 'Natalie Paisley',
      title: 'CEO / Co-Founder',
      imageSrc: 'https://cute.thailandsuperstar.com/images/pix/350997913/T_2471947647483045935.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook',
        twitter: '#twitter',
        instagram: '#instagram',
      },
    },
    {
      id: 10,
      name: 'John Doe',
      title: 'CTO / Co-Founder',
      imageSrc: 'https://cute.thailandsuperstar.com/images/pix/350997913/T_2464506036234821639.jpg',
      post: '2,391',
      followes: '3,936',
      followings: '1,126',
      social: {
        facebook: '#facebook2',
        twitter: '#twitter2',
        instagram: '#instagram2',
      },
    },
  ];

   // คำนวณจำนวนหน้าทั้งหมด
   const totalPages = Math.ceil(cardData.length / itemsPerPage);

   // ดึงข้อมูลที่ต้องการแสดงตามหน้าปัจจุบัน
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);
 
   // ฟังก์ชันที่เรียกเมื่อมีการเปลี่ยนหน้า
   const onPageChange = (page) => {
     setCurrentPage(page);
   };

  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */}
      </header>
      <main className="App-main">
        <div className="container">
          <CardList cardData={currentItems} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
      </main>
    </div>
  );
}

export default Card;
