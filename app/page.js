import Image from "next/image";
import Slider1 from '@/public/food2.jpg'
import Slider2 from '@/public/food3.jpg'
export default function Home() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src={Slider1}
            className="d-block w-100"
            alt="..."
            style={{ height: '500px', objectFit: 'cover' }} // สไตล์ inline
          />
        </div>
        <div className="carousel-item">
          <Image
            src={Slider2}
            className="d-block w-100"
            alt="..."
            style={{ height: '500px', objectFit: 'cover' }} // สไตล์ inline
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="card-group mt-3 mx-3 mb-2" >
      
  <div className="card me-3 "  style={{ height: '450px', objectFit: 'cover', overflow: 'hidden', borderRadius: '15px' }} >
    <img src="https://f.ptcdn.info/070/081/000/rxfhjk1fjawUQw6Htlnki-o.jpg" className="card-img-top h-100" alt="..." />
  </div>
  <div className="card me-3 rounded-3" style={{ height: '450px', objectFit: 'cover' , overflow: 'hidden', borderRadius: '15px'}} >
    <img src="https://miro.medium.com/v2/0*QduGZYTqGmBK-6_t.jpeg" className="card-img-top h-100" alt="..." />
   
  </div>
  <div className="card me-3" style={{ height: '450px', objectFit: 'cover' ,overflow: 'hidden', borderRadius: '15px'}} >
    <img src="https://cdn-local.mebmarket.com/meb/server1/242298/Thumbnail/book_detail_large.gif?2" className="card-img-top h-100" alt="..." />
  </div>
  <div className="card" style={{ height: '450px', objectFit: 'cover' ,overflow: 'hidden', borderRadius: '15px'}} >
    <img src="https://www.manga-news.com/public/images/dvd/Oshi_no_Ko_S1_anime.webp" className="card-img-top h-100" alt="..." />
  </div>
</div>
    </>
  );
}

