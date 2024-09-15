export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="font-jakarta text-darkSlateGrey font-bold text-6xl text-center py-8">
      {title}
    </h1>
  );
}
