enyo.kind({
  name: "Login.Form",
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
    {name: "id", kind: "enyo.Input", classes: "login-input", placeholder: "_username".loc()},
    {name: "password", kind: "enyo.Input", classes: "login-input", placeholder: "_password".loc(), type: "password"},
    {name: "loginButton", kind: "enyo.Button", content: "_login".loc()}
  ],
  tapped: function (inSender, inEvent) {
    if (inSender === true || inEvent.originator.name === "loginButton") {
      XT.authController.setId(this.$.id.getValue());
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