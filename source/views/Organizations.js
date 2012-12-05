enyo.kind({
  name: "Login.Organizations",
  tag: "section",
  id: "organizations",
  handlers: {
    ontap: "itemTapped"
  },
  components: [
    {name: "idLabel", content: "_chooseDatabase".loc(), classes: "login-label"},
    {kind: "List", name: "list", onSetupItem: "setupOrganization", components: [
      {name: "item", classes: "organization-item"}], countChanged: function () {this.reset()}}
  ],
  setupOrganization: function (inSender, inEvent) {
    var o = XT.authController.getOrganizations();
    this.$.item.setContent(o[inEvent.index].name);
  },
  itemTapped: function (inSender, inEvent) {
    if (inEvent.originator.classes === "organization-item") {
      XT.authController.selectOrganization(inEvent.index);
    }
  }
});