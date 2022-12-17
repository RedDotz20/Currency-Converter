export interface CurrencyType {
  string: number;
}

export function Currency(props: { currencies: CurrencyType | {} }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Currency</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(props.currencies).map((key, value) => {
          console.log(key);
          return (
            <tr>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
