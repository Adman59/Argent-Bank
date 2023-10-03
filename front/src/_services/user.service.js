import accountinfo from "@/assets/api/accountinfo.json";

const getUser = (userId) => {
    return new Promise((resolve, reject) => {
        const user = accountinfo.find((user) => user.use === userId);
        if (user) {
            resolve(user);
        } else {
            reject(new Error("Utilisateur non trouvé"));
        }
    });
};

export const userService = {
    getUser,
};
