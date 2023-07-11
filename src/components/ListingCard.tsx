"use client";

// import { listingItem } from "@/data/mockListingData";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import "@/styles/ListingCard.scss";
import { Star } from "@mui/icons-material";
import { ListingItem } from "@/types";

interface ListingCardProps extends ListingItem {}

const ListingCard = (listingItem: ListingCardProps) => {
  return (
    <div className="listing-card w-[312px] h-[auto] flex flex-col gap-4">
      <Carousel
        navButtonsAlwaysVisible
        indicatorContainerProps={{
          style: { marginTop: "-20px", zIndex: "5", position: "relative" },
        }}
        indicatorIconButtonProps={{
          style: { color: "rgba(204, 204, 204, 0.5)" },
        }}
        activeIndicatorIconButtonProps={{ style: { color: "#ffffff" } }}
      >
        {listingItem.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={listingItem.name}
            loading="lazy"
            width={312}
            height={300}
          />
        ))}
      </Carousel>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <p className="text-[15px] text-[#222222] font-semibold">
            {listingItem.name}
          </p>
          <span className="flex items-center gap-1">
            <Star sx={{ fontSize: "12px" }} />
            <p className="text-[15px] text-[#222222] font-medium">
              {listingItem.averageRating}
            </p>
          </span>
        </div>
        <p className="font-medium">{listingItem.host}</p>
        <p>
          {listingItem.availableStartDate.toLocaleDateString("en", {
            month: "short",
            day: "2-digit",
          })}{" "}
          —{" "}
          {listingItem.availableEndDate.toLocaleDateString("en", {
            month: "short",
            day: "2-digit",
          })}
        </p>
        <p>
          <span className="font-semibold">${listingItem.costPerNight} </span>
          night
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
