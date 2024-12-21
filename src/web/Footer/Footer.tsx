import "./Footer.scss";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="Footer">
      <div className="footer-wrapper">
        <section>
          <h3>Heading</h3>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </section>
        <section>
          <h3>Heading</h3>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
