import {useState} from "react";
import UsersList from "../../components/UsersList";
import DefaultButton from "../../components/DefaultButton";
import UsersInfo from "../../components/UsersInfo";
import AddFile from "../../components/AddFile";
import {addButton, cancelButton} from "../../helpers/constants";


/** Home page **/
function Home() {
    const [showInfo, setShowInfo] = useState(true)
    const changeButton = (e) => {
        e.preventDefault()
        setShowInfo(!showInfo)
    }
    return (
        <div className="home">
            <div className="wrap">
                <div>
                    <UsersList dissabled={!showInfo}/>
                    <DefaultButton
                        title={showInfo ? addButton.title : cancelButton.title}
                        click={changeButton}
                    />
                </div>
                <>{
                    showInfo
                        ? <UsersInfo/>
                        : <AddFile/>
                }</>
            </div>
        </div>
    );
}
export default Home;
