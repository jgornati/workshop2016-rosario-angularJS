export class ApiService {
    url = 'http://localhost:5000';

    constructor($http){
        this.http = $http;
    }

    getBands(){
        return this.http.get(`${this.url}/bands`)
            .then(response => response.data);
    }

    getBand(bandId){
        return this.http.get(`${this.url}/bands/${bandId}`)
            .then(response => response.data);
    }

    getArtists(bandId){
        return this.http.get(`${this.url}/bands/${bandId}/artists`)
            .then(response => response.data);
    }

    getAlbums(bandId){
        return this.http.get(`${this.url}/bands/${bandId}/albums`)
            .then(response => response.data);
    }

    // getAlbum(albumId)

    getTrack(trackId){
        
    }

    // getCommentsForTrack(trackId)

    // postCommentForTrack(postData) 

}
