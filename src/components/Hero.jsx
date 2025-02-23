import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ButtonWrapper from "./ButtonWrapper";

const Hero = () => {
  return (
    <section className="w-full mt-6 px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
      <h1 className="max-w-2xl font-monstserrat font-semibold text-center text-xl leading-snug">
        Transforming{" "}
        <span className="relative">
          Moments, 
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 5,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="9"
            />
          </svg>
        </span>{" "}
       <br /> Creating Beauty
      </h1>
        <p className="text-center p-5 md:text-lg text-wrap font-quicksand font-semibold text-slate-900  md:my-6">
        Your go-to destination for expert beauty services in a relaxing, luxurious environment in <span className="font-extrabold bg-blue-600 rounded-lg px-2 text-white">Thiruvarur.</span> With years of experience and a focus on affordability, we offer everything from haircuts to facials, helping you look and feel 
        </p>
        <div className="flex justify-center">
        <ButtonWrapper  />
        </div>
      
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1588175768004-4e8a770cc099?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // {
  //   id: 4,
  //   src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  // },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/db/e1/be/dbe1be9c78528a156e1ddbac322e4c89.jpg",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/b7/86/a1/b786a164c03a25595f1a0f6449187f5b.jpg",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/236x/5e/84/fe/5e84fef1f6e7351ac81685d9ed0ba088.jpg",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/236x/5d/da/65/5dda65220705d53772d2095cd589b0d5.jpg",
  },
  {
    id: 9,
    src: "https://i.pinimg.com/236x/a0/20/b3/a020b3bff8a95d10bff59bcb49689986.jpg",
  },
  {
    id: 10,
    src: "https://i.pinimg.com/236x/48/00/07/480007f9ca4dbf04653fa6d200d32f51.jpg",
  },
  {
    id: 11,
    src: "https://i.pinimg.com/474x/da/5a/42/da5a428bd25540b6c9770783a6c81d4c.jpg",
  },
  // {
  //   id: 12,
  //   src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  // },
  // {
  //   id: 13,
  //   src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  // },
  // {
  //   id: 14,
  //   src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  // },
  // {
  //   id: 15,
  //   src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  // },
  // {
  //   id: 16,
  //   src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  // },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-0.5">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;
