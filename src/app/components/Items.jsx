const reactDescriptions = ['5 euro ', '10 euro', '20 euro', '50 euro'];


export default function Items({title, description}) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}
// {title: string, description: string}