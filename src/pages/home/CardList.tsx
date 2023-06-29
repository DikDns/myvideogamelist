"use client";

import Image from "next/image";
import Paper from "@mui/material/Paper";
import { NewReleaseData } from "./NewReleases";
import CardItem from "./CardItem";

export default function CardList({ data }: { data: NewReleaseData[] }) {
  return data.map((dt) => (
    <CardItem key={dt.id}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          style={{ objectFit: "cover", objectPosition: "center" }}
          src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${dt.cover.image_id}.jpg`}
          alt={`${dt.name} cover`}
          blurDataURL={`https://images.igdb.com/igdb/image/upload/t_micro/${dt.cover.image_id}.jpg`}
          placeholder="blur"
          loading="eager"
          fill={true}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
    </CardItem>
  ));
}
