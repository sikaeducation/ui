import Header from "@/web/Header";
import Hero from "@/web/Hero";
import Footer from "@/web/Footer";
import PriceCard from "@/web/PriceCard";
import ComparisonTable from "@/widgets/ComparisonTable";
import Profile from "@/web/Profile";
import "./WebsiteHome.scss";
import kyleProfile from "@/assets/kyle-profile.webp";
import { Markdown } from "@/index";
import TechnologyList from "../TechnologyList";

type Props = {};

export default function WebsiteHome({}: Props) {
  return (
    <div className="WebsiteHome">
      <Header />
      <Hero />
      <section className="what-is-sika">
        <h2>What is Sika?</h2>
        <Markdown
          content={`
Sika Education wants to empower people to confidently shape their world. That's why we deliver personalized technology education through structured activities with feedback. Since 2020, we've partnered with companies like Ford, Pluralsight, Northwest Mutual and dozens more to retrain and level up their software engineering teams. We do this by:

* Centering activities and feedback over content. Most courses have no hands-on activities. Better courses might have a handful. Sika has a library of hundreds of activities, ranging from speed drills for data transformations to multi-week full-stack projects with face-to-face presentations.
* We sell outcomes, not content. Our backward design approach to curriculum ensures an education journey that ends with new skills. We use a lot of methods of assessment to capture data on where you're at and what you need. There's no bad grades, no last tries, and you can take as much time as you need. It less like college, more like a session with a personal trainer.
* We leverage our uniquely un-scaled model to do education right. We are not and will never be a scaled SaaS platform because education's scale is limited by its fundamental need for personal connections. This allows us to do individual customization at a level that scaled platforms cannot.
        `}
        />
      </section>
      <section className="how-it-works">
        <h2>How Sika works</h2>
        <Markdown
          content={`
1. Schedule a free consultation. We'll talk about your goals and come up with a study plan.
2. You'll get a packet of materials to work through
3. When you're done, schedule an appointment. You'll get personalized feedback, an opportunity to ask questions, and additional training. You'll have an opportunity to continue in the same direction with new materials or switch to a different topic.
          `}
        />
      </section>
      <section className="sika-difference">
        <h2>What makes Sika different?</h2>
        <Markdown
          content={`
**Sika engineers education.** We're great engineers with direct experience from companies of all size and industry, but our true passion and expertise is helping people learn. We apply best-practices informed by cognitive science and decades of teaching experience to create measurable results. Lots of people teach; with Sika, you'll learn.

* **Flexibility**. You coordinate your own place, pace, and path.
* **Human connections enhanced by technology**. Great educational experiences come from having a real person invested in the learner's outcome. We use the latest technology to super-charge human interactions, not replace them. Video courses, MOOCs, and even classroom training will never differentiate as well as 1:1 coaching.
* **Outcomes-based education**. Most programs march through a list of topics. Sika helps you work backward from your goals and measure your progress toward them.
          `}
        />
        <ComparisonTable
          headings={[
            "Focus",
            "Pace",
            "Feedback",
            "Price",
            "Commitment",
          ]}
          rows={[{
            label: "Sika Education",
            values: [
              "Learning",
              "Individualized",
              "Lots",
              "Individualized",
              "Individualized",
            ],
          }, {
            label: "Video Course",
            values: [
              "Content",
              "Self",
              "None",
              "$",
              "None",
            ],
          }, {
            label: "Corporate Training",
            values: [
              "Lectures",
              "Fixed",
              "Few",
              "$$$",
              "Days",
            ],
          }, {
            label: "Part-Time Bootcamp",
            values: [
              "Curriculum",
              "Fixed or flexible",
              "Some",
              "$$",
              "Months",
            ],
          }, {
            label: "Immersive Bootcamp",
            values: [
              "Curriculum",
              "Fixed",
              "Some",
              "$$$",
              "Months",
            ],
          }, {
            label: "College Program",
            values: [
              "Lectures",
              "Fixed",
              "Few",
              "$$$$",
              "Years",
            ],
          }]}
        />
      </section>
      <section className="technologies">
        <h2>What do you want to learn?</h2>
        <Markdown
          content={`
Other programs sell ingredients and leave it to you to put them together. Sika's individually-tailored training plans develop the right blend of concrete and abstract skills to make you confident.

Sika specializes in full-stack web development technologies:
        `}
        />
        <TechnologyList
          technologies={[
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
          ]}
        />
        <Markdown
          content={`
In addition, your team members can learn conceptual skills like:

* Software architecture
* Interviewing and business skills
* Quality engineering
* Testing, and TDD
* OOP and functional programming
* Visual design

And lots more!

### Don't know what you don't know?

Don't worry, we can help you fill in the blanks on your learning goals. We use our length and breadth of engineering experience to help identify the concrete steps to your goals, even if they're a little fuzzy right now. Our diagnostic assessments can help identify which specific skills to target and give you feedback on your progress.
        `}
        />
      </section>
      <section className="testimonials">
        <h2>What people are saying about Sika</h2>
        <Profile
          imageUrl={kyleProfile}
          altText=""
          attribution="Kyle Coberly, 2020 student"
          style="testimonial"
          copy="This is one of the best choices I've ever made!"
        />
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
