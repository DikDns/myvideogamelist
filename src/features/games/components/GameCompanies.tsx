"use client";

import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";
import InvolvedCompany from "../types/InvolvedCompany";

export default function GameCompanies({
  type,
  data,
}: {
  type: "developer" | "publisher";
  data: InvolvedCompany[];
}) {
  return (
    <MUIStack>
      <MUITypography variant="body1" fontWeight={500}>
        {type === "developer" ? "Developers" : "Publishers"}
      </MUITypography>

      {data.map((involved) => {
        if (type === "developer" && involved.developer) {
          return (
            <CompanyName key={involved.id} name={involved.company?.name} />
          );
        }

        if (involved.publisher) {
          return (
            <CompanyName key={involved.id} name={involved.company?.name} />
          );
        }

        return "";
      })}
    </MUIStack>
  );
}

function CompanyName({ name }: { name?: string }) {
  return (
    <MUITypography variant="body2" color="#cfcfcf">
      {name}
    </MUITypography>
  );
}
