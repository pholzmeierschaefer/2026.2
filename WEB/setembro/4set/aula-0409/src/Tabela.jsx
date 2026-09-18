export default function Tabela({ dados }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
        </tr>
      </thead>
      <tbody>
        {dados && dados.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.titulo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}