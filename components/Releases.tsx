import { config } from '@/config';
import Image from '@/components/lib/Image';
import StarRating from '@/components/lib/StarRating';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GameScoreBadge } from './ui/game-score-badge';

const formatDate = (date: string) => {
  if (date.match(/^\d{4}$/)) {
    return date;
  }
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

export default function Releases() {

  return (
    <section>
      <p className='text-center mb-8 dark:text-gray-200 text-gray-700 text-sm'>
        {config.extensions.releases.description}
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 p-4'>
        {config.extensions.releases.titles.map(({ title, description, date, image, hype, score }) => (
          <div key={title} className="flex flex-col items-center gap-2">
            <h2 className="font-bold text-md leading-none">{title}</h2>
            <Dialog>
              <DialogTrigger>
                <Image src={image} alt={title} isHoverable isClickable classNames='object-contain h-64 w-full' />
              </DialogTrigger>
              <DialogContent>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white p-2 rounded-md">
                    <Image src={image} alt={title} classNames='object-contain h-full w-full' />
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <p className="text-sm ">{formatDate(date)}</p>
            <StarRating score={hype} className="mt-1" />
            <GameScoreBadge score={score}></GameScoreBadge>
            <p className="text-sm text-gray-700 dark:text-gray-300 h-12 text-center">{description}</p>
          </div>
        ))}
      </div>
    </section >
  );
};