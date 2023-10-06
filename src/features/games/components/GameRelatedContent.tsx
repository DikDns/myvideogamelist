"use client";

import NextLink from "next/link";
import MUITypography from "@mui/material/Typography";
import MUILink from "@mui/material/Link";
import MUIStack from "@mui/material/Stack";
import { SxProps } from "@mui/material/styles";
import BoxGrid from "./GameRelatedContentBoxGrid";
import Game from "../types/Game";

type Data =
  | Game
  | {
      id: number;
      name?: string;
      slug?: string;
      games?: Game[];
    };
type Type = "games" | "franchises" | "series";

const h3: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function GameRelatedContent({ game }: { game: Game }) {
  return (
    <MUIStack mt={2}>
      <MUITypography mb={1} variant="h3" sx={h3}>
        {"Related Content"}
      </MUITypography>

      {game.parent_game ? (
        <BoxGridRow
          label="Parent Game"
          type="games"
          data={[game.parent_game]}
        />
      ) : (
        ""
      )}

      {game.collection ? (
        <BoxGridRow label="Series" type="series" data={[game.collection]} />
      ) : (
        ""
      )}

      {game.remakes ? (
        <BoxGridRow label="Remakes" type="games" data={game.remakes} />
      ) : (
        ""
      )}

      {game.remasters ? (
        <BoxGridRow label="Remasters" type="games" data={game.remasters} />
      ) : (
        ""
      )}

      {game.franchises ? (
        <BoxGridRow
          label="Franchises"
          type="franchises"
          data={game.franchises}
        />
      ) : (
        ""
      )}

      {game.standalone_expansions ? (
        <BoxGridRow
          label="Standalone Expansions"
          type="games"
          data={game.standalone_expansions}
        />
      ) : (
        ""
      )}

      {game.expansions ? (
        <BoxGridRow label="Expansions" type="games" data={game.expansions} />
      ) : (
        ""
      )}

      {game.expanded_games ? (
        <BoxGridRow
          label="Expanded Games"
          type="games"
          data={game.expanded_games}
        />
      ) : (
        ""
      )}

      <NotRelated game={game} />
    </MUIStack>
  );
}

function BoxGridRow({
  type,
  label,
  data,
}: {
  type: Type;
  label: string;
  data: Data[];
}) {
  return (
    <BoxGrid direction="row" label={label}>
      {data.map((dataChild) => (
        <MUILink
          key={dataChild.id}
          href={`/${type}/${dataChild.slug}`}
          component={NextLink}
          width="fit-content"
        >
          {`${dataChild.name}`}
        </MUILink>
      ))}
    </BoxGrid>
  );
}

function NotRelated({ game }: { game: Game }) {
  return !game.parent_game &&
    !game.collection &&
    !game.remakes &&
    !game.remasters &&
    !game.franchises &&
    !game.standalone_expansions &&
    !game.expansions &&
    !game.expanded_games ? (
      <MUITypography variant="body2">{"No Content Related"}</MUITypography>
    ) : (
      ""
    );
}
