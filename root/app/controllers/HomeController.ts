/// <reference path="../../app.ts" />

class HomeController extends TF.Controller {

    index() {
        this.response.render('index', { layout: 'layout' });
    }

}

app.addController(HomeController);