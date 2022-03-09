exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('data').del()
    .then(function () {
      // Inserts seed entries
      return knex('data').insert([
        {
          id: 1,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:4',
          description: 'Value in degrees celsius, time in NZST.',
          value: 30.40
        },
        {
          id: 2,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:4',
          description: 'Altitude value in meters, time in NZST.',
          value: 19.77
        },
        {
          id: 3,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:4',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 101589.92
        },
        {
          id: 4,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:5',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.40
        },
        {
          id: 5,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:5',
          description: 'Altitude value in meters, time in NZST.',
          value: 45.14
        },
        {
          id: 6,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:5',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 101284.88
        },
        {
          id: 7,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:6',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.40
        },
        {
          id: 8,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:6',
          description: 'Altitude value in meters, time in NZST.',
          value: 107.05
        },
        {
          id: 9,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:6',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 100543.70
        },
        {
          id: 10,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:7',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.40
        },
        {
          id: 11,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:7',
          description: 'Altitude value in meters, time in NZST.',
          value: 158.98
        },
        {
          id: 12,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:7',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 99925.45
        },
        {
          id: 13,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:8',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.39
        },
        {
          id: 14,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:8',
          description: 'Altitude value in meters, time in NZST.',
          value: 216.42
        },
        {
          id: 15,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:8',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 99245.15
        },
        {
          id: 16,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:9',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.39
        },
        {
          id: 17,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:9',
          description: 'Altitude value in meters, time in NZST.',
          value: 277.19
        },
        {
          id: 18,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:9',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 98529.51
        },
        {
          id: 19,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:10',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.39
        },
        {
          id: 20,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:10',
          description: 'Altitude value in meters, time in NZST.',
          value: 371.02
        },
        {
          id: 21,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:10',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 97432.72
        },
        {
          id: 22,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:11',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.39
        },
        {
          id: 23,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:11',
          description: 'Altitude value in meters, time in NZST.',
          value: 433.39
        },
        {
          id: 24,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:11',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 96709.20
        },
        {
          id: 25,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:12',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.39
        },
        {
          id: 26,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:12',
          description: 'Altitude value in meters, time in NZST.',
          value: 494.26
        },
        {
          id: 27,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:12',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 96007.27
        },
        {
          id: 28,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:13',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.39
        },
        {
          id: 29,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:13',
          description: 'Altitude value in meters, time in NZST.',
          value: 552.76
        },
        {
          id: 30,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:13',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 95336.52
        },
        {
          id: 31,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:14',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.39
        },
        {
          id: 32,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:14',
          description: 'Altitude value in meters, time in NZST.',
          value: 634.51
        },
        {
          id: 33,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:14',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 94405.61
        },
        {
          id: 34,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:15',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.39
        },
        {
          id: 35,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:15',
          description: 'Altitude value in meters, time in NZST.',
          value: 684.02
        },
        {
          id: 36,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:15',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 93845.30
        },
        {
          id: 37,
          name: 'Temperature',
          data_type: 1,
          timestamp: '14:15:15',
          description: 'Temperature value in degrees celsius, time in NZST.',
          value: 30.39
        },
        {
          id: 38,
          name: 'Altitude',
          data_type: 2,
          timestamp: '14:15:15',
          description: 'Altitude value in meters, time in NZST.',
          value: 728.90
        },
        {
          id: 39,
          name: 'Pressure',
          data_type: 3,
          timestamp: '14:15:15',
          description: 'Air pressure value in pascal, time in NZST.',
          value: 93339.88
        }
      ])
    })
}
