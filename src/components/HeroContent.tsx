import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

const HeroContent = () => {
  const navigate = useNavigate()

  function handleStartOrder() {
    navigate('/menu')
  }

  return (
    <div className="w-2/3 h-full bg-white flex flex-col justify-center items-center relative p-10">
      <img
        src={logo}
        alt="Express Restaurant Logo"
        className="w-16 h-16 mb-4"
      />
      <h1 className="text-4xl font-bold mb-4">Express Restaurant</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Taste the developer's favourite meals.
        <br /> Code-powered cravings served hot!
      </p>
      <button
        onClick={handleStartOrder}
        className="bg-buttonCustom hover:bg-expressoftColor text-white px-6 py-3 rounded text-lg transition-all duration-300 hover:scale-105"
      >
        Start Your Order
      </button>
    </div>
  )
}

export default HeroContent
