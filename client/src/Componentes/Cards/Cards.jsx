import React from "react";
import CardTicket from "../Cards Tickets/CardsTicket";

const datos = [
    {
        "adult": false,
        "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 634649,
        "original_language": "en",
        "original_title": "Spider-Man: No Way Home",
        "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "popularity": 6120.418,
        "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "release_date": "2021-12-15",
        "title": "Spider-Man: No Way Home",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 11355
      },
      {
        "adult": false,
        "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
        "genre_ids": [
          28,
          878,
          35,
          10751
        ],
        "id": 675353,
        "original_language": "en",
        "original_title": "Sonic the Hedgehog 2",
        "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
        "popularity": 6401.627,
        "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
        "release_date": "2022-03-30",
        "title": "Sonic the Hedgehog 2",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 376
      },
      {
        "adult": false,
        "backdrop_path": "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
        "genre_ids": [
          16,
          10751,
          35,
          14
        ],
        "id": 508947,
        "original_language": "en",
        "original_title": "Turning Red",
        "overview": "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
        "popularity": 5475.263,
        "poster_path": "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
        "release_date": "2022-03-10",
        "title": "Turning Red",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1582
      },
      {
        "adult": false,
        "backdrop_path": "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 406759,
        "original_language": "en",
        "original_title": "Moonfall",
        "overview": "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.",
        "popularity": 4650.633,
        "poster_path": "/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
        "release_date": "2022-02-03",
        "title": "Moonfall",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 629
      },
      {
        "adult": false,
        "backdrop_path": "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
        "genre_ids": [
          16,
          35,
          10751,
          14
        ],
        "id": 568124,
        "original_language": "en",
        "original_title": "Encanto",
        "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
        "popularity": 2264.071,
        "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
        "release_date": "2021-11-24",
        "title": "Encanto",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 5980
      }
    ]

const Cards = ()=>{
    return (
        <div style={{'display':'flex', 'flexWrap':'wrap', 'justifyContent':'center', 'padding':'1rem 2rem', 'gap':'20px', 'maxWidth': '100%', 'backgroundColor':'#22272E'}}>
            {datos.map(d=><CardTicket 
            key = {d.id}
            poster_path = {d.poster_path}
            original_title = {d.original_title}
            release_date = {d.release_date}
             />)}
        </div>
    )
};
export default Cards;
