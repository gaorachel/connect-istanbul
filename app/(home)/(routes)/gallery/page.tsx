import { ImageSlider } from "@/components/image-slider";

export default function GalleryPage() {
  const trips = [
    {
      name: "London, England - Summer School",
      code: "london-summer-school-2023",
      date: "June 2023 - July 2023",
      images: [
        {
          src: "/gallery/london-summer-school-2023-1.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-2.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-3.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-4.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-5.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-6.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-7.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-8.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-9.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-10.jpg",
        },
        {
          src: "/gallery/london-summer-school-2023-11.jpg",
        },
      ],
    },
    {
      name: "Toronto, Canada - Summer School",
      code: "toronto-summer-school-2023",
      date: "June 2023 - July 2023",
      images: [
        {
          src: "/gallery/toronto-summer-school-2023-1.jpg",
        },
        {
          src: "/gallery/toronto-summer-school-2023-2.jpg",
        },
        {
          src: "/gallery/toronto-summer-school-2023-3.jpg",
        },
        {
          src: "/gallery/toronto-summer-school-2023-4.jpg",
        },
        {
          src: "/gallery/toronto-summer-school-2023-5.jpg",
        },
        {
          src: "/gallery/toronto-summer-school-2023-6.jpg",
        },
        {
          src: "/gallery/toronto-summer-school-2023-7.jpg",
        },
        {
          src: "/gallery/toronto-summer-school-2023-8.jpg",
        },
        {
          src: "/gallery/toronto-summer-school-2023-9.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      {trips.map((trip, index) => (
        <div key={index} className="p-10">
          <h1> {trip.name} </h1>
          <h2> {trip.date} </h2>
          <ImageSlider images={trip.images} name={trip.name} />
        </div>
      ))}
    </div>
  );
}
