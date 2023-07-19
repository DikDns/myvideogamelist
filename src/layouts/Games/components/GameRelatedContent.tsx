"use client";

import NextLink from "next/link";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Game } from "@/types/Game";
import { Franchise } from "@/types/Franchise";
import { Series } from "@/types/Series";
import { h3 } from "@/layouts/styles";
import BoxGrid from "./BoxGrid";

type Data = Game | Franchise | Series;
type Type = "games" | "franchises" | "series";

export default function GameRelatedContent({ game }: { game: Game }) {
  return (
    <Stack gap={1} my={5}>
      <Typography mb={1} variant="h3" sx={h3}>{`Related Content`}</Typography>

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
    </Stack>
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
      {/* @ts-ignore */}
      {data.map((dataChild) => (
        <Link
          key={dataChild.id}
          href={`/${type}/${dataChild.slug}`}
          component={NextLink}
          width="fit-content"
        >
          {`${dataChild.name}`}
        </Link>
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
    <Typography variant="body2">{`No Content Related`}</Typography>
  ) : (
    ""
  );
}
