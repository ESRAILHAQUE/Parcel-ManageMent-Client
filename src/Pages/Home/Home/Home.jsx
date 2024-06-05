import { Helmet } from "react-helmet-async"
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

function Home() {
  return (
    <div>
      <Helmet>
        <title>DelivTract | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
    </div>
  );
}
export default Home