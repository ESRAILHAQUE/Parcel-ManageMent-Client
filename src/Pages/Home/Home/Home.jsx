import { Helmet } from "react-helmet-async"
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import TopDeliveryMan from "../TopDeliveryMan/TopDeliveryMan";

function Home() {
  return (
    <div>
      <Helmet>
        <title>DelivTract | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <TopDeliveryMan></TopDeliveryMan>
    </div>
  );
}
export default Home