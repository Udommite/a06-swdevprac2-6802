import Rating from "@mui/material/Rating";
import InteractiveCard from "@/components/InteractiveCard";

type CardProps = {
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (venueName: string, rating: number) => void;
};

export default function Card({
  venueName,
  imgSrc,
  rating,
  onRatingChange,
}: CardProps) {
  return (
    <InteractiveCard>
      <div>
        <div>
          <img
            src={imgSrc}
            alt={venueName}
            className="h-64 w-full object-cover"
          />
        </div>
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-slate-900">{venueName}</h2>
          <div className="mt-4">
            <Rating
              id={`${venueName} Rating`}
              name={`${venueName} Rating`}
              data-testid={`${venueName} Rating`}
              value={rating}
              onChange={(_, value) => onRatingChange(venueName, value ?? 0)}
            />
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
}
