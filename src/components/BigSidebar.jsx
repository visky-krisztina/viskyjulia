import main from "../assets/main-img.jpg";
import "../css/BigSidebar.css";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  return (
    <div className="bigSidebar-wrapper">
      <div className="photo-circle">
        <img src={main} alt="profile image" className="bigSidebar-image" />
      </div>
      <NavLinks />
    </div>
  );
};

export default BigSidebar;

/*


import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  color: var(--white);
  background-color: #000000;
  opacity: 0.9;

  .bigSidebar-container {
    position: fixed;
    padding-top: 10rem;
    left: 4.5rem;
  }

  .photo-circle {
    width: 14rem;
    display: inline-block;
    height: 15rem;
    overflow: hidden;
    border-radius: 50%;
    border: 10px solid #343a40;

    img {
      width: 100%;
      height: 100%;
      transform: scale(1.2);
      //margin-top: -10px;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .show-sidebar {
      margin-left: 0;
    }

    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      padding-right: 1rem;
    }
    .nav-link {
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 1.8rem;
      font-family: Georgia, serif;
      text-decoration: none;
      padding: 1rem 0;
      text-transform: capitalize;
    }
    .nav-link:hover {
      color: var(--primary-700);
    }

    .active {
      color: var(--primary-500);
    }
  }

  @media screen and (max-width: 500px) {
    .bigSidebar-container {
      left: 1.5rem;
    }

    .photo-circle {
      width: 10rem;
      height: 11rem;
      border: 8px solid #343a40;
    }
  }
`;
export default Wrapper;


*/
