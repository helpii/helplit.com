import { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import shapeshifter from 'classnames';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socialUrl: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Tamara Bitencourt',
    role: 'A Educadora',
    imageUrl:
      'https://64.media.tumblr.com/6dce8064ec25c6652b4684c79d16b928/335d4976e8d59b2a-b6/s400x600/5af671cca2aba05e802086113ee722de0544f10c.jpg',
    socialUrl: 'https://www.instagram.com/tamarabitencourtprof/',
  },
  {
    id: 2,
    name: 'Rosangela Maraschin',
    role: 'A Economista',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQE3205JT3Fi1g/profile-displayphoto-shrink_400_400/0/1663107401778?e=1723680000&v=beta&t=P8Kwsoqi8UVBAWcCYP0ndcdded5uvuXD4MeNwObt-3Q',
    socialUrl: 'https://www.linkedin.com/in/rosangela-viegas-maraschin/',
  },
  {
    id: 3,
    name: 'Juliana Manara',
    role: 'A Estrategista',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQF9tNsdRcP9Aw/profile-displayphoto-shrink_400_400/0/1706010501866?e=1723680000&v=beta&t=yrLFABbXS75tKsw_Vmq1kizjNRyAPuIA05OdNe-ItZc',
    socialUrl: 'https://www.linkedin.com/in/julianamanara/',
  },
  {
    id: 4,
    name: 'João M. Fantin',
    role: 'O Engenheiro',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQGAK71ByDXptA/profile-displayphoto-shrink_400_400/0/1713759406637?e=1723680000&v=beta&t=nYp0wUoa5CSOP0bL_aJgMHTxHrsivHks5eqSPlLVD3w',
    socialUrl: 'https://www.linkedin.com/in/jmfantin/',
  },
  {
    id: 5,
    name: 'Eduardo Viva',
    role: 'O Designer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQHP8aeyfU2MaQ/profile-displayphoto-shrink_400_400/0/1683720920139?e=1723680000&v=beta&t=etjyKPYYu4RZ4THZAYg7jqOXOp7WQBIVmPD2ptdh3g4',
    socialUrl: 'https://www.linkedin.com/in/edu-viva/',
  },
  {
    id: 6,
    name: 'Suzana Linhares',
    role: 'A Analista',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQFyhkH19UkAVw/profile-displayphoto-shrink_400_400/0/1661273352414?e=1723680000&v=beta&t=2gDpGwDDbEln8K9h0EH0gOC79u9M3DIwWMRKYgI5_2w',
    socialUrl: 'https://www.linkedin.com/in/suzanachaveslinhares/',
  },
  // Adicione mais membros da equipe conforme necessário
];

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-2">
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="select-none flex items-center justify-center"
        >
          <ArrowLeft
            className="float-right"
            size={36}
            color="white"
            weight="duotone"
          />
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {teamData.map((member) => (
              <a
                key={member.id}
                className="min-w-full flex-shrink-0"
                target="_blank"
                href={member.socialUrl}
              >
                <div className="p-4">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className={shapeshifter(
                      'w-48 h-48 mx-auto rounded-full border-white',
                      {
                        'border-solid border-[3px]':
                          member.name === 'Eduardo Viva' ||
                          member.name === 'Suzana Linhares',

                        'border-double border-8':
                          member.name === 'Tamara Bitencourt' ||
                          member.name === 'Rosangela Maraschin' ||
                          member.name === 'Juliana Manara' ||
                          member.name === 'João M. Fantin',
                      }
                    )}
                  />
                  <h2 className="text-xl font-semibold text-center mt-4 font-TITULO text-white underline">
                    {member.name}
                  </h2>
                  <p className="text-center font-DESTAQUE text-white">
                    {member.role}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="select-none flex items-center justify-center"
        >
          <ArrowRight
            className="float-right"
            size={36}
            color="white"
            weight="duotone"
          />
        </button>
      </div>
    </div>
  );
}

export default TeamCarousel;
