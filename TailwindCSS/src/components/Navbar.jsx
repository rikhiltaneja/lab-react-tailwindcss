
import "../App.css";

const Navbar = () => {
  return (
    <div className='bg-custom-red flex justify-between px-10 py-5 text-white items-center'>
      <div className='flex gap-10 items-center'>
        <h1 className='text-4xl font-bold'>Kalvium</h1>
        <a>About Us</a>
        <a>Contacts</a>
        <a>Courses</a>
      </div>
      <div>
        <button href=" " className="text-white border-white border border-2 rounded p-1 px-5">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
