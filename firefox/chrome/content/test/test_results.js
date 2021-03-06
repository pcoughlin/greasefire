/*
 * Copyright (C) 2008 by Steve Krulewitz <skrulx@gmail.com>
 * Licensed under GPLv2 or later, see file LICENSE in the xpi for details.
 */
const {classes: Cc, interfaces: Ci, utils: Cu} = Components;

Cu.import("resource://gre/modules/Services.jsm");

function runTest() {

  var gfs = Cc["@skrul.com/greasefire/service;1"]
              .getService(Ci.gfIGreasefireService);

  var results = gfs.search(
      Services.io.newURI("http://www.google.com", null, null));

  var params = Cc["@mozilla.org/embedcomp/dialogparam;1"]
                 .createInstance(Ci.nsIDialogParamBlock);
  var array = Cc["@mozilla.org/array;1"].createInstance(Ci.nsIMutableArray);
  array.appendElement(results, false);
  params.objects = array;

  Services.ww.openWindow(null,
                         "chrome://greasefire/content/results.xul",
                         "_blank",
                         "chrome,all,dialog=no",
                         params);

  return true;
}
