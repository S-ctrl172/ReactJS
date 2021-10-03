// Only just Output users data



import Card from "../UI/Card";
import styles from './UsersList.module.css';



const UsersList = (props) =>{

    return(

        <Card css={styles.users}>

            <ul>
                {/* users holds the array of Input */}
                {/* map()  array of users data into jsx */}

                { props.users.map( (user) => (
                    <li key={user.id}>
                        {/* How Output Looks */}
                        {user.name} ( {user.age} Years Old) 
                    </li> 
                        )
                    )
                }
            </ul>

        </Card>

    );

};

export default UsersList;




