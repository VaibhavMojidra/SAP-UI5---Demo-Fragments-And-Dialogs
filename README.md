# SAP UI5 Demo Fragments And Dialogs

Fragments are light-weight UI parts (UI subtrees) which can be reused but do not have any controller. This means, whenever you want to define a certain part of your UI to be reusable across multiple views, or when you want to exchange some parts of a view against one another under certain circumstances (different user roles, edit mode vs read-only mode), a fragment is a good candidate, especially where no additional controller logic is required.

A fragment can consist of 1 to n controls. At runtime, fragments placed in a view behave similar to "normal" view content, which means controls inside the fragment will just be included into the view’s DOM when rendered. There are of course controls that are not designed to become part of a view, for example, dialogs. But even for these controls, fragments can be particularly useful, as you will see in a minute.

The code you've shared is a fragment definition in SAPUI5, which is a framework developed by SAP for creating web applications. Here's a breakdown of the code:

### Code Explaination

Refer to [/webapp/view/HelloDialog.fragment.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Fragments-And-Dialogs/blob/master/webapp/view/HelloDialog.fragment.xml "HelloDialog.fragment.xml")

`<core:FragmentDefinition>`: This is the root element of the fragment. It defines a reusable piece of UI.

`xmlns="sap.m"` and `xmlns:core="sap.ui.core"`: These are XML namespace declarations. They define the XML namespaces for the `sap.m` and `sap.ui.core` libraries, respectively.

`<Dialog id="helloDialog" title="Hello"/>`: This is a Dialog control from the `sap.m` library. It has an ID of "helloDialog" and a title of "Hello". This dialog can be reused in different parts of your application.

The code you've shared is a SAPUI5 controller definition. Here's a breakdown of the code:

Refer to [/webapp/controller/App.controller.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Fragments-And-Dialogs/blob/master/webapp/controller/App.controller.js "App.controller.js")

`sap.ui.define`: This is the SAPUI5 module loader. It loads the specified dependencies and executes the callback function once they're loaded.

`["sap/ui/core/mvc/Controller"]`: This is an array of dependencies. In this case, it's loading the `Controller` module from `sap/ui/core/mvc`.

`function(Controller) {...}`: This is the callback function that's executed once the dependencies are loaded. The loaded modules are passed as arguments to this function.

`Controller.extend("com.vaibhavmojidra.fragmentsanddialogsdemo.controller.App", {...})`: This creates a new controller that extends the base `Controller`. The first argument is the name of the new controller, and the second argument is an object that defines the methods for this controller.

`onClick:function(){...}`: This is a method of the controller. It's executed when the `onClick` event is triggered.

`this.pDialog ??= this.loadFragment({...})`: This line loads a fragment and assigns it to `this.pDialog` if `this.pDialog` is not already defined (`??=` is a logical nullish assignment operator in JavaScript).

`this.pDialog.then((oDialog) => oDialog.open())`: This line opens the dialog once it's loaded. The `then` method is used because `loadFragment` returns a promise.

---

[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Fragments-And-Dialogs/master/screenshots/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 2.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Fragments-And-Dialogs/master/screenshots/2.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)