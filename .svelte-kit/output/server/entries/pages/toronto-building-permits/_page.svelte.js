import { c as create_ssr_component, d as add_attribute, f as each, e as escape, h as now, l as loop, i as createEventDispatcher, v as validate_component, b as subscribe, n as noop, j as null_to_empty } from "../../../chunks/index.js";
import { rollup } from "d3-array";
import { scaleBand } from "d3-scale";
import mapboxgl from "mapbox-gl";
import { w as writable } from "../../../chunks/index2.js";
const type$1 = "FeatureCollection";
const name$1 = "secondary-suites-v2";
const crs$1 = {
  type: "name",
  properties: {
    name: "urn:ogc:def:crs:OGC:1.3:CRS84"
  }
};
const features$1 = [
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "04 172129 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47682,
        43.65646
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "06 196702 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41725,
        43.66459
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "10 179140 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3156,
        43.82061
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "10 205752 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22175,
        43.78187
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "10 234382 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29128,
        43.71387
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "10 260382 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2386,
        43.77081
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "11 243686 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31781,
        43.73375
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "11 296079 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34821,
        43.67293
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "11 313674 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32322,
        43.80147
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "11 330625 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29515,
        43.71385
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 130215 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2276,
        43.79831
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 152665 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29879,
        43.69075
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 240918 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30263,
        43.7945
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 242936 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32976,
        43.76693
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 246221 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17419,
        43.757
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 246330 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18308,
        43.79544
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 248564 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24328,
        43.75403
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 257515 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2942,
        43.77667
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 261050 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29079,
        43.81544
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 271596 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41202,
        43.65759
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 274360 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41722,
        43.7692
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 276706 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44773,
        43.6618
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 282566 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26505,
        43.6883
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 297121 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46726,
        43.65769
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 108325 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28308,
        43.68579
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 130169 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46347,
        43.66334
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 134143 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21619,
        43.79921
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 135631 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41011,
        43.78847
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 142939 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43921,
        43.65872
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 148188 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18578,
        43.78571
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 159328 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36503,
        43.66556
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 161745 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34746,
        43.66165
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 165921 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27478,
        43.81358
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 177855 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20979,
        43.73882
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 193893 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5024,
        43.71261
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 194068 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30603,
        43.74671
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 198500 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37099,
        43.77395
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 206448 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16253,
        43.79238
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 217337 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56699,
        43.64093
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 218074 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59889,
        43.74563
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 224228 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53167,
        43.60502
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 236025 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61334,
        43.73272
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 237666 BLD",
      year: "2013"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32024,
        43.77842
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "02 163989 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36266,
        43.70007
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "02 196907 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21297,
        43.74879
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "06 154796 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40427,
        43.67122
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "08 224989 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29302,
        43.74385
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "10 169990 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27744,
        43.80306
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "10 301594 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29982,
        43.7184
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 152645 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24465,
        43.74918
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 157976 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45753,
        43.68085
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 206733 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30462,
        43.79346
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 227157 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32052,
        43.66886
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 231821 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45589,
        43.67849
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 239244 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44072,
        43.67783
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 247780 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4259,
        43.65182
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 298307 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24758,
        43.70185
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 110917 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17888,
        43.75459
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 122074 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59593,
        43.73172
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 143734 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30725,
        43.75624
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 155377 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2874,
        43.82028
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 167679 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47221,
        43.64466
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 168063 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44084,
        43.79116
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 169330 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18206,
        43.80774
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 172569 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26289,
        43.74515
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 183859 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18775,
        43.7767
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 206243 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21798,
        43.77443
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 211177 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48177,
        43.68346
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 215170 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28997,
        43.81947
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 217321 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42473,
        43.65175
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 221257 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42617,
        43.64757
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 224976 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49851,
        43.68026
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 226287 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21996,
        43.76895
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 236468 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50262,
        43.67834
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 241639 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29238,
        43.74201
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 242685 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21442,
        43.76026
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 248049 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54034,
        43.61065
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 248382 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31265,
        43.67471
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 249187 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42884,
        43.67413
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 257164 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41171,
        43.67008
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 258528 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3812,
        43.66071
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 259576 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26323,
        43.73954
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 259883 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2889,
        43.70477
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 260028 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34927,
        43.69716
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 263837 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17661,
        43.78923
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 266017 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.13669,
        43.77554
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 269075 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43248,
        43.69883
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 270421 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29265,
        43.7407
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 271555 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21967,
        43.76448
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 274521 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44611,
        43.6756
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 277145 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32569,
        43.66827
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 277687 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43023,
        43.65012
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 278371 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41723,
        43.65315
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 281153 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49704,
        43.76585
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 100161 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25672,
        43.7667
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 106654 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42663,
        43.65113
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 107979 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25522,
        43.74769
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 115562 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.357,
        43.77364
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 115759 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50115,
        43.76767
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 117178 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21558,
        43.77445
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 119999 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32134,
        43.78067
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 122996 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44179,
        43.66305
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 129358 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31801,
        43.68352
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 129424 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33547,
        43.67593
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 129455 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2603,
        43.76666
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 130564 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44885,
        43.66287
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 133172 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34194,
        43.7993
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 133851 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24388,
        43.76713
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 136801 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18938,
        43.76167
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 142693 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45147,
        43.64029
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 148141 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61498,
        43.73355
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 152219 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43546,
        43.67336
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 154515 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31513,
        43.77298
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 158024 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43675,
        43.66066
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 165214 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31365,
        43.77633
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 167732 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29343,
        43.79573
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 168270 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40634,
        43.656
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 171246 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58031,
        43.71995
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 173249 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2538,
        43.75025
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 174113 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4957,
        43.76707
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 175476 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28693,
        43.76176
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 177075 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3361,
        43.67349
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 177654 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.15297,
        43.78099
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 179199 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32437,
        43.67022
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 183147 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49732,
        43.76908
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 184786 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28648,
        43.82744
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 189816 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44242,
        43.64386
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 195584 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40853,
        43.65551
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 207167 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22817,
        43.75322
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 209945 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44947,
        43.642
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 210461 BLD",
      year: "2014"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47723,
        43.71863
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "01 193596 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44424,
        43.71069
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "02 100538 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20399,
        43.79163
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "02 123177 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37047,
        43.73002
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "03 148714 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41177,
        43.67051
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "06 109135 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33327,
        43.68572
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "07 258002 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48222,
        43.65393
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "09 123821 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48781,
        43.63412
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "11 314869 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32102,
        43.79004
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 181811 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16222,
        43.79534
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 189630 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.6016,
        43.72407
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 209634 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28946,
        43.70956
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 293974 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59503,
        43.7281
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 127110 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        0,
        0
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 197333 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16027,
        43.77178
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 223185 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        0,
        0
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 228973 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43095,
        43.67194
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 244008 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48331,
        43.67887
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 244661 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50215,
        43.62896
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 253030 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44104,
        43.65987
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 254502 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54079,
        43.64989
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 104964 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26316,
        43.76179
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 124767 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43688,
        43.66038
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 127257 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59525,
        43.72901
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 128353 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17204,
        43.77567
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 136768 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.15528,
        43.78248
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 139940 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55372,
        43.71716
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 151033 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33522,
        43.66159
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 152724 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50363,
        43.61576
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 165264 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42374,
        43.66866
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 166444 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56602,
        43.72185
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 175573 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50099,
        43.6293
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 175770 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22431,
        43.77761
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 179562 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26595,
        43.70482
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 179627 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50992,
        43.70228
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 180029 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16865,
        43.7715
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 180598 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42003,
        43.77635
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 181717 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.429,
        43.79266
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 187213 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24168,
        43.77186
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 187293 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29388,
        43.68353
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 188382 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32806,
        43.80298
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 194630 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4213,
        43.67002
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 208406 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        0,
        0
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 208409 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3655,
        43.78937
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 210911 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21407,
        43.75745
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 211469 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48627,
        43.632
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 214343 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43976,
        43.69618
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 219553 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42207,
        43.65999
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 220936 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44311,
        43.6867
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 225331 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39594,
        43.65435
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 227758 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30741,
        43.8173
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 230246 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18545,
        43.78705
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 234898 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32575,
        43.79001
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 236889 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24569,
        43.76417
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 239792 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44691,
        43.68449
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 240176 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29058,
        43.79498
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 240740 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3194,
        43.75765
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 241209 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61426,
        43.73316
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 241434 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54291,
        43.59612
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 243478 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28295,
        43.79546
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 243983 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4062,
        43.76154
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 248120 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22585,
        43.76996
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 250990 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61159,
        43.73326
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 253501 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44228,
        43.64264
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 253590 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20428,
        43.80388
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 254038 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24519,
        43.75029
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 257270 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27456,
        43.6961
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 257449 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53369,
        43.60751
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 259265 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33661,
        43.69077
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 260320 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39459,
        43.67719
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 262315 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41806,
        43.64591
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 262317 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41806,
        43.64591
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 262318 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41806,
        43.64591
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 262319 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41806,
        43.64591
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 263992 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42039,
        43.77533
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 265291 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41049,
        43.66639
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 265377 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24213,
        43.76419
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 265383 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32707,
        43.68704
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 266800 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4385,
        43.67116
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 267480 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47695,
        43.66645
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 267658 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18163,
        43.7875
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 103606 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43364,
        43.6484
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 104600 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34173,
        43.67185
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 104646 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33843,
        43.66633
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 104678 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46063,
        43.70927
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 107020 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32017,
        43.67506
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 109519 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44527,
        43.64067
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 112077 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23089,
        43.81413
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 112581 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.51918,
        43.65138
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 112858 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39107,
        43.71521
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 114261 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39729,
        43.69417
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 118752 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42323,
        43.65867
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 120261 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59351,
        43.75282
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 120267 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33827,
        43.78744
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 121921 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50206,
        43.76696
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 123824 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43183,
        43.67586
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 124075 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23412,
        43.76024
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 127120 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40438,
        43.67406
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 128193 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4015,
        43.64545
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 130668 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4042,
        43.67422
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 131258 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43365,
        43.68467
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 132060 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43628,
        43.68411
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 132797 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57318,
        43.65925
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 135099 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57378,
        43.72467
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 135665 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26179,
        43.76322
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 139951 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43203,
        43.67634
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 140179 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54308,
        43.66058
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 141227 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34717,
        43.7935
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 142509 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61519,
        43.73245
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 144563 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39033,
        43.68232
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 146476 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40723,
        43.70196
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 146744 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.19687,
        43.77051
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 148592 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24703,
        43.77235
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 150038 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42323,
        43.71884
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 151962 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43973,
        43.75186
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 152351 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49577,
        43.76687
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 156976 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23855,
        43.76099
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 158429 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23779,
        43.76124
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 167814 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56542,
        43.72139
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 174428 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25937,
        43.76427
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 176445 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40621,
        43.76
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 179191 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30034,
        43.69962
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 189317 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36347,
        43.66381
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 198711 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4058,
        43.76163
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 198778 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30887,
        43.67671
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 220490 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43407,
        43.6745
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 223481 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43402,
        43.67454
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 224698 BLD",
      year: "2015"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50741,
        43.63659
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "03 153929 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24858,
        43.70492
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 278730 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2863,
        43.82513
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 127683 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21737,
        43.76775
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 272738 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46083,
        43.68003
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 281039 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.38556,
        43.70732
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 103579 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29937,
        43.79296
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 139759 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40606,
        43.64586
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 154333 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56814,
        43.72819
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 155491 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5838,
        43.72347
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 174125 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33383,
        43.69157
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 179662 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18189,
        43.7948
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 187264 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45126,
        43.68604
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 191607 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30442,
        43.66584
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 228750 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39561,
        43.65461
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 233574 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26256,
        43.76495
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 233725 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31653,
        43.69748
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 237070 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43148,
        43.66294
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 244941 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17086,
        43.78862
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 101211 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44514,
        43.63961
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 106508 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34051,
        43.68261
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 113789 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23524,
        43.75379
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 118941 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3298,
        43.66506
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 119328 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43495,
        43.69585
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 120238 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53502,
        43.66191
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 127466 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41261,
        43.64534
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 129827 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43372,
        43.66269
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 134217 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33721,
        43.67352
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 138892 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30554,
        43.6941
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 144295 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.60033,
        43.74554
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 145351 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31193,
        43.68868
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 150571 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42222,
        43.67706
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 151413 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31248,
        43.77677
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 152528 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41632,
        43.68097
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 152664 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40765,
        43.69949
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 154979 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31625,
        43.80559
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 155496 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17936,
        43.77624
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 155526 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40419,
        43.66253
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 160968 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44466,
        43.68147
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 165373 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21141,
        43.74913
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 165483 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41567,
        43.64587
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 171548 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57849,
        43.73765
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 177931 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22174,
        43.73649
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 188476 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26199,
        43.74738
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 198720 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53399,
        43.72607
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 199780 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46209,
        43.66341
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 204061 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45569,
        43.69303
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 206282 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40883,
        43.65966
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 206917 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40823,
        43.71789
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 207003 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29808,
        43.73624
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 209399 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57066,
        43.76216
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 210289 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46304,
        43.72791
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 211645 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30709,
        43.75713
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 213547 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41693,
        43.69824
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 215097 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24895,
        43.73953
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 225872 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        0,
        0
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 226023 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40711,
        43.6586
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 229193 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40976,
        43.64564
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 229243 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5607,
        43.72644
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 236373 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29825,
        43.67999
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 243177 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42161,
        43.67398
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 243292 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.19621,
        43.751
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 244491 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40458,
        43.65792
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 244936 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4177,
        43.66471
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 248051 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.19036,
        43.7731
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 249758 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33343,
        43.79346
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 251188 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61315,
        43.73354
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 251339 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32696,
        43.76203
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 255265 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42841,
        43.63418
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 255294 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41552,
        43.65995
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 255471 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31287,
        43.76935
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 257326 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23088,
        43.734
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 258942 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32018,
        43.77888
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 259818 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16573,
        43.78839
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 260676 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28366,
        43.75317
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 261074 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45569,
        43.69303
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 263797 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61179,
        43.73306
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 265138 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37169,
        43.65958
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 267605 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47174,
        43.71304
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 270890 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23291,
        43.72433
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 101450 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2557,
        43.76812
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 103346 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40702,
        43.6475
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 104013 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33596,
        43.67352
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 105986 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33255,
        43.69301
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 108668 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31315,
        43.67334
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 110303 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43364,
        43.64925
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 110498 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4402,
        43.69077
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 111035 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46029,
        43.68885
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 112051 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40857,
        43.65234
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 114835 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32101,
        43.67659
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 117085 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48256,
        43.65566
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 122336 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42504,
        43.6508
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 125323 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36398,
        43.69992
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 129341 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57163,
        43.74395
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 130234 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30802,
        43.70547
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 135197 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33612,
        43.7355
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 135555 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24821,
        43.73969
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 136328 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42579,
        43.66276
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 142053 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59842,
        43.75108
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 146842 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44237,
        43.66575
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 147195 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5973,
        43.73415
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 156870 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29534,
        43.68839
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 159208 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43979,
        43.658
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 161068 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26169,
        43.76694
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 166633 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36712,
        43.80849
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 166635 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32251,
        43.67423
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 171826 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45679,
        43.67149
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 173683 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33415,
        43.67366
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 176261 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2227,
        43.78247
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 177765 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2708,
        43.76654
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 183354 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59432,
        43.73239
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 195223 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61119,
        43.73195
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 206056 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47891,
        43.65326
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 215957 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21172,
        43.76497
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 220487 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48007,
        43.67826
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 223214 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42911,
        43.65067
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 226195 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44773,
        43.6752
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 226865 BLD",
      year: "2016"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42143,
        43.6682
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "03 159646 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44194,
        43.6649
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "05 114922 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39997,
        43.7684
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 127246 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17398,
        43.78188
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 189165 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46582,
        43.65924
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 201702 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50858,
        43.72596
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 273705 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49625,
        43.66868
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 277157 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4361,
        43.66845
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 278914 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21255,
        43.76608
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 108985 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31744,
        43.7666
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 114570 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17668,
        43.78686
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 121010 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34508,
        43.67144
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 205758 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30762,
        43.67048
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 225659 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20807,
        43.77238
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 247860 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23399,
        43.75448
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 115170 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27623,
        43.80266
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 124189 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4385,
        43.65092
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 126473 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46452,
        43.68557
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 154908 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61203,
        43.73391
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 157012 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42639,
        43.63589
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 177488 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44326,
        43.67692
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 183900 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29329,
        43.66861
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 184988 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.51848,
        43.63366
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 187943 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43616,
        43.67768
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 193546 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49559,
        43.76709
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 196458 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18535,
        43.80676
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 205382 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40487,
        43.64981
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 226442 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43104,
        43.65773
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 229659 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43076,
        43.63401
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 239343 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29977,
        43.71255
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 249988 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57931,
        43.6446
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 251341 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61959,
        43.72416
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 263164 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41686,
        43.64566
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 264527 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43351,
        43.63889
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 105666 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41935,
        43.6584
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 111008 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.6131,
        43.7327
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 112429 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41143,
        43.65585
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 117962 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40834,
        43.65113
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 119874 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43762,
        43.7921
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 120981 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57556,
        43.73594
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 127523 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.305,
        43.67493
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 128425 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30857,
        43.67223
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 132745 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31933,
        43.67041
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 147783 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30676,
        43.69047
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 157078 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41107,
        43.67102
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 159561 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42524,
        43.66142
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 162050 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47535,
        43.66625
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 163130 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57814,
        43.72609
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 178785 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2966,
        43.75557
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 189887 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39403,
        43.65271
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 199814 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.256,
        43.76475
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 209079 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43534,
        43.65181
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 213809 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42424,
        43.7829
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 217496 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16381,
        43.78442
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 236183 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58336,
        43.63152
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 236831 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43433,
        43.65785
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 240619 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21668,
        43.77635
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 240942 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5533,
        43.74786
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 241065 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42559,
        43.64432
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 242831 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31105,
        43.6841
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 242990 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4043,
        43.66172
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 243423 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53211,
        43.69065
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 243695 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49248,
        43.6697
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 246427 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58453,
        43.72577
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 247098 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27437,
        43.74731
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 252859 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28421,
        43.70705
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 255326 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45307,
        43.69425
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 257765 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55413,
        43.7034
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 258225 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2601,
        43.74852
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 263504 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54956,
        43.6042
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 267850 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41755,
        43.65612
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 271548 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41998,
        43.65799
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 100435 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22547,
        43.76796
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 101630 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26185,
        43.76619
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 103241 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25776,
        43.76368
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 106287 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24952,
        43.73849
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 108276 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59003,
        43.72971
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 108351 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55505,
        43.70318
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 111403 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27292,
        43.71759
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 116790 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59185,
        43.72928
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 120623 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47502,
        43.71119
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 122133 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26386,
        43.74651
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 134922 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45793,
        43.68333
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 138233 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31369,
        43.6842
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 139754 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57139,
        43.64345
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 144974 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18253,
        43.76006
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 146244 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53366,
        43.69051
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 147504 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53613,
        43.60697
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 149571 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2215,
        43.81536
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 158421 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44253,
        43.6626
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 159847 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40032,
        43.64937
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 168966 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29384,
        43.74268
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 170967 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59685,
        43.73233
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 176273 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45795,
        43.69591
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 187483 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50295,
        43.76639
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 190009 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42785,
        43.66784
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 199599 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59551,
        43.72948
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 205675 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48881,
        43.67137
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 207689 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.60248,
        43.7467
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 214369 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21744,
        43.77158
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 216198 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43927,
        43.64997
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 220276 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48583,
        43.70825
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 226751 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5024,
        43.76717
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 240570 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27228,
        43.73655
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 243733 BLD",
      year: "2017"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44712,
        43.68502
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "02 190720 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22248,
        43.78163
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "11 191161 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41438,
        43.75716
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 230791 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45104,
        43.69001
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 265168 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59962,
        43.74523
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 185009 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21177,
        43.7698
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 243344 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58292,
        43.66284
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 259390 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22963,
        43.83177
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 267001 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43728,
        43.66876
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 106704 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27388,
        43.69109
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 123596 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25911,
        43.72589
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 128510 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29947,
        43.67433
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 212738 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18774,
        43.80778
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 260393 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28876,
        43.68158
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 112146 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3054,
        43.76308
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 120718 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4532,
        43.69581
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 208832 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29358,
        43.75491
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 217137 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43054,
        43.65272
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 223744 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42804,
        43.6488
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 236837 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20439,
        43.80281
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 246287 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56083,
        43.73838
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 111096 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36875,
        43.71068
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 118369 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.6226,
        43.72693
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 124927 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45769,
        43.65205
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 141890 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27352,
        43.70083
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 152438 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17834,
        43.79071
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 184637 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49475,
        43.75657
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 191181 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24972,
        43.7121
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 203147 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30436,
        43.70082
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 205997 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28968,
        43.77818
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 208542 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42194,
        43.64662
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 218111 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45428,
        43.6778
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 230141 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41012,
        43.65885
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 233317 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21527,
        43.73632
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 237550 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.15741,
        43.79529
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 244039 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42107,
        43.73649
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 247819 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61204,
        43.73373
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 251971 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40863,
        43.64488
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 258682 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33948,
        43.65842
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 268953 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28569,
        43.68169
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 271364 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41805,
        43.65744
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 271666 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42815,
        43.64468
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 106268 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35513,
        43.67537
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 108677 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42336,
        43.65021
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 112369 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.14924,
        43.78809
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 112934 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32416,
        43.73283
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 125050 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56602,
        43.72968
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 140273 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25136,
        43.73027
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 144921 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44196,
        43.70393
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 159838 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35372,
        43.7788
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 160188 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40688,
        43.65806
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 161416 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54303,
        43.64295
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 161937 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44026,
        43.64509
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 165299 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25813,
        43.76216
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 169390 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18123,
        43.79605
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 170251 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26467,
        43.73902
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 170346 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45506,
        43.65262
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 174689 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.412,
        43.66766
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 182417 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58498,
        43.6649
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 182607 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43371,
        43.69865
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 183681 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4553,
        43.72171
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 196244 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44767,
        43.66278
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 198159 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44072,
        43.66514
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 201756 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34655,
        43.66853
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 202397 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40344,
        43.77247
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 203036 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24725,
        43.74777
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 203924 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22823,
        43.73566
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 212418 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47626,
        43.71455
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 212922 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.15751,
        43.80082
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 217740 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27192,
        43.73363
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 218604 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36918,
        43.65757
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 218968 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.435,
        43.64393
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 224841 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31199,
        43.68426
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 233947 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44927,
        43.66418
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 234738 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50022,
        43.76804
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 240501 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59876,
        43.75729
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 246293 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31288,
        43.77325
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 247007 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33044,
        43.67051
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 251695 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58757,
        43.75237
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 262674 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42522,
        43.68811
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 269463 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.62189,
        43.73064
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 270075 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.13627,
        43.77555
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 272009 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32565,
        43.67368
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 273444 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49277,
        43.6779
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 273727 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44183,
        43.691
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 275412 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53167,
        43.6942
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 103632 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25192,
        43.76953
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 109663 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50271,
        43.7679
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 111012 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45086,
        43.64415
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 117583 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.62106,
        43.72247
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 117918 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50641,
        43.72938
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 117943 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53768,
        43.61009
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 118838 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4482,
        43.67417
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 120306 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45661,
        43.6507
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 120897 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43939,
        43.64363
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 127316 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53689,
        43.72275
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 128197 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59927,
        43.73927
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 130935 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47857,
        43.7051
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 136369 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.14567,
        43.78414
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 139029 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32539,
        43.80248
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 143425 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22658,
        43.80187
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 143679 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29733,
        43.71162
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 143881 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20714,
        43.81919
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 145017 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20275,
        43.74557
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 151386 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5021,
        43.59962
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 153680 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28231,
        43.75306
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 154541 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50052,
        43.60973
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 165082 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50299,
        43.7221
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 165696 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61521,
        43.73361
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 168975 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45319,
        43.72147
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 189390 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41952,
        43.66672
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 192073 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3044,
        43.72289
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 194992 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61319,
        43.73232
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 199596 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5031,
        43.76614
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 217649 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4967,
        43.681
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 219721 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30607,
        43.81911
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 232424 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44085,
        43.79124
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 243152 BLD",
      year: "2018"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58521,
        43.7256
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 242785 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4764,
        43.66646
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 191644 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28237,
        43.75321
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 281020 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48327,
        43.65012
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 112686 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27533,
        43.80479
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 119033 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44077,
        43.64496
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 194928 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49376,
        43.61716
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 100922 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.15746,
        43.79541
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 110374 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30726,
        43.75907
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 114570 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52987,
        43.72221
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 141349 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50311,
        43.7273
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 178062 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43759,
        43.67545
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 188863 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31512,
        43.68622
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 189414 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33092,
        43.69265
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 211602 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49953,
        43.76842
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 212106 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42712,
        43.65224
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 226652 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42759,
        43.65727
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 228758 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31399,
        43.67432
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 246402 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29667,
        43.71
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 249349 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4136,
        43.65327
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 251061 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41664,
        43.64616
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 123823 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24158,
        43.7643
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 125181 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40716,
        43.66769
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 154856 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45021,
        43.68107
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 158112 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44516,
        43.66628
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 169128 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25406,
        43.73113
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 169265 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39531,
        43.70378
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 193197 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32901,
        43.67272
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 198638 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43496,
        43.66835
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 211737 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33266,
        43.78659
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 217512 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43046,
        43.63675
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 218081 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42973,
        43.66528
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 223841 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28678,
        43.69478
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 227003 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41191,
        43.66996
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 240389 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33249,
        43.66117
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 242068 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44216,
        43.64354
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 243399 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42164,
        43.66205
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 253849 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5131,
        43.59987
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 263320 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37296,
        43.65924
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 266124 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37299,
        43.65931
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 109466 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43585,
        43.66148
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 114590 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33959,
        43.67909
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 114726 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33247,
        43.80136
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 116401 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29394,
        43.74795
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 119005 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25341,
        43.7328
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 128788 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5785,
        43.73048
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 131381 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22445,
        43.73775
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 133486 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42354,
        43.64704
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 148940 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5494,
        43.63321
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 149079 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47765,
        43.65682
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 157101 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42828,
        43.77983
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 173555 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49691,
        43.63514
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 176638 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29944,
        43.68168
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 179585 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41842,
        43.65398
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 182986 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32163,
        43.69481
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 188636 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29463,
        43.75647
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 188768 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29417,
        43.73979
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 197413 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4729,
        43.6778
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 198534 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31654,
        43.67551
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 199620 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45448,
        43.66647
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 208860 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25746,
        43.7413
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 209232 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40429,
        43.66411
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 210537 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.62392,
        43.72817
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 210699 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45423,
        43.66965
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 220253 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5357,
        43.73117
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 220623 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56368,
        43.7535
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 222751 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27581,
        43.70251
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 237557 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.62036,
        43.72424
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 245170 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28377,
        43.70922
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 245371 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43056,
        43.66489
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 255415 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58882,
        43.72134
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 255474 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40321,
        43.7666
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 258158 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3183,
        43.73591
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 260697 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59592,
        43.73428
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 261852 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56762,
        43.63628
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 264295 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58874,
        43.75182
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 265286 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30078,
        43.80874
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 268542 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33484,
        43.79834
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 270029 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5026,
        43.61648
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 271426 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57652,
        43.66019
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 102149 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28441,
        43.78851
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 102297 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41562,
        43.64351
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 102828 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46679,
        43.68758
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 105695 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34384,
        43.68169
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 111001 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40154,
        43.66088
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 115751 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16994,
        43.79645
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 117238 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35776,
        43.74365
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 117742 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4285,
        43.79071
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 119362 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56072,
        43.7495
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 120639 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42124,
        43.66104
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 121935 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30201,
        43.71112
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 125733 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31016,
        43.78171
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 131193 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28169,
        43.69717
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 134056 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4087,
        43.65531
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 140993 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54038,
        43.58982
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 144071 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41027,
        43.64816
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 145446 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43674,
        43.66358
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 148167 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35334,
        43.67831
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 150209 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28661,
        43.70574
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 152094 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.285,
        43.74861
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 152096 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.60058,
        43.75766
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 153225 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.62349,
        43.72631
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 160428 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.38821,
        43.70729
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 161323 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50789,
        43.70276
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 163155 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56973,
        43.64206
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 179498 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42884,
        43.65434
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 181648 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57144,
        43.74204
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 186386 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3427,
        43.78518
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 196283 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17677,
        43.78495
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 202342 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35016,
        43.7933
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 209522 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40665,
        43.66333
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 209943 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42796,
        43.65688
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 213008 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59935,
        43.74411
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 214801 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29253,
        43.70626
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 215325 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59558,
        43.73104
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 216887 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.62035,
        43.73338
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 216897 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61215,
        43.73392
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 233156 BLD",
      year: "2019"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49775,
        43.60802
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "02 179385 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36531,
        43.66626
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "04 172876 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48629,
        43.63447
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 117781 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59399,
        43.72987
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 173088 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3106,
        43.66579
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 183846 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30194,
        43.67206
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 190512 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36466,
        43.6645
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 249763 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21643,
        43.74537
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 268763 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43458,
        43.65297
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 142719 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40794,
        43.64502
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 261461 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24757,
        43.71005
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 108686 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42688,
        43.64452
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 122562 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50487,
        43.71557
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 155468 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45853,
        43.67298
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 215888 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37723,
        43.6712
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 218074 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25162,
        43.70398
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 223386 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42316,
        43.66179
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 229439 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37353,
        43.79066
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 244750 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26629,
        43.69422
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 247271 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39941,
        43.76763
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 117109 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3457,
        43.68708
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 143418 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44559,
        43.68184
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 147244 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32979,
        43.68807
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 166653 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18266,
        43.78686
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 213634 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44552,
        43.64435
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 229974 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26176,
        43.81359
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 141679 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16465,
        43.79208
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 143367 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42043,
        43.66212
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 188289 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54693,
        43.64832
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 198996 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.14445,
        43.79343
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 217264 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45074,
        43.68161
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 246983 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42458,
        43.79064
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 254717 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25714,
        43.76854
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 255448 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31071,
        43.75594
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 108520 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3035,
        43.79565
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 110901 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41868,
        43.64697
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 113549 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39762,
        43.69377
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 120616 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41386,
        43.66217
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 122749 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3649,
        43.80079
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 123383 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30801,
        43.68819
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 124476 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.51776,
        43.7042
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 130865 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39622,
        43.6503
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 132575 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49903,
        43.76754
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 133338 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27435,
        43.69561
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 133932 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44702,
        43.66088
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 144745 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23055,
        43.83513
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 153309 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.51776,
        43.7042
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 153718 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37675,
        43.70947
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 155430 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4405,
        43.63624
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 160052 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29001,
        43.76634
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 167774 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56661,
        43.71608
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 170602 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29488,
        43.74147
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 175385 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41259,
        43.6549
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 178285 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28434,
        43.68574
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 178576 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29401,
        43.77683
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 191561 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44455,
        43.64455
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 191915 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54931,
        43.65997
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 193066 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25308,
        43.70822
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 193434 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3897,
        43.70134
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 193684 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29447,
        43.7561
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 205340 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21664,
        43.81669
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 205986 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46145,
        43.78717
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 208672 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52532,
        43.7131
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 210000 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32224,
        43.68472
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 211015 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34356,
        43.67006
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 221550 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35013,
        43.66772
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 221610 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42054,
        43.66951
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 222516 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59076,
        43.7477
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 223482 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21376,
        43.7768
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 223491 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41768,
        43.64789
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 224134 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17132,
        43.77689
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 227452 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.62008,
        43.72252
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 227972 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20971,
        43.76844
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 228383 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43623,
        43.66237
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 229436 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57503,
        43.75616
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 229440 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39514,
        43.74586
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 232185 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17512,
        43.75648
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 232281 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52097,
        43.73046
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 233618 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28492,
        43.69531
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 235080 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41926,
        43.66934
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 235472 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30985,
        43.68106
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 236213 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59621,
        43.7344
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 236314 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57988,
        43.74399
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 236839 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44025,
        43.65974
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 237531 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22665,
        43.73384
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 237559 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3466,
        43.80187
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 237731 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57452,
        43.65968
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 240852 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32113,
        43.67472
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 242161 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46966,
        43.69524
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 242460 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46564,
        43.68937
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 245168 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34966,
        43.68264
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 245957 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42742,
        43.6674
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 246641 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44444,
        43.66728
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 247946 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43807,
        43.68368
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 249469 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29851,
        43.77914
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 249844 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50476,
        43.6906
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 250502 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41316,
        43.65346
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 250857 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30725,
        43.77158
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 253224 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45727,
        43.75581
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 254009 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26068,
        43.78111
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 255650 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31582,
        43.77482
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 256529 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29008,
        43.79132
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 256904 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43229,
        43.75924
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 258991 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59758,
        43.73879
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 259349 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40955,
        43.65084
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 260860 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43507,
        43.66269
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 261749 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3576,
        43.67558
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 262140 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57755,
        43.65859
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 262297 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22865,
        43.74624
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 262715 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22396,
        43.73095
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 263342 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22666,
        43.83267
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 263796 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52447,
        43.59699
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 100205 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4595,
        43.65633
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 100564 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24699,
        43.73168
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 100630 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20117,
        43.81603
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 102525 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44185,
        43.66461
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 104459 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54193,
        43.60851
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 104477 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52037,
        43.63831
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 104822 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47132,
        43.6927
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 105910 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57231,
        43.68472
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 108411 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59503,
        43.73692
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 110529 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4669,
        43.67318
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 111871 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.13163,
        43.78523
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 111912 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59892,
        43.74446
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 112714 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20091,
        43.81539
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 115738 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61546,
        43.72145
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 115900 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50347,
        43.76687
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 116716 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59235,
        43.74971
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 119671 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16436,
        43.78984
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 119674 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16497,
        43.79117
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 120338 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55326,
        43.73447
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 121126 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2474,
        43.75234
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 121185 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31061,
        43.73241
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 122117 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4654,
        43.65823
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 122429 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21996,
        43.82482
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 122539 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49662,
        43.72672
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 124158 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56822,
        43.74006
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 130640 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33465,
        43.79098
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 132922 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33331,
        43.7955
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 133720 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58549,
        43.73729
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 134605 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29873,
        43.75481
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 134640 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45697,
        43.66009
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 140920 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44918,
        43.68176
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 140977 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23388,
        43.83195
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 142895 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56437,
        43.71242
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 143169 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4248,
        43.66573
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 143661 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59656,
        43.75126
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 147489 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57498,
        43.72738
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 149737 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4933,
        43.63508
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 151608 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34896,
        43.69053
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 151922 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41534,
        43.69446
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 157677 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44154,
        43.65547
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 159225 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56678,
        43.71889
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 159852 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54863,
        43.60502
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 160588 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43861,
        43.69338
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 161633 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27297,
        43.70928
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 162632 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28543,
        43.71038
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 164242 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56467,
        43.6353
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 164656 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22101,
        43.81978
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 167987 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56169,
        43.68791
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 168137 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34265,
        43.78537
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 168793 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43737,
        43.65386
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 170670 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31747,
        43.7581
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 173456 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5878,
        43.75351
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 176908 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.60147,
        43.7236
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 181875 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37307,
        43.80149
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 190841 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41519,
        43.66565
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 191153 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21479,
        43.81114
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 207110 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58073,
        43.65594
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 212970 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58494,
        43.72484
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 249855 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26998,
        43.81905
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 219535 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45981,
        43.69424
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 107841 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44946,
        43.69331
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 182176 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40566,
        43.7175
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 212365 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23632,
        43.83074
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 212493 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.14646,
        43.78828
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 155360 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48101,
        43.65245
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 242793 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43855,
        43.64134
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 246077 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.38318,
        43.77803
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 189274 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56881,
        43.6632
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 262540 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35639,
        43.67563
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 196913 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3715,
        43.66295
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 138938 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2429,
        43.74772
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 166126 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22844,
        43.73344
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 125693 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31328,
        43.69592
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 198209 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54875,
        43.63704
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 175418 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17463,
        43.78342
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 172965 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3997,
        43.78561
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 133568 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22258,
        43.74937
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 162259 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42329,
        43.64525
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 164330 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43869,
        43.65735
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 150460 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41969,
        43.65112
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 177350 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49672,
        43.76855
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 226626 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42292,
        43.6471
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 195016 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.60375,
        43.75591
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 137127 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40925,
        43.76993
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 155356 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40919,
        43.64528
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 158439 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.62003,
        43.72237
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 173098 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42915,
        43.65161
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 144275 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40565,
        43.65781
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 174319 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49122,
        43.67661
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 171540 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34148,
        43.75683
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 171640 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34668,
        43.79176
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 192269 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4975,
        43.71477
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 101197 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31733,
        43.67319
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 113414 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18926,
        43.75173
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 157280 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25131,
        43.76685
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 148571 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58327,
        43.72504
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 201428 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33428,
        43.79013
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 145827 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29815,
        43.70618
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 137423 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18457,
        43.79367
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 169085 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22816,
        43.83657
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 217538 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5526,
        43.71487
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 223169 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56534,
        43.67198
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 179003 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44085,
        43.65611
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 191624 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45762,
        43.75573
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 109321 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33949,
        43.6853
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 167417 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22519,
        43.78226
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 161927 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4551,
        43.67662
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 193221 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17596,
        43.78431
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 186536 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33195,
        43.7617
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 192089 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32946,
        43.77545
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 225499 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49076,
        43.63081
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 200778 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49441,
        43.66724
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 193212 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45467,
        43.71404
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 219830 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47693,
        43.64511
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 208010 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43669,
        43.65328
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 217271 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52561,
        43.59954
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 115900 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31172,
        43.73218
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 145494 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.601,
        43.73214
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 117267 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5234,
        43.71073
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 179442 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34634,
        43.67964
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 198202 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.60115,
        43.74768
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 115576 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41847,
        43.67992
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 207931 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27902,
        43.75525
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 194420 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2367,
        43.76764
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 186658 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34171,
        43.68593
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 188203 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48789,
        43.7346
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 224944 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31839,
        43.6746
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 233936 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53346,
        43.60697
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 199457 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47834,
        43.67797
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 223383 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31194,
        43.76273
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 195599 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33503,
        43.76318
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 174271 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23707,
        43.77173
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 224138 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42506,
        43.76152
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 198645 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23448,
        43.7284
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 106737 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39894,
        43.68458
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 219086 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59348,
        43.73692
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 130321 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57541,
        43.7546
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 130329 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57557,
        43.75459
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 184714 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33113,
        43.67141
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 224550 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31293,
        43.76952
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 196469 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59136,
        43.73016
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 124950 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5638,
        43.72428
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 163759 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22574,
        43.74527
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 203058 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57152,
        43.73207
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 228131 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30392,
        43.74671
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 228979 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42247,
        43.76728
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 202915 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35695,
        43.68091
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 123637 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24931,
        43.7086
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 227600 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52149,
        43.70659
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 164699 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54029,
        43.69888
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 159241 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34007,
        43.78978
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 185994 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44472,
        43.68162
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 123395 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57256,
        43.62963
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 102166 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.491,
        43.73004
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 121382 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.1528,
        43.78255
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 252304 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40939,
        43.6544
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 176998 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20499,
        43.7921
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 187375 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.225,
        43.80803
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 168866 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36785,
        43.76412
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 161976 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43977,
        43.68113
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 159381 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.60404,
        43.75486
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 185657 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50363,
        43.70306
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 196727 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25084,
        43.76496
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 164409 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45321,
        43.6472
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 195094 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20499,
        43.7921
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 101169 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58004,
        43.65941
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 103112 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34557,
        43.68892
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 222851 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58583,
        43.6578
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 109404 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27443,
        43.6999
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 224420 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32729,
        43.66966
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 218079 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48542,
        43.65115
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 122201 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58895,
        43.75407
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 227921 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27723,
        43.74405
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 102860 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45102,
        43.66175
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 214260 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5978,
        43.7512
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 206083 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4314,
        43.68123
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 219427 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49671,
        43.62816
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 124287 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50185,
        43.76805
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 126936 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47576,
        43.69257
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 208193 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41296,
        43.67697
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 117194 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56573,
        43.6707
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 112404 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18158,
        43.78394
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 102145 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48199,
        43.70364
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 183951 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4966,
        43.6357
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 115404 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44948,
        43.69336
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 260083 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4033,
        43.65379
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 116635 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4321,
        43.67589
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 110031 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.1367,
        43.78412
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 189782 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31379,
        43.69702
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 189793 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31379,
        43.69702
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 172100 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22657,
        43.82281
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 225777 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40228,
        43.78907
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 230580 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2486,
        43.77009
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 219207 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4175,
        43.6545
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 107257 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42537,
        43.65057
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 244769 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44125,
        43.66242
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 224632 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34378,
        43.66111
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 164035 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29586,
        43.68306
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 151759 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46558,
        43.66825
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 136153 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26797,
        43.70996
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 153449 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45987,
        43.75693
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 133281 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43248,
        43.68866
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 156572 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2743,
        43.79138
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 173388 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49135,
        43.72583
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "02 169200 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30522,
        43.68965
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 141020 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55942,
        43.73114
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 151854 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36861,
        43.67512
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 144706 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30224,
        43.79556
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 113697 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33102,
        43.74362
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 117504 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44129,
        43.66597
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 120082 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34569,
        43.7909
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "05 181584 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.425,
        43.6442
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 252938 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39741,
        43.65702
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 102739 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26327,
        43.69305
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "05 195527 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41741,
        43.65923
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 122102 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.1873,
        43.79212
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 217010 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3937,
        43.7325
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 138509 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31171,
        43.76518
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 229091 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48039,
        43.70017
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 192844 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55148,
        43.66955
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 221811 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57786,
        43.75772
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 124946 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5828,
        43.72679
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 198628 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43209,
        43.67157
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 227479 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40578,
        43.70371
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 243337 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48387,
        43.67022
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 221825 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2519,
        43.7436
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 115342 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2569,
        43.72007
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 192201 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25137,
        43.70373
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 229126 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4273,
        43.77023
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 113365 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54362,
        43.59451
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 259169 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53077,
        43.6052
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 108049 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46292,
        43.65791
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 105929 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22893,
        43.83125
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 214816 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34928,
        43.68058
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 165627 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22455,
        43.7763
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 225747 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35373,
        43.68197
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 234757 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46039,
        43.68567
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 101170 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29743,
        43.71975
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 102677 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25843,
        43.71062
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 116553 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23116,
        43.79739
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 223981 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41992,
        43.65108
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "08 114506 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47795,
        43.70739
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 111994 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45286,
        43.64313
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 167628 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56873,
        43.75505
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 177829 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47183,
        43.66246
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 135965 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28429,
        43.68724
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 152703 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40436,
        43.66357
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 154019 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30675,
        43.69127
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "09 104782 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25774,
        43.73055
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 259360 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22527,
        43.77028
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "10 103489 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22429,
        43.82236
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 108000 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34248,
        43.79737
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 264218 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42956,
        43.65397
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 156821 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48816,
        43.6195
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "12 102057 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.1778,
        43.75655
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "02 153897 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48135,
        43.66313
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "02 159952 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35334,
        43.69149
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "11 155603 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25265,
        43.7664
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 237795 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27035,
        43.6977
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "13 274444 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44649,
        43.65839
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "14 203690 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56146,
        43.6698
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 100725 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37545,
        43.71012
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 105040 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45602,
        43.647
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 135607 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61222,
        43.73225
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 137434 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3236,
        43.68492
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 258187 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48793,
        43.67072
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 145660 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46321,
        43.73056
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 164957 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41255,
        43.65376
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 146504 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41214,
        43.65224
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 251524 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46549,
        43.67929
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 117397 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18157,
        43.81169
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 144313 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49587,
        43.63393
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 151977 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2154,
        43.82434
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 164575 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35695,
        43.6862
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 178999 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55308,
        43.6428
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 201399 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57807,
        43.64539
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 213606 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4438,
        43.78925
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 217070 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55792,
        43.69106
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 227569 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41739,
        43.66728
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 257525 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45452,
        43.6432
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 263266 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36619,
        43.66847
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 100335 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22483,
        43.80816
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 101278 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42619,
        43.65256
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 115869 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43336,
        43.78886
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 116908 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2554,
        43.73111
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 125565 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33939,
        43.66606
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 132902 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49512,
        43.62567
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 133465 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24764,
        43.76378
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 135407 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5562,
        43.72085
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 152275 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25479,
        43.74344
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 154626 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31042,
        43.68524
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 170010 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43948,
        43.66177
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 177503 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42397,
        43.66479
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 185051 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42439,
        43.64582
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 199248 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59914,
        43.75345
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 201775 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22107,
        43.76416
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 203890 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25001,
        43.71509
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 212156 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18547,
        43.79305
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 218156 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.426,
        43.66852
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 221073 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44465,
        43.66724
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 221092 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32729,
        43.78261
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 224513 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45544,
        43.66908
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 226557 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45007,
        43.66018
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 227524 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18078,
        43.78294
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 228230 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42359,
        43.77555
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 233660 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57147,
        43.74293
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 105689 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20921,
        43.78384
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 106724 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30338,
        43.66799
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 108689 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52672,
        43.64175
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 111980 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39546,
        43.6853
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 114150 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17797,
        43.79779
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 117525 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56867,
        43.63603
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 117570 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53875,
        43.60381
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 119375 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52092,
        43.62559
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 120670 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24019,
        43.75407
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 121330 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32563,
        43.67364
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 129055 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41831,
        43.76258
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 130229 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28829,
        43.78105
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 132015 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.51342,
        43.6281
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 133603 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28514,
        43.74877
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 134066 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22873,
        43.82491
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 135462 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56046,
        43.68969
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 145132 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43037,
        43.63912
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 145358 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48204,
        43.66467
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 149117 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32069,
        43.77987
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 149339 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35229,
        43.67812
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 149446 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42975,
        43.78616
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 155454 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36419,
        43.80783
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 156347 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56841,
        43.71613
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 157949 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49213,
        43.73718
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 159081 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44314,
        43.66155
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 159306 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.51353,
        43.70367
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 166453 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41868,
        43.77646
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 167937 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16483,
        43.79025
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 168346 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54938,
        43.63309
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 171557 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17379,
        43.75653
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 174015 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25531,
        43.7642
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 178719 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44405,
        43.69797
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 180364 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35051,
        43.74336
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 181479 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45071,
        43.69463
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 181565 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61398,
        43.73333
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 182133 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18924,
        43.77652
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 185311 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23348,
        43.7699
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 185803 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5459,
        43.61033
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 187716 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23422,
        43.74787
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 188439 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21176,
        43.79185
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 189250 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44226,
        43.78265
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 191747 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56379,
        43.72163
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 192119 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.1763,
        43.79433
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 192951 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44871,
        43.68303
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 193183 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.307,
        43.68224
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 193921 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25776,
        43.76573
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 194965 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32094,
        43.74362
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 194997 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42745,
        43.76611
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 196110 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54854,
        43.66413
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 196588 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41622,
        43.79628
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 197517 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17287,
        43.80405
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 198275 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16574,
        43.78761
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 199479 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43523,
        43.66319
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 202511 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32635,
        43.76593
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 202866 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52182,
        43.59206
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 204751 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43391,
        43.67296
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 204774 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5826,
        43.73875
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 204946 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27765,
        43.6955
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 206068 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18303,
        43.79389
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 207868 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33981,
        43.79555
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 208259 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28092,
        43.75821
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 210975 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16782,
        43.77382
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 211587 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.6009,
        43.75425
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 214656 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30222,
        43.76268
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 216061 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22204,
        43.76135
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 216961 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58478,
        43.73067
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 217620 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27434,
        43.81479
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 218329 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46199,
        43.69203
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 219847 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58381,
        43.73879
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 223395 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27298,
        43.70838
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 223674 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24796,
        43.72149
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 223951 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30746,
        43.74688
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 230595 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22388,
        43.76984
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 232403 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57539,
        43.72771
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 233455 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30402,
        43.7323
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 236151 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.61437,
        43.73261
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 236487 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27115,
        43.72424
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 237035 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59809,
        43.73675
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 237390 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43282,
        43.7938
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 238474 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42002,
        43.64456
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 239384 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43024,
        43.72678
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 239935 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33342,
        43.72161
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 240211 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45896,
        43.72118
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 242447 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33323,
        43.80044
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 242561 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35012,
        43.6795
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 245061 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55213,
        43.74794
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 245329 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17945,
        43.7562
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 247421 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4531,
        43.69735
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 248187 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27854,
        43.7512
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 248540 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59504,
        43.75611
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 249415 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22434,
        43.83016
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 251154 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5263,
        43.71202
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 251249 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44696,
        43.67326
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 251560 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.6208,
        43.72205
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 100126 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4086,
        43.67084
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 102702 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16761,
        43.79015
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 102903 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.13489,
        43.78435
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 105955 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56565,
        43.68711
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 106191 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.14556,
        43.78319
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 106815 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57609,
        43.74043
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 107334 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.26445,
        43.78623
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 108087 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45684,
        43.6595
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 108242 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22536,
        43.75044
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 109384 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56628,
        43.67731
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 110336 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4253,
        43.65707
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 110840 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30426,
        43.72292
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 111009 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5507,
        43.65347
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 111025 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27606,
        43.80285
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 111656 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32787,
        43.8001
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 112345 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.51946,
        43.62374
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 112422 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54451,
        43.68835
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 114076 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59014,
        43.75379
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 114085 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46307,
        43.76232
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 114442 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32677,
        43.79849
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 114755 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48879,
        43.72959
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 115421 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25679,
        43.74078
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 116532 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50347,
        43.73733
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 118444 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56073,
        43.72468
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 118803 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43472,
        43.64699
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 121423 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4589,
        43.76349
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 123310 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44761,
        43.68128
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 123599 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56446,
        43.63539
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 126605 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22294,
        43.76362
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 128373 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57425,
        43.72809
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 129555 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25286,
        43.71366
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 129587 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4613,
        43.7644
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 130524 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34843,
        43.79954
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 132386 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23268,
        43.84056
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 134281 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50177,
        43.67791
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 134446 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44277,
        43.78646
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 136197 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48569,
        43.68305
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 137277 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17554,
        43.76566
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 142731 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41855,
        43.67099
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 148460 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20499,
        43.7921
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 150721 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25694,
        43.70815
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 151030 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.52899,
        43.60549
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 154175 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43228,
        43.64348
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 154445 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44306,
        43.66135
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 157017 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55048,
        43.66531
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 157777 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.20499,
        43.7921
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 159691 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45154,
        43.78679
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 159887 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45725,
        43.68489
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 166963 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43448,
        43.65382
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 172359 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2933,
        43.71593
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 176533 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34293,
        43.78688
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 176971 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28866,
        43.82763
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 179660 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44714,
        43.67117
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 181231 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31668,
        43.69646
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 199928 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36975,
        43.79368
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 204280 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43562,
        43.65361
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 204282 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43568,
        43.6536
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 208729 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41863,
        43.66183
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 241741 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29347,
        43.7427
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 145316 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37364,
        43.66666
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 184077 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23443,
        43.83909
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 192598 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57205,
        43.64643
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 174928 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.53467,
        43.69387
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 202775 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40101,
        43.65558
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 206128 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3103,
        43.74433
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 127246 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.38582,
        43.72825
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 104688 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36912,
        43.65804
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 212326 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.28891,
        43.67306
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 210933 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23402,
        43.74958
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 242872 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2143,
        43.81524
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 172758 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.15787,
        43.79949
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 112685 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58375,
        43.72644
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 205764 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.27414,
        43.74444
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 188872 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22713,
        43.79806
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 149396 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34994,
        43.68484
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 154441 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44891,
        43.68029
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "18 233398 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3283,
        43.77856
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 186635 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32414,
        43.66373
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 241977 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39405,
        43.65772
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 175208 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21373,
        43.76332
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 207228 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46256,
        43.70789
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 207335 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.38481,
        43.7059
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 241938 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.15437,
        43.79923
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 179009 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29577,
        43.77358
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 178511 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30206,
        43.79816
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 172812 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.18265,
        43.8117
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 181282 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41463,
        43.66045
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 139564 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43063,
        43.67529
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 180243 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39636,
        43.76742
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 222768 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54966,
        43.60595
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 145484 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44168,
        43.65463
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 214585 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44366,
        43.70336
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 145105 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49414,
        43.6786
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 182422 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5081,
        43.70363
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 191195 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29613,
        43.75445
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 134177 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5825,
        43.7227
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 177992 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.5734,
        43.66314
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 234777 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34762,
        43.787
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 223895 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30992,
        43.76068
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 144409 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50297,
        43.74993
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 191733 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2553,
        43.74648
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 207886 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40815,
        43.66735
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 145798 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29399,
        43.75214
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 151473 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.55624,
        43.73838
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 249506 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.50633,
        43.60379
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 200975 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25419,
        43.77049
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 205864 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22222,
        43.76654
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 217187 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32327,
        43.74846
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 208939 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45139,
        43.76321
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 194787 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31493,
        43.76512
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 147469 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.56909,
        43.63921
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 177202 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29237,
        43.77626
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 193273 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44916,
        43.75926
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 203365 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24355,
        43.75059
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 215292 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32367,
        43.79977
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 192680 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2211,
        43.75646
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 229646 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30907,
        43.68489
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 214633 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25387,
        43.77046
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 181552 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2392,
        43.76093
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 116215 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3597,
        43.74761
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 212580 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43904,
        43.6642
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 212266 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43293,
        43.67358
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 111393 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34911,
        43.69075
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 237582 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41339,
        43.75973
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 217227 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.16111,
        43.79519
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 172687 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.21859,
        43.76757
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "03 103317 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33838,
        43.68256
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 220918 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42604,
        43.69886
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 224642 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30265,
        43.7301
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 230526 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54326,
        43.6025
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 243144 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.49079,
        43.61259
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 226176 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.23056,
        43.83372
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 137395 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45416,
        43.75573
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 120592 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48883,
        43.6815
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 230957 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3259,
        43.67369
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 224410 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58127,
        43.72104
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 135041 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44991,
        43.64443
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 237162 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.13138,
        43.79541
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 201185 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48716,
        43.72819
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 230507 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.24579,
        43.71517
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 161899 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.47576,
        43.72263
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 194121 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22704,
        43.76881
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 214566 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.25839,
        43.74577
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 214120 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41287,
        43.67697
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 100263 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.54663,
        43.66457
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 125371 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.58931,
        43.7538
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 111245 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57122,
        43.73403
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 171920 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42244,
        43.77375
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 166550 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42095,
        43.67945
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 169538 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32598,
        43.67445
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 128071 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41341,
        43.64341
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 128553 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.38329,
        43.77289
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 134799 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40729,
        43.66255
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "15 129910 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44042,
        43.64124
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 224578 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17084,
        43.78948
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 239129 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.1962,
        43.75566
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 203037 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35763,
        43.77587
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 104051 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17826,
        43.76043
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 148336 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.15257,
        43.80073
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 121200 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33619,
        43.78525
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 136847 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42931,
        43.64043
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 189958 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30332,
        43.73945
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 118395 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17588,
        43.79027
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "17 120065 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.59067,
        43.72957
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 112737 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57378,
        43.64629
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 189273 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32504,
        43.79113
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 116757 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.2478,
        43.71852
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 216347 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.22343,
        43.74913
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 227624 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.62493,
        43.72877
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "16 144765 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40347,
        43.7705
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 108046 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.17678,
        43.77652
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 226822 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.57687,
        43.72347
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 115390 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31203,
        43.73193
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 101467 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33398,
        43.6891
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 233832 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44423,
        43.78564
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 144819 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29749,
        43.73731
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 121664 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40275,
        43.66029
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 115060 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32806,
        43.77661
      ]
    }
  }
];
const suitesSecondary = {
  type: type$1,
  name: name$1,
  crs: crs$1,
  features: features$1
};
const BarChartSecondary_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#barChart.svelte-1w5mapt{padding:10px;padding-left:0px;margin:0 auto;width:calc(100% - 30px);max-width:650px;height:370px}#bar.svelte-1w5mapt{stroke:white;stroke-width:1;opacity:1}#label.svelte-1w5mapt{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803)}#labelBar.svelte-1w5mapt{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803)}#yearLabelWeb.svelte-1w5mapt{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803)}#yearLabelMobile.svelte-1w5mapt{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803);opacity:0}@media(max-width: 500px){#yearLabelWeb.svelte-1w5mapt{opacity:0\n        }#yearLabelMobile.svelte-1w5mapt{opacity:1}}#title.svelte-1w5mapt{font-size:17px;font-family:'Ubuntu Mono', monospace;font-weight:700;fill:rgba(255, 255, 255, 0.99)}",
  map: null
};
function barHeight$1(amount) {
  return amount * 270 / 200;
}
function barY$1(amount) {
  return 270 - barHeight$1(amount);
}
const BarChartSecondary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svgWidth;
  let xScale;
  let divWidth;
  let yearCountsSecondary = Object.fromEntries(rollup(suitesSecondary.features, (v) => v.length, (d) => d.properties.year));
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
  console.log(sumValues(yearCountsSecondary));
  let years = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023"
  ];
  $$result.css.add(css$5);
  svgWidth = divWidth - 22;
  xScale = scaleBand().domain(years).range([0, svgWidth - 50]).paddingInner(0.37).paddingOuter(0.37);
  return `<div id="${"barChart"}" class="${"svelte-1w5mapt"}"><svg height="${"370"}"${add_attribute("width", svgWidth, 0)} id="${"svgChart"}" class="${"svelte-1w5mapt"}"><text x="${"50"}" y="${"13"}" id="${"title"}" class="${"svelte-1w5mapt"}">Closed &quot;Second Suite (New)&quot;</text><text x="${"50"}" y="${"33"}" id="${"title"}" class="${"svelte-1w5mapt"}">Building Permits by Year</text><pattern id="${"pattern-lines"}" x="${"0"}" y="${"0"}" width="${"10"}" height="${"10"}" patternUnits="${"userSpaceOnUse"}"><rect x="${"0"}" y="${"0"}" height="${"10"}" width="${"10"}" style="${"fill:#AB1368;"}"></rect><line x1="${"0"}" y1="${"0"}" x2="${"10"}" y2="${"10"}" style="${"stroke:white;stroke-width:1"}"></line></pattern>${each(years, (year) => {
    return `<rect id="${"bar"}"${add_attribute("x", 50 + xScale(year), 0)}${add_attribute("y", 60 + barY$1(yearCountsSecondary[year]), 0)}${add_attribute("width", xScale.bandwidth(), 0)}${add_attribute("height", barHeight$1(yearCountsSecondary[year]), 0)} fill="${"url(#pattern-lines)"}" class="${"svelte-1w5mapt"}"></rect>

            <line${add_attribute("x1", 50 + xScale(year) + xScale.bandwidth() / 2, 0)}${add_attribute("x2", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y1="${"330"}" y2="${"333"}" style="${"stroke:white;stroke-width:1"}"></line>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)}${add_attribute("y", 57 + barY$1(yearCountsSecondary[year]), 0)} id="${"labelBar"}" text-anchor="${"middle"}" class="${"svelte-1w5mapt"}">${escape(yearCountsSecondary[year])}</text>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y="${"345"}" id="${"yearLabelWeb"}" text-anchor="${"middle"}" class="${"svelte-1w5mapt"}">${escape(year)}</text>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y="${"345"}" id="${"yearLabelMobile"}" text-anchor="${"middle"}" transform="${"rotate(-45," + escape(57 + xScale(year) + xScale.bandwidth() / 2, true) + ",354)"}" class="${"svelte-1w5mapt"}">${escape(year)}</text>`;
  })}<line x1="${"50"}" y1="${"330"}"${add_attribute("x2", svgWidth, 0)} y2="${"330"}" style="${"stroke:white;stroke-width:1"}"></line><text x="${"40"}" y="${"333"}" id="${"label"}" class="${"svelte-1w5mapt"}">0</text><line x1="${"50"}" y1="${"262.5"}"${add_attribute("x2", svgWidth, 0)} y2="${"262.5"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"33"}" y="${"266"}" id="${"label"}" class="${"svelte-1w5mapt"}">50</text><line x1="${"50"}" y1="${"195"}"${add_attribute("x2", svgWidth, 0)} y2="${"195"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"25"}" y="${"200"}" id="${"label"}" class="${"svelte-1w5mapt"}">100</text><line x1="${"50"}" y1="${"127.5"}"${add_attribute("x2", svgWidth, 0)} y2="${"127.5"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"25"}" y="${"132"}" id="${"label"}" class="${"svelte-1w5mapt"}">150</text><line x1="${"50"}" y1="${"50"}"${add_attribute("x2", svgWidth, 0)} y2="${"50"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"25"}" y="${"55"}" id="${"label"}" class="${"svelte-1w5mapt"}">200</text></svg>

</div>`;
});
const type = "FeatureCollection";
const name = "laneway-garden-suites-072023update";
const crs = {
  type: "name",
  properties: {
    name: "urn:ogc:def:crs:OGC:1.3:CRS84"
  }
};
const features = [
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 160261 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34194,
        43.68308
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 164771 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42679,
        43.64535
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 169095 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43022,
        43.66737
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 169162 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42272,
        43.65851
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 182923 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42215,
        43.6423
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 184945 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32825,
        43.67916
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 228441 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.30275,
        43.69065
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 240032 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40847,
        43.65179
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 240442 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42325,
        43.68293
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 146777 BLD",
      year: "2020"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42649,
        43.68209
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 148761 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40713,
        43.6615
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 214211 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34269,
        43.6824
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 204168 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44244,
        43.66573
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 148107 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41826,
        43.65801
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 116552 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31582,
        43.68263
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 187892 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34012,
        43.68154
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 168276 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31022,
        43.68552
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 197182 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32192,
        43.66716
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 172903 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44253,
        43.66059
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 161500 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46571,
        43.67964
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 159736 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3324,
        43.68108
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 176687 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41147,
        43.64389
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 120957 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44999,
        43.6789
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 132858 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29694,
        43.67839
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 128430 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44481,
        43.64223
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 220320 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.3409,
        43.68028
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 195590 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42205,
        43.68323
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 201736 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46574,
        43.67968
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 150832 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44987,
        43.67893
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 147445 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41821,
        43.66227
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 143469 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44154,
        43.65547
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 144494 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35012,
        43.6795
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 220876 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42631,
        43.67037
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 229104 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45136,
        43.66332
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 114063 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42037,
        43.6613
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 262547 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35228,
        43.67095
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 116519 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34634,
        43.67964
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 227917 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41926,
        43.66868
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 240520 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33821,
        43.6796
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 117953 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33319,
        43.67043
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 104043 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40626,
        43.64381
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 101789 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34369,
        43.67728
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 160431 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33888,
        43.66724
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 186271 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41898,
        43.67148
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 189117 BLD",
      year: "2021"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41151,
        43.65979
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 173786 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34749,
        43.66992
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 231800 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4505,
        43.64858
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 254598 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39702,
        43.6543
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 122356 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42845,
        43.66824
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 132717 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44147,
        43.64052
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 138131 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4397,
        43.64224
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 142369 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34214,
        43.69275
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 143816 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39302,
        43.65145
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 153894 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41897,
        43.67143
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 155082 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4308,
        43.66455
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 160736 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44455,
        43.64455
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 165834 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4154,
        43.6719
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 179881 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4899,
        43.66824
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 180122 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43223,
        43.67189
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 195738 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4216,
        43.68036
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 196282 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42167,
        43.68035
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 196379 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42578,
        43.64484
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 206333 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.39045,
        43.68332
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 213993 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42959,
        43.65769
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 225601 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36734,
        43.66472
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 104148 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33949,
        43.66631
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 116024 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43225,
        43.66177
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 120409 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33886,
        43.67898
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 129422 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.316,
        43.68214
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 135210 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44911,
        43.64834
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 145305 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43496,
        43.66497
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 148896 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34789,
        43.65763
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 150593 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42414,
        43.64514
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 154741 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.46772,
        43.68695
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 154897 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42039,
        43.66912
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 155265 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45205,
        43.67049
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 156117 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42326,
        43.683
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 164018 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43536,
        43.67232
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 166082 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41189,
        43.65728
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 168282 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29165,
        43.68474
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 168828 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4312,
        43.66715
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 171303 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41812,
        43.66578
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 180066 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41312,
        43.6638
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 182295 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42065,
        43.67951
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 184061 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34322,
        43.65972
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 184268 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.38788,
        43.70436
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 204362 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.31397,
        43.68484
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 206729 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34466,
        43.67628
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 217331 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44997,
        43.65069
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 239668 BLD",
      year: "2022"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43385,
        43.64582
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 185670 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.37322,
        43.65985
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 249621 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48188,
        43.66097
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 197266 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36998,
        43.66595
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 203532 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40229,
        43.65266
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 189446 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4581,
        43.67691
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 102957 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40682,
        43.66074
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 135543 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45698,
        43.66534
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 160421 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45332,
        43.66611
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 147550 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41407,
        43.6516
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 250938 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44527,
        43.64625
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 243859 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42552,
        43.6587
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 167921 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36794,
        43.6662
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 134148 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4379,
        43.64847
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 159667 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44643,
        43.67623
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 120719 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.40419,
        43.66038
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 207174 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36306,
        43.66641
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 205021 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41046,
        43.65049
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 214146 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44135,
        43.69683
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 184922 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42355,
        43.67468
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 221005 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34284,
        43.67113
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 113763 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33896,
        43.66081
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 255117 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33533,
        43.68163
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 209366 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.41301,
        43.67622
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 209376 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4088,
        43.66605
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 122924 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44871,
        43.65918
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 248486 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.29648,
        43.68186
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 205593 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4392,
        43.65997
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 181065 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.321,
        43.69197
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 140335 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32066,
        43.69226
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 111052 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48653,
        43.65682
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 154516 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4595,
        43.65633
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 125186 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.33716,
        43.67523
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 155673 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.51712,
        43.70612
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "19 243644 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.43047,
        43.67311
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 127657 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.45346,
        43.68566
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 165772 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42218,
        43.64239
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 128247 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36361,
        43.7071
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 129016 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.35373,
        43.67668
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 209999 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34145,
        43.65846
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 210057 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.34143,
        43.65843
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 146413 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.44774,
        43.68373
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 169109 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.48341,
        43.65871
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "20 209706 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4062,
        43.65918
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 130718 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.4883,
        43.65703
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 168985 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.353,
        43.67079
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "22 119548 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.32962,
        43.66708
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "23 116840 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.36324,
        43.71571
      ]
    }
  },
  {
    type: "Feature",
    properties: {
      PERMIT_NUM: "21 194808 BLD",
      year: "2023"
    },
    geometry: {
      type: "Point",
      coordinates: [
        -79.42327,
        43.67917
      ]
    }
  }
];
const suitesLaneway = {
  type,
  name,
  crs,
  features
};
const BarChartLaneway_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "#barChart.svelte-1xh900h{padding:10px;padding-left:0px;margin:0 auto;width:calc(100% - 30px);max-width:650px;height:170px}#bar.svelte-1xh900h{stroke:white;stroke-width:1;opacity:1}#label.svelte-1xh900h{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803)}#labelBar.svelte-1xh900h{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803)}#yearLabelWeb.svelte-1xh900h{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803)}#yearLabelMobile.svelte-1xh900h{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803);opacity:0}@media(max-width: 500px){#yearLabelWeb.svelte-1xh900h{opacity:0\n        }#yearLabelMobile.svelte-1xh900h{opacity:1}}#title.svelte-1xh900h{font-size:17px;font-family:'Ubuntu Mono', monospace;font-weight:700;fill:rgba(255, 255, 255, 0.99)}",
  map: null
};
function barHeight(amount) {
  return amount * 270 / 200;
}
function barY(amount) {
  return 270 * 0.25 - barHeight(amount);
}
const BarChartLaneway = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svgWidth;
  let xScale;
  let divWidth;
  let yearCountsLaneway = Object.fromEntries(rollup(suitesLaneway.features, (v) => v.length, (d) => d.properties.year));
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
  console.log(sumValues(yearCountsLaneway));
  let years = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023"
  ];
  $$result.css.add(css$4);
  svgWidth = divWidth - 22;
  xScale = scaleBand().domain(years).range([0, svgWidth - 50]).paddingInner(0.37).paddingOuter(0.37);
  return `<div id="${"barChart"}" class="${"svelte-1xh900h"}"><svg height="${"160"}"${add_attribute("width", svgWidth, 0)} id="${"svgChart"}" class="${"svelte-1xh900h"}"><text x="${"50"}" y="${"13"}" id="${"title"}" class="${"svelte-1xh900h"}">Closed &quot;New Laneway / Rear Yard</text><text x="${"50"}" y="${"33"}" id="${"title"}" class="${"svelte-1xh900h"}">Suite&quot; Building Permits by Year</text><pattern id="${"pattern-lines-green"}" x="${"0"}" y="${"0"}" width="${"10"}" height="${"10"}" patternUnits="${"userSpaceOnUse"}"><rect x="${"0"}" y="${"0"}" height="${"10"}" width="${"10"}" style="${"fill:#F1C500;"}"></rect><line x1="${"0"}" y1="${"0"}" x2="${"10"}" y2="${"10"}" style="${"stroke:white;stroke-width:1"}"></line></pattern>${each(years, (year) => {
    return `<rect id="${"bar"}"${add_attribute("x", 50 + xScale(year), 0)}${add_attribute("y", 60 + barY(yearCountsLaneway[year]), 0)}${add_attribute("width", xScale.bandwidth(), 0)}${add_attribute("height", barHeight(yearCountsLaneway[year]), 0)} fill="${"url(#pattern-lines-green)"}" class="${"svelte-1xh900h"}"></rect>

            <line${add_attribute("x1", 50 + xScale(year) + xScale.bandwidth() / 2, 0)}${add_attribute("x2", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y1="${"127.5"}" y2="${"130.5"}" style="${"stroke:white;stroke-width:1"}"></line>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)}${add_attribute("y", 57 + barY(yearCountsLaneway[year]), 0)} id="${"labelBar"}" text-anchor="${"middle"}" class="${"svelte-1xh900h"}">${escape(yearCountsLaneway[year])}</text>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y="${"142.5"}" id="${"yearLabelWeb"}" text-anchor="${"middle"}" class="${"svelte-1xh900h"}">${escape(year)}</text>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y="${"142.5"}" id="${"yearLabelMobile"}" text-anchor="${"middle"}" transform="${"rotate(-45," + escape(57 + xScale(year) + xScale.bandwidth() / 2, true) + ",151)"}" class="${"svelte-1xh900h"}">${escape(year)}</text>`;
  })}<line x1="${"50"}" y1="${"127.5"}"${add_attribute("x2", svgWidth, 0)} y2="${"127.5"}" style="${"stroke:white;stroke-width:1;opacity:1"}"></line><text x="${"40"}" y="${"132"}" id="${"label"}" class="${"svelte-1xh900h"}">0</text><line x1="${"50"}" y1="${"50"}"${add_attribute("x2", svgWidth, 0)} y2="${"50"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"33"}" y="${"55"}" id="${"label"}" class="${"svelte-1xh900h"}">50</text></svg>

</div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const RangePips_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".rangeSlider{--pip:var(--range-pip, lightslategray);--pip-text:var(--range-pip-text, var(--pip));--pip-active:var(--range-pip-active, darkslategrey);--pip-active-text:var(--range-pip-active-text, var(--pip-active));--pip-hover:var(--range-pip-hover, darkslategrey);--pip-hover-text:var(--range-pip-hover-text, var(--pip-hover));--pip-in-range:var(--range-pip-in-range, var(--pip-active));--pip-in-range-text:var(--range-pip-in-range-text, var(--pip-active-text))}.rangePips{position:absolute;height:1em;left:0;right:0;bottom:-1em}.rangePips.vertical{height:auto;width:1em;left:100%;right:auto;top:0;bottom:0}.rangePips .pip{height:0.4em;position:absolute;top:0.25em;width:1px;white-space:nowrap}.rangePips.vertical .pip{height:1px;width:0.4em;left:0.25em;top:auto;bottom:auto}.rangePips .pipVal{position:absolute;top:0.4em;transform:translate(-50%, 25%)}.rangePips.vertical .pipVal{position:absolute;top:0;left:0.4em;transform:translate(25%, -50%)}.rangePips .pip{transition:all 0.15s ease}.rangePips .pipVal{transition:all 0.15s ease, font-weight 0s linear}.rangePips .pip{color:lightslategray;color:var(--pip-text);background-color:lightslategray;background-color:var(--pip)}.rangePips .pip.selected{color:darkslategrey;color:var(--pip-active-text);background-color:darkslategrey;background-color:var(--pip-active)}.rangePips.hoverable:not(.disabled) .pip:hover{color:darkslategrey;color:var(--pip-hover-text);background-color:darkslategrey;background-color:var(--pip-hover)}.rangePips .pip.in-range{color:darkslategrey;color:var(--pip-in-range-text);background-color:darkslategrey;background-color:var(--pip-in-range)}.rangePips .pip.selected{height:0.75em}.rangePips.vertical .pip.selected{height:1px;width:0.75em}.rangePips .pip.selected .pipVal{font-weight:bold;top:0.75em}.rangePips.vertical .pip.selected .pipVal{top:0;left:0.75em}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover{transition:none}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover .pipVal{transition:none;font-weight:bold}",
  map: null
};
const RangePips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pipStep;
  let pipCount;
  let pipVal;
  let isSelected;
  let inRange;
  let { range = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = true } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i) => v } = $$props;
  let { focus = void 0 } = $$props;
  let { orientationStart = void 0 } = $$props;
  let { percentOf = void 0 } = $$props;
  let { moveHandle = void 0 } = $$props;
  let { fixFloat = void 0 } = $$props;
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0)
    $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0)
    $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0)
    $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0)
    $$bindings.rest(rest);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.orientationStart === void 0 && $$bindings.orientationStart && orientationStart !== void 0)
    $$bindings.orientationStart(orientationStart);
  if ($$props.percentOf === void 0 && $$bindings.percentOf && percentOf !== void 0)
    $$bindings.percentOf(percentOf);
  if ($$props.moveHandle === void 0 && $$bindings.moveHandle && moveHandle !== void 0)
    $$bindings.moveHandle(moveHandle);
  if ($$props.fixFloat === void 0 && $$bindings.fixFloat && fixFloat !== void 0)
    $$bindings.fixFloat(fixFloat);
  $$result.css.add(css$3);
  pipStep = pipstep || ((max - min) / step >= (vertical ? 50 : 100) ? (max - min) / (vertical ? 10 : 20) : 1);
  pipCount = parseInt((max - min) / (step * pipStep), 10);
  pipVal = function(val) {
    return fixFloat(min + val * step * pipStep);
  };
  isSelected = function(val) {
    return values.some((v) => fixFloat(v) === fixFloat(val));
  };
  inRange = function(val) {
    if (range === "min") {
      return values[0] > val;
    } else if (range === "max") {
      return values[0] < val;
    } else if (range) {
      return values[0] < val && values[1] > val;
    }
  };
  return `
<div class="${[
    "rangePips",
    (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + " " + (focus ? "focus" : "")
  ].join(" ").trim()}">${all && first !== false || first ? `<span class="${[
    "pip first",
    (isSelected(min) ? "selected" : "") + " " + (inRange(min) ? "in-range" : "")
  ].join(" ").trim()}" style="${escape(orientationStart, true) + ": 0%;"}">${all === "label" || first === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${escape(prefix)}</span>` : ``}${escape(formatter(fixFloat(min), 0, 0))}${suffix ? `<span class="${"pipVal-suffix"}">${escape(suffix)}</span>` : ``}</span>` : ``}</span>` : ``}

  ${all && rest !== false || rest ? `${each(Array(pipCount + 1), (_, i) => {
    return `${pipVal(i) !== min && pipVal(i) !== max ? `<span class="${[
      "pip",
      (isSelected(pipVal(i)) ? "selected" : "") + " " + (inRange(pipVal(i)) ? "in-range" : "")
    ].join(" ").trim()}" style="${escape(orientationStart, true) + ": " + escape(percentOf(pipVal(i)), true) + "%;"}">${all === "label" || rest === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${escape(prefix)}</span>` : ``}${escape(formatter(pipVal(i), i, percentOf(pipVal(i))))}${suffix ? `<span class="${"pipVal-suffix"}">${escape(suffix)}</span>` : ``}
            </span>` : ``}
        </span>` : ``}`;
  })}` : ``}

  ${all && last !== false || last ? `<span class="${[
    "pip last",
    (isSelected(max) ? "selected" : "") + " " + (inRange(max) ? "in-range" : "")
  ].join(" ").trim()}" style="${escape(orientationStart, true) + ": 100%;"}">${all === "label" || last === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${escape(prefix)}</span>` : ``}${escape(formatter(fixFloat(max), pipCount, 100))}${suffix ? `<span class="${"pipVal-suffix"}">${escape(suffix)}</span>` : ``}</span>` : ``}</span>` : ``}</div>`;
});
const RangeSlider_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.rangeSlider{--slider:var(--range-slider, #d7dada);--handle-inactive:var(--range-handle-inactive, #99a2a2);--handle:var(--range-handle, #838de7);--handle-focus:var(--range-handle-focus, #4a40d4);--handle-border:var(--range-handle-border, var(--handle));--range-inactive:var(--range-range-inactive, var(--handle-inactive));--range:var(--range-range, var(--handle-focus));--float-inactive:var(--range-float-inactive, var(--handle-inactive));--float:var(--range-float, var(--handle-focus));--float-text:var(--range-float-text, white)}.rangeSlider{position:relative;border-radius:100px;height:0.5em;margin:1em;transition:opacity 0.2s ease;user-select:none}.rangeSlider *{user-select:none}.rangeSlider.pips{margin-bottom:1.8em}.rangeSlider.pip-labels{margin-bottom:2.8em}.rangeSlider.vertical{display:inline-block;border-radius:100px;width:0.5em;min-height:200px}.rangeSlider.vertical.pips{margin-right:1.8em;margin-bottom:1em}.rangeSlider.vertical.pip-labels{margin-right:2.8em;margin-bottom:1em}.rangeSlider .rangeHandle{position:absolute;display:block;height:1.4em;width:1.4em;top:0.25em;bottom:auto;transform:translateY(-50%) translateX(-50%);outline-offset:2px;outline:2px solid transparent;border-radius:100px;z-index:2}.rangeSlider.reversed .rangeHandle{transform:translateY(-50%) translateX(50%)}.rangeSlider.vertical .rangeHandle{left:0.25em;top:auto;transform:translateY(50%) translateX(-50%)}.rangeSlider.vertical.reversed .rangeHandle{transform:translateY(-50%) translateX(-50%)}.rangeSlider .rangeNub,.rangeSlider .rangeHandle:before{position:absolute;left:0;top:0;display:block;border-radius:10em;height:100%;width:100%;transition:box-shadow 0.2s ease}.rangeSlider .rangeHandle:before{content:"";left:1px;top:1px;bottom:1px;right:1px;height:auto;width:auto;box-shadow:0 0 0 0px var(--handle-border);opacity:0}.rangeSlider.hoverable:not(.disabled) .rangeHandle:hover:before{box-shadow:0 0 0 8px var(--handle-border);opacity:0.2}.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:before,.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:hover:before{box-shadow:0 0 0 12px var(--handle-border);opacity:0.4}.rangeSlider.range .rangeNub{border-radius:10em 10em 10em 1.6em}.rangeSlider.range.min .rangeNub{border-radius:10em  1.6em 10em 10em}.rangeSlider.range .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(-135deg)}.rangeSlider.range .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-135deg)}.rangeSlider.range.vertical .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(135deg)}.rangeSlider.range.vertical .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(135deg)}.rangeSlider .rangeFloat{display:block;position:absolute;left:50%;top:-0.5em;transform:translate(-50%, -100%);font-size:1em;text-align:center;opacity:0;pointer-events:none;white-space:nowrap;transition:all 0.2s ease;font-size:0.9em;padding:0.2em 0.4em;border-radius:0.2em}.rangeSlider .rangeHandle.active .rangeFloat,.rangeSlider.hoverable .rangeHandle:hover .rangeFloat{opacity:1;top:-0.2em;transform:translate(-50%, -100%)}.rangeSlider .rangeHandle.active:focus-visible .rangeFloat{top:-0.35em}.rangeSlider .rangeBar{position:absolute;display:block;transition:background 0.2s ease;border-radius:1em;height:0.5em;top:0;user-select:none;z-index:1}.rangeSlider.vertical .rangeBar{width:0.5em;height:auto}.rangeSlider{background-color:#d7dada;background-color:var(--slider)}.rangeSlider .rangeBar{background-color:#99a2a2;background-color:var(--range-inactive)}.rangeSlider.focus .rangeBar{background-color:#838de7;background-color:var(--range)}.rangeSlider .rangeNub{background-color:#99a2a2;background-color:var(--handle-inactive)}.rangeSlider.focus .rangeNub{background-color:#838de7;background-color:var(--handle)}.rangeSlider .rangeHandle.active .rangeNub{background-color:#4a40d4;background-color:var(--handle-focus)}.rangeSlider .rangeFloat{color:white;color:var(--float-text);background-color:#99a2a2;background-color:var(--float-inactive)}.rangeSlider.focus .rangeFloat{background-color:#4a40d4;background-color:var(--float)}.rangeSlider.disabled{opacity:0.5}.rangeSlider.disabled .rangeNub{background-color:#d7dada;background-color:var(--slider)}.rangeSlider .rangeHandle:focus{outline:none}.rangeSlider .rangeHandle:focus-visible{outline:2px solid #334}@supports not selector(:focus-visible){.rangeSlider .rangeHandle:focus{outline:1px solid #334;outline-offset:1px}}',
  map: null
};
const RangeSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let percentOf;
  let clampValue;
  let alignValueToStep;
  let orientationStart;
  let orientationEnd;
  let $springPositions, $$unsubscribe_springPositions = noop, $$subscribe_springPositions = () => ($$unsubscribe_springPositions(), $$unsubscribe_springPositions = subscribe(springPositions, ($$value) => $springPositions = $$value), springPositions);
  let { slider = void 0 } = $$props;
  let { range = false } = $$props;
  let { pushy = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { float = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pips = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = void 0 } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i, p) => v } = $$props;
  let { handleFormatter = formatter } = $$props;
  let { precision = 2 } = $$props;
  let { springValues = { stiffness: 0.15, damping: 0.4 } } = $$props;
  const dispatch = createEventDispatcher();
  let valueLength = 0;
  let focus = false;
  let activeHandle = values.length - 1;
  let startValue;
  let previousValue;
  let springPositions;
  const fixFloat = (v) => parseFloat(v.toFixed(precision));
  function trimRange(values2) {
    if (range === "min" || range === "max") {
      return values2.slice(0, 1);
    } else if (range) {
      return values2.slice(0, 2);
    } else {
      return values2;
    }
  }
  function moveHandle(index, value) {
    value = alignValueToStep(value);
    if (typeof index === "undefined") {
      index = activeHandle;
    }
    if (range) {
      if (index === 0 && value > values[1]) {
        if (pushy) {
          values[1] = value;
        } else {
          value = values[1];
        }
      } else if (index === 1 && value < values[0]) {
        if (pushy) {
          values[0] = value;
        } else {
          value = values[0];
        }
      }
    }
    if (values[index] !== value) {
      values[index] = value;
    }
    if (previousValue !== value) {
      eChange();
      previousValue = value;
    }
    return value;
  }
  function rangeStart(values2) {
    if (range === "min") {
      return 0;
    } else {
      return values2[0];
    }
  }
  function rangeEnd(values2) {
    if (range === "max") {
      return 0;
    } else if (range === "min") {
      return 100 - values2[0];
    } else {
      return 100 - values2[1];
    }
  }
  function eChange() {
    !disabled && dispatch("change", {
      activeHandle,
      startValue,
      previousValue: typeof previousValue === "undefined" ? startValue : previousValue,
      value: values[activeHandle],
      values: values.map((v) => alignValueToStep(v))
    });
  }
  if ($$props.slider === void 0 && $$bindings.slider && slider !== void 0)
    $$bindings.slider(slider);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.pushy === void 0 && $$bindings.pushy && pushy !== void 0)
    $$bindings.pushy(pushy);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0)
    $$bindings.float(float);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.pips === void 0 && $$bindings.pips && pips !== void 0)
    $$bindings.pips(pips);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0)
    $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0)
    $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0)
    $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0)
    $$bindings.rest(rest);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.handleFormatter === void 0 && $$bindings.handleFormatter && handleFormatter !== void 0)
    $$bindings.handleFormatter(handleFormatter);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0)
    $$bindings.precision(precision);
  if ($$props.springValues === void 0 && $$bindings.springValues && springValues !== void 0)
    $$bindings.springValues(springValues);
  $$result.css.add(css$2);
  clampValue = function(val) {
    return val <= min ? min : val >= max ? max : val;
  };
  alignValueToStep = function(val) {
    if (val <= min) {
      return fixFloat(min);
    } else if (val >= max) {
      return fixFloat(max);
    }
    let remainder = (val - min) % step;
    let aligned = val - remainder;
    if (Math.abs(remainder) * 2 >= step) {
      aligned += remainder > 0 ? step : -step;
    }
    aligned = clampValue(aligned);
    return fixFloat(aligned);
  };
  percentOf = function(val) {
    let perc = (val - min) / (max - min) * 100;
    if (isNaN(perc) || perc <= 0) {
      return 0;
    } else if (perc >= 100) {
      return 100;
    } else {
      return fixFloat(perc);
    }
  };
  {
    {
      if (!Array.isArray(values)) {
        values = [(max + min) / 2];
        console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)");
      }
      values = trimRange(values.map((v) => alignValueToStep(v)));
      if (valueLength !== values.length) {
        $$subscribe_springPositions(springPositions = spring(values.map((v) => percentOf(v)), springValues));
      } else {
        springPositions.set(values.map((v) => percentOf(v)));
      }
      valueLength = values.length;
    }
  }
  orientationStart = vertical ? reversed ? "top" : "bottom" : reversed ? "right" : "left";
  orientationEnd = vertical ? reversed ? "bottom" : "top" : reversed ? "left" : "right";
  $$unsubscribe_springPositions();
  return `<div${add_attribute("id", id, 0)} class="${[
    "rangeSlider",
    (range ? "range" : "") + " " + (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + "  " + (range === "min" ? "min" : "") + " " + (range === "max" ? "max" : "") + " " + (pips ? "pips" : "") + " " + (all === "label" || first === "label" || last === "label" || rest === "label" ? "pip-labels" : "")
  ].join(" ").trim()}"${add_attribute("this", slider, 0)}>${each(values, (value, index) => {
    return `<span role="${"slider"}" class="${[
      "rangeHandle",
      " "
    ].join(" ").trim()}"${add_attribute("data-handle", index, 0)} style="${escape(orientationStart, true) + ": " + escape($springPositions[index], true) + "%; z-index: " + escape(activeHandle === index ? 3 : 2, true) + ";"}"${add_attribute("aria-valuemin", range === true && index === 1 ? values[0] : min, 0)}${add_attribute("aria-valuemax", range === true && index === 0 ? values[1] : max, 0)}${add_attribute("aria-valuenow", value, 0)} aria-valuetext="${escape(prefix, true) + escape(handleFormatter(value, index, percentOf(value)), true) + escape(suffix, true)}"${add_attribute("aria-orientation", vertical ? "vertical" : "horizontal", 0)}${add_attribute("aria-disabled", disabled, 0)} ${disabled ? "disabled" : ""}${add_attribute("tabindex", disabled ? -1 : 0, 0)}><span class="${"rangeNub"}"></span>
      ${float ? `<span class="${"rangeFloat"}">${prefix ? `<span class="${"rangeFloat-prefix"}">${escape(prefix)}</span>` : ``}${escape(handleFormatter(value, index, percentOf(value)))}${suffix ? `<span class="${"rangeFloat-suffix"}">${escape(suffix)}</span>` : ``}
        </span>` : ``}
    </span>`;
  })}
  ${range ? `<span class="${"rangeBar"}" style="${escape(orientationStart, true) + ": " + escape(rangeStart($springPositions), true) + "%; " + escape(orientationEnd, true) + ": " + escape(rangeEnd($springPositions), true) + "%;"}"></span>` : ``}
  ${pips ? `${validate_component(RangePips, "RangePips").$$render(
    $$result,
    {
      values,
      min,
      max,
      step,
      range,
      vertical,
      reversed,
      orientationStart,
      hoverable,
      disabled,
      all,
      first,
      last,
      rest,
      pipstep,
      prefix,
      suffix,
      formatter,
      focus,
      percentOf,
      moveHandle,
      fixFloat
    },
    {},
    {}
  )}` : ``}</div>

`;
});
const xSecondary = "/gentle-density/_app/immutable/assets/x-secondary-5d09d70d.svg";
const xRearYard = "/gentle-density/_app/immutable/assets/x-rearyard-41c3e78f.svg";
const Map_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#map.svelte-1vzqokm.svelte-1vzqokm{width:100%;border-top:1px solid var(--brandLightBlue);border-bottom:1px solid var(--brandLightBlue)}#top-bar.svelte-1vzqokm.svelte-1vzqokm{width:calc(100% - 36px);background-color:var(--brandDarkBlue);background-size:13px 13px;background-image:repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);color:white;font-size:17px;font-family:'Ubuntu Mono', monospace;padding:18px;padding-top:28px;padding-bottom:8px;font-weight:bold}#top-bar.svelte-1vzqokm p.svelte-1vzqokm{max-width:720px;width:100%;margin:0 auto}#options-wrapper.svelte-1vzqokm.svelte-1vzqokm{width:100%;padding-bottom:15px;background-color:var(--brandDarkBlue);background-size:13px 13px;background-image:repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%)}#options.svelte-1vzqokm.svelte-1vzqokm{margin:0 auto;padding-top:7px;width:100%;max-width:650px}#options.svelte-1vzqokm p.svelte-1vzqokm{color:white;font-size:17px;font-family:'Ubuntu Mono', monospace;max-width:620px;width:inheret;margin:0 auto;padding-right:0px;padding-left:18px;padding-top:7px;padding-bottom:7px;text-decoration:underline;text-decoration-color:#8EB6DC}#pointLayers.svelte-1vzqokm.svelte-1vzqokm{color:white;padding:10px;padding-left:16px;padding-bottom:1px;font-size:17px;font-family:'Ubuntu Mono', monospace;font-weight:400;overflow:hidden}#rearYardButton.svelte-1vzqokm.svelte-1vzqokm{float:left;margin-right:20px;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#secondaryButton.svelte-1vzqokm.svelte-1vzqokm{overflow:hidden;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#lanewayButton.svelte-1vzqokm.svelte-1vzqokm{float:left;margin-right:20px;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#incomeButton.svelte-1vzqokm.svelte-1vzqokm{overflow:hidden;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#resYellowButton.svelte-1vzqokm.svelte-1vzqokm{float:left;margin-right:20px;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#resOtherButton.svelte-1vzqokm.svelte-1vzqokm{overflow:hidden;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#rearYardButton.svelte-1vzqokm.svelte-1vzqokm:hover{opacity:1;background-color:var(--brandDarkBlue)}#secondaryButton.svelte-1vzqokm.svelte-1vzqokm:hover{opacity:1;background-color:var(--brandDarkBlue)}#resYellowButton.svelte-1vzqokm.svelte-1vzqokm:hover{opacity:1;background-color:var(--brandDarkBlue)}#resOtherButton.svelte-1vzqokm.svelte-1vzqokm:hover{opacity:1;background-color:var(--brandDarkBlue)}#lanewayButton.svelte-1vzqokm.svelte-1vzqokm:hover{opacity:1;background-color:var(--brandDarkBlue)}#incomeButton.svelte-1vzqokm.svelte-1vzqokm:hover{opacity:1;background-color:var(--brandDarkBlue)}.layerOn.svelte-1vzqokm.svelte-1vzqokm{opacity:1}.layerOff.svelte-1vzqokm.svelte-1vzqokm{opacity:0.42}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let values = [2020, 2023];
  mapboxgl.accessToken = "pk.eyJ1Ijoic2Nob29sb2ZjaXRpZXMiLCJhIjoiY2xqOG0zbTQ1MTAzdTNkbnY2OGluMHJ0byJ9.yX_EB8JqRsIRufOOu8LjeQ";
  let mapHeight = 760;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        mapHeight = 760;
      }
    }
    $$rendered = `

<div id="${"top-bar"}" class="${"svelte-1vzqokm"}"><p class="${"svelte-1vzqokm"}">Location of rear-yard and secondary suite building permits in Toronto:</p></div>

<div id="${"map"}" style="${"height: " + escape(mapHeight, true) + "px"}" class="${"svelte-1vzqokm"}"></div>

<div id="${"options-wrapper"}" class="${"svelte-1vzqokm"}"><div id="${"options"}" class="${"svelte-1vzqokm"}"><p class="${"svelte-1vzqokm"}">Closed (i.e. Cleared) Building Permits:</p>
        
        <div id="${"pointLayers"}" class="${"svelte-1vzqokm"}"><div id="${"rearYardButton"}" class="${escape(null_to_empty("layerOn"), true) + " svelte-1vzqokm"}"><svg width="${"20"}" height="${"10"}"><circle style="${"fill:#F1C500;stroke-width:2;stroke:#fff"}" cx="${"15"}" cy="${"5"}" r="${"4"}"></circle></svg>
                Rear-Yard Suites
            </div>

            <div id="${"secondaryButton"}" class="${escape(null_to_empty("layerOn"), true) + " svelte-1vzqokm"}"><svg width="${"20"}" height="${"10"}"><circle style="${"fill:#ab1269;stroke-width:2;stroke:#fff"}" cx="${"15"}" cy="${"5"}" r="${"4"}"></circle></svg>
                Secondary Suites
            </div></div>

        ${validate_component(RangeSlider, "RangeSlider").$$render(
      $$result,
      {
        range: true,
        pips: true,
        all: "label",
        step: 1,
        min: 2013,
        max: 2023,
        hoverable: false,
        values
      },
      {
        values: ($$value) => {
          values = $$value;
          $$settled = false;
        }
      },
      {}
    )}

        <p class="${"svelte-1vzqokm"}">Open (i.e. Active) Building Permits:</p>

        <div id="${"pointLayers"}" class="${"svelte-1vzqokm"}"><div id="${"rearYardButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-1vzqokm"}"><img height="${"11px"}" width="${"11px"}"${add_attribute("src", xRearYard, 0)} alt="${"xRearYard"}" style="${"padding-left: 4px"}">
                Rear-Yard Suites
            </div>

            <div id="${"secondaryButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-1vzqokm"}"><img height="${"11px"}" width="${"11px"}"${add_attribute("src", xSecondary, 0)} alt="${"xSecondary"}" style="${"padding-left: 4px"}">
                Secondary Suites
            </div></div>


        <p class="${"svelte-1vzqokm"}">Historical Residential Zoning (prior to May 10, 2023)</p>

        <div id="${"pointLayers"}" class="${"svelte-1vzqokm"}"><div id="${"resYellowButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-1vzqokm"}"><svg width="${"15"}" height="${"10"}"><rect style="${"fill:#1a2d3b"}" x="${"5"}" y="${"0"}" width="${"10"}" height="${"10"}"></rect></svg>
                Single-Detached Only
            </div>

            <div id="${"resOtherButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-1vzqokm"}"><svg width="${"15"}" height="${"10"}"><rect style="${"fill:#2e4e66"}" x="${"5"}" y="${"0"}" width="${"10"}" height="${"10"}"></rect></svg>
                Other Low-Density
            </div></div>

        <p class="${"svelte-1vzqokm"}">Reference Layers:</p>

        <div id="${"pointLayers"}" class="${"svelte-1vzqokm"}"><div id="${"lanewayButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-1vzqokm"}"><svg width="${"20"}" height="${"10"}"><line style="${"stroke-width:1.5;stroke:#fff"}" x1="${"5"}" x2="${"20"}" y1="${"5"}" y2="${"5"}"></line></svg>
                Laneways
            </div>

            <div id="${"incomeButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-1vzqokm"}"><svg width="${"0"}" height="${"10"}"></svg>
                Income: Low
                <svg width="${"10"}" height="${"10"}"><rect style="${"fill:#506b80;stroke-width:1;stroke:#8EB6DC"}" x="${"0"}" y="${"0"}" width="${"10"}" height="${"10"}"></rect></svg>,
                Medium
                <svg width="${"10"}" height="${"10"}"><rect style="${"fill:#2e4e66;stroke-width:1;stroke:#8EB6DC"}" x="${"0"}" y="${"0"}" width="${"10"}" height="${"10"}"></rect></svg>,
                High
                <svg width="${"10"}" height="${"10"}"><rect style="${"fill:#1a2d3b;stroke-width:1;stroke:#8EB6DC"}" x="${"0"}" y="${"0"}" width="${"10"}" height="${"10"}"></rect></svg></div> 
            </div></div>

</div>`;
  } while (!$$settled);
  return $$rendered;
});
const logo = "/gentle-density/_app/immutable/assets/top-logo-full-e60044c8.svg";
const TopSofC_svelte_svelte_type_style_lang = "";
const css = {
  code: "#bar.svelte-18tuflt{position:fixed;overflow:hidden;top:0px;height:50px;background-color:var(--brandDarkBlue);margin-bottom:20px;border-bottom:1px solid var(--brandLightBlue);width:100%;min-width:200px;padding-left:0px;padding-right:0px;z-index:5;opacity:0.92}#logo.svelte-18tuflt{margin:auto;max-width:230px;height:50px}a.svelte-18tuflt{color:black}a.svelte-18tuflt:hover{opacity:0.7}img.svelte-18tuflt{height:50px;color:blue}img.svelte-18tuflt:hover{height:50px;opacity:0.5;cursor:pointer}",
  map: null
};
const TopSofC = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"bar"}" class="${"svelte-18tuflt"}"><div id="${"logo"}" class="${"svelte-18tuflt"}"><a href="${"https://www.schoolofcities.utoronto.ca/"}" class="${"svelte-18tuflt"}"><img${add_attribute("src", logo, 0)} alt="${"School of Cities"}" class="${"svelte-18tuflt"}"></a></div>

</div>`;
});
const styles = "";
const isometricSecondary = "/gentle-density/_app/immutable/assets/isometric-secondary-3d24ae8f.svg";
const isometricLaneway = "/gentle-density/_app/immutable/assets/isometric-laneway-16b82c84.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-rax2ze_START --><link href="${"https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;800&display=swap"}" rel="${"stylesheet"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, minimum-scale=1"}"><link href="${"https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css"}" rel="${"stylesheet"}">${$$result.title = `<title>Tracking Gentle Density in Toronto</title>`, ""}<meta name="${"description"}" content="${"Visualizing 10 years (2013 to 2022) of Secondary Suite and Laneway / Garden Suite building permits in Toronto"}"><meta name="${"author"}" content="${"Jeff Allen"}"><meta property="${"og:title"}" content="${"Tracking Gentle Density in Toronto"}"><meta property="${"og:description"}" content="${"Visualizing 10 years (2013 to 2022) of Secondary Suite and Laneway / Garden Suite building permits in Toronto"}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:url"}" content="${"https://schoolofcities.github.io/gentle-density/toronto-building-permits"}"><meta property="${"og:image"}" content="${"https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card.png"}"><meta property="${"og:locale"}" content="${"en_CA"}"><meta name="${"twitter:card"}" content="${"summary_large_image"}"><meta name="${"twitter:site"}" content="${"https://schoolofcities.github.io/gentle-density/toronto-building-permits"}"><meta name="${"twitter:creator"}" content="${"@JeffAllenMaps"}"><meta name="${"twitter:title"}" content="${"Tracking Gentle Density in Toronto"}"><meta name="${"twitter:description"}" content="${"Visualizing 10 years (2013 to 2022) of Secondary Suite and Laneway / Garden Suite building permits in Toronto"}"><meta name="${"twitter:image"}" content="${"https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card.png"}"><!-- HEAD_svelte-rax2ze_END -->`, ""}



${validate_component(TopSofC, "Top").$$render($$result, {}, {}, {})}

<main><div class="${"blueprint"}" style="${"background-image: url('https://schoolofcities.github.io/gentle-density/blueprint-background.png');"}"><div class="${"title"}"><h1>Tracking <span class="${"italic"}">Gentle Density</span> in Toronto
			</h1>
			<h2>Visualizing Building Permit Data From 2013 To 2023
			</h2>
			<h2></h2>
			<p><a href="${"https://jamaps.github.io"}">Jeff Allen</a> and <a href="${"https://www.linkedin.com/in/ahmad-al-musa/"}">Ahmad Al-Musa</a></p>
			<p>Created February 2023</p>
			<p>Updated July 2023</p></div></div>

	<div class="${"background-white"}"><div class="${"arrow"}"><p>\u25BC</p></div>

		<div class="${"text"}"><p>Swaths of Toronto consists of low-density single family homes (these lands are often called the <a href="${"https://schoolofcities.github.io/yellowbelt-canadian-cities-2022/"}">Yellowbelt</a> due to the historical exclusionary zoning of these neighbourhoods). 
				There has been a big push among housing advocates, academics, and planners to increase housing supply in these neighbourhoods via building <a href="${"https://missingmiddlehousing.com/"}">missing middle</a> housing (a range of housing types that fall between single-family homes and high-rise apartments), in aims to provide more housing options and to make our urban areas more affordable, inclusive, and sustainable. 
			</p>
			<p>Around 2018-2019, the City of Toronto started taking accelerating actions to increase missing middle housing supply, in what is now the <a href="${"https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/expanding-housing-options/"}">Expanding Housing Options</a> program. 

				At the smaller-scale of the missing middle are 
				<a href="${"https://affordablemissingmiddle.ca/"}">gentle density</a> (or &quot;missing little&quot;) strategies, which refers to owner-led efforts to build additional dwellings within their existing parcel of land as citizen developers. 
				Some of these accelerated actions addressed Secondary Suites, allowed Laneway Suites and Garden Suites, and most recently starting May 2023, allowed multiplexes across the City\u2019s residential zones. You can read more about the regulatory timeline, along with implementation stories <a href="${"https://affordablemissingmiddle.ca/missing-little-toronto"}">here</a>.
			</p>
			<p>Gentle density can increase property value and provide supplementary income for owners, but importantly, in aggregate, can incrementally scale up the density of a neighbourhood, allow for intergenerational living, and provide needed housing, particularly for those unable to afford larger homes. Relative to larger developments (e.g. larger multi-unit apartments and condominiums), gentle density is more compatible with the scale and character of existing neighbourhoods. Gentle density development is thus often seen as an approach to increase the housing supply in a way that is less disruptive to existing communities but can still help create more walkable, liveable neighbourhoods, that use existing infrastructure and services, which can save tax payers&#39; money and reduce harmful urban sprawl.
			</p>
			<p><b>But what is the recent uptake in gentle density housing in the City of Toronto?</b></p>
			<p>To answer this, we&#39;ve looked at 10+ years of <a href="${"https://open.toronto.ca/dataset/building-permits-cleared-permits-prior-years/"}">building permit data</a> in the City of Toronto (from 01/2013 to 07/2023) to see how and where forms of gentle density have (or have not) been built across the city during this period. At any point in time, building permits can either be active (i.e. building in progress), cancelled, or closed. Those that are closed, we can assume construction has finished. We first counted building permits by the year they were closed for the following two types of gentle density construction, to then chart their trends over time. 
			</p>
			
			<h3><span class="${"textSecondary"}">Secondary Suites</span></h3>
			<div class="${"typeWrapper"}"><div class="${"isometric-mobile"}"><img${add_attribute("src", isometricSecondary, 0)} alt="${"isometricSecondary"}"></div>
				<div class="${"typeText"}"><p>Are \u201Cself-contained living accommodation for an additional person or persons living together as a separate single housekeeping unit, in which both food preparation and sanitary facilities are provided for the exclusive use of the occupants of the suite, located in and subordinate to a dwelling unit.\u201D (Click <a href="${"https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/secondary-suites/overview-secondary-suites/"}">here</a> for further information from the City of Toronto)
				</p></div>
				<div class="${"isometric"}"><img${add_attribute("src", isometricSecondary, 0)} alt="${"isometricSecondary"}"></div></div>

			<p>The most common form is converting a basement into a Secondary Suite separate apartment, but this can include other types of conversions as well (e.g. carving out a Secondary Suite within the main dwelling unit of a Single Detached, Semi Detached or a Townhouse  converting from a duplex to a triplex). The creation of these suites ese conversions may or may not include building additions (i.e. expanding the volume) of the structure. They have been permitted since 2000 city-wide, with some restrictions. It is noteworthy that under the new multiplex bylaw, Secondary Suites are not allowed in the semi-detached or townhouse portion of a converted four-unit multiplex.
			</p>

			<p>(While allowing for multiplexes was passed in May 2023, at the time of writing, it is too early to track their completion from building permit data. We are planning on updating this website, including tracking multiplexes, in early 2024).
			</p>

			<h3><span class="${"textLaneway"}">Rear-Yard Suites</span></h3>
			<div class="${"typeWrapper"}"><div class="${"isometric-mobile"}"><img${add_attribute("src", isometricLaneway, 0)} alt="${"isometricLaneway"}"></div>
				<div class="${"typeText"}"><p>Building a small detached dwelling unit that is located on the same property as a single-family home. They are sometimes called Accessory Dwelling Units (ADUs), Garden Suites, or Laneway Houses. Toronto legalized rear yard suites that abut laneways in 06/2018, called Laneway Suites in city bylaws (these are often garage conversions), and then legalized them in all other residential zones in 02/2022 without the need to abut a laneway. The latter are often called Garden Suites.
 
				</p></div>
				<div class="${"isometric"}"><img${add_attribute("src", isometricLaneway, 0)} alt="${"isometricLaneway"}"></div></div></div></div>

	<div class="${"line-chart"}">${validate_component(BarChartSecondary, "BarChartSecondary").$$render($$result, {}, {}, {})}
		${validate_component(BarChartLaneway, "BarChartLaneway").$$render($$result, {}, {}, {})}</div>

	<div class="${"background-white"}"><div class="${"text"}"><p>The construction of secondary suites hovered between 100 and 120 per year up until 2019. It has since increased, in 2022 to just over 200. While laneway suites were legalized in 2018, none were completed according to building permit data until 2020, and only a few dozen since then. Almost all of these are concentrated in pre-war Toronto, where most of the laneways in the city are located (post-war neighbourhoods tend to not have laneways with garages facing the street). However, by July 2023, there were already more rear-yard suites built in 2023 than any year prior.
			</p>
			<p>Overall, the completion of secondary suites and rear-yard suites are quite lacklustre given the need for housing in Toronto, where the expected population growth is about 500,000 from 2023 to 2030. <b>Summing the bars above, only 1,402 secondary suites and 138 rear-yard suites have been built in Toronto from January 2013 to mid-July 2023</b>. 
			</p>
			<p>Despite this sluggish uptake to date in Toronto, there are an increasing number of ongoing projects. <b>As of July 15, 2023 there were 643 secondary suite and 558 rear-yard suite building permits that were open and ongoing</b>. These totals are based on counting building permits with unique addresses and that have an initial or revised application date from the period from January 2018 to July 2023. However, these numbers are still quite low compared to uptake in other cities like <a href="${"https://xtown.la/2022/09/20/adus-los-angeles-housing-numbers/"}">Los Angeles</a>, where the number of issued ADU permits from 2017 to 2021 was over 25,000.
			</p>
			<p>To explore further, we have also mapped below where secondary suites and rear-yard suites have been built in the city from 2013 to 2023, as well as the location of active building permits.
			</p>
			<p>These highlight clustering of development in pre-war neighbourhoods just east and particularly west of the downtown core. All completed rear-yard suites cluster in these neighbourhoods since these are where the majority of the City&#39;s laneways are located. Post-war development focused garage construction towards the street rather than to a back laneway like pre-war housing. Looking at the active permits, there are now several popping up elsewhere in more suburban neighbourhoods.
			</p>
			<p>One notable pattern is that there is far less gentle density construction in and around North Toronto, despite this area mostly consisting of single-detached homes. This area is home to some of the city&#39;s wealthiest neighbourhoods (toggle on the income layer to check this out). Downtown Toronto also only has a few projects, but this is because it is mostly zoned for higher density development.
			</p></div></div>

	${validate_component(Map, "Map").$$render($$result, {}, {}, {})}

	<div class="${"text"}"><p>According to <a href="${"https://adusearch.ca/"}">ADUsearch.ca</a> the estimated number of properties within Toronto that could add internal or external ADUs range between 370,000 to 390,000 lots. This emphasizes the fact that with the current uptake of a humble 1,540, Toronto is barely scratching the surface of hidden housing supply within its existing neighbourhoods. Practical steps need to be taken by all stakeholders to remove the various barriers and to find solutions to make best use of this opportunity to easily provide much-needed dwelling units during the current housing crisis.
 
		</p></div>

	<div class="${"background-white"}"><div class="${"text"}"><h3>Data &amp; Code</h3>
			<p>Data on the location, type, and status of <a href="${"https://open.toronto.ca/catalogue/?search=building%20permits&sort=score%20desc"}">building permits</a> are from the City of Toronto&#39;s Open Data portal. To create these charts and maps, we filtered for all permits that were classified as &quot;Second Suite (New)&quot; and &quot;New Laneway / Rear YardSuite&quot; while being careful not to double count permits that had revisions. However, there may be some error if building permits were misclassified.
			</p>
			<p>The historical residential <a href="${"https://open.toronto.ca/dataset/zoning-by-law/"}">zoning layer</a> is also from the City&#39;s Open Data portal. The single-detached only zones are those classified as [RD] while the other low-density zones are classified as [R, RM, RS, RT]. The latter also include semi-detached, townhouses, and smaller multi-unit dwellings, depending on the zone classification.
			</p>
			<p>The location of laneways is also from the City of Toronto&#39;s Open Data portal. It was filtered and extracted from the City&#39;s <a href="${"https://open.toronto.ca/dataset/toronto-centreline-tcl/"}">Centreline</a> dataset.
			</p>
			<p>The <a href="${"https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/index-eng.cfm"}">income data</a> is from the 2021 Canadian census. The low category are census tracts with a median after-tax household income of less then $75,000, the medium range is between $75,000 and $100,000, and the high is above $100,000.
			</p>
			<p>All code used to analyze this data and make this website and its graphics are on <a href="${"https://github.com/schoolofcities/gentle-density"}">GitHub</a>. It was built with the help of Python (pandas, geopandas), Svelte, Mapbox, and D3.
			</p></div></div></main>`;
});
export {
  Page as default
};
