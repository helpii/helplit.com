import TestimonialsAvatars from './TestimonialsAvatars';
import config from '@/config';
import { YoutubeEmbed } from './custom/YoutubeEmbed';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 text-info">
          Planeje aulas divertidas e produtivas em menos tempo.
        </h1>
        <p className="text-xl opacity-80 leading-relaxed font-jubilat">
          Sabemos que você já é expert em preparar uma boa aula. Nossa missão é
          te entregar a inspiração que você já busca para planejar aulas
          produtivas e divertidas, sem levar o tempo que você leva hoje.
        </p>
        <a
          className="btn btn-primary btn-wide"
          href="https://helplit-comunidade.framer.website/"
          target="_blank"
        >
          Seja {config.appName}!
        </a>

        <TestimonialsAvatars priority={true} />
      </div>
      <YoutubeEmbed />
    </section>
  );
};

export default Hero;
