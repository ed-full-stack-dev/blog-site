function Header() {
    return (
      <header className='bg-white shadow-sm p-2'>
    <div className="max-w-7xl mx-auto py-2 px-2 md:px-8 flex  justify-between items-center">
      <h1 className="text-2xl font-bold">Blog</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 rounded-md focus:outline-none w-24 sm:w-auto"
      />
    </div>
  </header>
    )
  }
  export default Header;