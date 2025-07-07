import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaArrowLeft,
  FaCode,
} from "react-icons/fa";

export default function Icon({
  name,
  size = "24px",
  className = "",
  ...props
}) {
  const iconStyle = {
    fontSize: size,
    width: size,
    height: size,
  };

  const icons = {
    house: <FaHome style={iconStyle} className={className} {...props} />,
    home: <FaHome style={iconStyle} className={className} {...props} />,
    user: <FaUser style={iconStyle} className={className} {...props} />,
    briefcase: (
      <FaBriefcase style={iconStyle} className={className} {...props} />
    ),
    envelope: <FaEnvelope style={iconStyle} className={className} {...props} />,
    arrowLeft: (
      <FaArrowLeft style={iconStyle} className={className} {...props} />
    ),
    code: <FaCode style={iconStyle} className={className} {...props} />,
  };

  return (
    icons[name.toLowerCase()] || (
      <FaCode style={iconStyle} className={className} {...props} />
    )
  );
}
