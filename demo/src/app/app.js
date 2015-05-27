import 'bootstrap/css/bootstrap.css!';

export class App {

  configureRouter(config, router){

    config.title = 'Aurelia Dialog';
    config.map([
      { route: ['','home'],  moduleId: './home',      nav: true, title:'Home' },
      { route: 'demo',  moduleId: './demo',      nav: true, title:'Demo' }
    ]);

    this.router = router;
  }

}
