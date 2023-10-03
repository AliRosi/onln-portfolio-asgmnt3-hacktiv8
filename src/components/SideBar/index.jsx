import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../../assets/profile.jpg";

/** Styles */
import styles from "./style.module.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Experience",
          path: "/experience",
        },
        {
          title: "Education",
          path: "/education",
        },
        {
          title: "Skills",
          path: "/skills",
        },
        {
          title: "Interests",
          path: "/interests",
        },
        {
          title: "Awards",
          path: "/awards",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className={styles.sidebar}>
          <div className={styles.img}>
            <img src={profile} alt="profile" />
          </div>
          {this.state.menuData.map((data, dataIdx) => (
            <NavLink
              to={data.path}
              className={styles.sidebar_item}
              key={dataIdx}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  paddingRight: isActive ? "0.5rem" : "",
                  color: isActive ? "salmon" : "",
                  borderRight: isActive ? " 8px solid salmon" : "",
                };
              }}
            >
              {data.title}
            </NavLink>
          ))}
        </div>
      </>
    );
  }
}

export default SideBar;
