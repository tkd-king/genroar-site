import PropTypes from "prop-types";

const Heading = ({ level, children, className }) => {
  const HeadingTag = `h${level}`;

  const getHeadingStyles = (level) => {
    switch (level) {
      case "1":
        return " font-[700] text-white leading-[60px] text-[52px]";
        case "2":
        return "text-[40px] font-semibold text-blue-900 leading-[50px]";
      case "3":
        return "text-[25px] font-bold";
      case "4":
        return "text-[20px] font-medium";
      case "5":
        return "text-[15px] font-normal text-gray-500" ;
      case "6":
        return "text-[20px] font-normal";
      default:
        return "text-lg";
    }
  };

  const headingStyles = `${getHeadingStyles(level)} ${className}`;

  return <HeadingTag className={headingStyles}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: "",
};

export default Heading;
