import Account from "../../../components/Account/Account";
import UserIntro from "../../../components/UserIntro/UserIntro"
import dataaccount from "../../../assets/api/accountinfo.json";

const User = () => {
    return (
        <>
        <UserIntro />
        {
            dataaccount.map((value) =>
            <Account key={value.id} title={value.titleAccount} total={value.totalAccount} type={value.typeOfAccount} />
            )
        }
        </>
    );
};

export default User;