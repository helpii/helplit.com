/* eslint-disable @next/next/no-img-element */
'use client';

import { LitCarousel } from '@/components/custom/LitCarousel';

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')

export const LitWorld = () => {
  return (
    <section
      className="py-24 md:py-32 max-w-7xl mx-auto bg-base-100"
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight text-info">
          Conheça o mundo das
          <span className="bg-neutral px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap text-primary border border-transparent border-b-primary">
            lits
          </span>
          💡
        </h2>

        <p className="text-xl leading-relaxed mb-10 md:mb-16 font-jubilat">
          É como chamamos nossas ideias de
          <span className="bg-neutral border border-transparent border-b-accent px-1 mx-1 leading-relaxed whitespace-nowrap text-accent">
            aulas inspiradoras
          </span>
          e fáceis de replicar! As lits são pensadas para o Ensino Fundamental
          I, onde há mais{' '}
          <span className="bg-neutral border border-transparent border-b-accent px-1 mx-1 leading-relaxed whitespace-nowrap text-accent">
            espaço para a criatividade
          </span>{' '}
          na Educação Básica.
        </p>
      </div>
      <LitCarousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <img
                src={src}
                className="px-2 object-fill w-full max-w-lg"
                alt="alt"
              />
            </div>
          );
        })}
      </LitCarousel>
    </section>
  );
};

const images = [
  'https://firebasestorage.googleapis.com/v0/b/public-7a7db.appspot.com/o/hlt-onepage%2FLIT_EXAMPLES%2Fdia_h_desapareceu.png?alt=media&token=b8e6bf91-f545-42fd-a602-375fdd15c425',
  'https://firebasestorage.googleapis.com/v0/b/public-7a7db.appspot.com/o/hlt-onepage%2FLIT_EXAMPLES%2Fmagica_culturas_brasileiras.png?alt=media&token=d4c0b3a0-0c87-4761-9592-4980608c9ef7',
  'https://firebasestorage.googleapis.com/v0/b/public-7a7db.appspot.com/o/hlt-onepage%2FLIT_EXAMPLES%2Fmercadinho_da_semana.png?alt=media&token=4366fddc-1c63-4976-8a4a-73f18e71515a',
];
