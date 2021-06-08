import {ENDPOINT, REQUEST_CONFIG} from '../../utils/constans/config_request'

class User {
    async getUsers() {
        try {
            const request = await fetch(`${ENDPOINT}/users`, REQUEST_CONFIG.get);
            const listUsers = await request.json();
            console.log("Users", listUsers);
            return listUsers;
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }
}

export default User;