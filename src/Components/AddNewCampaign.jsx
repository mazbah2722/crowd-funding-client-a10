
import Navbar from "../Components/Navbar";
import Swal from 'sweetalert2'


const AddNewCampaign = () => {
    const handleAdd=(event)=>{
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const amount = form.amount.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;
        const newAddCampaign = {image,title,type,description,amount,deadline,email,name}
        console.log(newAddCampaign);
        fetch('https://crowd-funding-server-a10.vercel.app/campaign',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newAddCampaign)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Campaign Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="">
            <section>
                    <Navbar></Navbar>
            </section>
           
            <form onSubmit={handleAdd} className="flex flex-col justify-center items-center">
                <div className=" w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                    <input name="image" type="text" placeholder="Image" className="input input-md" />
                    <input name="title" type="text" placeholder="Campaign title" className="input input-md" />
                    <select name="type" defaultValue="Type" className="select text-gray-500">
                        <option disabled={true}>Campaign type</option>
                        <option> Personal issue</option>
                        <option>Startup</option>
                        <option>Business</option>
                        <option>Creative ideas</option>
                    </select>
                    <input name="description" type="text" placeholder="Description" className="input input-md" />
                    <input name="amount" type="number" placeholder="Minimum donation amount" className="input input-md" />
                    <input name="deadline" type="date" placeholder="Deadline" className="input input-md" />
                    <input name="email" type="text" placeholder="User Email" className="input input-md" />
                    <input name="name"  type="text" placeholder="User Name " className="input input-md" />
                    
                    </div>
                    <input className="btn btn-neutral w-full mt-4" type="submit" value="Add" />
                    
                </div>
                
            </form>
        </div>
    );
};

export default AddNewCampaign;