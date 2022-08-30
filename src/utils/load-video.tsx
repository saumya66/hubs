/** @jsx createElementEntity */
import { createElementEntity } from "../utils/jsx-entity";
import { VideoTexture } from "three";
import { renderAsEntity } from "../utils/jsx-entity";
import { loadVideoTexture } from "../utils/load-video-texture";
import { HubsWorld } from "../app";

export function* loadVideo(world: HubsWorld, url: string) {
  const { texture, ratio }: { texture: VideoTexture; ratio: number } = yield loadVideoTexture({ src: url });

  return renderAsEntity(
    world,
    <entity
      name="Video"
      networked
      networkedVideo
      grabbable={{ cursor: true, hand: false }}
      video={{
        texture,
        ratio,
        autoPlay: true,
        projection: "flat"
      }}
    ></entity>
  );
}
