import Image from 'next/image'
import styles from './page.module.css'
import Carousel from '@/components/carousel'
//https://mccdc.com/
export default function Home() {
  return (
    <>
      <Carousel />
      <p className="text-body w-50 mx-auto text-left fst-italic">
        Our call to ministry is to help each of you as children of God, to realize your full potential in Jesus Christ. To embrace not only the forgiveness of God but also the righteousness of God. To become Jesus to a world that is lost and broken in so many ways. Christ commanded us to be a light to the world. How can we be that light?<br></br>
        When we love, we are that light.<br></br>
        When we forgive, we are that light.<br></br>
        When we are kind, we are that light.<br></br>
        When we are whom God created us to be, we become that light to the world.<br></br>                                                                                   
      </p>
      <p className="text-body w-50 mx-auto text-left fst-italic">
      Pastor<br></br>   
      Miguel E. Herrera, Jr.
      </p>

    </>
  )
}
