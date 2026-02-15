Youtube: https://www.youtube.com/watch?v=QjaNv7s1gW0

install: Node 20 LTS

1. Creating Project: E:\Angular\Angular_start_Project>ng new Base-setup
2. moving to app directory
3. run command: E:\Angular\Angular_start_Project\Base-setup>ng serve
4. Creating Component: 
    1. create new folder in component folder
    2. right click open the terminal then execute following command:
        ng create component roles
        ng g c designation
5. Integrating bootstrap with our application
    5.1. Go to npmjs.com--> search bootstrap // just like pom.xml
    5.2. open new terminal --> npm i bootstrap // After successful installation it will added in package.json automatically.
    5.3. But it need to register in application for that use angular.json or config file under styles section u need to mention the path.
    5.4  Rerun is required if changes is there in angular.json

Data Binding:
6. Interpolation and property binding and two way binding
 6.1: Two-binding : importing the module directive in roles: FormsModule
 6.2. we can use this in input elememt only, for display we can use interpolation and property binding
 6.3. Creating a function inside component.
 6.4. Interpolation--> {{}}, property binding--> [], two-way data binding-->[(ngModel)], eventBinding.


 Directives:
 1.Component->Directive with template[Angular replaces it with that component’s template.]
 2.Structural->	Changes DOM layout
 3.Attribute->Changes appearance/behavior
        2.Structural Directive->Changes DOM layout it will start with * to use we need to import CommonModule
            before 18 *ngIf---> @if --*ngIf id replaced to @if

 Calling API:
  we need to use Httpclient in app.config.ts--> import { provideHttpClient } from '@angular/common/http'; in provideHttpClient() in providers:
  In an components we need to ngOnInit is a lifecycle hook in Angular.-It runs once after Angular initializes the component.

  while running the api you may face cors error
  so change the port and IP : ng serve --port 4209

  *ngFor -- to iterate some elemet

we should not call the api in component class nnto a best practice. for that we have separate folder
for that we will make services -- ng g s service_name


Route:

<router-outlet> is a placeholder directive from Angular Router.
It tells Angular:
“Render the component here that matches the current route.”
Without it, routing works internally — but nothing displays.

Spinner/loader use @if and @else

Environment variable(Same IP and Port Instead in one file):
 1. open app terminal : ng g environments


Crud:
design the UI first
then create class and field then Class(for post make class model)-> component--> in service(URL)

Validation: mention form check client.component.html line 30

Pipe:

Constants




