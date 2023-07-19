import { SxProps } from "@mui/material/styles";

export const h1: SxProps = {
  fontSize: {
    xs: "2rem",
    sm: "3rem",
    md: "3.5rem",
  },
  fontWeight: "700",
  letterSpacing: "2px",
};

export const h2: SxProps = {
  fontSize: {
    xs: "1.5rem",
    sm: "2.5rem",
    md: "3rem",
  },
  fontWeight: "600",
  letterSpacing: "1px",
};

export const h3: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export const h4: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "1.5rem",
    md: "2rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export const h5: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "1.5rem",
    md: "2rem",
  },
  fontWeight: "400",
  letterSpacing: "0.25px",
};

export const h6: SxProps = {
  fontSize: {
    xs: "0.75rem",
    sm: "1.25rem",
    md: "1.5rem",
  },
  fontWeight: "300",
};

export const slideMargin: SxProps = { mx: "8px" };

export const videoSlide: SxProps = {
  width: "256px",
  minHeight: "144px",
  overflow: "hidden",
  boxShadow: 2,
  borderRadius: "5px",
  "&:hover p": {
    opacity: 1,
  },
  ".react-player__preview": {
    transition: "filter 250ms ease-in-out",
  },
  ".react-player__preview:hover, .react-player__preview:focus": {
    filter: "brightness(125%)",
  },
};

export const subtitleSlide: SxProps = {
  opacity: 0.75,
  fontSize: {
    xs: "0.75rem",
    md: "1rem",
  },
  lineHeight: {
    xs: "1rem",
    md: "1.25rem",
  },
  px: { xs: "8px", md: "16px" },
  py: "8px",
  transition: "all 250ms ease-in-out",
};
