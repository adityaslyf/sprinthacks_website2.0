// import * as React from 'react';
import Accordion from "@mui/material/Accordion";
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
// import Button from '@mui/material/Button';

export default function AccordionUsage({ data }) {
  return (
    <div className="flex flex-col justify-center md:flex-row w-1/2 my-10 md:mx-8">
      <div className="flex flex-col items-center m-0 md:m-5 w-[250px] md:w-full">
        {data.map((item, index) => {
          return (
            <div className="w-full" key={index}>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  marginBottom: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="bg-transparent"
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails>{item.desc}</AccordionDetails>
              </Accordion>
              <div className="h-[1px] bg-white/30"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
AccordionUsage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
