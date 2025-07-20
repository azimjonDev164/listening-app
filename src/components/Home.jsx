import { tests } from "../data/db";

const Home = () => {
  return (
    <div className="container px-3">
      <h1 className="text-2xl">{JSON.stringify(tests)}</h1>
    </div>
  );
};

export default Home;
