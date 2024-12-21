import Header from "@/web/Header";
import Hero from "@/web/Hero";
import Footer from "@/web/Footer";
import PriceCard from "@/web/PriceCard";
import Logo from "@/elements/Logo";
import ComparisonTable from "@/widgets/ComparisonTable";
import Profile from "@/web/Profile";
import "./WebsiteHome.scss";
import kyleProfile from "@/assets/kyle-profile.webp";

type Props = {};

export default function WebsiteHome({}: Props) {
  return (
    <div className="WebsiteHome">
      <Header />
      <Hero />
      <section className="what-is-sika">
        <h2>What is Sika?</h2>
      </section>
      <section className="how-it-works">
        <h2>How Sika works</h2>
      </section>
      <section className="sika-difference">
        <h2>What makes Sika different?</h2>
        <ComparisonTable
          headings={[
            "Thing 1",
            "Thing 2",
            "Thing 3",
            "Thing 4",
            "Thing 5",
            "Thing 6",
          ]}
          rows={[{
            label: "Org 1",
            values: [
              true,
              false,
              "Score 3",
              "Score 4",
              "Score 5",
              "Score 6",
            ],
          }, {
            label: "Org 2",
            values: [
              "Score 1",
              "Score 2",
              "Score 3",
              "Score 4",
              "Score 5",
              "Score 6",
            ],
          }, {
            label: "Org 3",
            values: [
              "Score 1",
              "Score 2",
              "Score 3",
              "Score 4",
              "Score 5",
              "Score 6",
            ],
          }, {
            label: "Org 4",
            values: [
              "Score 1",
              "Score 2",
              "Score 3",
              "Score 4",
              "Score 5",
              "Score 6",
            ],
          }]}
        />
      </section>
      <section className="technologies">
        <h2>Some of the technologies you can learn:</h2>
        <ul>
          {([
            "java",
            "docker",
            "git",
            "github",
            "typescript",
            "react",
            "aws",
            "angular",
            "node",
            "express",
            "jest",
            "vue",
            "ember",
            "vitest",
            "vite",
            "playwright",
            "cypress",
            "storybook",
          ] as const).map((logo) => (
            <li>
              <Logo size="regular" subject={logo} style="monochrome" />
            </li>
          ))}
        </ul>
      </section>
      <section className="testimonials">
        <h2>What people are saying about Sika</h2>
      </section>

      <div className="price-cards">
        <PriceCard
          heading="Some Heading"
          subheading="Et dolore magna aliqua. Ut enim ad! Lorem ipsum dolor, sit amet."
          body={`
Lorem ipsum dolor **sit amet**, consectetur adipiscing elit, sed do _eiusmod_ tempor incididunt ut labore

Et dolore magna aliqua. Ut enim ad minim veniam, **quis nostrud exercitation** ullamco laboris nisi ut aliquip

Ex ea commodo consequat. Duis aute **irure dolor in reprehenderit.**

_In voluptate velit esse cillum dolore eu fugiat nulla pariatur_. Excepteur sint occaecat cupidatat **non proident**, sunt in culpa qui officia deserunt mollit anim id est laborum.
          `}
          differentiator="All the things"
          price={{
            sale: "$99",
            full: "$199",
            unit: "per lesson",
          }}
          button={{
            action: () => {},
            text: "Take Action",
          }}
        />
      </div>
      <section className="coach-profile">
        <h2>Meet your coach!</h2>
        <Profile
          imageUrl={kyleProfile}
          altText="Kyle Coberly"
          copy={`
Kyle Coberly is the founder and head coach of Sika Education. He specializes in web app development, engineering leadership, agility, quality, and systems thinking.

He holds a M.Eng. degree in Engineering Management from the University of Colorado Boulder, as well as a B.S. in Computer Information Systems from the Metropolitan State University of Denver. Kyle is currently a professor of Information Systems at the University of Denver.

Kyle formerly ran the software engineering education programs for Galvanize, Flatiron School, Ford, and Liberty Mutual. He's also worked as a lead software engineer at Sunrun, Health Scholars, and Pearson Education. Kyle was the Executive Director of Develop Denver from 2018-2020.
          `}
          style="profile"
        />
      </section>
      <Footer />
    </div>
  );
}
