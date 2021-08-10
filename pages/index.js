import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <section className="home_container">
      <div className="home_content">
        <h1>Welcome to <span>tiqdev</span></h1>
     <p>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     </p>
    <Link href="/">
      <a className="tour_button">Take a tour</a>
    </Link>
        </div>
        <div className="home_image">
          <Image width="480" height="480" src="/home_image.svg" alt="React" />
        </div>
    </section>
    </>
  )
}
