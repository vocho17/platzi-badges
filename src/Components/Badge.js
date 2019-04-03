import React from "react";
import confLogo from "../Images/";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="{confLogo}" alt="Logo de la conferencia" />
        </div>
        <div>
          <h1>
            <img src="https://www.gravatar.com/avatar/" alt="Avatar" />
            Emilio <br /> Oropeza
          </h1>
        </div>
        <div>
          <p>Frontend Engiener</p>
          <p>@vocho17</p>
        </div>
        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
