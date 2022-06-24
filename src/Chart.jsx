import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
export default function Chart({ pokeView }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "HP",
    "Attack",
    "Special-Attack",
    "Defense",
    "Special-Defense",
    "Speed",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: pokeView.name,
        data: pokeView.stats?.map((poke) => poke.base_stat),
        backgroundColor: "rgba(0, 255, 110, 0.5)",
      },
    ],
  };

  if (pokeView.length === 0) {
    return <p className="text-4xl mt-40">Press on a pokemon to start!</p>;
  } else {
    return (
      <div className="p-4 h-[50rem] lg:w-[50rem] sm:w-auto flex flex-col items-center overflow-y-auto">
        <div className="flex flex-col">
          <p>{pokeView.name}</p>

          <p>Type: {pokeView.types[0].type.name}</p>
        </div>
        <Bar width={150} height={50} options={options} data={data} />
        <div className="flex justify-evenly mt-4 w-full bg-neutral-800 p-4">
          <p>Height: {pokeView.height}</p>
          <span className="text-neutral-600">|</span>
          <p>Weight: {pokeView.weight}</p>
          <span className="text-neutral-600">|</span>
          <p>Base Exp: {pokeView.base_experience}</p>
          <span className="text-neutral-600">|</span>
          <p>Order: {pokeView.order}</p>
        </div>
        <div className="flex flex-wrap items-center">
          <img
            className="h-32 w-32"
            src={pokeView.sprites.back_default}
            alt={pokeView.name}
          />
          <img
            className="h-32 w-32"
            src={pokeView.sprites.back_shiny}
            alt={pokeView.name}
          />
          <img
            className="h-32 w-32"
            src={pokeView.sprites.front_default}
            alt={pokeView.name}
          />
          <img
            className="h-32 w-32"
            src={pokeView.sprites.front_shiny}
            alt={pokeView.name}
          />
        </div>
        <div className="flex gap-4">
          <div className="">
            Abilities
            {pokeView.abilities.map((ability) => (
              <div className="" key={Math.random() * 100000000000000}>
                <p className="mb-4 flex items-center h-10 w-[12rem] justify-center bg-neutral-800">
                  {ability.ability.name}
                </p>
              </div>
            ))}
          </div>
          <div className="">
            Moves
            {pokeView.moves.map((move) => (
              <div
                className="flex flex-col"
                key={Math.random() * 100000000000000}
              >
                <div className="mb-6 p-2 rounded-lg flex flex-col items-center w-[12rem] justify-center bg-neutral-800">
                  <p className="">Move Name: {move.move.name}</p>
                  <div>
                    Method:{" "}
                    {move.version_group_details?.map((move) => (
                      <div key={Math.random() * 100000000000000} className="">
                        {move.move_learn_method.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
