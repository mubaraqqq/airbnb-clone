import { ListingItem } from "@/types";
import { faker } from "@faker-js/faker";
import { v1 } from "uuid";

export const listingItem: ListingItem = {
  id: v1(),
  name: `${Math.floor(
    Math.random() * 9 + 1
  )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
  images: [
    faker.image.urlLoremFlickr({ category: "city" }),
    faker.image.urlLoremFlickr({ category: "city" }),
    faker.image.urlLoremFlickr({ category: "city" }),
    faker.image.urlLoremFlickr({ category: "city" }),
    faker.image.urlLoremFlickr({ category: "city" }),
  ],
  host: faker.person.fullName(),
  availableStartDate: faker.date.soon({ days: 30 }),
  availableEndDate: faker.date.soon({
    days: 30,
    refDate: "2023-08-15T00:00:00Z",
  }),
  costPerNight: Math.floor(Math.random() * 490 + 10),
  favourite: false,
  averageRating: Number((Math.random() * 5).toFixed(2)),
};

// console.log(listingItem);

export const mockListingArray: ListingItem[] = [
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
  {
    id: v1(),
    name: `${Math.floor(
      Math.random() * 9 + 1
    )} Bedroom in ${faker.location.city()}, ${faker.location.state()}`,
    images: [
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
      faker.image.urlLoremFlickr({ category: "city" }),
    ],
    host: faker.person.fullName(),
    availableStartDate: faker.date.soon({ days: 30 }),
    availableEndDate: faker.date.soon({
      days: 30,
      refDate: "2023-08-15T00:00:00Z",
    }),
    costPerNight: Math.floor(Math.random() * 490 + 10),
    favourite: false,
    averageRating: Number((Math.random() * 5).toFixed(2)),
  },
];
