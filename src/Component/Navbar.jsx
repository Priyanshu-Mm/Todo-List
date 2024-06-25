function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center bg-slate-700 text-white h-10">
        <div className="logo">
          <span className="font-bold text-xl mx-8 items-center">i-Task</span>
        </div>
        <ul className="flex gap-5 mx-9 items-center">
          <li className="cursor-pointer hover:font-bold transition-all">
            Home
          </li>
          <li className="cursor-pointer hover:font-bold transition-all">
            Your task
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
