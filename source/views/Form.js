enyo.kind({
  name: "Login.Form",
  id: "form-fields",
  handlers: {
    ontap: "tapped",
    onkeyup: "keyup"
  },
  create: function () {
    this.inherited(arguments);
    var id = XT.authController.getId();
    if (id) this.$.id.setValue(id);
  },
  components: [
		{name: "idLabel", content: "_username".loc(), classes: "login-label"},
    {name: "id", kind: "enyo.Input", placeholder: "_username".loc(), classes: "login-input"},
		{name: "passwordLabel", content: "_password".loc(), classes: "login-label"},
    {name: "password", kind: "enyo.Input", placeholder: "_password".loc(), type: "password", classes: "login-input"},
    {name: "loginButton", kind: "onyx.Button", classes: "login-button", content: "_login".loc()}
  ],
  tapped: function (inSender, inEvent) {
    if (inSender === true || inEvent.originator.name === "loginButton") {
      XT.authController.setId(this.$.id.getValue().toLowerCase());
      XT.authController.setPassword(this.$.password.getValue());
      XT.authController.authenticate();
    }
  },
  keyup: function (inSender, inEvent) {
    if (inEvent.which === 13) {
      this.tapped(true);
    }
  }
});