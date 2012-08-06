
enyo.kind({
  name: "XV.LoginForm",
  classes: "xv-login-form onyx",
  create: function () {
    var c = enyo.getCookie("xtsessioncookie");
    this.inherited(arguments);
    if (!c) return;
    c = JSON.parse(c);
    this.$.id.setValue(c.id); 
  },
  send: function () {
    var credentials = this.getCredentials(), x;
    x = new enyo.Ajax({
      url: "authenticate",
      method: "POST"
    });
    x.go(JSON.stringify(credentials));
    x.response(this, "didReceiveResponse");
  },
  getCredentials: function () {
    return {
      id: this.$.id.getValue(),
      password: this.$.password.getValue()
    };
  },
  didReceiveResponse: function (ignore, response) {
    if (response.isError) {
      this.$.messageBox.addRemoveClass("error", true);
      this.$.messageBox.setContent(response.reason);
      return;
    }
    this.$.messageBox.addRemoveClass("error", false);
    this.$.messageBox.setContent("success!");
    app.setCookie(response);
    app.setSession(response);
    app.$.organizations.setOrganizations(response.organizations);
    app.setCurrentView("organizationWrapper");
  },
  components: [
    {name: "box", kind: "onyx.Groupbox", components: [
      {name: "header", kind: "onyx.GroupboxHeader", content: "_pleaseLogin".loc()},
      {kind: "onyx.InputDecorator", components: [
        {name: "id", kind: "onyx.Input", placeholder: "_id".loc()}]},
      {kind: "onyx.InputDecorator", components: [
        {name: "password", kind: "onyx.Input", type: "password", placeholder: "_password".loc()}]},
      {kind: "onyx.Button", content: "Login", ontap: "send"}]},
      {name: "messageBox", classes: "xv-message-box"}
  ]
});