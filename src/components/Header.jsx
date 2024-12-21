import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="pt-1 bg-[#145f7a] flex justify-center items-center">
      <img src={logo} className='w-2/4 items-center ' alt="" />        
    </div>
  )
}

export default Header