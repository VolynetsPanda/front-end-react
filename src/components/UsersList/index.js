import UsersItem from "../UsersItem";

function UsersList(
    {
        dissabled = false,
    }
) {
    return (
         <ul>
             <UsersItem
                 dissabled={dissabled}
             />
          </ul>
    );
}
export default UsersList;
