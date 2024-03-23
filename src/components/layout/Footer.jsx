import { Box, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { grey } from "@mui/material/colors";
export const Footer = () => {
  return (
    <Box
      mt={"2rem"}
      bgcolor="primary.main"
      sx={{
        borderRadius: "10px 10px 0 0",
      }}
    >
      <Typography
        py={1}
        variant="h6"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          px: "20rem",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Desarrollado con cariño <FavoriteIcon color="warning" m={0} p={0} /> por
        franco-gudino-dev
        <IconButton
          m={0}
          p={0}
          size="small"
          href="https://www.linkedin.com/in/franco-gudino-dev/"
          target="_blank"
        >
          <LinkedInIcon m={0} p={0} sx={{ color: grey[50] }} />
        </IconButton>
      </Typography>
    </Box>
  );
};
