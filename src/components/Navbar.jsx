function Navbar() {
  return (
    <div className="site-header page-width" aria-hidden="true">
      <svg className="header-scribble" viewBox="0 0 100 40" fill="none">
        <path d="M8 27C19 16 33 8 38 11S17 32 24 33S53 9 58 11S38 32 45 32S73 12 78 14S63 29 69 29S85 22 92 18" />
        <path className="header-scribble-echo" d="M12 29C27 17 35 12 37 13M28 34L56 14M49 33L77 17M72 30L91 21" />
      </svg>
    </div>
  );
}

export default Navbar;
