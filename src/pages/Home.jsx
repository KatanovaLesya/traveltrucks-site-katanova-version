import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <h1>TravelTrucks</h1>
        <p>Campers of your dreams</p>
        <Link to="/catalog">
          <button>View Now</button>
        </Link>
      </header>
    </div>
  );
};

export default Home;
