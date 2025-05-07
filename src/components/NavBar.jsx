function NavBar() {
  return (
    <div className="w-full text-white flex justify-between items-center p-3">
      <div className="managerProfile">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-full bg-gray-400"></div>

          <div className="flex flex-col">
            <h3 className="text-white font-semibold">NeoDev</h3>
            <h4 className="text-white/30 text-sm font-semibold">App Manager</h4>
          </div>
        </div>
      </div>

        <div className="logo">
            <p>SPOTIFY</p>
        </div>

        <div className="go-to-page">
            <h3>Go to home page</h3>
        </div>

    </div>
  );
}

export default NavBar;
