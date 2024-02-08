import { useAsync } from "./hooks/useAsync";
import { delay } from "./utils/delay";

export const App = () => {
  const [data, loading, error, reload] = useAsync(
    async () => {
      await delay(Math.random() * 500 + 500);

      if (Math.random() > .7)
        throw new Error('Пашол нахуй');

      return await (
        fetch('/data.json')
          .then<{ name: string; }[]>(
            e => e.json()
          )
      );
    }
  );

  if (loading)
    return 'Загрузка...';

  if (error)
    return `Ошибка ${error}`;

  return (
    <>
      {data?.map(({ name }, i) => (
        <p key={i}>{name}</p>
      ))}
      <button onClick={reload}>Reload</button>
    </>
  );
};