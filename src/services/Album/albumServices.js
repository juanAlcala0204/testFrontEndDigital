import { ENDPOINT, REQUEST_CONFIG } from '../../utils/constans/config_request'

class Album {
    async getAlbums() {
        try {
            const request = await fetch(`${ENDPOINT}/albums`, REQUEST_CONFIG.get);
            const listAlbums = await request.json();
            console.log(listAlbums);
            return listAlbums;
        } catch (error) {
            console.log("Hubo un error" + error);
        }

    }
}

export default Album;