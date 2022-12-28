import React from "react";
import Avatar from "./Avatar";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <div className="content">
          <p className="title">{props.degree}</p>
          <p>{props.content}</p>
          <a className="icon-set" href={props.linkedin}>
            <FaLinkedin size="25px" color="#10568f" />
          </a>
          <a className="icon-set" href={props.github}>
            <AiFillGithub size="25px" color="#10568f" />
          </a>
          <a className="icon-set" href={"mailto:" + props.email}>
            <MdEmail size="25px" color="#10568f" />
          </a>
          <a className="icon-set" href={props.facebook}>
            <FaFacebookSquare size="25px" color="#10568f" />
          </a>
          <a className="icon-set" href={props.instagram}>
            <AiFillInstagram size="25px" color="#10568f" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
