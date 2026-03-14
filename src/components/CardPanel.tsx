"use client";

import { useReducer } from "react";
import Card from "@/components/Card";

const venues = [
  { venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
] as const;

const initialRatings = new Map<string, number>(
  venues.map((venue) => [venue.venueName, 0]),
);

type RatingsAction =
  | { type: "setRating"; venueName: string; rating: number }
  | { type: "removeVenue"; venueName: string };

function ratingsReducer(state: Map<string, number>, action: RatingsAction) {
  const nextState = new Map(state);

  switch (action.type) {
    case "setRating":
      nextState.set(action.venueName, action.rating);
      return nextState;
    case "removeVenue":
      nextState.delete(action.venueName);
      return nextState;
    default:
      return state;
  }
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialRatings);

  return (
    <section className="flex flex-col gap-8">
      <section
        aria-label="Venue cards"
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {venues.map((venue) => (
          <Card
            key={venue.venueName}
            venueName={venue.venueName}
            imgSrc={venue.imgSrc}
            rating={ratings.get(venue.venueName) ?? 0}
            onRatingChange={(venueName, rating) =>
              dispatch({ type: "setRating", venueName, rating })
            }
          />
        ))}
      </section>

      <div className="flex flex-col gap-3">
        {Array.from(ratings.entries()).map(([venueName, rating]) => (
          <button
            key={venueName}
            type="button"
            data-testid={venueName}
            className="rounded-lg bg-white px-4 py-3 text-left text-slate-900 shadow"
            onClick={() => dispatch({ type: "removeVenue", venueName })}
          >
            {venueName} Rating : {rating}
          </button>
        ))}
      </div>
    </section>
  );
}
