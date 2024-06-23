import React from "react";
import "../../app/globals.css";



const Heading1 = ({ level, text}) => {
    let heading;
    switch (level) {
        case '1':
            heading = <h2 className="text-[24px] text-[#434343] font-[600] leading-[24px]">{text}</h2>
            break;
        case '2':
            heading = <h2 className="text-[18px] text-[#434343] font-[600] leading-[18px]"> {text}</h2>

            break;
        case '3':
            heading = <h2 className="text-[14px] font-[400] text-[#414141] leading-[21px]"> {text}</h2>

            break;
            case '4':
              heading = <h2 className="text-[14px] font-[400] text-[#666] leading-[24px]"> {text}</h2>
  
              break;
              case '5':
                heading = <h2 className="text-[14px] font-[600] text-[#222] leading-[24px]"> {text}</h2>
    
                break;
                case '6':
                heading = <h2 className="text-[14px] font-[600] text-[#222] leading-[24px] hover:text-[#ffae27] cursor-pointer"> {text}</h2>
    
                break;

        default:
            heading = <h2 className="text-black "> {text}</h2>
            break;
    }
    return heading;
};
export default Heading1;