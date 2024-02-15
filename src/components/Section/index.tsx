import { LitCarousel } from '../LitCarousel';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/public-7a7db.appspot.com/o/hlt-onepage%2FLIT_EXAMPLES%2Fdia_h_desapareceu.png?alt=media&token=b8e6bf91-f545-42fd-a602-375fdd15c425',
  'https://firebasestorage.googleapis.com/v0/b/public-7a7db.appspot.com/o/hlt-onepage%2FLIT_EXAMPLES%2Fmagica_culturas_brasileiras.png?alt=media&token=d4c0b3a0-0c87-4761-9592-4980608c9ef7',
  'https://firebasestorage.googleapis.com/v0/b/public-7a7db.appspot.com/o/hlt-onepage%2FLIT_EXAMPLES%2Fmercadinho_da_semana.png?alt=media&token=4366fddc-1c63-4976-8a4a-73f18e71515a',
];

type Props = {
  type:
    | 'hero'
    | 'simple'
    | 'carousel'
    | 'instructions'
    | 'stages'
    | 'cta'
    | 'footer'
    | 'default';
  children: JSX.Element;
};

export function Section({ type, children }: Props) {
  switch (type) {
    case 'hero':
      return (
        <div className="bg-gradient-to-r py-8 from-CORAL to-[#f38c64] flex flex-col md:flex-row items-center justify-between h-[100%] w-[100%] px-16 overflow-hidden">
          {children}
        </div>
      );
    case 'carousel':
      return (
        <div className="py-12">
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
        </div>
      );
    case 'instructions':
      return (
        <div className="bg-gradient-to-r from-[#f4df64] to-[#edd757] border-b-[12px] border-t-[12px] border-[#f4e588] rounded-2xl  flex flex-col items-center justify-between pb-12 h-auto w-[100%]">
          {children}
        </div>
      );
    case 'stages':
      return (
        <div className="flex flex-col items-center justify-between h-auto w-[100%] py-8">
          {children}
        </div>
      );
    case 'cta':
      return (
        <div className="flex flex-row items-center justify-center h-auto w-[100%] py-16">
          {children}
        </div>
      );
    case 'footer':
      return (
        <div className="bg-CORAL flex flex-row items-center justify-center h-auto w-[100%] py-16">
          {children}
        </div>
      );
    default:
      return <div>{children}</div>;
  }
}
