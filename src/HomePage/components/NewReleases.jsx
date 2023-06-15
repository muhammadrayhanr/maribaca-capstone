import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';

const NewReleases = () => {
  const [listPopularBooks] = useState([
    { img: 'https://tirtabuanamedia.co.id/wp-content/uploads/2023/02/BUKU-SAKTI-MEMBACA-KARAKTER-TRIK-SUPER-AMPUH-MENGETAHUI-KARAKTER-DAN-MEMBACA-PIKIRAN-ORANG-ORANG-DI-SEKITAR-ANDA.jpg', title: 'Buku Sakti Membaca Karakter' },
    { img: 'https://ebooks.gramedia.com/ebook-covers/47970/image_highres/ID_JMM2019MTH06JMM.jpg', title: 'Jangan Membuat Masalah Kecil Jadi Besar' },
    { img: 'https://ebooks.gramedia.com/ebook-covers/50696/image_highres/ID_MMB2020MTH02MB.jpg', title: 'Mengatasi Masalah Besar Dalam Hidup' },
    { img: 'https://ebooks.gramedia.com/ebook-covers/56534/image_highres/BLK_TATSGOI2020532017.jpg', title: 'Tak Apa-Apa Tak Sempurna' },
    { img: 'https://cdn.gramedia.com/uploads/items/9786020634074_TAK_JADI_MASA.jpg', title: 'Tak Masalah Jadi Orang Introvert' },
  ]);

  return (
    <section className="mb-5">
      <p className="fs-4 fw-semibold mt-5 mb-4">New Releases</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={false}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {listPopularBooks.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide-this-week">
            <Card className="border-0 bg-light">
              <Card.Img variant="top" className="img-book" src={item.img} />
              <Card.Body className="bg-light">
                <Card.Text className="text-black title-book">{item.title}</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewReleases;
