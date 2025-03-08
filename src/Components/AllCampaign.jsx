import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import CampaignCard from "./CampaignCard";



const AllCampaign = () => {
    const campaigns = useLoaderData();

    return (
        <div className="">
            <Navbar></Navbar>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
            {
                campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
            }
            </div>
        </div>
    );
};

export default AllCampaign;