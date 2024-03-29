import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <div>
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">Latest Services</h2>
      <p>Most recent services added by our errandos</p>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {topRowHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {bottomRowHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
     <div className="full-row">
     <div className="container">
         <div className="row">
             <div className="col-lg-4">
                 <h1 className="text-dark mb-0">Our mission is to redefine real estate for the customer's</h1>
             </div>
             <div className="col-lg-4">
                 <div className="py-2">
                     <p>Finderland is one of the world's leading property agents. Our experience spans the globe.</p>
                     <p>We have been advising on buying, selling and renting property for over 160 years, from country cottages to city centre offices, agricultural land to new-build developments.</p>
                 </div>
             </div>
             <div className="col-lg-3 d-flex justify-content-md-end">
                 <ul className="list-style-tick d-flex flex-column my-2">
                 <li><FontAwesomeIcon icon={faCheckCircle} /> Only pay when you publish</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Full featured event app</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Unlimited featured use</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> 24/7 supports</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Event analytics</li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
 </div>
    
  );
};

export default Home;
