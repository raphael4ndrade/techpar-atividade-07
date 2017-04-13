let server_url = "http://127.0.0.1:3000";

function httpService($http) {
    this.save = (obj) => $http.post(server_url + "/save", obj);
    this.list = () => $http.get(server_url + "/list");
}

module.exports = httpService;