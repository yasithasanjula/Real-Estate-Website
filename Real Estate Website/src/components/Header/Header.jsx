const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flex gap-20 justify-center items-center">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="gap-8">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
