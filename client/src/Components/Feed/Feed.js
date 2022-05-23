import React from "react";
import StoryReel from "../Story/StoryReel";

export default function Feed({ photoUrl }) {
  return (
    <div className="feed">
      <StoryReel photoUrl={photoUrl} />
    </div>
  );
}
