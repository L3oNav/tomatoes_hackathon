import React from "react";
import { URL_IMG } from "../const";
import {
  CastContent,
  CastProfile,
  CastName,
  CastRole,
  ListCast,
} from "./styles";

const Cast = ({ cast }) => {
  if (cast) {
    return (
      <ListCast>
        {cast
          ? cast.slice(0, 10).map((actor) =>
              actor.profile_path ? (
                <CastContent key={actor.id}>
                  <CastProfile src={URL_IMG + "w185" + actor.profile_path} />
                  <CastName>{actor.name}</CastName>
                  <CastRole>{actor.role}</CastRole>
                </CastContent>
              ) : (
                ""
              )
            )
          : ""}
      </ListCast>
    );
  } else {
    return 'Loading...';
  }
};

export default Cast;
