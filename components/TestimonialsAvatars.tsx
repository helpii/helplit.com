import Image from 'next/image';

const avatars: {
  alt: string;
  src: string;
}[] = [
  {
    alt: 'User',
    // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
    src: 'https://64.media.tumblr.com/b4cd3e6a2198d788effd727493eefc10/5e71b6c42911d687-12/s640x960/1996e260617b613c10a1ea39677704c099c4f1c6.pnj',
  },
  {
    alt: 'User',
    src: 'https://64.media.tumblr.com/bb49c0aa258cd93629ddf26595bfbe66/3f082f7fb3460917-10/s640x960/d219bcc77e4c75e61cfbc1cfe5ea9960ce15cebc.pnj',
  },
  {
    alt: 'User',
    src: 'https://64.media.tumblr.com/20b17dee6cd34491c23cdb5304acb463/3f220a9d1012e45c-ba/s640x960/ce0221747af060491c851fffc0514b28ae64f5ed.pnj',
  },
  {
    alt: 'User',
    src: 'https://64.media.tumblr.com/8482058f69c9a10210187f1b2dda55f5/8130153910154445-cf/s640x960/fd4c9c9b4529ce49a491204166446a5881412c2a.pnj',
  },
  {
    alt: 'User',
    src: 'https://64.media.tumblr.com/79cd1ca4dd4b35f7855f82d68be9c005/27188ef7bdfe80e9-b9/s640x960/c07b3d7b680e04830ebd79c9c2e51b9691801862.pnj',
  },
];

const TestimonialsAvatars = ({ priority }: { priority?: boolean }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3">
      {/* AVATARS */}
      <div className={`-space-x-5 avatar-group justy-start`}>
        {avatars.map((image, i) => (
          <div className="avatar w-12 h-12" key={i}>
            <Image
              src={image.src}
              alt={image.alt}
              priority={priority}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>

      {/* RATING */}
      <div className="flex flex-col justify-center items-center md:items-start gap-1">
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-yellow-500"
              key={i}
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>

        <div className="text-base text-base-content/80">
          <span className="font-semibold text-base-content">26</span> profes
          estão inovando
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAvatars;
