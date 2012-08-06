$(document).ready(function () {
  var c = enyo.getCookie("xtsessioncookie"), validate, done;
  done = function () {
    new App().renderInto(document.body);
  }
  validate = function (session) {
    var h, x = new enyo.Ajax({
      url: "/session",
      method: "POST"
    });
    x.go(session);
    x.response(function (ignore, res) {
      if (res && res.code && res.code === 1) {
        h = document.location.hostname;
        document.location = "http://%@/client".f(h);
      } else done();
    });
  }
  if (!c) done();
  else validate(c);
});