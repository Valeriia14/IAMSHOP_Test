const Header = () => {
  return (
    <div className="header">
      <div className="d-flex flex-row justify-content-between w-100">
        <div className="d-flex flex-row">
          <a href="/">
            <img
              src="/assets/images/logo-empowerid.svg"
              alt="logo-empowerid"
              className="logo-empowerid"
            />
          </a>
          <div className="divisor"></div>
          <a href="/">
            <img
              src="/assets/images/icons-apps-it-shop.svg"
              alt="icons-apps-it-shop"
              className="icons-apps-it-shop"
            />
          </a>

          <span className="iam-shop">IAM SHOP</span>
        </div>
        <div className="d-flex flex-row">
          <div className="profile-pic-container">
            <a href="/">
              <img
                src="/assets/images/profile-pic.png"
                className="profile-pic"
                alt="profile-pic"
              />
            </a>
          </div>
          <span className="user-name">Patrick Parker</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
