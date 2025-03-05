import Navbar from "./Navbar";

const MyCampaign = () => {
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Goal Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;