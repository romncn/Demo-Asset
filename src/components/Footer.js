import React from "react";
import Member1 from "../assest/Panupong.jpg";
import Member2 from "../assest/Natchanon.jpg";
import Member3 from "../assest/Chutikan.jpg";

const team = [
  {
    image: Member1,
    name: "Panupong Joknoi",
    position: "Web Developer",
  },
  {
    image: Member2,
    name: "Natchanon Niwedtongrirk",
    position: "Web Developer",
  },
  {
    image: Member3,
    name: "Chutikan Khuanpan",
    position: "Web Designer",
  },
];
function Footer() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top ">
      <div className="text-center">
        <h4>Team</h4>
      </div>
      <div className="row pt-0 pt-sm-3">
        {team.map((member, key) => {
          return (
            <div key={key} className="col-12 col-sm-4 pt-3 pt-sm-0 text-center">
              <img src={member.image} style={{width:"150px", height:"150px", borderRadius:"50%"}} />
              <p className="pt-4">{member.name}</p>
              <p><b>Position:</b> {member.position}</p>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
