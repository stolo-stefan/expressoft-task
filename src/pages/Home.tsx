import chefPicture from '../assets/chef.jpg'
import LanguageSelector from 'components/LanguageSelector'
import HeroContent from 'components/HeroContent'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen w-full font-sans">
      <LanguageSelector />
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <img
          src={chefPicture}
          alt="Chef preparing a dish"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-full bg-white flex flex-col justify-center items-center text-center px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          <HeroContent />
          <p className="text-gray-500 text-sm max-w-md">
            Welcome to Express Restaurant - where code meets cuisine. Start your
            order and let your taste buds take the lead.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
