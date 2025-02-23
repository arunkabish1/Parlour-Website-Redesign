import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import top from '../assets/s.png'

const Example = () => {
  return (
    <div className="">
      {/* <div className="flex items-center justify-center">
        
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className=" h-[300vh] bg-white">
      <div className="sticky top-0 flex items-center mx-auto overflow-hidden">
        <motion.div style={{ x }} className="flex gap-1">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative rounded-llg h-screen w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className=" p-8 text-2xl font-black uppercase text-white">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://i.pinimg.com/474x/97/ed/d0/97edd0a71696722ee95a9c56145055f9.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1588175768004-4e8a770cc099?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://i.pinimg.com/736x/db/e1/be/dbe1be9c78528a156e1ddbac322e4c89.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://i.pinimg.com/736x/b7/86/a1/b786a164c03a25595f1a0f6449187f5b.jpg",
    title: "Title 6",
    id: 6,
  },
  // {
  //   url: "https://i.pinimg.com/474x/da/5a/42/da5a428bd25540b6c9770783a6c81d4c.jpg",
  //   title: "Title 7",
  //   id: 7,
  // },
];