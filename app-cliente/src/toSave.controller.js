let httpService = require('./http.service');

function toSaveController(httpService) {
    this.obj = {}

    this.save = () => {
        httpService.save(this.obj)
            .then((ret) => {
                this.obj = {};
            });
    };
}

module.exports = {
    controller : toSaveController,
    templateurl : "templates/save.html",
    controllerAs : "ctrl"
};