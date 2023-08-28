import { Box, Stack } from "@mui/material";
import Heading from "../Text/heading";
import Paragraph from "../Text/paragraph";

export default function ShowcaseCardSummary({ heading, items, children }) {
  return (
    <Stack
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        textAlign: "center",
        marginTop: { xs: "2.4rem", md: "3.6rem" },
        width: "calc(100%+ 40px)",
        mx: "-40px",
        px: "20px",
      }}
    >
      <Box maxWidth="800px" sx={{ px: "1rem" }}>
        <Heading top="1rem" bottom="1rem" text={heading} />

        {items.map((item, index) => (
          <Paragraph text={item} key={index} />
        ))}
      </Box>
      {children}
    </Stack>
  );
}
