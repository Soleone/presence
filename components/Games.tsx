import { config } from '@/config';
import Image from '@/components/Image';

function Hype({ hype }: { hype: number }) {
  return (
    <></>
  );
};

export default function Games() {
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <section>
      <p className='text-center mb-8 text-gray-300 text-sm'>
        Games coming out this year I am interested in.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-8'>
        {config.extensions.games.map(({ title, description, date, image, hype }) => (
          <div key={title} className="flex flex-col items-center gap-2 group">
            <h2 className="font-bold text-lg">{title}</h2>
            <Image src={image} alt={title} isHoverable isClickable classNames='object-contain h-64 w-full' />
            <p className="text-sm text-gray-300 h-8 text-center">{description}</p>
            <p className="text-sm group-hover:underline">{formatDate(date)}</p>
            <Hype hype={hype} />
          </div>
        ))}
      </div>
    </section>
  );
};