import { Link } from "react-router-dom";


const CampaignCard = ({campaign}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img 
    className="h-[200px]"
      src={campaign.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{campaign.title}</h2>
    <p>{campaign.description}</p>
    <div className="card-actions ">
      <Link to={`/detailsPage/${campaign._id}`} className="btn btn-neutral">See More</Link>
    </div>
  </div>
</div>
    );
};

export default CampaignCard;