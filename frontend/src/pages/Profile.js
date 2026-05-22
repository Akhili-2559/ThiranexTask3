function Profile(){

const user =
JSON.parse(
localStorage.getItem("user")
);

return(

<div className="profile-page">

<div className="profile-card">

<img

src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

alt=""

className="profile-img"

/>

<h1>

{user?.name}

</h1>

<p>

{user?.email}

</p>

<button

onClick={()=>{

localStorage.clear();

window.location.href =
"/login";

}}

>

Logout

</button>

</div>

</div>

);

}

export default Profile;