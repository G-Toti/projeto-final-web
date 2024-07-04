import React from "react";
import Image from 'next/image';

export const Review = ({name="nome", artist="artista", album="album", release="2024", image="", stars=5, review=""}) => {
    //const name="The girl, so confusing version with lorde";
    //const artist="Charli xcx, Lorde";
    //const album="brat";
    //const release="2024";
    //const image = "/img/brat-test.png";
    //const stars = 5;
    //const review = "";
    //const review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus lacus, laoreet quis porttitor id, dignissim id dui. Integer congue condimentum bibendum. Donec eleifend sapien vitae nibh ullamcorper mollis. Morbi volutpat condimentum semper. Cras posuere felis nulla, ullamcorper egestas enim tempor eu. Ut lobortis ex aliquet sapien imperdiet, id venenatis mauris vulputate. Mauris in ante tristique, facilisis odio non, maximus sem. Duis ac felis elit. Donec porta eros in nisi pharetra sodales. In iaculis nulla tortor, et accumsan sem pulvinar semper. Donec eu leo eget nulla efficitur sagittis eu a risus. Aenean dignissim euismod tristique. ";
    const showReview = review.length != 0;

    var titleClass = "font-bold grid grid-flow-row-dense grid-cols-3 text-orange-400 bg-orange-950 p-2 rounded-md";
    if(showReview)
    {
        titleClass += " pb-10";
    }

    return (
        <section className="m-5 text-gray-100 rounded-md h-fit p-2">
            <div className={titleClass}>
                <div className="flex flex-row col-span-2">
                    <Image
                        className="rounded inline-block m-2 w-10 h-10"
                        src={image}
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />
                    <div className="inline-block m-1">
                        <a href="" className="hover:underline hover:underline-offset-1 underline-offset-4 hover:text-orange-300 hover:duration-500"> 
                            {name}
                        </a>
                        <div className="font-light grid grid-cols-2 text-sm">
                            <div className="inline-block"> 
                                {artist}
                            </div>
                            <div className="text-right inline-block"> 
                                Album: BRAT, 2024
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    {[...Array(stars)].map((_, i) => <Image
                        className="inline-block m-1"
                        src="/img/star.png"
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />)}
                </div>
            </div>
            {showReview &&
            <div className="p-5 m-2 ml-0 -mt-8 text-justify rounded-md bg-neutral-900 overflow-hidden h-fit">
                {review}
            </div>
            }
        </section>
    );
};
