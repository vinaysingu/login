enyo.kind({
  name: "App",
  tag: "section",
  id: "login",
  components: [
    {kind: "Login.Header"},
    {kind: "Login.Main", name: "main"},
    {tag: "label", classes: "login-message-box", name: "messageBox"}
  ]
});