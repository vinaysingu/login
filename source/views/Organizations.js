enyo.kind({
  name: "Login.Organizations",
  tag: "section",
  id: "organizations",
  handlers: {
    ontap: "itemTapped"
  },
  components: [
    {name: "idLabel", content: "_chooseDatabase".loc(), classes: "login-label"},
    {kind: "Repeater", name: "list", onSetupItem: "setupOrganization", components: [
      {name: "item", classes: "organization-item"}]}
  ],
  setupOrganization: function (inSender, inEvent) {
    var o = XT.authController.getOrganizations();
    inEvent.item.$.item.setContent(o[inEvent.index].name);
    return true;
  },
  itemTapped: function (inSender, inEvent) {
    if (inEvent.originator.classes === "organization-item") {
      XT.authController.selectOrganization(inEvent.index);
    }
  }
});