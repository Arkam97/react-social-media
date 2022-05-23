import React from "react";
import Feed from "../Components/Feed/Feed";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import "./Home.scss";

export default function Home() {
  const userName = "Mohamed Husain Arkam";
  const Url =
    "https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.6435-9/42527724_944797415718089_4811613765348884480_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cPqXMMnL9A4AX9T4q7z&_nc_ht=scontent.fcmb11-1.fna&oh=00_AT-LOdXxG4JsJsDlgSiNFeEBSZDlD0woygeQDiFNZa9a7w&oe=62ABC734";

  return (
    <>
      <Header imageUrl={Url} userName={userName} />
      <div className="homeBody">
        <SideBar photoUrl={Url} username={userName} />
        <Feed photoUrl={Url} />
      </div>
    </>
  );
}
