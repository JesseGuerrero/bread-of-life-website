import Image from 'next/image'
import BannerOne from '@/components/images/one.jpg'
import BannerTwo from '@/components/images/two.jpeg'
import BannerThree from '@/components/images/three.jpg'

export default function Carousel() {
  return (<>
  <div id="carouselExampleDark" className="carousel carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <div className="d-flex justify-content-center align-items-center">
      <Image src={BannerOne} className="d-block w-xs-100 w-sm-100 w-md-75 w-xl-50" alt="..." />
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className="d-flex justify-content-center align-items-center">
      <Image src={BannerTwo} className="d-block w-xs-100 w-sm-100 w-md-75 w-xl-50" alt="..." />
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center align-items-center">
      <Image src={BannerThree} className="d-block w-xs-100 w-sm-100 w-md-75 w-xl-50" alt="..." />
      </div>
    </div>
  </div>
</div>
  </>)
}