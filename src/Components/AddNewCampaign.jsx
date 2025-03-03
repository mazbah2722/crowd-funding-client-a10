import Navbar from "../Components/Navbar";


const AddNewCampaign = () => {
    return (
        <div>
            <section>
                    <Navbar></Navbar>
            </section>
            <h1 className="mb-6">Add New Campaign</h1>
            <form className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 gap-4 w-1/2">
                    <input type="text" placeholder="Image" className="input input-md" />
                    <input type="text" placeholder="Campaign title" className="input input-md" />
                    <select defaultValue="Pick a color" className="select">
                        <option disabled={true}>Campaign type</option>
                        <option> personal issue</option>
                        <option>startup</option>
                        <option>business</option>
                        <option>creative ideas</option>
                    </select>
                    <input type="text" placeholder="Campaign title" className="input input-md" />
                    <input type="text" placeholder="description" className="input input-md" />
                    <input type="text" placeholder="Minimum donation amount" className="input input-md" />
                    <input type="text" placeholder="Deadline" className="input input-md" />
                    <input type="text" placeholder="User Email" className="input input-md" />
                    <input  type="text" placeholder="User Name " className="input input-md" />
                    <input className="btn" type="submit" value="Add" />
                    
                </div>
            </form>
        </div>
    );
};

export default AddNewCampaign;