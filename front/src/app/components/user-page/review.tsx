import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Review = ({
  id = 0,
  name = "nome",
  artist = "artista",
  album = "album",
  release = "2024",
  image = "",
  stars = 5,
  review = "",
}) => {
  const showReview = review.length != 0;

  var titleClass =
    "font-bold grid grid-flow-row-dense grid-cols-3 text-orange-400 bg-orange-950 p-2 rounded-md";
  if (showReview) {
    titleClass += " pb-10";
  }

  return (
    <Link href={"/edit/" + id}>
      <section className="m-5 text-gray-100 rounded-md h-fit p-2">
        <div className={titleClass}>
          <div className="grow flex flex-row col-span-2">
            <Image
              className="rounded inline-block m-2 w-10 h-10"
              src={image}
              width={40}
              height={40}
              alt={name}
            />
            <div className="inline-block m-1 grow">
              <a
                href=""
                className="hover:underline hover:underline-offset-1 underline-offset-4 hover:text-orange-300 hover:duration-500"
              >
                {name}
              </a>
              <div className="font-light flex flex-row justify-between text-sm w-100">
                <div className="inline-block">{artist}</div>
                <div className="text-right inline-block">
                  Album: {album}
                  {release.length > 0 ? "," : ""} {release}
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            {[...Array(Math.round(stars))].map((_, index) => (
              <Image
                key={index}
                className="inline-block m-1"
                src="/img/star.png"
                width={20}
                height={20}
                alt="Picture of the author"
              />
            ))}
          </div>
        </div>
        {showReview && (
          <div className="p-5 m-2 ml-0 -mt-8 text-justify rounded-md bg-neutral-900 overflow-hidden h-fit">
            {review}
          </div>
        )}
      </section>
    </Link>
  );
};
