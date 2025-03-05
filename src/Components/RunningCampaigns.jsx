

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  
    fetch("http://localhost:5000/campaign")
      .then((res) => res.json())
      .then((data) => {
      
        const runningCampaigns = data.filter(
          (campaign) => new Date(campaign.deadline) > new Date()
        );
        setCampaigns(runningCampaigns);
      })
      .catch((error) => console.error("Error fetching campaigns:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {campaigns.length > 0 ? (
        campaigns.slice(0, 6).map((campaign) => (
          <div key={campaign._id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={campaign.image} alt={campaign.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{campaign.title}</h2>
            <p className="text-gray-600">{campaign.description.slice(0, 80)}...</p>
            <p className="text-sm text-green-500">Deadline: {new Date(campaign.deadline).toDateString()}</p>
            <button
              onClick={() => navigate(`/campaign/${campaign._id}`)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              See More
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No running campaigns available.</p>
      )}
    </div>
  );
};

export default RunningCampaigns;
