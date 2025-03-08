import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";


const DetailsPage = () => {
    const data = useLoaderData();
    console.log(data);
    
    
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <h1>Details page</h1>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;