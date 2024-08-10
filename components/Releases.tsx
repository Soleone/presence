import { config } from '@/config';
import Image from '@/components/lib/Image';
import Rating from '@/components/lib/Rating';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
      <p className='text-center mb-8 text-gray-300 text-sm'>
        {config.extensions.releases.description}
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 p-4'>
        {config.extensions.releases.titles.map(({ title, description, date, image, hype }) => (
          <div key={title} className="flex flex-col items-center gap-2">
            <h2 className="font-bold text-md leading-none">{title}</h2>
            <p className="text-sm">{formatDate(date)}</p>
            <Popover>
              <PopoverTrigger>
                <Image src={image} alt={title} isHoverable isClickable classNames='object-contain h-64 w-full' />
              </PopoverTrigger>
              <PopoverContent>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white p-2 rounded-md">
                    <Image src={image} alt={title} classNames='object-contain h-full w-full' />
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Rating score={hype} className="mt-2" />
            <p className="text-sm text-gray-300 h-12 text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};