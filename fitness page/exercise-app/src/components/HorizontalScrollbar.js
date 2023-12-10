import React, {useContext} from "react";
import { Box, Typography } from "@mui/material";
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'

import BodyPart from "./BodyPart";

import RightArrowIcon from '../assets/assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png'

const LeftArrow = () => {
    const {ScrollPrev} = useContext(VisibilityContext)

    return (
        <Typography onClick={() => ScrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="arrow" />
        </Typography>
    )
}

const RightArrow = () => {
    const {ScrollNext} = useContext(VisibilityContext)

    return (
        <Typography onClick={() => ScrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="arrow" />
        </Typography>
    )
}

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m='0 40px'
        >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
