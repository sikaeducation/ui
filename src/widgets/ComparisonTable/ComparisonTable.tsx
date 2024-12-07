import "./ComparisonTable.scss";
import Icon from "../../elements/Icon";

type Props = {
  headings: string[];
  rows: { label: string; values: (string | boolean)[] }[];
};

export default function ComparisonTable({ headings, rows }: Props) {
  const getValueContent = (value: boolean | string) => {
    if (value === true) {
      return <Icon type="checkmark" />;
    } else if (value === false) {
      return <Icon type="close" />;
    } else {
      return value;
    }
  };
  return (
    <table className="ComparisonTable">
      <thead>
        <tr>
          <td></td>
          {headings.map((heading) => <td>{heading}</td>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ label, values }) => (
          <tr>
            <td>{label}</td>
            {values.map((value) => (
              <td>
                {getValueContent(value)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
