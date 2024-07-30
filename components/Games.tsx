import { config } from '@/config';

export default function Games() {
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 mt-16">
      {config.extensions.games.map(({ title, description, date, image }) => (
        <div key={title} className="flex flex-col items-center gap-2">
          <h2 className="font-bold text-lg">{title}</h2>
          <img src={image} alt={title} className="object-contain h-64 w-full" />
          <p className="text-sm text-gray-300">{description}</p>
          <p className="text-sm">{formatDate(date)}</p>
        </div>
      ))}
    </section>
  );
};