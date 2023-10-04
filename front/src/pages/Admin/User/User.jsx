import { useEffect, useState } from "react";
import Account from "@/components/Account/Account";
import UserIntro from "@/components/UserIntro/UserIntro";
import { userService } from "@/_services/user.service";
import { useSelector } from 'react-redux';

const User = () => {
    const [userData, setUserData] = useState(null);
    const userEmail = useSelector((state) => state.user.email);

    const [userLogged, setUserLogged] = useState(null);

    useEffect(() => {

        if (userEmail === "tony@stark.com") {
            setUserLogged("user01");
        } else if (userEmail === "steve@rogers.com") {
            setUserLogged("user02");
        }

        if (userLogged) {
            userService.getUser(userLogged)
                .then((res) => setUserData(res))
                .catch((err) => console.log(err));
        }
    }, [userEmail, userLogged]);

    return (
        <>
            <UserIntro />
            {userData && (
                <div key={userData.userId}>
                    {userData.account.map((account) => (
                        <Account
                            key={account.id}
                            title={account.titleAccount}
                            total={account.totalAccount}
                            type={account.typeOfAccount}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default User;
