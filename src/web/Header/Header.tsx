import SikaLogo from "@/elements/SikaLogo";
import "./Header.scss";
import Button from "@/elements/Button";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="Header">
      <div className="header-wrapper">
        <SikaLogo size="medium" style="monochrome" />
        <Button type="ghost">Sign Up</Button>
      </div>
    </header>
  );
}
