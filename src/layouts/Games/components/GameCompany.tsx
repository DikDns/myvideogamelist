"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { InvolvedCompany } from "@/types/InvolvedCompany";

export default function GameCompany({
  type,
  data,
}: {
  type: "developer" | "publisher";
  data: InvolvedCompany[];
}) {
  return (
    <Stack>
      <Typography variant="body1" fontWeight={500}>
        {type === "developer" ? `Developers` : `Publishers`}
      </Typography>

      {data.map((involved) =>
        type === "developer" ? (
          involved.developer ? (
            <Typography key={involved.id} variant="body2" color="#cfcfcf">
              {involved.company?.name}
            </Typography>
          ) : (
            ""
          )
        ) : involved.publisher ? (
          <Typography key={involved.id} variant="body2" color="#cfcfcf">
            {involved.company?.name}
          </Typography>
        ) : (
          ""
        )
      )}
    </Stack>
  );
}
