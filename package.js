Package.describe({
  name: "runelytics:nouislider",
  summary: "noUiSlider: lightweight JavaScript range slider",
  version: "8.0.2",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.3');

  api.addFiles([
    'lib/nouislider.js',
    'lib/nouislider.css',
    'lib/nouislider.pips.css'
  ], 'client');
});
