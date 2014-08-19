flannel
=======

Flannel wraps around [bunyan](trentm/bunyan) to provide a simple plugin and configuration mechanism.

## JSON configuration format:

```
{
  init: {
    include: [{
      npmModule: 'flannel-standard',
      config: {}
    }]
  },
  logger: {
    //bunyan config format 
  }
}
```

## Usage:

```
var flannel = require('flannel);

flannel.wear(config);

var log = bunyan.createLogger(flannel.config());
```

## Writing a plugin:

```
var flannel = require('flannel');

flannel.registerStream('flannel-stdin', 'Stream for stdin', function(config){

});
```

