import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWork from "@/components/HowItWork";
import CoursesList from "@/components/CoursesList";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import BlogList from "@/components/BlogList";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <HowItWork />
      <CoursesList />
      <Testimonial />
      <Pricing />
      <Team />
      <Faq />
      <BlogList />
      <Brands />
    </main>
  );
}
