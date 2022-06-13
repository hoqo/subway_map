import type { iMapItem, iSubwayLine } from 'interfaces';

export const blueLine: iSubwayLine = {
  name: 'Blue subway line',
  colorCode: '#2880c3',
  nodes: [
    {
      name: 'Heriov Dnipra',
      point: {
        x: 2140,
        y: 250,
      },
    },
    {
      name: 'Minska',
      point: {
        x: 2140,
        y: 430,
      },
    },
    {
      name: 'Obolon',
      point: {
        x: 2140,
        y: 600,
      },
    },
    {
      name: 'Pochaina',
      point: {
        x: 2140,
        y: 780,
      },
    },
    {
      name: 'Tarasa Shevchenka',
      point: {
        x: 2140,
        y: 940,
      },
    },
    {
      name: 'Kontraktova Ploshcha',
      point: {
        x: 2140,
        y: 1120,
      },
    },
    {
      name: 'Poshtova Ploshcha',
      point: {
        x: 2140,
        y: 1300,
      },
    },
    {
      name: 'Maidan Nezalezhnosti',
      point: {
        x: 2140,
        y: 1475,
      },
    },
    {
      point: {
        x: 2125,
        y: 1710,
      },
    },
    {
      name: 'Ploshcha Lva Tolstoho',
      point: {
        x: 1910,
        y: 1960,
      },
    },
    {
      point: {
        x: 1810,
        y: 2070,
      },
    },
    {
      name: 'Olimpiiska',
      point: {
        x: 1800,
        y: 2140,
      },
    },
    {
      name: 'Palats Ukraina',
      point: {
        x: 1800,
        y: 2300,
      },
    },
    {
      name: 'Lybidska',
      point: {
        x: 1800,
        y: 2445,
      },
    },
    {
      point: {
        x: 1790,
        y: 2530,
      },
    },
    {
      name: 'Demiivska',
      point: {
        x: 1670,
        y: 2660,
      },
    },
    {
      name: 'Holosiivska',
      point: {
        x: 1550,
        y: 2785,
      },
    },
    {
      name: 'Vasylkivska',
      point: {
        x: 1440,
        y: 2890,
      },
    },
    {
      name: 'Vystavkovyi Tsentr',
      point: {
        x: 1325,
        y: 3000,
      },
    },
    {
      point: {
        x: 1250,
        y: 3070,
      },
    },
    {
      name: 'Ipodrom',
      point: {
        x: 1130,
        y: 3100,
      },
    },
    {
      name: 'Teremky',
      point: {
        x: 850,
        y: 3100,
      },
    },
  ],
};

export const redLine: iSubwayLine = {
  name: 'Red subway line',
  colorCode: 'red',
  nodes: [
    {
      name: 'Akadmemistechko',
      point: {},
    },
    {
      name: 'Zhytomyrska',
      point: {},
    },
    {
      name: 'Sviatoshyn',
      point: {},
    },
    {
      name: 'Nyvky',
      point: {},
    },
    {
      name: 'Beresteiska',
      point: {},
    },
    {
      name: 'Shuliavska',
      point: {},
    },
    {
      name: 'Politechnichniy Instytut',
      point: {},
    },
    {
      name: 'Vokzalna',
      point: {},
    },
    {
      name: 'Universytet',
      point: {},
    },
    {
      name: 'Teatralna',
      point: {},
    },
    {
      name: 'Khreschatyk',
      point: {},
    },
    {
      name: 'Arsenalna',
      point: {},
    },
    {
      name: 'Dnipro',
      point: {},
    },
    {
      name: 'Hidropark',
      point: {},
    },
    {
      name: 'Livoberezhna',
      point: {},
    },
    {
      name: 'Darnytsia',
      point: {},
    },
    {
      name: 'Chernihivska',
      point: {},
    },
    {
      name: 'Lisova',
      point: {},
    },
  ],
};

export const greenLine: iSubwayLine = {
  name: 'Green subway line',
  colorCode: 'green',
  nodes: [
    {
      name: 'Syrets',
      point: {},
    },
    {
      name: 'Dorohozhychi',
      point: {},
    },
    {
      name: 'Lukianivska',
      point: {},
    },
    {
      name: 'Zoloti Vorota',
      point: {},
    },
    {
      name: 'Palats Sportu',
      point: {},
    },
    {
      name: 'Klovska',
      point: {},
    },
    {
      name: 'Pecherska',
      point: {},
    },
    {
      name: 'Druzhby Narodiv',
      point: {},
    },
    {
      name: 'Vydubychi',
      point: {},
    },
    {
      name: 'Slavutych',
      point: {},
    },
    {
      name: 'Osokorky',
      point: {},
    },
    {
      name: 'Pozniaky',
      point: {},
    },
    {
      name: 'Kharkivska',
      point: {},
    },
    {
      name: 'Vyrlytsia',
      point: {},
    },
    {
      name: 'Boryspilska',
      point: {},
    },
    {
      name: 'Chervoniy Khutir',
      point: {},
    },
  ],
};

export const dniproRiver: iMapItem = {
  name: 'Dnipro River',
  colorCode: '#aae3ff',
};

export const subwayLines: iSubwayLine[] = [blueLine, redLine, greenLine];
