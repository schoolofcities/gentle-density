import { c as create_ssr_component, d as add_attribute, f as each, e as escape, h as now, l as loop, i as createEventDispatcher, v as validate_component, b as subscribe, n as noop, j as null_to_empty } from "../../../chunks/index.js";
import { rollup } from "d3-array";
import { scaleBand } from "d3-scale";
import mapboxgl from "mapbox-gl";
import { w as writable } from "../../../chunks/index2.js";
const type$1 = "FeatureCollection";
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
        -79.476823,
        43.656462
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
        -79.417248,
        43.664594
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
        -79.315603,
        43.820612
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
        -79.221754,
        43.781871
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
        -79.291277,
        43.713873
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
        -79.238595,
        43.770813
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
        -79.317807,
        43.733747
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
        -79.348211,
        43.672928
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
        -79.295145,
        43.713853
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
        -79.227605,
        43.798306
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
        -79.298789,
        43.690749
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
        -79.302631,
        43.794496
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
        -79.329761,
        43.766931
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
        43.756997
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
        -79.183079,
        43.795437
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
        -79.243279,
        43.754028
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
        -79.294198,
        43.776669
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
        -79.290792,
        43.815443
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
        -79.412017,
        43.657589
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
        -79.417216,
        43.769195
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
        -79.447729,
        43.661799
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
        -79.265053,
        43.688303
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
        -79.467258,
        43.657694
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
        -79.283078,
        43.685785
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
        -79.463467,
        43.663339
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
        43.799207
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
        43.788469
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
        -79.439207,
        43.658716
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
        -79.185779,
        43.785714
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
        -79.365028,
        43.665561
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
        -79.347459,
        43.661646
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
        -79.274784,
        43.813583
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
        -79.209792,
        43.738817
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
        -79.502402,
        43.712612
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
        -79.29778,
        43.726639
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
        -79.370994,
        43.773948
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
        -79.162527,
        43.792379
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
        -79.566993,
        43.640931
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
        -79.598887,
        43.745629
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
        -79.531665,
        43.605024
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
        -79.613338,
        43.732721
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
        43.778416
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
        -79.36568,
        43.697207
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
        -79.212971,
        43.748787
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
        -79.404272,
        43.671225
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
        -79.293019,
        43.743848
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
        -79.277443,
        43.803058
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
        -79.299821,
        43.718405
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
        -79.244653,
        43.749182
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
        -79.457527,
        43.680851
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
        -79.304624,
        43.793455
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
        -79.320519,
        43.668865
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
        -79.455892,
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
        -79.440724,
        43.677828
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
        -79.425897,
        43.651819
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
        -79.247576,
        43.701853
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
        -79.178877,
        43.754588
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
        -79.595928,
        43.731725
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
        -79.307249,
        43.756243
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
        -79.287404,
        43.820276
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
        -79.472214,
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
        -79.440844,
        43.791161
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
        -79.182056,
        43.807736
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
        -79.262894,
        43.745155
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
        -79.187751,
        43.776702
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
        -79.217984,
        43.774429
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
        -79.481774,
        43.683464
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
        -79.289971,
        43.819469
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
        -79.424729,
        43.651754
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
        -79.426168,
        43.647574
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
        -79.498508,
        43.680255
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
        -79.219956,
        43.768945
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
        -79.502615,
        43.678344
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
        -79.292383,
        43.742006
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
        -79.214416,
        43.760258
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
        -79.540339,
        43.610654
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
        -79.312652,
        43.674714
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
        -79.428837,
        43.674129
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
        -79.411707,
        43.670077
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
        -79.381201,
        43.660708
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
        -79.263227,
        43.739545
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
        -79.288902,
        43.704765
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
        -79.33733,
        43.68052
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
        -79.176608,
        43.789234
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
        -79.136692,
        43.775539
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
        -79.432481,
        43.698832
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
        43.740696
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
        -79.219674,
        43.764481
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
        -79.446108,
        43.675599
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
        -79.325688,
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
        -79.430235,
        43.650116
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
        -79.417232,
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
        -79.497036,
        43.765851
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
        -79.256716,
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
        -79.426628,
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
        -79.255222,
        43.747694
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
        -79.356999,
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
        -79.501151,
        43.767674
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
        -79.215582,
        43.774451
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
        -79.321343,
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
        43.663055
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
        -79.318014,
        43.683517
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
        -79.335469,
        43.675934
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
        -79.260303,
        43.766659
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
        -79.448853,
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
        -79.341943,
        43.799298
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
        -79.243881,
        43.767128
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
        -79.189376,
        43.761674
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
        -79.451469,
        43.640292
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
        -79.614977,
        43.733552
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
        -79.435462,
        43.673365
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
        -79.315133,
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
        -79.436745,
        43.660659
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
        -79.313648,
        43.776328
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
        -79.293434,
        43.795726
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
        -79.406338,
        43.655996
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
        -79.580307,
        43.719949
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
        -79.253796,
        43.750246
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
        -79.495697,
        43.767071
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
        -79.286934,
        43.761765
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
        -79.336095,
        43.673491
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
        -79.152971,
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
        -79.324373,
        43.670216
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
        -79.497318,
        43.769079
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
        -79.286479,
        43.827438
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
        -79.442424,
        43.643859
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
        -79.408528,
        43.655514
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
        -79.228166,
        43.753224
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
        -79.449466,
        43.641995
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
        43.718634
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
        -79.444245,
        43.710692
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
        -79.203986,
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
        -79.370469,
        43.730018
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
        -79.411766,
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
        -79.333266,
        43.685716
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
        -79.482217,
        43.653925
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
        -79.487808,
        43.634115
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
        -79.321019,
        43.790037
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
        -79.162221,
        43.795339
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
        -79.601601,
        43.724066
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
        -79.289455,
        43.709565
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
        43.728102
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
        -79.160272,
        43.771781
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
        43.671936
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
        -79.483309,
        43.678868
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
        -79.502147,
        43.628963
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
        -79.441044,
        43.659874
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
        -79.540787,
        43.649891
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
        43.761786
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
        -79.436879,
        43.660381
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
        -79.595246,
        43.729008
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
        -79.172041,
        43.775669
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
        -79.155284,
        43.782484
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
        -79.553719,
        43.717162
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
        -79.335221,
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
        -79.503629,
        43.615758
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
        -79.423742,
        43.668664
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
        -79.566022,
        43.721853
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
        -79.500994,
        43.629302
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
        -79.224311,
        43.777614
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
        -79.265952,
        43.704821
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
        -79.509924,
        43.702279
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
        -79.168652,
        43.771504
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
        -79.420032,
        43.776349
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
        -79.429001,
        43.792655
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
        -79.241682,
        43.771855
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
        -79.293877,
        43.683534
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
        -79.328058,
        43.802976
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
        -79.421299,
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
        -79.365498,
        43.789366
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
        -79.214072,
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
        -79.486269,
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
        -79.439756,
        43.696184
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
        -79.422067,
        43.659993
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
        -79.443111,
        43.686695
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
        -79.395943,
        43.654346
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
        -79.307408,
        43.817303
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
        -79.185449,
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
        -79.325748,
        43.790013
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
        -79.245687,
        43.764167
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
        -79.446913,
        43.684495
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
        -79.290585,
        43.794976
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
        -79.319403,
        43.757652
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
        -79.614262,
        43.733159
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
        -79.542911,
        43.596123
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
        -79.282952,
        43.795457
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
        -79.406199,
        43.761542
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
        -79.225849,
        43.769964
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
        -79.611586,
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
        -79.442281,
        43.642637
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
        -79.204276,
        43.803877
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
        -79.245195,
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
        -79.274557,
        43.696102
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
        -79.533688,
        43.607505
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
        -79.336611,
        43.690769
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
        -79.394586,
        43.677189
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
        -79.418059,
        43.645908
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
        -79.418059,
        43.645908
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
        -79.418059,
        43.645908
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
        -79.418059,
        43.645908
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
        43.775325
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
        -79.410494,
        43.666391
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
        -79.242127,
        43.764188
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
        -79.327074,
        43.687043
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
        -79.438496,
        43.671161
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
        -79.476949,
        43.666446
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
        -79.181634,
        43.787501
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
        -79.433637,
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
        -79.341731,
        43.671848
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
        -79.338429,
        43.666326
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
        -79.460634,
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
        -79.317807,
        43.669346
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
        -79.445265,
        43.640668
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
        -79.230888,
        43.814128
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
        -79.519182,
        43.651381
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
        43.715206
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
        -79.397286,
        43.694168
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
        -79.423227,
        43.658666
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
        -79.593513,
        43.752823
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
        -79.338273,
        43.787439
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
        -79.502062,
        43.766959
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
        -79.431833,
        43.675859
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
        -79.234123,
        43.760242
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
        -79.404382,
        43.674062
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
        43.645452
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
        -79.404195,
        43.674225
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
        -79.433649,
        43.684669
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
        -79.436277,
        43.684111
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
        -79.573178,
        43.659248
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
        -79.573776,
        43.724668
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
        43.763221
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
        -79.432026,
        43.676341
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
        -79.543077,
        43.660579
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
        -79.347165,
        43.793497
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
        -79.615188,
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
        -79.390333,
        43.682321
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
        -79.407234,
        43.701963
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
        -79.196869,
        43.770513
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
        43.772351
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
        -79.423228,
        43.718841
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
        -79.439733,
        43.751858
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
        -79.495767,
        43.766873
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
        -79.238551,
        43.760988
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
        -79.237787,
        43.761238
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
        -79.565424,
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
        -79.259367,
        43.764267
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
        -79.406211,
        43.760005
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
        -79.300335,
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
        -79.363472,
        43.663806
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
        -79.405798,
        43.761633
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
        -79.308866,
        43.676711
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
        -79.434068,
        43.674495
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
        -79.434022,
        43.674538
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
        -79.507407,
        43.636586
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
        -79.248581,
        43.704924
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
        -79.286303,
        43.825128
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
        -79.217369,
        43.767752
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
        -79.460826,
        43.680031
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
        -79.385559,
        43.707322
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
        43.792958
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
        -79.406063,
        43.645859
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
        -79.568139,
        43.728192
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
        -79.583802,
        43.723466
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
        -79.333834,
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
        -79.181895,
        43.794804
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
        -79.451262,
        43.686044
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
        -79.304422,
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
        -79.395605,
        43.654606
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
        -79.262555,
        43.764951
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
        -79.316531,
        43.697479
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
        -79.431479,
        43.662937
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
        -79.170856,
        43.788622
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
        -79.445136,
        43.639609
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
        -79.340511,
        43.682615
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
        -79.235236,
        43.753793
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
        -79.329796,
        43.665061
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
        -79.434953,
        43.695846
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
        -79.535021,
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
        -79.412612,
        43.645344
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
        -79.433719,
        43.662686
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
        -79.337206,
        43.673519
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
        -79.305542,
        43.694101
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
        -79.600334,
        43.745539
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
        -79.311928,
        43.688682
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
        -79.422225,
        43.677057
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
        -79.312483,
        43.776773
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
        -79.416323,
        43.680975
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
        43.699489
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
        -79.316247,
        43.805591
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
        -79.179364,
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
        -79.404189,
        43.662528
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
        -79.444662,
        43.681471
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
        -79.211406,
        43.749127
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
        -79.415669,
        43.645872
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
        -79.578485,
        43.737655
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
        -79.221745,
        43.736492
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
        -79.261986,
        43.747377
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
        -79.533988,
        43.726074
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
        -79.462085,
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
        -79.455685,
        43.693028
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
        -79.408835,
        43.659662
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
        -79.408227,
        43.717885
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
        -79.298077,
        43.736237
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
        -79.570656,
        43.762164
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
        -79.463042,
        43.727913
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
        -79.307089,
        43.757125
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
        -79.416933,
        43.698237
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
        -79.248952,
        43.739532
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
        -79.407112,
        43.658598
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
        -79.409765,
        43.645636
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
        -79.560705,
        43.726443
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
        -79.298248,
        43.679985
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
        -79.421609,
        43.673978
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
        -79.196213,
        43.750996
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
        -79.404578,
        43.657919
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
        -79.417696,
        43.664711
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
        -79.190363,
        43.773101
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
        -79.333426,
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
        -79.613149,
        43.733539
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
        -79.326959,
        43.762026
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
        -79.428412,
        43.634176
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
        -79.415524,
        43.659952
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
        -79.312869,
        43.769354
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
        -79.230877,
        43.733996
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
        43.778879
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
        -79.165735,
        43.788387
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
        -79.283658,
        43.753175
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
        -79.455685,
        43.693028
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
        -79.611788,
        43.733056
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
        -79.371691,
        43.659584
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
        -79.471739,
        43.713044
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
        -79.232913,
        43.724326
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
        -79.255696,
        43.768119
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
        -79.407019,
        43.647504
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
        -79.335956,
        43.673525
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
        -79.332553,
        43.693008
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
        -79.313152,
        43.673342
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
        -79.433642,
        43.649249
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
        43.690767
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
        -79.460294,
        43.688848
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
        -79.408569,
        43.652341
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
        -79.321011,
        43.676594
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
        -79.482563,
        43.655657
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
        -79.425044,
        43.650798
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
        -79.363984,
        43.699922
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
        -79.571628,
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
        -79.308022,
        43.705474
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
        -79.336116,
        43.735498
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
        -79.248209,
        43.739685
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
        -79.425791,
        43.662761
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
        -79.598421,
        43.751076
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
        -79.442367,
        43.665745
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
        -79.597303,
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
        -79.295337,
        43.688391
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
        -79.439788,
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
        -79.261693,
        43.766941
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
        -79.367123,
        43.808488
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
        43.674226
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
        -79.456795,
        43.671488
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
        -79.334155,
        43.673662
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
        -79.222698,
        43.782473
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
        -79.274478,
        43.776618
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
        43.732392
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
        -79.611188,
        43.731945
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
        -79.478914,
        43.653257
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
        -79.211717,
        43.764966
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
        -79.480069,
        43.678262
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
        -79.429111,
        43.650667
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
        -79.447729,
        43.675205
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
        -79.421428,
        43.668203
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
        -79.441935,
        43.664901
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
        -79.399974,
        43.768397
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
        -79.173981,
        43.781883
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
        -79.465822,
        43.659239
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
        -79.508584,
        43.725958
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
        -79.436103,
        43.668452
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
        -79.212549,
        43.766081
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
        -79.317438,
        43.766602
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
        -79.176681,
        43.786856
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
        -79.345081,
        43.671435
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
        -79.307617,
        43.670479
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
        -79.208074,
        43.772383
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
        -79.233989,
        43.754481
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
        -79.276231,
        43.802661
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
        43.650917
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
        -79.464516,
        43.685571
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
        43.733906
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
        43.635886
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
        -79.443256,
        43.676924
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
        -79.293293,
        43.668613
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
        -79.518477,
        43.633657
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
        -79.436158,
        43.677682
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
        -79.495585,
        43.767095
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
        -79.185353,
        43.806755
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
        -79.404873,
        43.649811
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
        -79.431042,
        43.657727
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
        -79.430761,
        43.634008
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
        -79.299773,
        43.712553
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
        -79.579311,
        43.644602
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
        -79.619587,
        43.724157
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
        -79.416858,
        43.645659
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
        -79.433513,
        43.638885
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
        -79.419345,
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
        -79.613098,
        43.732696
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
        -79.411434,
        43.655851
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
        -79.408337,
        43.651135
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
        -79.437618,
        43.792097
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
        -79.575563,
        43.735942
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
        -79.305004,
        43.674926
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
        -79.308567,
        43.672233
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
        -79.319334,
        43.670412
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
        -79.306762,
        43.690467
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
        -79.411073,
        43.671023
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
        -79.425238,
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
        -79.475347,
        43.666255
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
        -79.578139,
        43.726094
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
        -79.296599,
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
        -79.394027,
        43.652713
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
        -79.256001,
        43.764746
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
        -79.435336,
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
        -79.424241,
        43.782899
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
        -79.163808,
        43.784425
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
        -79.583363,
        43.631524
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
        43.657845
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
        43.776352
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
        -79.553304,
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
        -79.425593,
        43.644322
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
        -79.311054,
        43.684098
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
        43.661723
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
        43.690647
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
        -79.492484,
        43.669699
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
        -79.584526,
        43.725769
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
        -79.274369,
        43.747314
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
        -79.284208,
        43.707047
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
        -79.453068,
        43.694247
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
        -79.554127,
        43.703398
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
        -79.260098,
        43.748518
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
        -79.549559,
        43.604199
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
        -79.417552,
        43.656116
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
        -79.419979,
        43.657987
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
        -79.225466,
        43.767961
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
        -79.261849,
        43.766194
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
        -79.249518,
        43.738487
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
        -79.590027,
        43.729715
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
        -79.555049,
        43.703178
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
        -79.272919,
        43.717588
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
        -79.591855,
        43.729279
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
        -79.475016,
        43.711194
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
        43.746506
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
        -79.457925,
        43.683328
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
        -79.313692,
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
        -79.571395,
        43.643452
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
        -79.182526,
        43.760059
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
        -79.533659,
        43.690506
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
        -79.536126,
        43.606967
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
        -79.221495,
        43.815358
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
        -79.442534,
        43.662596
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
        43.649373
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
        -79.293842,
        43.742684
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
        -79.596852,
        43.732333
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
        -79.457955,
        43.695911
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
        -79.502952,
        43.766389
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
        -79.427849,
        43.667844
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
        -79.595511,
        43.729485
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
        -79.488814,
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
        -79.602481,
        43.746701
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
        -79.217445,
        43.771582
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
        -79.439269,
        43.649971
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
        -79.485834,
        43.708247
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
        -79.502401,
        43.767171
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
        -79.272276,
        43.736551
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
        -79.447124,
        43.685019
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
        -79.222479,
        43.781628
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
        -79.414375,
        43.757156
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
        -79.451043,
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
        -79.599616,
        43.745231
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
        -79.211767,
        43.769796
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
        -79.582921,
        43.662841
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
        -79.229631,
        43.831767
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
        -79.437277,
        43.668764
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
        43.691091
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
        -79.259114,
        43.725887
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
        -79.299468,
        43.674326
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
        -79.187737,
        43.807784
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
        -79.288762,
        43.681582
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
        -79.305403,
        43.763075
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
        -79.453196,
        43.695807
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
        -79.293583,
        43.754911
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
        -79.430545,
        43.652725
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
        -79.428037,
        43.648802
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
        -79.204387,
        43.802808
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
        -79.560834,
        43.738383
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
        -79.368753,
        43.710675
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
        -79.622597,
        43.726933
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
        43.652055
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
        -79.273522,
        43.700835
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
        -79.178335,
        43.790714
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
        -79.494754,
        43.756572
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
        -79.249722,
        43.712104
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
        -79.304361,
        43.700818
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
        43.778179
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
        -79.421942,
        43.646623
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
        -79.454282,
        43.677804
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
        -79.410123,
        43.658853
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
        43.736319
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
        -79.157408,
        43.795291
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
        -79.421072,
        43.736494
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
        -79.612036,
        43.733727
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
        -79.408629,
        43.644882
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
        -79.339484,
        43.658417
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
        43.681689
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
        43.657444
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
        -79.428149,
        43.644684
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
        -79.355133,
        43.675373
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
        -79.423355,
        43.650214
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
        -79.149242,
        43.788087
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
        -79.324155,
        43.732834
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
        -79.566019,
        43.729676
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
        43.730274
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
        -79.441963,
        43.703934
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
        -79.353718,
        43.778803
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
        -79.406884,
        43.658059
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
        -79.543031,
        43.642948
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
        -79.440259,
        43.645089
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
        -79.258125,
        43.762162
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
        -79.181231,
        43.796051
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
        -79.264671,
        43.739019
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
        -79.455056,
        43.652621
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
        -79.412004,
        43.667664
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
        -79.584975,
        43.664904
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
        -79.433714,
        43.698653
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
        -79.455303,
        43.721706
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
        -79.447669,
        43.662784
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
        -79.440719,
        43.665137
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
        -79.346546,
        43.668528
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
        -79.403439,
        43.772466
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
        -79.247249,
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
        -79.228229,
        43.735665
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
        -79.476265,
        43.714551
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
        -79.157513,
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
        -79.271921,
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
        -79.369184,
        43.657572
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
        -79.435004,
        43.643926
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
        -79.311986,
        43.684255
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
        -79.449271,
        43.664178
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
        -79.500219,
        43.768042
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
        -79.598758,
        43.757295
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
        -79.312879,
        43.773253
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
        -79.330436,
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
        -79.587572,
        43.752374
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
        -79.425221,
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
        -79.621895,
        43.730643
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
        -79.136271,
        43.775553
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
        -79.325647,
        43.673685
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
        -79.492766,
        43.677901
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
        -79.441834,
        43.691003
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
        -79.531668,
        43.694196
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
        -79.251917,
        43.769535
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
        -79.502706,
        43.767904
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
        -79.450859,
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
        -79.621063,
        43.722468
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
        -79.506408,
        43.729384
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
        -79.537679,
        43.610094
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
        -79.448204,
        43.674169
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
        -79.456609,
        43.650699
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
        -79.439392,
        43.643628
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
        43.722754
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
        43.739266
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
        -79.478568,
        43.705102
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
        43.784143
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
        -79.325389,
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
        -79.226579,
        43.801868
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
        -79.297325,
        43.711618
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
        -79.207143,
        43.819187
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
        -79.202752,
        43.745573
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
        43.599617
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
        -79.282311,
        43.753065
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
        -79.500524,
        43.609726
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
        -79.502994,
        43.722102
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
        -79.615209,
        43.733611
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
        -79.453185,
        43.721469
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
        -79.419523,
        43.666725
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
        -79.304397,
        43.722891
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
        -79.613186,
        43.732316
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
        -79.503102,
        43.766138
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
        -79.496696,
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
        -79.306073,
        43.819114
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
        43.791235
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
        -79.585212,
        43.725604
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
        -79.282371,
        43.753214
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
        -79.483266,
        43.650123
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
        43.804786
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
        -79.440768,
        43.644958
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
        -79.493756,
        43.617162
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
        -79.157463,
        43.795412
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
        -79.307256,
        43.759066
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
        43.722209
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
        -79.503113,
        43.727301
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
        -79.437586,
        43.675446
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
        -79.315119,
        43.686223
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
        -79.330921,
        43.692653
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
        -79.499532,
        43.768423
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
        -79.427117,
        43.652237
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
        -79.427589,
        43.657267
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
        -79.313985,
        43.674322
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
        -79.296666,
        43.709997
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
        -79.413603,
        43.653267
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
        -79.416644,
        43.646156
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
        -79.241583,
        43.764296
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
        -79.407158,
        43.667687
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
        -79.450214,
        43.681071
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
        -79.445162,
        43.666277
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
        -79.254065,
        43.731131
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
        -79.395314,
        43.703782
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
        -79.329007,
        43.672719
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
        -79.434963,
        43.668345
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
        -79.332655,
        43.786585
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
        43.636747
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
        -79.429733,
        43.665279
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
        -79.286775,
        43.694784
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
        -79.411915,
        43.669964
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
        -79.332492,
        43.661167
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
        -79.442157,
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
        -79.421636,
        43.662049
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
        -79.513099,
        43.599874
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
        -79.372963,
        43.659236
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
        -79.372992,
        43.659305
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
        -79.435845,
        43.661477
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
        -79.339592,
        43.679092
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
        -79.332469,
        43.801364
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
        -79.293943,
        43.747951
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
        -79.253411,
        43.732804
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
        -79.578495,
        43.730484
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
        -79.224453,
        43.737751
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
        -79.423536,
        43.647037
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
        -79.549405,
        43.633212
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
        43.656822
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
        -79.428279,
        43.779826
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
        -79.496913,
        43.635143
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
        43.681676
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
        43.653984
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
        -79.321626,
        43.694806
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
        -79.294626,
        43.756473
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
        -79.294167,
        43.739793
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
        -79.472898,
        43.677797
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
        -79.316541,
        43.675506
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
        -79.454479,
        43.666472
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
        -79.257459,
        43.741296
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
        -79.404293,
        43.664114
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
        43.728166
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
        -79.454233,
        43.669654
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
        -79.535699,
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
        -79.563681,
        43.753503
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
        -79.275815,
        43.702514
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
        -79.620363,
        43.724239
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
        -79.283773,
        43.709222
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
        -79.430558,
        43.664888
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
        -79.588825,
        43.721343
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
        -79.403213,
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
        -79.318304,
        43.735905
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
        -79.595919,
        43.734277
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
        -79.567615,
        43.636284
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
        -79.588744,
        43.751817
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
        -79.300775,
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
        -79.334837,
        43.798343
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
        -79.502604,
        43.616475
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
        -79.576515,
        43.660193
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
        -79.284405,
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
        -79.415623,
        43.643508
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
        -79.466793,
        43.687581
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
        -79.343837,
        43.681685
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
        -79.401537,
        43.660877
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
        -79.169942,
        43.796447
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
        -79.357763,
        43.743653
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
        43.790711
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
        -79.560723,
        43.749497
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
        -79.421236,
        43.661039
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
        -79.302006,
        43.711118
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
        43.781706
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
        -79.281691,
        43.697171
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
        -79.408699,
        43.655312
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
        -79.540383,
        43.589817
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
        -79.410266,
        43.648162
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
        -79.436743,
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
        -79.286609,
        43.705744
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
        -79.285004,
        43.748609
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
        -79.600583,
        43.757661
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
        43.726306
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
        -79.388209,
        43.707286
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
        -79.507893,
        43.702755
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
        -79.569733,
        43.642061
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
        -79.428844,
        43.654339
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
        43.742038
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
        -79.342695,
        43.785183
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
        -79.176773,
        43.784947
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
        -79.350162,
        43.793298
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
        -79.406649,
        43.663332
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
        -79.427964,
        43.656883
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
        -79.599354,
        43.744111
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
        -79.292531,
        43.706259
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
        -79.595578,
        43.731036
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
        -79.620352,
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
        43.733917
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
        -79.497747,
        43.608024
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
        -79.365307,
        43.666256
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
        43.634474
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
        -79.593987,
        43.729869
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
        -79.310596,
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
        43.672056
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
        -79.364661,
        43.664497
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
        -79.216427,
        43.745368
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
        -79.434576,
        43.652972
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
        -79.407944,
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
        -79.247568,
        43.710049
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
        43.644522
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
        -79.504875,
        43.715571
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
        43.672984
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
        -79.377229,
        43.671196
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
        -79.251621,
        43.703977
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
        -79.423159,
        43.661789
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
        -79.373529,
        43.790657
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
        -79.266291,
        43.694221
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
        -79.399405,
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
        -79.345698,
        43.687081
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
        -79.445587,
        43.681839
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
        -79.329789,
        43.688074
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
        -79.182658,
        43.786861
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
        -79.445521,
        43.644351
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
        -79.261759,
        43.813587
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
        -79.164648,
        43.792078
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
        -79.420435,
        43.662124
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
        43.648322
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
        -79.144452,
        43.793427
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
        -79.450745,
        43.681609
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
        -79.424582,
        43.790636
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
        -79.257141,
        43.768541
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
        -79.310714,
        43.755936
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
        -79.303502,
        43.795645
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
        -79.418684,
        43.646975
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
        -79.397617,
        43.693772
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
        -79.413861,
        43.662173
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
        -79.364902,
        43.800787
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
        -79.308009,
        43.688194
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
        -79.517758,
        43.704203
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
        -79.396218,
        43.650298
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
        -79.499029,
        43.767538
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
        -79.274354,
        43.695608
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
        -79.447017,
        43.660882
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
        -79.230546,
        43.835129
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
        -79.517758,
        43.704203
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
        -79.376746,
        43.709474
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
        -79.440496,
        43.636241
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
        -79.290007,
        43.766343
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
        -79.566615,
        43.716083
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
        -79.294882,
        43.741473
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
        43.654899
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
        -79.284339,
        43.685735
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
        -79.294013,
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
        -79.444554,
        43.644547
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
        43.659974
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
        -79.253081,
        43.708215
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
        -79.389696,
        43.701342
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
        -79.294469,
        43.756103
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
        -79.216637,
        43.816689
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
        -79.461452,
        43.787172
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
        -79.525318,
        43.713104
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
        -79.322236,
        43.684723
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
        -79.343563,
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
        -79.350132,
        43.667721
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
        -79.420536,
        43.669508
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
        -79.590763,
        43.747696
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
        -79.213762,
        43.776803
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
        -79.417679,
        43.647895
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
        -79.171319,
        43.776889
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
        -79.620079,
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
        -79.209707,
        43.768445
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
        -79.436227,
        43.662375
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
        -79.575035,
        43.756156
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
        -79.395142,
        43.745859
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
        -79.175123,
        43.756484
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
        -79.520974,
        43.730462
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
        -79.284917,
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
        -79.419264,
        43.669341
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
        -79.309855,
        43.681061
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
        -79.596211,
        43.734397
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
        -79.579884,
        43.743987
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
        -79.440245,
        43.659743
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
        -79.226651,
        43.733836
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
        -79.346598,
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
        -79.574521,
        43.659682
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
        -79.321127,
        43.674718
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
        -79.469664,
        43.695237
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
        -79.465635,
        43.689375
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
        -79.349656,
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
        -79.427425,
        43.667401
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
        -79.444442,
        43.667284
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
        -79.438067,
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
        -79.298507,
        43.779145
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
        -79.504762,
        43.690601
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
        -79.413164,
        43.653461
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
        -79.307255,
        43.771582
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
        -79.457271,
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
        -79.260682,
        43.781114
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
        -79.315822,
        43.774819
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
        -79.290077,
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
        -79.432294,
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
        -79.597584,
        43.738793
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
        43.650841
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
        -79.435075,
        43.662688
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
        -79.357599,
        43.675581
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
        -79.577546,
        43.658587
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
        -79.228651,
        43.746238
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
        -79.223964,
        43.730952
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
        -79.226658,
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
        -79.524473,
        43.596993
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
        -79.459505,
        43.656325
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
        -79.246995,
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
        -79.201168,
        43.816029
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
        -79.541928,
        43.608508
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
        -79.520374,
        43.638314
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
        -79.471315,
        43.692697
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
        -79.572313,
        43.684723
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
        -79.595026,
        43.736919
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
        -79.466902,
        43.673185
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
        -79.131628,
        43.785232
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
        -79.598916,
        43.744463
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
        -79.200911,
        43.815391
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
        -79.615456,
        43.721446
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
        -79.503469,
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
        -79.592349,
        43.749713
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
        -79.164361,
        43.789842
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
        -79.164974,
        43.791174
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
        -79.553258,
        43.734467
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
        43.752335
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
        -79.310611,
        43.732408
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
        -79.465398,
        43.658235
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
        -79.219956,
        43.824823
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
        -79.496616,
        43.726723
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
        -79.568218,
        43.740059
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
        -79.334648,
        43.790984
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
        -79.333309,
        43.795499
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
        -79.585495,
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
        43.754809
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
        -79.456969,
        43.660086
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
        -79.449178,
        43.681762
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
        -79.233878,
        43.831946
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
        -79.564374,
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
        -79.424804,
        43.665733
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
        -79.596559,
        43.751255
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
        -79.574982,
        43.727382
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
        -79.493301,
        43.635083
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
        -79.348957,
        43.690527
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
        -79.415342,
        43.694456
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
        -79.441542,
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
        -79.566784,
        43.718886
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
        -79.548629,
        43.605017
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
        -79.438615,
        43.693379
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
        -79.272974,
        43.709282
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
        -79.285427,
        43.710384
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
        -79.564669,
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
        -79.221008,
        43.819778
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
        -79.561693,
        43.687911
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
        43.785372
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
        -79.437371,
        43.653857
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
        -79.317467,
        43.758096
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
        -79.587796,
        43.753513
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
        -79.601475,
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
        -79.373071,
        43.801486
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
        -79.415186,
        43.665648
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
        -79.214793,
        43.811143
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
        -79.580727,
        43.655939
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
        43.819045
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
        -79.459814,
        43.694241
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
        -79.449456,
        43.693306
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
        -79.405661,
        43.717499
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
        -79.236324,
        43.830737
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
        -79.146459,
        43.788281
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
        -79.481009,
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
        -79.438546,
        43.641336
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
        -79.383184,
        43.778033
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
        -79.568813,
        43.663205
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
        -79.356385,
        43.675635
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
        -79.371499,
        43.662945
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
        -79.242897,
        43.747718
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
        -79.228436,
        43.733444
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
        -79.313281,
        43.695919
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
        -79.548747,
        43.637039
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
        -79.174629,
        43.783422
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
        -79.399699,
        43.785611
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
        -79.222578,
        43.749366
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
        -79.423286,
        43.645248
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
        -79.438692,
        43.657349
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
        -79.419687,
        43.651124
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
        -79.496722,
        43.768548
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
        -79.422915,
        43.647099
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
        -79.603749,
        43.755907
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
        43.769925
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
        -79.409192,
        43.645277
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
        -79.620027,
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
        -79.429155,
        43.651613
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
        -79.405651,
        43.657805
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
        -79.491218,
        43.676613
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
        -79.341481,
        43.756834
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
        43.791763
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
        -79.497503,
        43.714774
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
        -79.317328,
        43.673187
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
        -79.189256,
        43.751735
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
        43.766855
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
        -79.583269,
        43.725041
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
        -79.334279,
        43.790128
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
        -79.298152,
        43.706185
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
        43.793666
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
        -79.228156,
        43.836565
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
        -79.552596,
        43.714866
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
        -79.565338,
        43.671975
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
        -79.457624,
        43.755731
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
        43.685296
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
        -79.225192,
        43.782264
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
        -79.455096,
        43.676617
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
        -79.175959,
        43.784314
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
        -79.331948,
        43.761701
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
        -79.329461,
        43.775451
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
        -79.490756,
        43.630806
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
        -79.494414,
        43.667237
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
        -79.454785,
        43.714207
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
        43.645105
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
        -79.436686,
        43.653284
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
        -79.525609,
        43.599544
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
        -79.600997,
        43.732144
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
        -79.523398,
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
        -79.346336,
        43.679644
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
        -79.601152,
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
        -79.418468,
        43.679918
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
        -79.279016,
        43.755249
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
        -79.236701,
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
        -79.341712,
        43.685926
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
        -79.487885,
        43.734604
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
        -79.318387,
        43.674605
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
        -79.533457,
        43.606966
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
        -79.478338,
        43.677968
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
        -79.311941,
        43.762735
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
        -79.335031,
        43.763177
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
        -79.237073,
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
        -79.425058,
        43.761521
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
        -79.234476,
        43.728398
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
        -79.398936,
        43.684575
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
        -79.593484,
        43.736916
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
        -79.575408,
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
        -79.575566,
        43.754591
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
        -79.331133,
        43.671406
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
        -79.312926,
        43.769523
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
        -79.591363,
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
        -79.563798,
        43.724276
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
        -79.225738,
        43.745267
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
        -79.571518,
        43.732073
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
        -79.303923,
        43.746712
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
        -79.422469,
        43.767276
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
        -79.356953,
        43.680907
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
        -79.249306,
        43.708605
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
        -79.521492,
        43.706588
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
        -79.540294,
        43.698884
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
        -79.340073,
        43.789779
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
        -79.444721,
        43.681617
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
        -79.572564,
        43.629626
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
        -79.490998,
        43.730038
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
        -79.152803,
        43.782546
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
        -79.409388,
        43.654397
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
        -79.204994,
        43.792096
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
        -79.225002,
        43.808035
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
        -79.367854,
        43.764118
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
        -79.439774,
        43.681129
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
        -79.604042,
        43.754859
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
        -79.503629,
        43.703057
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
        -79.250842,
        43.764963
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
        -79.453214,
        43.647202
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
        -79.204994,
        43.792096
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
        -79.580042,
        43.659408
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
        -79.345573,
        43.688923
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
        43.657795
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
        -79.274426,
        43.699901
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
        -79.327291,
        43.669657
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
        43.651154
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
        -79.588953,
        43.754071
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
        -79.277225,
        43.744047
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
        -79.451024,
        43.661747
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
        -79.597804,
        43.751201
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
        -79.431397,
        43.681226
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
        43.628161
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
        -79.501847,
        43.768049
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
        -79.475764,
        43.692571
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
        -79.412964,
        43.676968
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
        -79.565727,
        43.670695
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
        -79.181582,
        43.783941
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
        -79.481994,
        43.703644
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
        -79.496601,
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
        -79.449477,
        43.693357
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
        -79.403302,
        43.653786
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
        -79.432097,
        43.675887
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
        -79.136696,
        43.784122
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
        -79.352418,
        43.688704
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
        -79.352418,
        43.688704
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
        -79.226567,
        43.822813
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
        -79.402284,
        43.789069
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
        -79.248604,
        43.770087
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
        -79.417499,
        43.654503
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
        -79.425366,
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
        -79.441254,
        43.662418
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
        -79.343783,
        43.661109
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
        -79.295859,
        43.683065
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
        -79.465579,
        43.668247
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
        43.709964
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
        -79.459867,
        43.756928
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
        -79.432481,
        43.688663
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
        -79.274301,
        43.791383
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
        -79.491354,
        43.725831
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
        -79.305217,
        43.689646
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
        -79.559418,
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
        -79.368608,
        43.675116
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
        -79.302237,
        43.795556
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
        -79.331021,
        43.743624
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
        -79.441287,
        43.665966
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
        -79.345685,
        43.790901
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
        -79.424997,
        43.644201
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
        -79.397413,
        43.657024
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
        -79.263266,
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
        43.659227
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
        -79.187301,
        43.792123
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
        -79.393702,
        43.732496
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
        -79.311714,
        43.765177
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
        -79.480389,
        43.700173
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
        -79.551485,
        43.669549
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
        -79.577857,
        43.757717
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
        -79.582802,
        43.726786
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
        -79.432093,
        43.671572
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
        -79.405781,
        43.703707
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
        -79.483871,
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
        -79.251903,
        43.743603
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
        -79.256895,
        43.720074
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
        -79.251374,
        43.703732
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
        -79.427298,
        43.770232
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
        -79.543619,
        43.594507
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
        43.605196
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
        -79.462923,
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
        -79.228927,
        43.831253
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
        -79.349278,
        43.680577
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
        -79.224553,
        43.776298
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
        -79.353731,
        43.681966
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
        -79.460391,
        43.685666
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
        -79.297426,
        43.719748
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
        -79.258426,
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
        -79.231162,
        43.797387
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
        -79.419916,
        43.651081
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
        -79.477952,
        43.707392
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
        -79.452863,
        43.643129
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
        -79.568732,
        43.755052
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
        -79.471829,
        43.662458
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
        -79.284293,
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
        -79.404362,
        43.663566
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
        -79.306747,
        43.691269
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
        -79.257744,
        43.730546
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
        -79.225272,
        43.770276
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
        -79.224293,
        43.822358
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
        -79.342478,
        43.797367
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
        -79.429565,
        43.653969
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
        -79.488164,
        43.619502
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
        -79.177804,
        43.756548
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
        -79.481354,
        43.663129
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
        -79.353335,
        43.691485
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
        -79.252645,
        43.766397
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
        -79.270353,
        43.697698
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
        -79.446491,
        43.658389
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
        -79.561462,
        43.669796
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
        -79.375454,
        43.710121
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
        -79.456025,
        43.647004
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
        -79.612222,
        43.732252
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
        -79.323604,
        43.684916
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
        43.670725
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
        -79.463213,
        43.730561
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
        -79.412137,
        43.652241
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
        -79.465492,
        43.679289
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
        -79.181572,
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
        -79.495872,
        43.633928
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
        -79.215396,
        43.824344
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
        -79.356946,
        43.686199
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
        -79.553081,
        43.642799
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
        43.789245
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
        -79.557922,
        43.691062
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
        -79.417393,
        43.667278
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
        -79.454524,
        43.643202
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
        -79.366191,
        43.668466
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
        -79.224835,
        43.808164
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
        -79.426185,
        43.652561
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
        -79.433356,
        43.788856
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
        -79.255398,
        43.731114
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
        -79.339386,
        43.666063
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
        43.625674
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
        -79.247636,
        43.763776
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
        -79.556203,
        43.720849
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
        -79.254789,
        43.743442
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
        -79.310421,
        43.685237
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
        -79.423967,
        43.664785
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
        43.753447
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
        -79.221069,
        43.764155
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
        -79.250007,
        43.715086
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
        -79.185467,
        43.793053
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
        -79.425998,
        43.668517
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
        -79.444653,
        43.667238
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
        -79.327286,
        43.782608
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
        43.669083
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
        -79.450075,
        43.660178
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
        -79.180782,
        43.782943
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
        -79.423586,
        43.775547
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
        -79.571471,
        43.742934
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
        -79.209213,
        43.783842
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
        -79.303384,
        43.667994
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
        -79.526722,
        43.641749
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
        -79.395457,
        43.685304
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
        -79.177965,
        43.797788
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
        43.636029
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
        -79.538568,
        43.603353
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
        -79.520916,
        43.625593
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
        -79.240192,
        43.754073
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
        -79.325629,
        43.673642
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
        -79.418307,
        43.762578
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
        43.781047
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
        -79.285136,
        43.748771
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
        -79.228733,
        43.824906
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
        -79.560456,
        43.689687
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
        -79.482045,
        43.664668
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
        -79.320688,
        43.779867
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
        -79.352295,
        43.678123
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
        -79.429753,
        43.786157
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
        -79.364192,
        43.807829
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
        -79.568408,
        43.716132
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
        -79.492131,
        43.737178
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
        -79.443141,
        43.661549
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
        -79.513533,
        43.703672
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
        -79.418676,
        43.776462
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
        -79.164834,
        43.790249
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
        -79.549377,
        43.633095
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
        -79.173787,
        43.756525
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
        43.764196
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
        -79.444045,
        43.697973
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
        -79.350511,
        43.743357
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
        -79.450711,
        43.694633
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
        -79.613979,
        43.733328
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
        -79.189238,
        43.776516
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
        -79.233476,
        43.769896
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
        -79.545904,
        43.610326
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
        -79.234222,
        43.747871
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
        -79.211765,
        43.791855
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
        -79.442255,
        43.782649
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
        -79.563793,
        43.721626
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
        -79.176297,
        43.794335
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
        -79.448709,
        43.683026
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
        -79.307004,
        43.682241
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
        -79.257758,
        43.76573
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
        -79.427453,
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
        -79.548543,
        43.664128
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
        -79.416224,
        43.796285
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
        -79.172865,
        43.804054
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
        -79.165741,
        43.787611
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
        -79.435233,
        43.663194
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
        -79.326347,
        43.765927
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
        -79.521816,
        43.592065
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
        43.672965
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
        -79.582599,
        43.738745
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
        -79.277651,
        43.695501
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
        -79.183034,
        43.793889
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
        -79.339807,
        43.795546
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
        -79.280918,
        43.758213
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
        -79.167823,
        43.773824
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
        -79.600903,
        43.754246
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
        43.762682
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
        -79.222041,
        43.761351
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
        -79.584785,
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
        -79.274344,
        43.814787
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
        -79.461994,
        43.692032
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
        -79.583806,
        43.738789
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
        -79.272979,
        43.708381
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
        -79.247962,
        43.721489
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
        -79.307462,
        43.746882
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
        -79.223875,
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
        -79.575386,
        43.727713
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
        -79.304025,
        43.732297
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
        -79.614375,
        43.732609
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
        -79.598088,
        43.736754
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
        -79.432817,
        43.793801
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
        43.644563
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
        -79.430243,
        43.726777
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
        -79.333422,
        43.72161
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
        -79.333233,
        43.800444
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
        -79.350116,
        43.679505
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
        -79.552127,
        43.747938
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
        -79.453101,
        43.697352
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
        -79.278544,
        43.751202
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
        -79.595038,
        43.756107
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
        -79.224336,
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
        43.712022
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
        -79.446964,
        43.673263
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
        -79.620795,
        43.722049
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
        -79.408595,
        43.670839
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
        -79.134894,
        43.784353
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
        43.687105
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
        -79.576092,
        43.740428
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
        -79.264446,
        43.786235
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
        -79.456842,
        43.659497
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
        -79.566275,
        43.677312
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
        -79.425302,
        43.657073
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
        -79.304263,
        43.722923
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
        -79.550705,
        43.653471
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
        -79.276057,
        43.802851
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
        -79.327868,
        43.800102
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
        -79.519459,
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
        -79.544512,
        43.688352
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
        -79.590138,
        43.753789
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
        43.762323
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
        -79.488795,
        43.729588
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
        -79.256795,
        43.740778
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
        -79.503467,
        43.737333
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
        -79.560727,
        43.724678
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
        -79.434716,
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
        -79.458902,
        43.763492
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
        43.635388
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
        43.763616
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
        -79.574254,
        43.728087
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
        -79.252861,
        43.713663
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
        43.764395
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
        -79.348428,
        43.799541
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
        -79.232676,
        43.840559
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
        -79.485691,
        43.683046
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
        -79.175542,
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
        -79.418549,
        43.67099
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
        -79.256938,
        43.708149
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
        -79.528994,
        43.605493
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
        -79.432276,
        43.643477
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
        -79.443063,
        43.661348
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
        -79.550479,
        43.665312
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
        43.786786
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
        43.684887
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
        -79.434484,
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
        -79.293304,
        43.715927
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
        -79.342927,
        43.78688
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
        -79.447136,
        43.671175
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
        -79.316675,
        43.69646
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
        -79.418629,
        43.661833
      ]
    }
  }
];
const suitesSecondary = {
  type: type$1,
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
  let years = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
  $$result.css.add(css$5);
  svgWidth = divWidth - 22;
  xScale = scaleBand().domain(years).range([0, svgWidth - 50]).paddingInner(0.37).paddingOuter(0.37);
  return `<div id="${"barChart"}" class="${"svelte-1w5mapt"}"><svg height="${"370"}"${add_attribute("width", svgWidth, 0)} id="${"svgChart"}" class="${"svelte-1w5mapt"}"><text x="${"50"}" y="${"10"}" id="${"title"}" class="${"svelte-1w5mapt"}">Closed &quot;Second Suite (New)&quot;</text><text x="${"50"}" y="${"30"}" id="${"title"}" class="${"svelte-1w5mapt"}">Building Permits by Year</text><pattern id="${"pattern-lines"}" x="${"0"}" y="${"0"}" width="${"10"}" height="${"10"}" patternUnits="${"userSpaceOnUse"}"><rect x="${"0"}" y="${"0"}" height="${"10"}" width="${"10"}" style="${"fill:#AB1368;"}"></rect><line x1="${"0"}" y1="${"0"}" x2="${"10"}" y2="${"10"}" style="${"stroke:white;stroke-width:1"}"></line></pattern>${each(years, (year) => {
    return `<rect id="${"bar"}"${add_attribute("x", 50 + xScale(year), 0)}${add_attribute("y", 60 + barY$1(yearCountsSecondary[year]), 0)}${add_attribute("width", xScale.bandwidth(), 0)}${add_attribute("height", barHeight$1(yearCountsSecondary[year]), 0)} fill="${"url(#pattern-lines)"}" class="${"svelte-1w5mapt"}"></rect>

            <line${add_attribute("x1", 50 + xScale(year) + xScale.bandwidth() / 2, 0)}${add_attribute("x2", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y1="${"330"}" y2="${"333"}" style="${"stroke:white;stroke-width:1"}"></line>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)}${add_attribute("y", 57 + barY$1(yearCountsSecondary[year]), 0)} id="${"labelBar"}" text-anchor="${"middle"}" class="${"svelte-1w5mapt"}">${escape(yearCountsSecondary[year])}</text>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y="${"345"}" id="${"yearLabelWeb"}" text-anchor="${"middle"}" class="${"svelte-1w5mapt"}">${escape(year)}</text>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y="${"345"}" id="${"yearLabelMobile"}" text-anchor="${"middle"}" transform="${"rotate(-45," + escape(57 + xScale(year) + xScale.bandwidth() / 2, true) + ",354)"}" class="${"svelte-1w5mapt"}">${escape(year)}</text>`;
  })}<line x1="${"50"}" y1="${"330"}"${add_attribute("x2", svgWidth, 0)} y2="${"330"}" style="${"stroke:white;stroke-width:1"}"></line><text x="${"40"}" y="${"333"}" id="${"label"}" class="${"svelte-1w5mapt"}">0</text><line x1="${"50"}" y1="${"262.5"}"${add_attribute("x2", svgWidth, 0)} y2="${"262.5"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"33"}" y="${"266"}" id="${"label"}" class="${"svelte-1w5mapt"}">50</text><line x1="${"50"}" y1="${"195"}"${add_attribute("x2", svgWidth, 0)} y2="${"195"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"25"}" y="${"200"}" id="${"label"}" class="${"svelte-1w5mapt"}">100</text><line x1="${"50"}" y1="${"127.5"}"${add_attribute("x2", svgWidth, 0)} y2="${"127.5"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"25"}" y="${"132"}" id="${"label"}" class="${"svelte-1w5mapt"}">150</text><line x1="${"50"}" y1="${"50"}"${add_attribute("x2", svgWidth, 0)} y2="${"50"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"25"}" y="${"55"}" id="${"label"}" class="${"svelte-1w5mapt"}">200</text></svg>

</div>`;
});
const type = "FeatureCollection";
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
        -79.341939,
        43.683076
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
        43.645349
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
        -79.430219,
        43.667367
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
        -79.422721,
        43.658507
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
        -79.422147,
        43.642299
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
        -79.328252,
        43.679155
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
        -79.302746,
        43.690654
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
        -79.408468,
        43.651787
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
        -79.423247,
        43.682931
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
        -79.426489,
        43.682087
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
        -79.407131,
        43.661502
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
        -79.342692,
        43.682401
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
        -79.442439,
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
        -79.418258,
        43.658006
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
        -79.315822,
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
        -79.340124,
        43.681542
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
        -79.310222,
        43.685517
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
        -79.321916,
        43.667156
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
        -79.444435,
        43.664775
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
        -79.465706,
        43.679638
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
        -79.332396,
        43.681077
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
        -79.449994,
        43.678899
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
        -79.296945,
        43.678388
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
        -79.444807,
        43.642235
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
        -79.340897,
        43.680275
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
        -79.422054,
        43.683227
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
        -79.465741,
        43.679685
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
        -79.449866,
        43.678928
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
        -79.418206,
        43.662271
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
        -79.441542,
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
        -79.350116,
        43.679505
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
        43.670369
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
        -79.451364,
        43.663323
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
        -79.420371,
        43.661298
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
        43.670948
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
        -79.346336,
        43.679644
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
        -79.419264,
        43.668676
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
        -79.338205,
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
        -79.334178,
        43.672413
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
        -79.406256,
        43.643806
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
        -79.343687,
        43.677283
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
        -79.338875,
        43.667241
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
        -79.418982,
        43.671476
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
        -79.411506,
        43.659788
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
        -79.347485,
        43.669923
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
        -79.450496,
        43.648577
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
        -79.428454,
        43.668236
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
        -79.441475,
        43.640522
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
        -79.439699,
        43.642239
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
        -79.342139,
        43.692752
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
        -79.393015,
        43.651453
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
        -79.418965,
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
        -79.430795,
        43.664549
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
        -79.444554,
        43.644547
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
        -79.415397,
        43.671903
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
        -79.489897,
        43.668241
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
        -79.432225,
        43.671889
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
        -79.421597,
        43.680361
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
        43.680348
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
        -79.425782,
        43.644838
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
        -79.390454,
        43.683321
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
        -79.429588,
        43.657693
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
        43.664719
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
        -79.339493,
        43.666315
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
        43.661766
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
        -79.338857,
        43.678984
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
        -79.315995,
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
        43.648335
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
        -79.434956,
        43.664975
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
        -79.347885,
        43.657631
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
        -79.424137,
        43.645138
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
        -79.467723,
        43.686954
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
        -79.423264,
        43.682997
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
        43.672317
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
        -79.411894,
        43.657277
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
        -79.291646,
        43.684737
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
        -79.431203,
        43.66715
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
        -79.413124,
        43.663798
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
        -79.420651,
        43.679506
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
        -79.343219,
        43.659719
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
        -79.387885,
        43.70436
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
        -79.344663,
        43.676276
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
        -79.433846,
        43.645819
      ]
    }
  }
];
const suitesLaneway = {
  type,
  features
};
const BarChartLaneway_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "#barChart.svelte-1m9soq0{padding:10px;padding-left:0px;padding-top:40px;margin:0 auto;width:calc(100% - 30px);max-width:650px;height:160px;min-width:375px}#bar.svelte-1m9soq0{stroke:white;stroke-width:1}#label.svelte-1m9soq0{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803)}#labelBar.svelte-1m9soq0{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803)}#yearLabelWeb.svelte-1m9soq0{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803)}#yearLabelMobile.svelte-1m9soq0{font-size:15px;font-family:'Ubuntu Mono', monospace;font-weight:400;fill:rgba(255, 255, 255, 0.803);opacity:0}@media(max-width: 500px){#yearLabelWeb.svelte-1m9soq0{opacity:0\n        }#yearLabelMobile.svelte-1m9soq0{opacity:1}}#title.svelte-1m9soq0{font-size:17px;font-family:'Ubuntu Mono', monospace;font-weight:700;fill:rgba(255, 255, 255, 0.99)}",
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
  let years = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
  $$result.css.add(css$4);
  svgWidth = divWidth - 22;
  xScale = scaleBand().domain(years).range([0, svgWidth - 50]).paddingInner(0.37).paddingOuter(0.37);
  return `<div id="${"barChart"}" class="${"svelte-1m9soq0"}"><svg height="${"160"}"${add_attribute("width", svgWidth, 0)} id="${"svgChart"}" class="${"svelte-1m9soq0"}"><text x="${"50"}" y="${"10"}" id="${"title"}" class="${"svelte-1m9soq0"}">Closed &quot;Laneway / Rear Yard Suite&quot;</text><text x="${"50"}" y="${"30"}" id="${"title"}" class="${"svelte-1m9soq0"}">Building Permits by Year</text><pattern id="${"pattern-lines-green"}" x="${"0"}" y="${"0"}" width="${"10"}" height="${"10"}" patternUnits="${"userSpaceOnUse"}"><rect x="${"0"}" y="${"0"}" height="${"10"}" width="${"10"}" style="${"fill:#F1C500;"}"></rect><line x1="${"0"}" y1="${"0"}" x2="${"10"}" y2="${"10"}" style="${"stroke:white;stroke-width:1"}"></line></pattern>${each(years, (year) => {
    return `<rect id="${"bar"}"${add_attribute("x", 50 + xScale(year), 0)}${add_attribute("y", 60 + barY(yearCountsLaneway[year]), 0)}${add_attribute("width", xScale.bandwidth(), 0)}${add_attribute("height", barHeight(yearCountsLaneway[year]), 0)} fill="${"url(#pattern-lines-green)"}" class="${"svelte-1m9soq0"}"></rect>

            <line${add_attribute("x1", 50 + xScale(year) + xScale.bandwidth() / 2, 0)}${add_attribute("x2", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y1="${"127.5"}" y2="${"130.5"}" style="${"stroke:white;stroke-width:1"}"></line>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)}${add_attribute("y", 57 + barY(yearCountsLaneway[year]), 0)} id="${"labelBar"}" text-anchor="${"middle"}" class="${"svelte-1m9soq0"}">${escape(yearCountsLaneway[year])}</text>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y="${"142.5"}" id="${"yearLabelWeb"}" text-anchor="${"middle"}" class="${"svelte-1m9soq0"}">${escape(year)}</text>

            <text${add_attribute("x", 50 + xScale(year) + xScale.bandwidth() / 2, 0)} y="${"142.5"}" id="${"yearLabelMobile"}" text-anchor="${"middle"}" transform="${"rotate(-45," + escape(57 + xScale(year) + xScale.bandwidth() / 2, true) + ",151)"}" class="${"svelte-1m9soq0"}">${escape(year)}</text>`;
  })}<line x1="${"50"}" y1="${"127.5"}"${add_attribute("x2", svgWidth, 0)} y2="${"127.5"}" style="${"stroke:white;stroke-width:1;opacity:1"}"></line><text x="${"40"}" y="${"132"}" id="${"label"}" class="${"svelte-1m9soq0"}">0</text><line x1="${"50"}" y1="${"50"}"${add_attribute("x2", svgWidth, 0)} y2="${"50"}" style="${"stroke:white;stroke-width:1;opacity:0.3"}"></line><text x="${"33"}" y="${"55"}" id="${"label"}" class="${"svelte-1m9soq0"}">50</text></svg>

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
  code: "#map.svelte-11w4gto.svelte-11w4gto{width:100%;border-top:1px solid var(--brandLightBlue);border-bottom:1px solid var(--brandLightBlue)}#top-bar.svelte-11w4gto.svelte-11w4gto{width:calc(100% - 36px);background-color:var(--brandDarkBlue);background-size:13px 13px;background-image:repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);color:white;font-size:17px;font-family:'Ubuntu Mono', monospace;padding:18px;padding-top:28px;padding-bottom:8px;font-weight:bold}#top-bar.svelte-11w4gto p.svelte-11w4gto{max-width:720px;width:100%;margin:0 auto}#options-wrapper.svelte-11w4gto.svelte-11w4gto{width:100%;padding-bottom:15px;background-color:var(--brandDarkBlue);background-size:13px 13px;background-image:repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%)}#options.svelte-11w4gto.svelte-11w4gto{margin:0 auto;padding-top:7px;width:100%;max-width:650px}#options.svelte-11w4gto p.svelte-11w4gto{color:white;font-size:17px;font-family:'Ubuntu Mono', monospace;max-width:620px;width:100%;margin:0 auto;padding:18px;padding-top:7px;padding-bottom:7px;text-decoration:underline;text-decoration-color:#8EB6DC}#pointLayers.svelte-11w4gto.svelte-11w4gto{color:white;padding:10px;padding-left:16px;padding-bottom:1px;font-size:17px;font-family:'Ubuntu Mono', monospace;font-weight:400;overflow:hidden}#rearYardButton.svelte-11w4gto.svelte-11w4gto{float:left;margin-right:20px;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#secondaryButton.svelte-11w4gto.svelte-11w4gto{overflow:hidden;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#lanewayButton.svelte-11w4gto.svelte-11w4gto{float:left;margin-right:20px;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#incomeButton.svelte-11w4gto.svelte-11w4gto{overflow:hidden;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#resYellowButton.svelte-11w4gto.svelte-11w4gto{float:left;margin-right:20px;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#resOtherButton.svelte-11w4gto.svelte-11w4gto{overflow:hidden;width:290px;border:solid 1px #fff;padding:4px;margin-bottom:10px;background-color:#2a5e89;cursor:pointer}#rearYardButton.svelte-11w4gto.svelte-11w4gto:hover{opacity:1;background-color:var(--brandDarkBlue)}#secondaryButton.svelte-11w4gto.svelte-11w4gto:hover{opacity:1;background-color:var(--brandDarkBlue)}#resYellowButton.svelte-11w4gto.svelte-11w4gto:hover{opacity:1;background-color:var(--brandDarkBlue)}#resOtherButton.svelte-11w4gto.svelte-11w4gto:hover{opacity:1;background-color:var(--brandDarkBlue)}#lanewayButton.svelte-11w4gto.svelte-11w4gto:hover{opacity:1;background-color:var(--brandDarkBlue)}#incomeButton.svelte-11w4gto.svelte-11w4gto:hover{opacity:1;background-color:var(--brandDarkBlue)}.layerOn.svelte-11w4gto.svelte-11w4gto{opacity:1}.layerOff.svelte-11w4gto.svelte-11w4gto{opacity:0.42}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let values = [2020, 2022];
  mapboxgl.accessToken = "pk.eyJ1Ijoic2Nob29sb2ZjaXRpZXMiLCJhIjoiY2w2Z2xhOXprMTYzczNlcHNjMnNvdGlmNCJ9.lOgVHrajc1L-LlU0as2i2A";
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

<div id="${"top-bar"}" class="${"svelte-11w4gto"}"><p class="${"svelte-11w4gto"}">Location of rear-yeard and secondary suite building permits in Toronto:</p></div>

<div id="${"map"}" style="${"height: " + escape(mapHeight, true) + "px"}" class="${"svelte-11w4gto"}"></div>

<div id="${"options-wrapper"}" class="${"svelte-11w4gto"}"><div id="${"options"}" class="${"svelte-11w4gto"}"><p class="${"svelte-11w4gto"}">Closed (i.e. Cleared) Building Permits:</p>
        
        <div id="${"pointLayers"}" class="${"svelte-11w4gto"}"><div id="${"rearYardButton"}" class="${escape(null_to_empty("layerOn"), true) + " svelte-11w4gto"}"><svg width="${"20"}" height="${"10"}"><circle style="${"fill:#F1C500;stroke-width:2;stroke:#fff"}" cx="${"15"}" cy="${"5"}" r="${"4"}"></circle></svg>
                Rear-Yard Suites
            </div>

            <div id="${"secondaryButton"}" class="${escape(null_to_empty("layerOn"), true) + " svelte-11w4gto"}"><svg width="${"20"}" height="${"10"}"><circle style="${"fill:#ab1269;stroke-width:2;stroke:#fff"}" cx="${"15"}" cy="${"5"}" r="${"4"}"></circle></svg>
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
        max: 2022,
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

        <p class="${"svelte-11w4gto"}">Open (i.e. Active) Building Permits:</p>

        <div id="${"pointLayers"}" class="${"svelte-11w4gto"}"><div id="${"rearYardButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-11w4gto"}"><img height="${"11px"}" width="${"11px"}"${add_attribute("src", xRearYard, 0)} alt="${"xRearYard"}" style="${"padding-left: 4px"}">
                Rear-Yard Suites
            </div>

            <div id="${"secondaryButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-11w4gto"}"><img height="${"11px"}" width="${"11px"}"${add_attribute("src", xSecondary, 0)} alt="${"xSecondary"}" style="${"padding-left: 4px"}">
                Secondary Suites
            </div></div>


        <p class="${"svelte-11w4gto"}">Residential Zoning:</p>

        <div id="${"pointLayers"}" class="${"svelte-11w4gto"}"><div id="${"resYellowButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-11w4gto"}"><svg width="${"15"}" height="${"10"}"><rect style="${"fill:#1a2d3b"}" x="${"5"}" y="${"0"}" width="${"10"}" height="${"10"}"></rect></svg>
                Single-Detached Only
            </div>

            <div id="${"resOtherButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-11w4gto"}"><svg width="${"15"}" height="${"10"}"><rect style="${"fill:#2e4e66"}" x="${"5"}" y="${"0"}" width="${"10"}" height="${"10"}"></rect></svg>
                Other Low-Density
            </div></div>

        <p class="${"svelte-11w4gto"}">Reference Layers:</p>

        <div id="${"pointLayers"}" class="${"svelte-11w4gto"}"><div id="${"lanewayButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-11w4gto"}"><svg width="${"20"}" height="${"10"}"><line style="${"stroke-width:1.5;stroke:#fff"}" x1="${"5"}" x2="${"20"}" y1="${"5"}" y2="${"5"}"></line></svg>
                Laneways
            </div>

            <div id="${"incomeButton"}" class="${escape(null_to_empty("layerOff"), true) + " svelte-11w4gto"}"><svg width="${"0"}" height="${"10"}"></svg>
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
const logo = "/gentle-density/_app/immutable/assets/top-logo-1f7d60e9.svg";
const TopSofC_svelte_svelte_type_style_lang = "";
const css = {
  code: "#bar.svelte-y3d596{position:fixed;overflow:hidden;top:0px;height:50px;background-color:var(--brandDarkBlue);margin-bottom:20px;border-bottom:1px solid var(--brandLightBlue);width:100%;min-width:200px;padding-left:0px;padding-right:0px;z-index:5;opacity:0.92}#logo.svelte-y3d596{margin:auto;max-width:142px}a.svelte-y3d596{color:black}a.svelte-y3d596:hover{opacity:0.7}img.svelte-y3d596{color:blue}img.svelte-y3d596:hover{opacity:0.5;cursor:pointer}",
  map: null
};
const TopSofC = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"bar"}" class="${"svelte-y3d596"}"><div id="${"logo"}" class="${"svelte-y3d596"}"><a href="${"https://www.schoolofcities.utoronto.ca/"}" class="${"svelte-y3d596"}"><img${add_attribute("src", logo, 0)} alt="${"School of Cities"}" class="${"svelte-y3d596"}"></a></div>

</div>`;
});
const styles = "";
const isometricSecondary = "/gentle-density/_app/immutable/assets/isometric-secondary-3d24ae8f.svg";
const isometricLaneway = "/gentle-density/_app/immutable/assets/isometric-laneway-16b82c84.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-5x7sja_START --><link href="${"https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;800&display=swap"}" rel="${"stylesheet"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, minimum-scale=1"}"><link href="${"https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css"}" rel="${"stylesheet"}"><!-- HEAD_svelte-5x7sja_END -->`, ""}



${validate_component(TopSofC, "Top").$$render($$result, {}, {}, {})}

<main><div class="${"blueprint"}"><div class="${"title"}"><h1>Tracking <span class="${"italic"}">Gentle Density</span> in Toronto
			</h1>
			<h2>Via Visualizing Building Permit Data
			</h2>
			<p><a href="${"https://jamaps.github.io"}">Jeff Allen</a></p></div></div>

	<div class="${"background-white"}"><div class="${"arrow"}"><p>\u25BC</p></div>

		<div class="${"text"}"><p>Swaths of Toronto consists of land only zoned for low-density single family homes (often called the <a href="${"https://schoolofcities.github.io/yellowbelt-canadian-cities-2022/"}">Yellowbelt</a>). There has been a big push among housing advocates, academics, and planners to increase housing supply in these neighbourhoods via buidling <a href="${"https://missingmiddlehousing.com/"}">missing middle</a> housing (a range of housing types that fall between single-family homes and high-rise apartments), in aims make our urban areas more affordable, inclusive, and sustainable. 
			</p>
			<p>At the smaller-scale of the missing middle are 
				<a href="${"https://www.gentledensity.ca/"}">gentle density</a> (or &quot;missing little&quot;) strategies, which refers to owner-led efforts to build additional dwellings within their existing parcel of land. These can increase property value and provide supplmentary income, but importantly, in aggregate, can incrementally scale up the density of a neighbourhood and provide needed housing, particularly for those unaable to afford larger home.
				Relative to larger developments (e.g. larger multi-unit apartments and condominiums), gentle density is more compatible with the scale and character of existing neighborhoods. Gentle density development is thus often seen as a way to increase the housing supply in a way that is less disruptive to existing communities but can still help create more walkable, livable neighborhoods.
			</p>
			<p>But to what is the recent uptake in gentle density housing in the City of Toronto?
			</p>
			<p>To answer this, we&#39;ve looked at 10 years of <a href="${"https://open.toronto.ca/dataset/building-permits-cleared-permits-prior-years/"}">building permit data</a> in the City of Toronto (from 01/2013 to 12/2022) to see how and where forms of gentle density have (or have not) been built across the city during this period. At any point in time, building permits can either be active (i.e. build in progress), cancelled, or closed. Those that are closed, we can assume construction has finished. We first counted building permits by the year they were closed for the following two types of gentle density construction, to then chart their trends over time.
			</p>
			
			<h3><span class="${"textSecondary"}">Secondary Suites</span></h3>
			<div class="${"typeWrapper"}"><div class="${"isometric-mobile"}"><img${add_attribute("src", isometricSecondary, 0)} alt="${"isometricSecondary"}"></div>
				<div class="${"typeText"}"><p>Sub-dividing an existing residential structure creating one or more additional dwelling units. The most common form is converting a basement into a separate apartment, but this can include other types of conversions as well (e.g. converting from a duplex to a triplex). These conversions may or may not include building additions (i.e. expanding the volume) of the structure. They have been permitted since 2000 city-wide, with some restrictions.
				</p></div>
				<div class="${"isometric"}"><img${add_attribute("src", isometricSecondary, 0)} alt="${"isometricSecondary"}"></div></div>

			<h3><span class="${"textLaneway"}">Rear-Yard Suites</span></h3>
			<div class="${"typeWrapper"}"><div class="${"isometric-mobile"}"><img${add_attribute("src", isometricLaneway, 0)} alt="${"isometricLaneway"}"></div>
				<div class="${"typeText"}"><p>Building a small detached dwelling unit that is located on the same property as a single-family home. They are sometimes called Accessory Dwelling Units (ADUs), Garden Suites, or Laneway Houses. Toronto legalized rear year suites that abut laneways in 06/2018 (these can also include garage conversions) and then in all other residentially zoned neighbourhoods in 02/2022 (i.e. for residential properties without laneways).
				</p></div>
				<div class="${"isometric"}"><img${add_attribute("src", isometricLaneway, 0)} alt="${"isometricLaneway"}"></div></div></div></div>

	<div class="${"line-chart"}">${validate_component(BarChartSecondary, "BarChartSecondary").$$render($$result, {}, {}, {})}
		${validate_component(BarChartLaneway, "BarChartLaneway").$$render($$result, {}, {}, {})}</div>

	<div class="${"background-white"}"><div class="${"text"}"><p>The construction of secondary suites hovered between 100 and 120 per year up until 2019, and then jumped in 2020 to just under 200. While rear-yeard suites next to laneways were legalized in 2018, none were completed according to building permit data until 2020, and only a few dozen since then. Almost all of these are concentrated in pre-war Toronto, where most of the laneways in the city are located (post-war neighbourhoods tend to not have laneways with garages facing the street). 
			</p>
			<p>Overall, the completion of secondary suites and rear-year suites is quite lackluster given the need for housing in Toronto (expected population growth of about 500,000 from 2023 to 2030). Summing the bars above, only QQQ secondary suites and QQQQ rear-yard suites have been built in Toronto between 2013 and 2022.  
			</p>
			<p>Despite this sluggish uptake to date, there are a number of ongoing projects. As of January 1, 2023 there were 575 secondary suite and 458 rear-yard suite building permits that were open and ongoing. (These totals are based on counting building permits with unique addresses and had an initial or revised application date from the five year period from 2018 to 2022).
			</p>
			<p>To explore further, we have also mapped where secondary suites and rear-yard suites have been built in the city from 2013 to 2022, as well as the location of active building permits. 
			</p>
			<p>These highlight clustering of development in pre-war neighbourhoods just east and particularly west of the downtown core. All completed rear-yard suites cluster in these neighbourhoods since these are where the majority of the City&#39;s laneways are located (post-war development focused garage construction towards the street rather than to a back laneway like pre-war housing). Looking at the active permits, there are now several popping up elsewhere in more suburban neighbourhoods.
			</p>
			<p>One notable pattern is that there is far less gentle density construction in the centre of the city, despite this area mostly consisting of single-detached homes. This part is home to some of the city&#39;s wealthiest neighbourhoods (toggle on the income layer to check this out). 
			</p></div></div>

	${validate_component(Map, "Map").$$render($$result, {}, {}, {})}

	<div class="${"background-white"}"><div class="${"text"}"><h3>Data &amp; Code</h3>
			<p>Data on the location, type, and status of <a href="${"https://open.toronto.ca/catalogue/?search=building%20permits&sort=score%20desc"}">building permits</a> are form the City of Toronto&#39;s Open Data portal. 
			</p>
			<p>The residential <a href="${"https://open.toronto.ca/dataset/zoning-by-law/"}">zoning layer</a> is also from the City&#39;s Open Data portal. The single-detached only zones are those classified as [RD] while the other low-density zones are classified as [R, RA, RM, RS, RS]. The latter also include semi-detached, townhouses, and smaller multi-unit dwellings, depending on the zone classification.
			</p>
			<p>The location of laneways is also from the City of Toronto&#39;s Open Data portal. It was filtered and extracted from the City&#39;s <a href="${"https://open.toronto.ca/dataset/toronto-centreline-tcl/"}">Centreline</a> dataset
			</p>
			<p>The <a href="${"https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/index-eng.cfm"}">income data</a> is from the 2021 Canadian census. The low category are census tracts with a median after-tax household income of less then $75,000, the medium range is between $75,000 and $100,000, and the high is above $100,000.
			</p>
			<p>All code used to analyze this data and make this website and its graphics are on <a href="${"https://github.com/schoolofcities/gentle-density"}">GitHub</a>. It was built with the help of Python (pandas, geopandas), Svelte, Mapbox, and D3.
			</p></div></div></main>`;
});
export {
  Page as default
};
