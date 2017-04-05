# mmn-parser
Generate intermediate code from mmn  

### usage
```
$ git clone http://github.com/nupamore/mmn-parser
$ npm install
$ npm test
```

### result
``` json
[
  [
    {
      "track": "piano-right",
      "events": true,
      "key": "Gb",
      "meter": "4/4",
      "clef": "treble",
      "volume": 8,
      "tempo": 114,
      "octave": [
        5
      ],
      "note": [
        "B"
      ],
      "noteLen": 840,
      "noteLenConv": "",
      "bar": "start",
      "end": false,
      "tupletCheck": -1
    },
    {
      "track": "piano-right",
      "events": false,
      "key": "Gb",
      "meter": "4/4",
      "clef": "treble",
      "volume": 8,
      "tempo": 114,
      "octave": [
        5
      ],
      "note": [
        "A"
      ],
      "noteLen": 840,
      "noteLenConv": "",
      "bar": "",
      "end": false,
      "tupletCheck": -1
    }
  ]
]
```
