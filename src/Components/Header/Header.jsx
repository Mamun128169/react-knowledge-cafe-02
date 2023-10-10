import Profile from "../../assets/profile.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center mt-11 border-b-2 pb-5">
            <h1 className="text-4xl text-[#111] font-bold">Knowledge Cafe</h1>
            <img src= {Profile} alt="Profile-img" />
        </header>
    );
};

export default Header;