import Card from "./Card";

interface SectionProps {
  title: string;
  subtitle: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-6">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section;
