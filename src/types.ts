import { StaticImageData } from "next/image";

export type FilterItem = { label: string; icon: StaticImageData };

export type ListingItem = {
  id: string;
  name: string;
  images: Array<StaticImageData | string>;
  host: string;
  availableStartDate: Date;
  availableEndDate: Date;
  costPerNight: number;
  averageRating: number;
  favourite: boolean;
};
