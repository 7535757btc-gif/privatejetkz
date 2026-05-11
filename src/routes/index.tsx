import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { HeadlightsSection } from "@/components/site/HeadlightsSection";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { Perks } from "@/components/site/Perks";
import { Tariffs } from "@/components/site/Tariffs";
import { Marquee } from "@/components/site/Marquee";
import { InteriorZoom } from "@/components/site/InteriorZoom";
import { AirportSection } from "@/components/site/AirportSection";
import { AstanaTour } from "@/components/site/AstanaTour";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { Booking } from "@/components/site/Booking";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Аренда частного джета в Астане — Private Jet KZ | VIP трансфер Казахстан" },
      {
        name: "description",
        content:
          "Аренда частного джета (VIP-минивэн Hyundai Staria LUXE) в Астане и по всему Казахстану. Трансфер из аэропорта Нурсултан, встреча делегаций, почасовая аренда. 10 лет опыта. Звоните: +7 708 938 08 00.",
      },
      {
        name: "keywords",
        content:
          "аренда частного джета Астана, частный джет Казахстан, VIP трансфер Астана, аренда джета Нур-Султан, бизнес трансфер Астана, трансфер аэропорт Астана, аренда автомобиля с водителем Астана, встреча VIP гостей Астана, Hyundai Staria люкс аренда",
      },
      { property: "og:title", content: "Аренда частного джета в Астане — Private Jet KZ" },
      {
        property: "og:description",
        content:
          "VIP-трансфер и аренда частного джет-минивэна в Астане. Hyundai Staria LUXE. Подача за 30 минут. Казахстан.",
      },
      { property: "og:url", content: "https://privatejetkz.com/" },
      { rel: "canonical", href: "https://privatejetkz.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <HeadlightsSection />
      <WhoWeAre />
      <Perks />
      <Marquee />
      <Tariffs />
      <InteriorZoom />
      <AstanaTour />
      <AirportSection />
      <Reviews />
      <FAQ />
      <Booking />
      <FinalCTA />
    </>
  );
}