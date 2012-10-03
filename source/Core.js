
function main () {
  enyo.singleton({
    name: "XT.authController",
    kind: "XT.AuthenticationController",
    startupFunction: function () {
      XT.app = new App().renderInto(document.body);
    }
  });
}

(function () {

  var cookieString = "xtsessioncookie", xhrsession, xhrauthentication, xhrselection, hostname;
  xhrsession = new enyo.Ajax({url: "/session", method: "POST"});
  xhrauthentication = new enyo.Ajax({url: "authenticate", method: "POST"});
  xhrselection = new enyo.Ajax({url: "selection", method: "POST"});
  hostname = document.location.hostname;

  enyo.kind({
    name: "XT.AuthenticationController",
    kind: "enyo.Object",
    published: {
      cookie: null,
      startupFunction: null,
      id: null,
      username: null,
      password: null,
      organization: null,
      organizations: null
    },
    getCookie: function () {
      this._cookie = this._cookie? this._cookie: enyo.getCookie(cookieString);
      if (enyo.isString(this._cookie)) this._cookie = JSON.parse(this._cookie);
      this.setParams(this._cookie);
      return this._cookie;
    },
    setCookie: function (cookie, options) {
      var inProps = {
        secure: true,
        path: "/",
        domain: hostname === "localhost" ? "" : "." + hostname
      };

      if (options && options.delete) {
        inProps["Max-Age"] = 0;
      }

      enyo.setCookie(cookieString, JSON.stringify(cookie), inProps);
      this._cookie = null;
      this.getCookie();
    },
    deleteCookie: function () {
      this.setCookie({}, { delete: true });
    },
    setParams: function (cookie) {
      if (cookie) {
        if (cookie.id) this.setId(cookie.id);
        if (cookie.organizations) this.setOrganizations(cookie.organizations);
        if (cookie.username) this.setUsername(cookie.username);
        if (cookie.organization) this.setOrganization(cookie.organization);
      }
    },
    constructor: function () {
      this.inherited(arguments);
      this.init();
    },
    init: function () {
      var c = this.getCookie();
      if (c && !this.organization) {
        // awkward half-logged in state. Delete the cookie to start over.
        this.deleteCookie();
        return enyo.asyncMethod(this, this.start);
      } else if (!c) {
        return enyo.asyncMethod(this, this.start);
      }
      this.validate();
    },
    start: function () {
      var fn = this.getStartupFunction();
      if (fn && enyo.isFunction(fn)) fn();
    },
    validate: function () {
      var c = this.getCookie();
      xhrsession.go(JSON.stringify(c));
      xhrsession.response(enyo.bind(this, this.didValidate));
    },
    didValidate: function (n, res) {
      if (res && res.code && res.code === 1) {
        document.location = "https://" + hostname + "/client";
      } else enyo.asyncMethod(this, this.start);
    },
    authenticate: function () {
      var id = this.getId(), pass = this.getPassword();
      XT.app.$.messageBox.addRemoveClass("error", false);
      XT.app.$.messageBox.setContent("");
      xhrauthentication.go(JSON.stringify({id: id, password: pass}));
      xhrauthentication.response(enyo.bind(this, this.didAuthenticate));
    },
    didAuthenticate: function (n, res) {
      if (res.isError) {
        XT.app.$.messageBox.addRemoveClass("error", true);
        XT.app.$.messageBox.setContent(res.reason);
        return;
      }
      this.setCookie(res);
      XT.app.$.main.setDidAuthenticate(true);
    },
    selectOrganization: function (index) {
      var o = this.getOrganizations(), d = this.getCookie();
      d.selected = o[index].name;
      xhrselection.go(JSON.stringify(d));
      xhrselection.response(enyo.bind(this, this.didSelectOrganization));
    },
    didSelectOrganization: function (n, res) {
      // TODO: need to check for error case
      //console.log(res);
      this.setCookie(res);
      document.location = res.loc;
    }
  });

}());
