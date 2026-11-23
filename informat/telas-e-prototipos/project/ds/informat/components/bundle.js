/* @ds-bundle: {"format":4,"namespace":"Informat","components":[{"name":"Icon"},{"name":"Logo"},{"name":"Button"},{"name":"TextField"},{"name":"Select"},{"name":"ChoiceCard"},{"name":"ServiceCard"},{"name":"StatusBadge"},{"name":"Alert"},{"name":"Dialog"},{"name":"NavBar"},{"name":"ServiceTimeline"},{"name":"QuoteSummary"},{"name":"BackupAgreement"},{"name":"Checklist"},{"name":"UploadField"},{"name":"EmptyState"},{"name":"Skeleton"},{"name":"Toast"},{"name":"OsHeader"},{"name":"SiteFooter"}]} */
/* Informat Design System · componentes React 18 (window.React), namespace window.Informat */
(function () {
  "use strict";
  var R = window.React;
  var h = R.createElement;

  // ------------------------------------------------------------ helpers
  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) { if (arguments[i]) out.push(arguments[i]); }
    return out.join(" ");
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k];
    }
    return o;
  }
  function useControlled(value, defaultValue, onChange) {
    var st = R.useState(defaultValue);
    var isCtl = value !== undefined;
    var cur = isCtl ? value : st[0];
    function set(v, ev) {
      if (!isCtl) st[1](v);
      if (onChange) onChange(v, ev);
    }
    return [cur, set];
  }
  function useUid(prefix, given) {
    var id = R.useId().replace(/:/g, "");
    return given || (prefix + "-" + id);
  }
  function pad2(n) { return n < 10 ? "0" + n : String(n); }

  var ICONS = {"monitor":["M4.5 4h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-9a1.5 1.5 0 0 1 1.5 -1.5Z","M12 16L12 20","M8 20L16 20"],"laptop":["M6 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1Z","M2.5 19L21.5 19"],"hard-drive":["M6 2.5h12a2 2 0 0 1 2 2v15a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-15a2 2 0 0 1 2 -2Z","M7.5 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0","M12 10h.01","M12.5 10.5L16 15","M7 18.5h.01","M17 18.5h.01"],"wrench":["M11.38 10.36L4.5 17.23A1.6 1.6 0 0 0 6.77 19.5L13.64 12.62A4.2 4.2 0 1 0 19.13 7.13L16.67 9.6L14.4 7.33L16.87 4.87A4.2 4.2 0 1 0 11.38 10.36"],"terminal":["M4.5 4h15a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-13a1.5 1.5 0 0 1 1.5 -1.5Z","M7 9L10 12L7 15","M12 15L17 15"],"server":["M4.5 3.5h15a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-4a1.5 1.5 0 0 1 1.5 -1.5Z","M4.5 13.5h15a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-4a1.5 1.5 0 0 1 1.5 -1.5Z","M7 7h.01","M7 17h.01","M11 7L17 7","M11 17L17 17"],"cpu":["M7.5 6h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1 -1.5 1.5h-9a1.5 1.5 0 0 1 -1.5 -1.5v-9a1.5 1.5 0 0 1 1.5 -1.5Z","M10 9.5h4a0.5 0.5 0 0 1 0.5 0.5v4a0.5 0.5 0 0 1 -0.5 0.5h-4a0.5 0.5 0 0 1 -0.5 -0.5v-4a0.5 0.5 0 0 1 0.5 -0.5Z","M9.5 2.5L9.5 6","M14.5 2.5L14.5 6","M9.5 18L9.5 21.5","M14.5 18L14.5 21.5","M2.5 9.5L6 9.5","M2.5 14.5L6 14.5","M18 9.5L21.5 9.5","M18 14.5L21.5 14.5"],"upload":["M12 15L12 4","M7.5 8.5L12 4L16.5 8.5","M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"],"camera":["M3 8.5A1.5 1.5 0 0 1 4.5 7h3l1.5-2.5h6L16.5 7h3A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z","M8.5 12.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"],"image":["M4.5 4h15a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-13a1.5 1.5 0 0 1 1.5 -1.5Z","M6.75 9.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0 -3.5 0","M20.5 15L16 10.5L5.5 20"],"clock":["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0","M12 7L12 12L15.5 14"],"calendar":["M5 5h14a1.5 1.5 0 0 1 1.5 1.5v12.5a1.5 1.5 0 0 1 -1.5 1.5h-14a1.5 1.5 0 0 1 -1.5 -1.5v-12.5a1.5 1.5 0 0 1 1.5 -1.5Z","M3.5 10L20.5 10","M8 3L8 7","M16 3L16 7"],"map-pin":["M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11Z","M9.75 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0 -4.5 0"],"video":["M4.5 6h9.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1 -1.5 1.5h-9.5a1.5 1.5 0 0 1 -1.5 -1.5v-9a1.5 1.5 0 0 1 1.5 -1.5Z","M15.5 10.5L21 7.5L21 16.5L15.5 13.5Z"],"home":["M3.5 10.5L12 3.5L20.5 10.5","M5.5 9v11h13V9","M10 20v-5h4v5"],"check":["M5 12.5L9.5 17L19 7.5"],"check-circle":["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0","M8 12.5L11 15.5L16.5 9.5"],"alert-triangle":["M12 3.5L21.5 20L2.5 20Z","M12 9.5L12 14","M12 17h.01"],"x":["M6 6L18 18","M18 6L6 18"],"x-circle":["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0","M9 9L15 15","M15 9L9 15"],"minus-circle":["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0","M8 12L16 12"],"chevron-down":["M6 9L12 15L18 9"],"chevron-right":["M9 6L15 12L9 18"],"chevron-left":["M15 6L9 12L15 18"],"arrow-right":["M4.5 12L19 12","M13 6L19 12L13 18"],"plus":["M12 5L12 19","M5 12L19 12"],"menu":["M4 7L20 7","M4 12L20 12","M4 17L20 17"],"info":["M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0","M12 11L12 16.5","M12 7.75h.01"],"shield-data":["M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6Z","M8.75 12L11 14.25L15.5 9.75"],"file-text":["M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8Z","M14 3v5h5","M8.5 13L15.5 13","M8.5 16.5L13.5 16.5"],"message":["M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v10a1.5 1.5 0 0 1-1.5 1.5H9l-5 4Z","M8 9L16 9","M8 12.5L13 12.5"],"phone":["M8.5 2.5h7a2 2 0 0 1 2 2v15a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-15a2 2 0 0 1 2 -2Z","M12 18h.01"],"mail":["M4.5 5h15a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5 -1.5v-11a1.5 1.5 0 0 1 1.5 -1.5Z","M3.5 6L12 13L20.5 6"],"user":["M8 8a4 4 0 1 0 8 0a4 4 0 1 0 -8 0","M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5"],"log-in":["M14 4h4.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H14","M3.5 12L14.5 12","M10.5 8L14.5 12L10.5 16"],"search":["M4 10.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0","M15.25 15.25L20.5 20.5"],"hourglass":["M6.5 3L17.5 3","M6.5 21L17.5 21","M7.5 3v3.2c0 1.2.6 2.3 1.6 3L12 12l-2.9 2.8a3.8 3.8 0 0 0-1.6 3V21","M16.5 3v3.2c0 1.2-.6 2.3-1.6 3L12 12l2.9 2.8c1 .7 1.6 1.8 1.6 3V21"],"package":["M3.5 7.5L12 3L20.5 7.5L20.5 16.5L12 21L3.5 16.5Z","M3.5 7.5L12 12L20.5 7.5","M12 12L12 21"]};
  var LOGO = {"wordmark":{"w":239.22,"h":48.24,"color":[["ink","M6.42 47.4V25.08H1.26V17.64H16.38V47.4ZM21.3 47.4V17.64H30.12L31.2 21.48Q31.86 20.46 33.15 19.35Q34.44 18.24 36.3 17.49Q38.16 16.74 40.38 16.74Q44.04 16.74 46.26 18.06Q48.48 19.38 49.5 21.99Q50.52 24.6 50.52 28.38V47.4H40.62V30.42Q40.62 28.32 40.17 26.97Q39.72 25.62 38.79 24.96Q37.86 24.3 36.36 24.3Q33.6 24.3 32.4 26.34Q31.2 28.38 31.2 32.28V47.4ZM57.54 47.4V25.14H52.62V17.64H57.54V13.56Q57.54 9.9 58.83 7.92Q60.12 5.94 62.82 5.13Q65.52 4.32 69.66 4.32H73.98V12.06H71.58Q69.06 12.06 68.25 12.51Q67.44 12.96 67.44 14.58V17.64H73.98V25.14H67.44V47.4ZM90.48 48.12Q87.36 48.12 84.48 47.16Q81.6 46.2 79.32 44.25Q77.04 42.3 75.75 39.33Q74.46 36.36 74.46 32.34Q74.46 28.32 75.75 25.38Q77.04 22.44 79.32 20.52Q81.6 18.6 84.48 17.67Q87.36 16.74 90.48 16.74Q93.66 16.74 96.51 17.67Q99.36 18.6 101.64 20.52Q103.92 22.44 105.21 25.38Q106.5 28.32 106.5 32.34Q106.5 36.36 105.21 39.33Q103.92 42.3 101.64 44.25Q99.36 46.2 96.51 47.16Q93.66 48.12 90.48 48.12ZM90.48 40.56Q92.28 40.56 93.6 39.63Q94.92 38.7 95.67 36.87Q96.42 35.04 96.42 32.34Q96.42 29.58 95.64 27.81Q94.86 26.04 93.54 25.17Q92.22 24.3 90.48 24.3Q88.8 24.3 87.45 25.17Q86.1 26.04 85.32 27.81Q84.54 29.58 84.54 32.34Q84.54 35.04 85.29 36.87Q86.04 38.7 87.39 39.63Q88.74 40.56 90.48 40.56ZM109.92 47.4V17.64H117.78L119.4 23.1Q120.24 20.58 121.86 19.14Q123.48 17.7 125.58 17.13Q127.68 16.56 129.9 16.74V26.58Q127.02 26.1 124.74 26.61Q122.46 27.12 121.14 28.77Q119.82 30.42 119.82 33.42V47.4ZM133.56 47.4V17.64H142.38L143.46 21.48Q144.12 20.4 145.38 19.32Q146.64 18.24 148.44 17.49Q150.24 16.74 152.46 16.74Q156.06 16.74 158.16 17.97Q160.26 19.2 161.28 21.66Q163.02 19.2 165.72 17.97Q168.42 16.74 171.54 16.74Q175.44 16.74 177.63 18.18Q179.82 19.62 180.72 22.44Q181.62 25.26 181.62 29.4V47.4H171.72V31.86Q171.72 29.76 171.51 28.05Q171.3 26.34 170.43 25.32Q169.56 24.3 167.46 24.3Q164.76 24.3 163.65 26.16Q162.54 28.02 162.54 31.74V47.4H152.64V31.86Q152.64 29.76 152.46 28.05Q152.28 26.34 151.44 25.32Q150.6 24.3 148.56 24.3Q146.7 24.3 145.59 25.2Q144.48 26.1 143.97 27.81Q143.46 29.52 143.46 31.98V47.4ZM194.88 48.12Q191.82 48.12 189.42 47.04Q187.02 45.96 185.67 43.98Q184.32 42 184.32 39.36Q184.32 35.76 186.75 33.51Q189.18 31.26 193.65 30.06Q198.12 28.86 204.24 28.56V27.72Q204.24 25.32 202.92 24.36Q201.6 23.4 199.32 23.4Q197.64 23.4 196.26 24.27Q194.88 25.14 194.4 26.64L186 23.76Q187.5 20.82 191.04 18.78Q194.58 16.74 199.86 16.74Q206.46 16.74 210.12 19.59Q213.78 22.44 213.78 28.68V36.3Q213.78 38.4 213.9 40.53Q214.02 42.66 214.26 44.46Q214.5 46.26 214.8 47.4H205.5L204.48 43.86Q202.86 46.32 200.37 47.22Q197.88 48.12 194.88 48.12ZM198.36 41.46Q200.16 41.46 201.48 40.92Q202.8 40.38 203.52 39Q204.24 37.62 204.24 35.16V34.38Q198.84 34.68 196.77 35.79Q194.7 36.9 194.7 38.52Q194.7 39.84 195.75 40.65Q196.8 41.46 198.36 41.46ZM230.52 47.4Q226.68 47.4 224.4 46.74Q222.12 46.08 221.13 44.25Q220.14 42.42 220.14 38.82V25.14H215.22V17.64H220.14V10.2H230.04V17.64H236.52V25.14H230.04V36.12Q230.04 38.16 230.91 38.79Q231.78 39.42 234 39.42H236.52V47.4Z",0],["via","M4.62 7.14a6.24 6.24 0 1 1 12.48 0a6.24 6.24 0 1 1 -12.48 0ZM7.98 7.14a2.88 2.88 0 1 1 5.76 0a2.88 2.88 0 1 1 -5.76 0Z",1]],"mono":[["ink","M6.42 47.4V25.08H1.26V17.64H16.38V47.4ZM21.3 47.4V17.64H30.12L31.2 21.48Q31.86 20.46 33.15 19.35Q34.44 18.24 36.3 17.49Q38.16 16.74 40.38 16.74Q44.04 16.74 46.26 18.06Q48.48 19.38 49.5 21.99Q50.52 24.6 50.52 28.38V47.4H40.62V30.42Q40.62 28.32 40.17 26.97Q39.72 25.62 38.79 24.96Q37.86 24.3 36.36 24.3Q33.6 24.3 32.4 26.34Q31.2 28.38 31.2 32.28V47.4ZM57.54 47.4V25.14H52.62V17.64H57.54V13.56Q57.54 9.9 58.83 7.92Q60.12 5.94 62.82 5.13Q65.52 4.32 69.66 4.32H73.98V12.06H71.58Q69.06 12.06 68.25 12.51Q67.44 12.96 67.44 14.58V17.64H73.98V25.14H67.44V47.4ZM90.48 48.12Q87.36 48.12 84.48 47.16Q81.6 46.2 79.32 44.25Q77.04 42.3 75.75 39.33Q74.46 36.36 74.46 32.34Q74.46 28.32 75.75 25.38Q77.04 22.44 79.32 20.52Q81.6 18.6 84.48 17.67Q87.36 16.74 90.48 16.74Q93.66 16.74 96.51 17.67Q99.36 18.6 101.64 20.52Q103.92 22.44 105.21 25.38Q106.5 28.32 106.5 32.34Q106.5 36.36 105.21 39.33Q103.92 42.3 101.64 44.25Q99.36 46.2 96.51 47.16Q93.66 48.12 90.48 48.12ZM90.48 40.56Q92.28 40.56 93.6 39.63Q94.92 38.7 95.67 36.87Q96.42 35.04 96.42 32.34Q96.42 29.58 95.64 27.81Q94.86 26.04 93.54 25.17Q92.22 24.3 90.48 24.3Q88.8 24.3 87.45 25.17Q86.1 26.04 85.32 27.81Q84.54 29.58 84.54 32.34Q84.54 35.04 85.29 36.87Q86.04 38.7 87.39 39.63Q88.74 40.56 90.48 40.56ZM109.92 47.4V17.64H117.78L119.4 23.1Q120.24 20.58 121.86 19.14Q123.48 17.7 125.58 17.13Q127.68 16.56 129.9 16.74V26.58Q127.02 26.1 124.74 26.61Q122.46 27.12 121.14 28.77Q119.82 30.42 119.82 33.42V47.4ZM133.56 47.4V17.64H142.38L143.46 21.48Q144.12 20.4 145.38 19.32Q146.64 18.24 148.44 17.49Q150.24 16.74 152.46 16.74Q156.06 16.74 158.16 17.97Q160.26 19.2 161.28 21.66Q163.02 19.2 165.72 17.97Q168.42 16.74 171.54 16.74Q175.44 16.74 177.63 18.18Q179.82 19.62 180.72 22.44Q181.62 25.26 181.62 29.4V47.4H171.72V31.86Q171.72 29.76 171.51 28.05Q171.3 26.34 170.43 25.32Q169.56 24.3 167.46 24.3Q164.76 24.3 163.65 26.16Q162.54 28.02 162.54 31.74V47.4H152.64V31.86Q152.64 29.76 152.46 28.05Q152.28 26.34 151.44 25.32Q150.6 24.3 148.56 24.3Q146.7 24.3 145.59 25.2Q144.48 26.1 143.97 27.81Q143.46 29.52 143.46 31.98V47.4ZM194.88 48.12Q191.82 48.12 189.42 47.04Q187.02 45.96 185.67 43.98Q184.32 42 184.32 39.36Q184.32 35.76 186.75 33.51Q189.18 31.26 193.65 30.06Q198.12 28.86 204.24 28.56V27.72Q204.24 25.32 202.92 24.36Q201.6 23.4 199.32 23.4Q197.64 23.4 196.26 24.27Q194.88 25.14 194.4 26.64L186 23.76Q187.5 20.82 191.04 18.78Q194.58 16.74 199.86 16.74Q206.46 16.74 210.12 19.59Q213.78 22.44 213.78 28.68V36.3Q213.78 38.4 213.9 40.53Q214.02 42.66 214.26 44.46Q214.5 46.26 214.8 47.4H205.5L204.48 43.86Q202.86 46.32 200.37 47.22Q197.88 48.12 194.88 48.12ZM198.36 41.46Q200.16 41.46 201.48 40.92Q202.8 40.38 203.52 39Q204.24 37.62 204.24 35.16V34.38Q198.84 34.68 196.77 35.79Q194.7 36.9 194.7 38.52Q194.7 39.84 195.75 40.65Q196.8 41.46 198.36 41.46ZM230.52 47.4Q226.68 47.4 224.4 46.74Q222.12 46.08 221.13 44.25Q220.14 42.42 220.14 38.82V25.14H215.22V17.64H220.14V10.2H230.04V17.64H236.52V25.14H230.04V36.12Q230.04 38.16 230.91 38.79Q231.78 39.42 234 39.42H236.52V47.4Z",0],["ink","M4.62 7.14a6.24 6.24 0 1 1 12.48 0a6.24 6.24 0 1 1 -12.48 0ZM7.98 7.14a2.88 2.88 0 1 1 5.76 0a2.88 2.88 0 1 1 -5.76 0Z",1]]},"symbol":{"w":48,"h":48,"color":[["board","M12 0h24a12 12 0 0 1 12 12v24a12 12 0 0 1 -12 12h-24a12 12 0 0 1 -12 -12v-24a12 12 0 0 1 12 -12Z",0],["stem","M22.5 41L22.5 25L18.5 25L18.5 20L29.5 20L29.5 41Z",0],["symvia","M21 12a5 5 0 1 1 10 0a5 5 0 1 1 -10 0ZM23.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 1 1 -4.5 0Z",1]],"mono":[["ink","M12 0h24a12 12 0 0 1 12 12v24a12 12 0 0 1 -12 12h-24a12 12 0 0 1 -12 -12v-24a12 12 0 0 1 12 -12ZM22.5 41L22.5 25L18.5 25L18.5 20L29.5 20L29.5 41ZM21 12a5 5 0 1 1 10 0a5 5 0 1 1 -10 0ZM23.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 1 1 -4.5 0Z",1]]},"horizontal":{"w":300.85,"h":47.28,"color":[["board","M11.82 0h23.64a11.82 11.82 0 0 1 11.82 11.82v23.64a11.82 11.82 0 0 1 -11.82 11.82h-23.64a11.82 11.82 0 0 1 -11.82 -11.82v-23.64a11.82 11.82 0 0 1 11.82 -11.82Z",0],["stem","M22.16 40.38L22.16 24.62L18.22 24.62L18.22 19.7L29.05 19.7L29.05 40.38Z",0],["symvia","M20.68 11.82a4.92 4.92 0 1 1 9.85 0a4.92 4.92 0 1 1 -9.85 0ZM23.39 11.82a2.22 2.22 0 1 1 4.43 0a2.22 2.22 0 1 1 -4.43 0Z",1],["ink","M68.05 46.92V24.6H62.89V17.16H78.01V46.92ZM82.93 46.92V17.16H91.75L92.83 21Q93.49 19.98 94.78 18.87Q96.07 17.76 97.93 17.01Q99.79 16.26 102.01 16.26Q105.67 16.26 107.89 17.58Q110.11 18.9 111.13 21.51Q112.15 24.12 112.15 27.9V46.92H102.25V29.94Q102.25 27.84 101.8 26.49Q101.35 25.14 100.42 24.48Q99.49 23.82 97.99 23.82Q95.23 23.82 94.03 25.86Q92.83 27.9 92.83 31.8V46.92ZM119.17 46.92V24.66H114.25V17.16H119.17V13.08Q119.17 9.42 120.46 7.44Q121.75 5.46 124.45 4.65Q127.15 3.84 131.29 3.84H135.61V11.58H133.21Q130.69 11.58 129.88 12.03Q129.07 12.48 129.07 14.1V17.16H135.61V24.66H129.07V46.92ZM152.11 47.64Q148.99 47.64 146.11 46.68Q143.23 45.72 140.95 43.77Q138.67 41.82 137.38 38.85Q136.09 35.88 136.09 31.86Q136.09 27.84 137.38 24.9Q138.67 21.96 140.95 20.04Q143.23 18.12 146.11 17.19Q148.99 16.26 152.11 16.26Q155.29 16.26 158.14 17.19Q160.99 18.12 163.27 20.04Q165.55 21.96 166.84 24.9Q168.13 27.84 168.13 31.86Q168.13 35.88 166.84 38.85Q165.55 41.82 163.27 43.77Q160.99 45.72 158.14 46.68Q155.29 47.64 152.11 47.64ZM152.11 40.08Q153.91 40.08 155.23 39.15Q156.55 38.22 157.3 36.39Q158.05 34.56 158.05 31.86Q158.05 29.1 157.27 27.33Q156.49 25.56 155.17 24.69Q153.85 23.82 152.11 23.82Q150.43 23.82 149.08 24.69Q147.73 25.56 146.95 27.33Q146.17 29.1 146.17 31.86Q146.17 34.56 146.92 36.39Q147.67 38.22 149.02 39.15Q150.37 40.08 152.11 40.08ZM171.55 46.92V17.16H179.41L181.03 22.62Q181.87 20.1 183.49 18.66Q185.11 17.22 187.21 16.65Q189.31 16.08 191.53 16.26V26.1Q188.65 25.62 186.37 26.13Q184.09 26.64 182.77 28.29Q181.45 29.94 181.45 32.94V46.92ZM195.19 46.92V17.16H204.01L205.09 21Q205.75 19.92 207.01 18.84Q208.27 17.76 210.07 17.01Q211.87 16.26 214.09 16.26Q217.69 16.26 219.79 17.49Q221.89 18.72 222.91 21.18Q224.65 18.72 227.35 17.49Q230.05 16.26 233.17 16.26Q237.07 16.26 239.26 17.7Q241.45 19.14 242.35 21.96Q243.25 24.78 243.25 28.92V46.92H233.35V31.38Q233.35 29.28 233.14 27.57Q232.93 25.86 232.06 24.84Q231.19 23.82 229.09 23.82Q226.39 23.82 225.28 25.68Q224.17 27.54 224.17 31.26V46.92H214.27V31.38Q214.27 29.28 214.09 27.57Q213.91 25.86 213.07 24.84Q212.23 23.82 210.19 23.82Q208.33 23.82 207.22 24.72Q206.11 25.62 205.6 27.33Q205.09 29.04 205.09 31.5V46.92ZM256.51 47.64Q253.45 47.64 251.05 46.56Q248.65 45.48 247.3 43.5Q245.95 41.52 245.95 38.88Q245.95 35.28 248.38 33.03Q250.81 30.78 255.28 29.58Q259.75 28.38 265.87 28.08V27.24Q265.87 24.84 264.55 23.88Q263.23 22.92 260.95 22.92Q259.27 22.92 257.89 23.79Q256.51 24.66 256.03 26.16L247.63 23.28Q249.13 20.34 252.67 18.3Q256.21 16.26 261.49 16.26Q268.09 16.26 271.75 19.11Q275.41 21.96 275.41 28.2V35.82Q275.41 37.92 275.53 40.05Q275.65 42.18 275.89 43.98Q276.13 45.78 276.43 46.92H267.13L266.11 43.38Q264.49 45.84 262 46.74Q259.51 47.64 256.51 47.64ZM259.99 40.98Q261.79 40.98 263.11 40.44Q264.43 39.9 265.15 38.52Q265.87 37.14 265.87 34.68V33.9Q260.47 34.2 258.4 35.31Q256.33 36.42 256.33 38.04Q256.33 39.36 257.38 40.17Q258.43 40.98 259.99 40.98ZM292.15 46.92Q288.31 46.92 286.03 46.26Q283.75 45.6 282.76 43.77Q281.77 41.94 281.77 38.34V24.66H276.85V17.16H281.77V9.72H291.67V17.16H298.15V24.66H291.67V35.64Q291.67 37.68 292.54 38.31Q293.41 38.94 295.63 38.94H298.15V46.92Z",0],["via","M66.25 6.66a6.24 6.24 0 1 1 12.48 0a6.24 6.24 0 1 1 -12.48 0ZM69.61 6.66a2.88 2.88 0 1 1 5.76 0a2.88 2.88 0 1 1 -5.76 0Z",1]],"mono":[["ink","M11.82 0h23.64a11.82 11.82 0 0 1 11.82 11.82v23.64a11.82 11.82 0 0 1 -11.82 11.82h-23.64a11.82 11.82 0 0 1 -11.82 -11.82v-23.64a11.82 11.82 0 0 1 11.82 -11.82ZM22.16 40.38L22.16 24.62L18.22 24.62L18.22 19.7L29.05 19.7L29.05 40.38ZM20.68 11.82a4.92 4.92 0 1 1 9.85 0a4.92 4.92 0 1 1 -9.85 0ZM23.39 11.82a2.22 2.22 0 1 1 4.43 0a2.22 2.22 0 1 1 -4.43 0Z",1],["ink","M68.05 46.92V24.6H62.89V17.16H78.01V46.92ZM82.93 46.92V17.16H91.75L92.83 21Q93.49 19.98 94.78 18.87Q96.07 17.76 97.93 17.01Q99.79 16.26 102.01 16.26Q105.67 16.26 107.89 17.58Q110.11 18.9 111.13 21.51Q112.15 24.12 112.15 27.9V46.92H102.25V29.94Q102.25 27.84 101.8 26.49Q101.35 25.14 100.42 24.48Q99.49 23.82 97.99 23.82Q95.23 23.82 94.03 25.86Q92.83 27.9 92.83 31.8V46.92ZM119.17 46.92V24.66H114.25V17.16H119.17V13.08Q119.17 9.42 120.46 7.44Q121.75 5.46 124.45 4.65Q127.15 3.84 131.29 3.84H135.61V11.58H133.21Q130.69 11.58 129.88 12.03Q129.07 12.48 129.07 14.1V17.16H135.61V24.66H129.07V46.92ZM152.11 47.64Q148.99 47.64 146.11 46.68Q143.23 45.72 140.95 43.77Q138.67 41.82 137.38 38.85Q136.09 35.88 136.09 31.86Q136.09 27.84 137.38 24.9Q138.67 21.96 140.95 20.04Q143.23 18.12 146.11 17.19Q148.99 16.26 152.11 16.26Q155.29 16.26 158.14 17.19Q160.99 18.12 163.27 20.04Q165.55 21.96 166.84 24.9Q168.13 27.84 168.13 31.86Q168.13 35.88 166.84 38.85Q165.55 41.82 163.27 43.77Q160.99 45.72 158.14 46.68Q155.29 47.64 152.11 47.64ZM152.11 40.08Q153.91 40.08 155.23 39.15Q156.55 38.22 157.3 36.39Q158.05 34.56 158.05 31.86Q158.05 29.1 157.27 27.33Q156.49 25.56 155.17 24.69Q153.85 23.82 152.11 23.82Q150.43 23.82 149.08 24.69Q147.73 25.56 146.95 27.33Q146.17 29.1 146.17 31.86Q146.17 34.56 146.92 36.39Q147.67 38.22 149.02 39.15Q150.37 40.08 152.11 40.08ZM171.55 46.92V17.16H179.41L181.03 22.62Q181.87 20.1 183.49 18.66Q185.11 17.22 187.21 16.65Q189.31 16.08 191.53 16.26V26.1Q188.65 25.62 186.37 26.13Q184.09 26.64 182.77 28.29Q181.45 29.94 181.45 32.94V46.92ZM195.19 46.92V17.16H204.01L205.09 21Q205.75 19.92 207.01 18.84Q208.27 17.76 210.07 17.01Q211.87 16.26 214.09 16.26Q217.69 16.26 219.79 17.49Q221.89 18.72 222.91 21.18Q224.65 18.72 227.35 17.49Q230.05 16.26 233.17 16.26Q237.07 16.26 239.26 17.7Q241.45 19.14 242.35 21.96Q243.25 24.78 243.25 28.92V46.92H233.35V31.38Q233.35 29.28 233.14 27.57Q232.93 25.86 232.06 24.84Q231.19 23.82 229.09 23.82Q226.39 23.82 225.28 25.68Q224.17 27.54 224.17 31.26V46.92H214.27V31.38Q214.27 29.28 214.09 27.57Q213.91 25.86 213.07 24.84Q212.23 23.82 210.19 23.82Q208.33 23.82 207.22 24.72Q206.11 25.62 205.6 27.33Q205.09 29.04 205.09 31.5V46.92ZM256.51 47.64Q253.45 47.64 251.05 46.56Q248.65 45.48 247.3 43.5Q245.95 41.52 245.95 38.88Q245.95 35.28 248.38 33.03Q250.81 30.78 255.28 29.58Q259.75 28.38 265.87 28.08V27.24Q265.87 24.84 264.55 23.88Q263.23 22.92 260.95 22.92Q259.27 22.92 257.89 23.79Q256.51 24.66 256.03 26.16L247.63 23.28Q249.13 20.34 252.67 18.3Q256.21 16.26 261.49 16.26Q268.09 16.26 271.75 19.11Q275.41 21.96 275.41 28.2V35.82Q275.41 37.92 275.53 40.05Q275.65 42.18 275.89 43.98Q276.13 45.78 276.43 46.92H267.13L266.11 43.38Q264.49 45.84 262 46.74Q259.51 47.64 256.51 47.64ZM259.99 40.98Q261.79 40.98 263.11 40.44Q264.43 39.9 265.15 38.52Q265.87 37.14 265.87 34.68V33.9Q260.47 34.2 258.4 35.31Q256.33 36.42 256.33 38.04Q256.33 39.36 257.38 40.17Q258.43 40.98 259.99 40.98ZM292.15 46.92Q288.31 46.92 286.03 46.26Q283.75 45.6 282.76 43.77Q281.77 41.94 281.77 38.34V24.66H276.85V17.16H281.77V9.72H291.67V17.16H298.15V24.66H291.67V35.64Q291.67 37.68 292.54 38.31Q293.41 38.94 295.63 38.94H298.15V46.92Z",0],["ink","M66.25 6.66a6.24 6.24 0 1 1 12.48 0a6.24 6.24 0 1 1 -12.48 0ZM69.61 6.66a2.88 2.88 0 1 1 5.76 0a2.88 2.88 0 1 1 -5.76 0Z",1]]}};

  // ------------------------------------------------------------ Icon
  function Icon(props) {
    var paths = ICONS[props.name] || [];
    var size = props.size || 20;
    var label = props.label;
    var rest = omit(props, ["name", "size", "label", "className", "strokeWidth"]);
    return h("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size,
      fill: "none", stroke: "currentColor", strokeWidth: props.strokeWidth || 1.75,
      strokeLinecap: "round", strokeLinejoin: "round", focusable: "false",
      className: cx("inf-icon", props.className),
      role: label ? "img" : undefined, "aria-label": label || undefined, "aria-hidden": label ? undefined : "true"
    }, rest), paths.map(function (d, i) { return h("path", { key: i, d: d }); }));
  }
  Icon.names = Object.keys(ICONS);

  // ------------------------------------------------------------ Logo
  function Logo(props) {
    var variant = props.variant || "horizontal";
    var g = LOGO[variant] || LOGO.horizontal;
    var mono = props.tone === "mono";
    var height = props.height || (variant === "symbol" ? 40 : 32);
    var width = Math.round((g.w / g.h) * height * 100) / 100;
    var parts = mono ? g.mono : g.color;
    var title = props.title || "Informat";
    var rest = omit(props, ["variant", "tone", "height", "title", "decorative", "className"]);
    return h("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + g.w + " " + g.h, width: width, height: height,
      className: cx("inf-logo", mono && "inf-logo--mono", props.className), focusable: "false",
      role: props.decorative ? undefined : "img", "aria-label": props.decorative ? undefined : title,
      "aria-hidden": props.decorative ? "true" : undefined
    }, rest), parts.map(function (p, i) {
      return h("path", { key: i, className: "inf-logo__" + p[0], d: p[1], fillRule: p[2] ? "evenodd" : undefined });
    }));
  }

  // ------------------------------------------------------------ Button
  function Button(props) {
    var variant = props.variant || "secondary";
    var size = props.size || "m";
    var cls = cx("inf-btn", "inf-btn--" + variant, "inf-btn--" + size, props.block && "inf-btn--block", props.className);
    var lead = props.loading
      ? h("span", { key: "sp", className: "inf-spinner", "aria-hidden": "true" })
      : (props.iconLeft ? h(Icon, { key: "il", name: props.iconLeft, size: 20 }) : null);
    var content = [
      lead,
      h("span", { key: "lb", className: "inf-btn__label" }, props.children),
      props.iconRight && !props.loading ? h(Icon, { key: "ir", name: props.iconRight, size: 20 }) : null
    ];
    var rest = omit(props, ["variant", "size", "block", "className", "iconLeft", "iconRight", "loading", "children", "href", "type", "disabled"]);
    if (props.href !== undefined) {
      return h("a", Object.assign({
        href: props.disabled ? undefined : props.href, className: cls,
        "aria-disabled": props.disabled ? "true" : undefined, role: props.disabled ? "link" : undefined
      }, rest), content);
    }
    return h("button", Object.assign({
      type: props.type || "button", className: cls, disabled: !!(props.disabled || props.loading),
      "aria-busy": props.loading ? "true" : undefined
    }, rest), content);
  }

  // ------------------------------------------------------------ field parts
  function FieldLabel(p) {
    return h(p.as || "label", { className: "inf-field__label", htmlFor: p.as ? undefined : p.htmlFor, id: p.id },
      p.children, p.optional ? h("span", { className: "inf-field__opt" }, " (opcional)") : null);
  }
  function FieldError(p) {
    if (!p.children) return null;
    return h("p", { id: p.id, className: "inf-field__error" }, h(Icon, { name: "alert-triangle", size: 16 }), h("span", null, p.children));
  }

  // ------------------------------------------------------------ TextField
  function TextField(props) {
    var id = useUid("inf-tf", props.id);
    var hintId = id + "-hint", errId = id + "-err", cntId = id + "-cnt";
    var st = R.useState(props.defaultValue || "");
    var isCtl = props.value !== undefined;
    var val = isCtl ? props.value : st[0];
    function onChange(e) {
      if (!isCtl) st[1](e.target.value);
      if (props.onChange) props.onChange(e);
    }
    var counter = props.multiline && props.maxLength;
    var describedBy = [props.hint && hintId, props.error && errId, counter && cntId].filter(Boolean).join(" ") || undefined;
    var rest = omit(props, ["id", "label", "hint", "error", "optional", "multiline", "rows", "className", "value", "defaultValue", "onChange", "mono", "type"]);
    var control = h(props.multiline ? "textarea" : "input", Object.assign({
      id: id, value: val, onChange: onChange,
      className: cx("inf-input", props.multiline && "inf-input--area", props.mono && "inf-input--mono", props.error && "is-invalid"),
      "aria-invalid": props.error ? "true" : undefined, "aria-describedby": describedBy,
      rows: props.multiline ? (props.rows || 5) : undefined,
      type: props.multiline ? undefined : (props.type || "text")
    }, rest));
    return h("div", { className: cx("inf-field", props.disabled && "is-disabled", props.className) },
      h(FieldLabel, { htmlFor: id, optional: props.optional }, props.label),
      props.hint ? h("p", { id: hintId, className: "inf-field__hint" }, props.hint) : null,
      control,
      (props.error || counter) ? h("div", { className: "inf-field__foot" },
        h(FieldError, { id: errId }, props.error),
        counter ? h("p", { id: cntId, className: "inf-field__count" }, String((val || "").length) + " de " + props.maxLength) : null
      ) : null
    );
  }

  // ------------------------------------------------------------ Select
  function Select(props) {
    var id = useUid("inf-sel", props.id);
    var hintId = id + "-hint", errId = id + "-err";
    var describedBy = [props.hint && hintId, props.error && errId].filter(Boolean).join(" ") || undefined;
    var rest = omit(props, ["id", "label", "hint", "error", "optional", "options", "placeholder", "className", "children"]);
    var opts = (props.options || []).map(function (o) {
      return h("option", { key: o.value, value: o.value, disabled: o.disabled }, o.label);
    });
    if (props.placeholder) opts.unshift(h("option", { key: "__ph", value: "", disabled: true }, props.placeholder));
    if (props.defaultValue === undefined && props.value === undefined && props.placeholder) rest.defaultValue = "";
    return h("div", { className: cx("inf-field", props.disabled && "is-disabled", props.className) },
      h(FieldLabel, { htmlFor: id, optional: props.optional }, props.label),
      props.hint ? h("p", { id: hintId, className: "inf-field__hint" }, props.hint) : null,
      h("div", { className: "inf-select" },
        h("select", Object.assign({
          id: id, className: cx("inf-input", "inf-select__control", props.error && "is-invalid"),
          "aria-invalid": props.error ? "true" : undefined, "aria-describedby": describedBy
        }, rest), opts, props.children),
        h(Icon, { name: "chevron-down", size: 20, className: "inf-select__chevron" })
      ),
      props.error ? h("div", { className: "inf-field__foot" }, h(FieldError, { id: errId }, props.error)) : null
    );
  }

  // ------------------------------------------------------------ ChoiceCard
  function ChoiceCard(props) {
    var name = useUid("inf-cc", props.name);
    var hintId = name + "-hint", errId = name + "-err";
    var c = useControlled(props.value, props.defaultValue, props.onChange);
    var options = props.options || [];
    return h("fieldset", {
      className: cx("inf-choice", props.columns === 1 && "inf-choice--stack", props.className),
      "aria-describedby": [props.hint && hintId, props.error && errId].filter(Boolean).join(" ") || undefined
    },
      h("legend", { className: "inf-choice__legend" }, props.legend),
      props.hint ? h("p", { id: hintId, className: "inf-field__hint" }, props.hint) : null,
      h("div", { className: "inf-choice__grid" }, options.map(function (o) {
        var checked = c[0] === o.value;
        var oid = name + "-" + o.value;
        return h("label", { key: o.value, htmlFor: oid, className: cx("inf-choice__card", checked && "is-checked", o.disabled && "is-disabled") },
          h("input", {
            type: "radio", id: oid, name: name, value: o.value, checked: checked, disabled: o.disabled,
            className: "inf-radio", onChange: function (e) { c[1](o.value, e); }
          }),
          h("span", { className: "inf-choice__body" },
            h("span", { className: "inf-choice__head" },
              o.icon ? h(Icon, { name: o.icon, size: 24, className: "inf-choice__icon" }) : null,
              h("span", { className: "inf-choice__title" }, o.title),
              o.tag ? h("span", { className: "inf-tag" }, o.tag) : null),
            o.description ? h("span", { className: "inf-choice__desc" }, o.description) : null,
            o.meta ? h("span", { className: "inf-choice__meta" }, o.meta) : null
          )
        );
      })),
      props.error ? h(FieldError, { id: errId }, props.error) : null
    );
  }

  // ------------------------------------------------------------ ServiceCard
  function ServiceCard(props) {
    var Hn = "h" + (props.headingLevel || 3);
    var rest = omit(props, ["index", "title", "description", "items", "icon", "href", "linkLabel", "tag", "headingLevel", "className"]);
    return h("article", Object.assign({ className: cx("inf-service", props.className) }, rest),
      h("div", { className: "inf-service__top" },
        h("span", { className: "inf-service__pad" }, h(Icon, { name: props.icon || "wrench", size: 24 })),
        props.index ? h("span", { className: "inf-label inf-service__index" }, "Frente " + props.index) : null),
      h(Hn, { className: "inf-service__title" }, props.title),
      props.description ? h("p", { className: "inf-service__desc" }, props.description) : null,
      props.items && props.items.length ? h("ul", { className: "inf-service__list" }, props.items.map(function (it, i) {
        return h("li", { key: i }, h(Icon, { name: "check", size: 16 }), h("span", null, it));
      })) : null,
      props.tag ? h("p", { className: "inf-service__tag" }, h("span", { className: "inf-tag" }, props.tag)) : null,
      props.href ? h("a", { className: "inf-link inf-service__link", href: props.href },
        h("span", null, props.linkLabel || "Ver o serviço"), h(Icon, { name: "arrow-right", size: 20 })) : null
    );
  }

  // ------------------------------------------------------------ StatusBadge
  var STATUS = {
    "solicitado": { label: "Solicitado", icon: "file-text", tone: "neutral" },
    "em-diagnostico": { label: "Em diagnóstico", icon: "search", tone: "info" },
    "aguardando-aprovacao": { label: "Aguardando aprovação", icon: "hourglass", tone: "warn" },
    "aprovado": { label: "Aprovado", icon: "check", tone: "ok" },
    "em-execucao": { label: "Em execução", icon: "wrench", tone: "info" },
    "pronto-para-entrega": { label: "Pronto para entrega", icon: "package", tone: "ok" },
    "entregue": { label: "Entregue", icon: "check-circle", tone: "ok" },
    "cancelado": { label: "Cancelado", icon: "x-circle", tone: "err" }
  };
  function StatusBadge(props) {
    var s = STATUS[props.status] || STATUS["solicitado"];
    var rest = omit(props, ["status", "size", "label", "className"]);
    return h("span", Object.assign({ className: cx("inf-stamp", "inf-stamp--" + s.tone, props.size === "l" && "inf-stamp--l", props.className) }, rest),
      h(Icon, { name: s.icon, size: props.size === "l" ? 20 : 16 }),
      h("span", null, props.label || s.label));
  }
  StatusBadge.statuses = STATUS;

  // ------------------------------------------------------------ Alert
  var ALERT_ICON = { info: "info", warn: "alert-triangle", ok: "check-circle", err: "x-circle", neutral: "info" };
  function Alert(props) {
    var tone = props.tone || "info";
    var rest = omit(props, ["tone", "title", "children", "action", "onClose", "className", "icon"]);
    return h("div", Object.assign({ className: cx("inf-alert", "inf-alert--" + tone, props.className) }, rest),
      h(Icon, { name: props.icon || ALERT_ICON[tone], size: 20, className: "inf-alert__icon" }),
      h("div", { className: "inf-alert__body" },
        props.title ? h("p", { className: "inf-alert__title" }, props.title) : null,
        props.children ? h("div", { className: "inf-alert__text" }, props.children) : null,
        props.action ? h("div", { className: "inf-alert__action" }, props.action) : null),
      props.onClose ? h("button", { type: "button", className: "inf-iconbtn inf-alert__close", "aria-label": "Fechar aviso", onClick: props.onClose },
        h(Icon, { name: "x", size: 20 })) : null
    );
  }

  // ------------------------------------------------------------ Dialog
  var FOCUSABLE = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
  function Dialog(props) {
    var base = useUid("inf-dlg");
    var tid = base + "-t", did = base + "-d";
    var ref = R.useRef(null);
    var onClose = props.onClose;
    R.useEffect(function () {
      if (!props.open || props.inline) return undefined;
      var prev = document.activeElement;
      var el = ref.current;
      if (el) {
        var first = el.querySelector("[data-autofocus]") || el.querySelector(FOCUSABLE);
        (first || el).focus();
      }
      function onKey(e) {
        if (e.key === "Escape" && onClose) { e.preventDefault(); onClose(); }
        if (e.key === "Tab" && el) {
          var items = el.querySelectorAll(FOCUSABLE);
          if (!items.length) return;
          var a = items[0], z = items[items.length - 1];
          if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
          else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
        }
      }
      document.addEventListener("keydown", onKey);
      return function () {
        document.removeEventListener("keydown", onKey);
        if (prev && prev.focus) prev.focus();
      };
    }, [props.open, props.inline, onClose]);
    if (!props.open) return null;
    var panel = h("div", {
      ref: ref, role: props.role || "dialog", "aria-modal": "true", "aria-labelledby": tid,
      "aria-describedby": props.description ? did : undefined, tabIndex: -1,
      className: cx("inf-dialog", props.size === "l" && "inf-dialog--l", props.className)
    },
      h("div", { className: "inf-dialog__head" },
        h("h2", { id: tid, className: "inf-dialog__title" }, props.title),
        onClose ? h("button", { type: "button", className: "inf-iconbtn", "aria-label": "Fechar", onClick: onClose }, h(Icon, { name: "x", size: 20 })) : null),
      props.description ? h("p", { id: did, className: "inf-dialog__desc" }, props.description) : null,
      props.children ? h("div", { className: "inf-dialog__body" }, props.children) : null,
      props.footer ? h("div", { className: "inf-dialog__foot" }, props.footer) : null
    );
    return h("div", {
      className: cx("inf-scrim", props.inline && "inf-scrim--inline"),
      onMouseDown: function (e) { if (!props.inline && e.target === e.currentTarget && onClose) onClose(); }
    }, panel);
  }

  // ------------------------------------------------------------ NavBar
  function NavBar(props) {
    var menuId = useUid("inf-nav");
    var m = useControlled(props.menuOpen, !!props.defaultMenuOpen, props.onMenuToggle);
    var links = props.links || [];
    function list(cls) {
      return h("ul", { className: cls }, links.map(function (l) {
        return h("li", { key: l.label }, h("a", { href: l.href, className: "inf-nav__link", "aria-current": l.current ? "page" : undefined }, l.label));
      }));
    }
    var signIn = props.signIn;
    return h("header", { className: cx("inf-nav", props.compact && "inf-nav--compact", m[0] && "is-open", props.className) },
      h("div", { className: "inf-nav__bar" },
        h("a", { href: props.logoHref || "#", className: "inf-nav__brand", "aria-label": "Informat, página inicial" },
          h(Logo, { variant: "horizontal", height: 32, decorative: true })),
        h("nav", { className: "inf-nav__links", "aria-label": "Principal" }, list("inf-nav__list")),
        h("div", { className: "inf-nav__actions" },
          signIn ? h("a", { className: "inf-nav__signin", href: signIn.href },
            h(Icon, { name: signIn.icon || "log-in", size: 20 }), h("span", null, signIn.label)) : null,
          props.cta ? h(Button, { variant: "primary", href: props.cta.href, className: "inf-nav__cta" }, props.cta.label) : null,
          h("button", {
            type: "button", className: "inf-iconbtn inf-nav__menu", "aria-expanded": m[0] ? "true" : "false",
            "aria-controls": menuId, onClick: function (e) { m[1](!m[0], e); }
          }, h(Icon, { name: m[0] ? "x" : "menu", size: 24 }), h("span", { className: "inf-visually-hidden" }, m[0] ? "Fechar menu" : "Abrir menu"))
        )
      ),
      h("div", { id: menuId, className: "inf-nav__panel", hidden: !m[0] },
        h("nav", { "aria-label": "Principal no celular" }, list("inf-nav__plist")),
        signIn ? h("a", { className: "inf-nav__signin inf-nav__signin--panel", href: signIn.href },
          h(Icon, { name: signIn.icon || "log-in", size: 20 }), h("span", null, signIn.label)) : null,
        props.cta ? h(Button, { variant: "primary", size: "l", block: true, href: props.cta.href }, props.cta.label) : null
      )
    );
  }

  // ------------------------------------------------------------ ServiceTimeline
  var STAGES = [
    { title: "Solicitação", description: "Você descreve o problema e envia fotos, se quiser." },
    { title: "Diagnóstico", description: "Testamos o equipamento e explicamos o que encontramos." },
    { title: "Orçamento aprovado", description: "Você aprova o escopo, o backup combinado e o valor." },
    { title: "Execução", description: "Fazemos só o que foi aprovado." },
    { title: "Entrega e pós-atendimento", description: "Testes de entrega, relatório e garantia." }
  ];
  var STAGE_WORD = { done: "Concluída", current: "Etapa atual", pending: "A seguir", step: null };
  function ServiceTimeline(props) {
    var stages = props.stages || STAGES;
    var orientation = props.orientation || "vertical";
    var explain = props.mode === "explain";
    return h("ol", { className: cx("inf-timeline", "inf-timeline--" + orientation, explain && "inf-timeline--explain", props.className), "aria-label": props.label || "Etapas do atendimento" },
      stages.map(function (s, i) {
        var state = explain ? "step" : (s.state || (props.current == null ? "pending" : (i < props.current ? "done" : (i === props.current ? "current" : "pending"))));
        return h("li", { key: i, className: cx("inf-timeline__step", "is-" + state), "aria-current": state === "current" ? "step" : undefined },
          h("span", { className: "inf-timeline__node", "aria-hidden": "true" },
            state === "done" ? h(Icon, { name: "check", size: 14, strokeWidth: 2.5 }) : null),
          h("div", { className: "inf-timeline__content" },
            h("span", { className: "inf-label inf-timeline__index" }, STAGE_WORD[state] ? pad2(i + 1) + " · " + STAGE_WORD[state] : pad2(i + 1)),
            h("span", { className: "inf-timeline__title" }, s.title),
            s.description && !props.hideDescriptions ? h("span", { className: "inf-timeline__desc" }, s.description) : null,
            s.time ? h("span", { className: "inf-timeline__time" }, s.time) : null
          )
        );
      })
    );
  }

  // ------------------------------------------------------------ QuoteSummary
  function QuoteSummary(props) {
    var tid = useUid("inf-quote");
    var items = props.items || [];
    var showActions = props.actions !== false;
    return h("section", { className: cx("inf-quote", props.className), "aria-labelledby": tid },
      h("header", { className: "inf-quote__head" },
        h("div", null,
          h("p", { className: "inf-label" }, "Orçamento" + (props.osNumber ? " · " + props.osNumber : "")),
          h("h3", { id: tid, className: "inf-quote__title" }, props.title || "Escopo proposto")),
        props.status ? h(StatusBadge, { status: props.status }) : null),
      h("dl", { className: "inf-quote__items" }, items.map(function (it, i) {
        return h("div", { className: "inf-quote__row", key: i },
          h("dt", null, h("span", { className: "inf-quote__item" }, it.label),
            it.detail ? h("span", { className: "inf-quote__detail" }, it.detail) : null),
          h("dd", { className: "inf-quote__value" }, it.value));
      })),
      h("div", { className: "inf-quote__total" },
        h("span", null, props.totalLabel || "Total"),
        h("span", { className: "inf-quote__total-value" }, props.total)),
      props.validity ? h("p", { className: "inf-quote__validity" }, h(Icon, { name: "clock", size: 16 }),
        h("span", null, "Orçamento válido até " + props.validity)) : null,
      props.note ? h("p", { className: "inf-quote__note" }, props.note) : null,
      showActions ? h("div", { className: "inf-quote__actions" },
        h(Button, { variant: "primary", size: "l", onClick: props.onApprove, href: props.approveHref }, props.approveLabel || "Aprovar escopo"),
        h(Button, { variant: "secondary", iconLeft: "message", onClick: props.onAsk, href: props.askHref }, "Tirar dúvida"),
        h(Button, { variant: "ghost", onClick: props.onReject, href: props.rejectHref }, "Recusar")) : null
    );
  }

  // ------------------------------------------------------------ BackupAgreement
  var BACKUP_OPTIONS = [
    { value: "completo", title: "Backup completo feito pela Informat", description: "A Informat copia os dados do disco antes de qualquer intervenção. Se houver custo, ele aparece no orçamento." },
    { value: "pastas", title: "Backup só das pastas que você indicar", description: "Você lista as pastas que importam. O restante do disco pode ser apagado." },
    { value: "cliente", title: "Eu já fiz o meu backup", description: "Você confirma que tem cópia do que importa antes de entregar o equipamento." },
    { value: "sem-backup", title: "Sem backup, com ciência registrada", description: "Os dados do disco podem ser perdidos de forma definitiva. A sua confirmação fica registrada na OS." }
  ];
  function BackupAgreement(props) {
    var name = useUid("inf-bk", props.name);
    var c = useControlled(props.value, props.defaultValue, props.onChange);
    var ack = useControlled(props.acknowledged, false, props.onAcknowledge);
    var chosen = BACKUP_OPTIONS.filter(function (o) { return o.value === c[0]; })[0];
    return h("fieldset", { className: cx("inf-backup", props.className) },
      h("legend", { className: "inf-choice__legend" }, h(Icon, { name: "shield-data", size: 24 }), h("span", null, props.legend || "Combinado sobre backup e dados")),
      h("p", { className: "inf-field__hint" }, props.hint || "Escolha uma opção. Nada é apagado antes deste combinado ficar registrado."),
      h("div", { className: "inf-backup__list" }, BACKUP_OPTIONS.map(function (o) {
        var checked = c[0] === o.value;
        var oid = name + "-" + o.value;
        return h("div", { key: o.value, className: cx("inf-backup__option", checked && "is-checked", o.value === "sem-backup" && "is-risk") },
          h("label", { htmlFor: oid, className: "inf-backup__label" },
            h("input", { type: "radio", id: oid, name: name, value: o.value, checked: checked, disabled: props.readOnly && !checked,
              className: "inf-radio", onChange: function (e) { c[1](o.value, e); } }),
            h("span", { className: "inf-choice__body" },
              h("span", { className: "inf-choice__title" }, o.title),
              h("span", { className: "inf-choice__desc" }, o.description))),
          checked && o.value === "pastas" ? h("div", { className: "inf-backup__extra" },
            h(TextField, { label: "Quais pastas devem ser copiadas?", multiline: true, rows: 3, value: props.folders, defaultValue: props.folders === undefined ? "" : undefined,
              onChange: props.onFoldersChange, hint: "Uma por linha. Exemplo: Documentos, Fotos, Área de trabalho." })) : null,
          checked && o.value === "sem-backup" ? h("div", { className: "inf-backup__extra" },
            h("label", { className: "inf-check" },
              h("input", { type: "checkbox", className: "inf-checkbox", checked: !!ack[0], required: true,
                onChange: function (e) { ack[1](e.target.checked, e); } }),
              h("span", null, "Entendi que os dados podem ser perdidos e quero seguir sem backup."))) : null
        );
      })),
      h("div", { className: "inf-backup__summary", role: "status" },
        h(Icon, { name: chosen ? "check-circle" : "info", size: 20 }),
        h("p", null, chosen
          ? h(R.Fragment, null, h("strong", null, chosen.title), h("br"), h("span", { className: "inf-backup__when" }, "Combinado em " + (props.agreedAt || "[DATA]") + " com " + (props.agreedWith || "[NOME]")))
          : "Nenhuma opção escolhida ainda.")
      )
    );
  }
  BackupAgreement.options = BACKUP_OPTIONS;

  // ------------------------------------------------------------ Checklist
  var CHECK_STATE = {
    pass: { word: "Passou", icon: "check-circle" },
    fail: { word: "Falhou", icon: "x-circle" },
    pending: { word: "Pendente", icon: "clock" },
    na: { word: "Não se aplica", icon: "minus-circle" }
  };
  function Checklist(props) {
    var base = useUid("inf-ck");
    var items = props.items || [];
    var sel = useControlled(props.checked, props.defaultChecked || [], props.onChange);
    var Hn = "h" + (props.headingLevel || 3);
    return h("section", { className: cx("inf-checklist", props.className), "aria-labelledby": props.title ? base + "-t" : undefined },
      props.title ? h(Hn, { id: base + "-t", className: "inf-checklist__title" }, props.title) : null,
      h("ul", { className: "inf-checklist__list" }, items.map(function (it, i) {
        var key = it.id || String(i);
        if (props.interactive) {
          var on = sel[0].indexOf(key) >= 0;
          return h("li", { key: key, className: "inf-checklist__item" },
            h("label", { className: "inf-check" },
              h("input", { type: "checkbox", className: "inf-checkbox", checked: on, disabled: it.disabled,
                onChange: function (e) {
                  var next = sel[0].filter(function (k) { return k !== key; });
                  if (e.target.checked) next.push(key);
                  sel[1](next, e);
                } }),
              h("span", { className: "inf-checklist__text" },
                h("span", { className: "inf-checklist__label" }, it.label),
                it.detail ? h("span", { className: "inf-checklist__detail" }, it.detail) : null)));
        }
        var s = CHECK_STATE[it.status || "pending"];
        return h("li", { key: key, className: cx("inf-checklist__item", "is-" + (it.status || "pending")) },
          h("span", { className: "inf-checklist__state" }, h(Icon, { name: s.icon, size: 20 }), h("span", null, s.word)),
          h("span", { className: "inf-checklist__text" },
            h("span", { className: "inf-checklist__label" }, it.label),
            it.detail ? h("span", { className: "inf-checklist__detail" }, it.detail) : null));
      }))
    );
  }

  // ------------------------------------------------------------ UploadField
  function UploadField(props) {
    var id = useUid("inf-up", props.id);
    var hintId = id + "-hint", errId = id + "-err", lblId = id + "-lbl";
    var drag = R.useState(false);
    var files = props.files || [];
    function pick(list) { if (props.onSelect && list && list.length) props.onSelect(Array.prototype.slice.call(list)); }
    return h("div", { className: cx("inf-field", "inf-upload", props.className) },
      h(FieldLabel, { as: "span", id: lblId, optional: props.optional }, props.label || "Fotos do problema"),
      props.hint ? h("p", { id: hintId, className: "inf-field__hint" }, props.hint) : null,
      h("label", {
        htmlFor: id, className: cx("inf-upload__drop", drag[0] && "is-drag", props.error && "is-invalid"),
        onDragOver: function (e) { e.preventDefault(); drag[1](true); },
        onDragLeave: function () { drag[1](false); },
        onDrop: function (e) { e.preventDefault(); drag[1](false); pick(e.dataTransfer.files); }
      },
        h(Icon, { name: "camera", size: 24, className: "inf-upload__icon" }),
        h("span", { className: "inf-upload__cta" }, props.ctaLabel || "Escolher fotos"),
        h("span", { className: "inf-upload__alt" }, "ou arraste os arquivos para cá"),
        h("input", {
          id: id, type: "file", accept: props.accept || "image/*", multiple: props.multiple !== false,
          className: "inf-visually-hidden", "aria-labelledby": lblId,
          "aria-describedby": [props.hint && hintId, props.error && errId].filter(Boolean).join(" ") || undefined,
          onChange: function (e) { pick(e.target.files); }
        })
      ),
      props.error ? h(FieldError, { id: errId }, props.error) : null,
      files.length ? h("ul", { className: "inf-upload__files", "aria-label": "Arquivos enviados" }, files.map(function (f, i) {
        var status = f.status || "done";
        return h("li", { key: f.name + i, className: cx("inf-upload__file", "is-" + status) },
          h("span", { className: "inf-upload__thumb", "aria-hidden": "true" }, h(Icon, { name: "image", size: 20 })),
          h("span", { className: "inf-upload__meta" },
            h("span", { className: "inf-upload__name" }, f.name),
            status === "uploading"
              ? h("span", { className: "inf-upload__progress" },
                h("span", { className: "inf-progress", role: "progressbar", "aria-label": "Enviando " + f.name, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": f.progress || 0 },
                  h("span", { className: "inf-progress__bar", style: { width: (f.progress || 0) + "%" } })),
                h("span", { className: "inf-upload__state" }, "Enviando " + (f.progress || 0) + "%"))
              : h("span", { className: "inf-upload__state" },
                h(Icon, { name: status === "error" ? "x-circle" : "check-circle", size: 16 }),
                h("span", null, status === "error" ? ("Falhou: " + (f.error || "tente de novo")) : ("Enviada" + (f.size ? " · " + f.size : ""))))),
          props.onRemove || props.removable !== false ? h("button", {
            type: "button", className: "inf-iconbtn", "aria-label": "Remover " + f.name,
            onClick: function () { if (props.onRemove) props.onRemove(i); }
          }, h(Icon, { name: "x", size: 20 })) : null
        );
      })) : null
    );
  }

  // ------------------------------------------------------------ EmptyState
  function TraceArt(p) {
    return h("svg", { className: cx("inf-trace-art", p.className), viewBox: "0 0 176 64", width: 176, height: 64, "aria-hidden": "true", focusable: "false" },
      h("polyline", { className: "inf-trace-art__line", points: "0,16 56,16 80,40 120,40" }),
      h("polyline", { className: "inf-trace-art__line", points: "0,32 48,32 72,56 104,56" }),
      h("polyline", { className: "inf-trace-art__line inf-trace-art__line--soft", points: "176,24 152,24 136,8 128,8" }),
      h("circle", { className: "inf-trace-art__via", cx: 126, cy: 40, r: 5 }),
      h("circle", { className: "inf-trace-art__via", cx: 110, cy: 56, r: 5 }),
      h("circle", { className: "inf-trace-art__via", cx: 122, cy: 8, r: 5 }));
  }
  function EmptyState(props) {
    var Hn = "h" + (props.headingLevel || 3);
    return h("div", { className: cx("inf-empty", props.className) },
      h(TraceArt, null),
      h(Hn, { className: "inf-empty__title" }, props.title),
      props.children ? h("div", { className: "inf-empty__text" }, props.children) : null,
      props.action ? h("div", { className: "inf-empty__action" }, props.action) : null);
  }

  // ------------------------------------------------------------ Skeleton
  function Skeleton(props) {
    var variant = props.variant || "text";
    var lines = props.lines || 3;
    var blocks = [];
    if (variant === "card") {
      blocks.push(h("span", { key: "a", className: "inf-skel inf-skel--title" }));
      for (var i = 0; i < lines; i++) blocks.push(h("span", { key: "l" + i, className: "inf-skel inf-skel--line", style: { width: (i === lines - 1 ? 60 : 100) + "%" } }));
      blocks.push(h("span", { key: "b", className: "inf-skel inf-skel--button" }));
    } else if (variant === "row") {
      for (var j = 0; j < lines; j++) {
        blocks.push(h("span", { key: "r" + j, className: "inf-skel-row" },
          h("span", { className: "inf-skel inf-skel--label" }), h("span", { className: "inf-skel inf-skel--value" })));
      }
    } else {
      for (var k = 0; k < lines; k++) blocks.push(h("span", { key: "t" + k, className: "inf-skel inf-skel--line", style: { width: (k === lines - 1 ? 55 : 100) + "%" } }));
    }
    return h("div", { className: cx("inf-skeleton", "inf-skeleton--" + variant, props.className), role: "status", "aria-live": "polite" },
      h("span", { className: "inf-visually-hidden" }, props.label || "Carregando"),
      h("span", { className: "inf-skeleton__blocks", "aria-hidden": "true" }, blocks));
  }

  // ------------------------------------------------------------ Toast
  var TOAST_ICON = { neutral: "info", ok: "check-circle", err: "x-circle" };
  function Toast(props) {
    if (props.open === false) return null;
    var tone = props.tone || "neutral";
    return h("div", {
      className: cx("inf-toast", "inf-toast--" + tone, props.floating && "inf-toast--floating", props.className),
      role: tone === "err" ? "alert" : "status", "aria-live": tone === "err" ? "assertive" : "polite"
    },
      h(Icon, { name: TOAST_ICON[tone], size: 20, className: "inf-toast__icon" }),
      h("p", { className: "inf-toast__msg" }, props.children),
      props.action ? h("button", { type: "button", className: "inf-toast__action", onClick: props.action.onClick }, props.action.label) : null,
      props.onClose ? h("button", { type: "button", className: "inf-iconbtn inf-toast__close", "aria-label": "Fechar mensagem", onClick: props.onClose },
        h(Icon, { name: "x", size: 20 })) : null);
  }

  // ------------------------------------------------------------ OsHeader
  function OsHeader(props) {
    var tid = useUid("inf-os");
    var meta = props.meta || [];
    var Hn = "h" + (props.headingLevel || 1);
    return h("section", { className: cx("inf-os", props.className), "aria-labelledby": tid },
      h("div", { className: "inf-os__top" },
        h("p", { className: "inf-os__id" },
          h("span", { className: "inf-label" }, "Ordem de serviço"),
          h("span", { className: "inf-os__number" }, props.osNumber)),
        props.status ? h(StatusBadge, { status: props.status, size: "l" }) : null),
      h(Hn, { id: tid, className: "inf-os__title" }, props.title),
      meta.length ? h("dl", { className: "inf-os__meta" }, meta.map(function (m, i) {
        return h("div", { key: i, className: "inf-os__cell" },
          h("dt", { className: "inf-label" }, m.label),
          h("dd", { className: cx("inf-os__value", m.mono && "inf-os__value--mono") }, m.value));
      })) : null,
      props.children
    );
  }

  // ------------------------------------------------------------ SiteFooter
  function SiteFooter(props) {
    var columns = props.columns || [];
    return h("footer", { className: cx("inf-footer", props.compact && "inf-footer--compact", props.className) },
      h("div", { className: "inf-footer__grid" },
        h("div", { className: "inf-footer__brand" },
          h(Logo, { variant: "horizontal", height: 28 }),
          props.promise ? h("p", { className: "inf-footer__promise" }, props.promise) : null),
        columns.map(function (c) {
          return h("nav", { key: c.title, className: "inf-footer__col", "aria-label": c.title },
            h("p", { className: "inf-label inf-footer__title" }, c.title),
            h("ul", null, c.links.map(function (l) {
              return h("li", { key: l.label }, l.href ? h("a", { href: l.href }, l.icon ? h(Icon, { name: l.icon, size: 16 }) : null, h("span", null, l.label))
                : h("span", { className: "inf-footer__text" }, l.icon ? h(Icon, { name: l.icon, size: 16 }) : null, h("span", null, l.label)));
            })));
        })),
      h("div", { className: "inf-footer__base" },
        h("p", { className: "inf-footer__legal" }, props.legal || "Informat · CNPJ [CNPJ]"),
        h("p", { className: "inf-footer__rbx" }, "um produto RBX"))
    );
  }

  var api = {
    Icon: Icon, Logo: Logo, Button: Button, TextField: TextField, Select: Select, ChoiceCard: ChoiceCard,
    ServiceCard: ServiceCard, StatusBadge: StatusBadge, Alert: Alert, Dialog: Dialog, NavBar: NavBar,
    ServiceTimeline: ServiceTimeline, QuoteSummary: QuoteSummary, BackupAgreement: BackupAgreement,
    Checklist: Checklist, UploadField: UploadField, EmptyState: EmptyState, Skeleton: Skeleton, Toast: Toast,
    OsHeader: OsHeader, SiteFooter: SiteFooter
  };
  window.Informat = Object.assign(window.Informat || {}, api);
})();
