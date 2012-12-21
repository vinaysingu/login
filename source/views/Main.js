enyo.kind({
  name: "Login.Main",
  tag: "section",
  id: "main",
  kind: "Panels",
  draggable: false,
  published: {
    didAuthenticate: false
  },
  components: [
    {kind: "Login.Form"},
    {kind: "Login.Organizations", name: "organizations"}
  ],
  didAuthenticateChanged: function () {
    this.setIndex(1);
    this.$.organizations.$.list.setCount(XT.authController.getOrganizations().length);
  }
});