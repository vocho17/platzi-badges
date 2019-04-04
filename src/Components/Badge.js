import React from "react";
import confLogo from "../Images/badge-header.svg";
import "./Styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge_section-name">
          <h1>
            <img
              className="badge_avatar"
              src="https://www.gravatar.com/avatar/f89fb3da1c2aa000b39d2ad831fcb3da"
              alt="Avatar"
            />
            Emilio <br /> Oropeza
          </h1>
        </div>
        <div className="badge_section-info">
          <p>Frontend Engiener</p>
          <p>@vocho17</p>
        </div>
        <div className="badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
