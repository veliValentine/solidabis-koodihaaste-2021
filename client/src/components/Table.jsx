export const TableHead = ({ children }) => (
  <thead>
    <tr>
      {children}
    </tr>
  </thead>
);

export const TableBody = ({ children }) => (
  <tbody>
    {children}
  </tbody>
);

export const wrapTableRow = (component, i) => <tr key={i}><td>{component}</td></tr>;
