"use client";

import NextLink from "next/link";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import BoxGrid from "./BoxGrid";

import { Game } from "@/types/Game";
import { Franchise } from "@/types/Franchise";
import { Series } from "@/types/Series";

type Data = Game | Franchise | Series;
type Type = "games" | "franchises" | "series";

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
        >
          {`- ${dataChild.name}`}
        </Link>
      ))}
    </BoxGrid>
  );
}

function BoxGridColumn({
  type,
  label,
  data,
}: {
  type: Type;
  label: string;
  data: Data;
}) {
  return (
    <BoxGrid label={label}>
      <Link href={`/${type}/${data.slug}`} component={NextLink}>
        {`${data.name}`}
      </Link>
    </BoxGrid>
  );
}

export default function RelatedContent({ game }: { game: Game }) {
  return (
    <Stack gap={2} my={5}>
      {game.parent_game ? (
        <BoxGridColumn
          label="Parent Game"
          type="games"
          data={game.parent_game}
        />
      ) : (
        ""
      )}

      {game.collection ? (
        <BoxGridColumn label="Series" type="series" data={game.collection} />
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
    </Stack>
  );
}