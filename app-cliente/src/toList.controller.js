let httpService = require('./http.service');

function toListController(httpService) {
    this.list = () => {
        httpService.list()
            .then((ret) => this.listAll = ret.data);
    }

    this.list();
}

module.exports = {
    controller : toListController,
    templateUrl : "templates/list.html",
    controllerAs : "ctrl"
};