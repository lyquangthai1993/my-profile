import React from "react";
import { ReactSVG } from "react-svg";

const SvgIcon = (props) => <ReactSVG {...props} src={`my-profile/img/svg/${props.src}`} />;

export default SvgIcon;
