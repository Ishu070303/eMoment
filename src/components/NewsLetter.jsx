import NewsLetterImg from '../assets/icons/newsletter_img.svg';

const NewsLetter = () => {
  return (
    <div style={{ backgroundImage: `url(${NewsLetterImg})`}} className="w-[80vw] m-auto text-center mt-8 p-7 bg-cover bg-center rounded-md">
      <h2 className=" text-3xl sm:text-5xl font-bold text-white">Get Notified For Latest Offers</h2>

      <div className="bg-orangered mt-6 sm:mt-12 w-[400px] sm:w-[600px] flex justify-around m-auto rounded-3xl p-1 relative">
        <input type="text" className="w-full p-2 rounded-3xl" placeholder='Write Your email ID'/>
        <button className="bg-orangered text-white text-bold p-2 rounded-3xl w-[150px] border-none font-semibold text-lg absolute right-0 top-0.5">Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter;