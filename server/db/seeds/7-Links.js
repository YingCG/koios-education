exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Links').del()
    .then(function () {
      // Inserts seed entries
      return knex('Links').insert([
        {
          id: 1,
          topic_id: 1,
          type: 'text',
          name: 'What is Astronomy?',
          description: 'Definition and history - provides background information about what astronomy is and what different types of astronomers do.',
          link: 'https://www.space.com/16014-astronomy.html'
        },
        {
          id: 2,
          topic_id: 1,
          type: 'text',
          name: 'The Birth of Modern Astronomy',
          description: 'Provides a background on historical astronomy, discussing the Copernican model and the contributions of Galileo to astronomy.',
          link: 'https://courses.lumenlearning.com/astronomy/chapter/the-birth-of-modern-astronomy/'
        },
        {
          id: 3,
          topic_id: 1,
          type: 'text',
          name: 'Mapping the Sky from Ancient to Pre-Modern Times',
          description: 'A discussion of astronomical understanding during the times of Ancient Greece, the Dark Ages and the European Renaissance.',
          link: 'https://sci.esa.int/web/gaia/-/53196-the-oldest-sky-maps'
        },
        {
          id: 4,
          topic_id: 1,
          type: 'video',
          name: 'History of Astronomy Part 2 - Early Measurements of the Earth',
          description: 'In this episode of Professor Dave Explains he discusses how and when humans began to first experiment to understand the sizes of Earth and other nearby celestial objects.',
          link: 'https://www.youtube.com/watch?v=7DITn6GB6SY'
        },
        {
          id: 5,
          topic_id: 1,
          type: 'video',
          name: 'History of Astronomy Part 3: Copernicus and Heliocentrism',
          description: 'In this episode of Professor Dave Explains, he discusses how ancient astronomer’s understanding of our solar system began with a geocentric model, but then this shifted to a heliocentric model. He also explains what a parallax is and how the difficulty in measuring parallax perpetuated the geocentric model’s popularity.  ',
          link: 'https://www.youtube.com/watch?v=ZGr1nHdzLyk'
        },
        {
          id: 6,
          topic_id: 1,
          type: 'video',
          name: 'History of Astronomy Part 4: Kepler’s Laws and Beyond',
          description: 'In this episode of Professor Dave Explains, he explains how astronomer Johannes Kepler used data to improve understanding of planetary orbits and how this developed into Kepler’s three laws of planetary motion. ',
          link: 'https://www.youtube.com/watch?v=pdst6HQkdrc&list=RDLVpdst6HQkdrc&start_radio=1&rv=pdst6HQkdrc&t=6'
        },
        {
          id: 7,
          topic_id: 1,
          type: 'activity',
          name: 'Stellarium',
          description: 'Try out this free web based program to explore the night sky! Here are a couple of tutorials if you get stuck: Stellarium Web tutorial (https://www.youtube.com/watch?v=3GA345alMWg), Navigating the Program (https://www.youtube.com/watch?v=r2_QnpTnrqE)',
          link: 'https://stellarium-web.org/'
        },
        {
          id: 8,
          topic_id: 1,
          type: 'activity',
          name: 'Auckland Stardome Materials',
          description: 'The Stardome in Auckland provides monthly calendars of celestial events and phenomena visible from New Zealand. Have a look at what you might see this week and get outside during the evenings! You’re practicing naked-eye astronomy - if you have a pair of binoculars you can see even more. Check out this link for some tips: https://skyandtelescope.org/observing/deep-sky-naked-eye/. Think of what you’ve learned in this lesson, and consider how it must have felt for humans to look up and not understand that our planet orbits the Sun - or that other planets don’t orbit it - or even what stars are.',
          link: 'https://www.stardome.org.nz/astronomy/astronomy-calendar/'
        },
        {
          id: 9,
          topic_id: 2,
          type: 'video',
          name: 'Crash Course: Cycles in the Sky',
          description: 'Crash Course Astronomy 3: Why do we have seasons? Why do stars move throughout the year? What does the Earth’s tilted axis mean for us?',
          link: 'https://www.youtube.com/watch?v=01QWC-rZcfE'
        },
        {
          id: 10,
          topic_id: 2,
          type: 'video',
          name: 'Milankovitch Cycles',
          description: 'Video discussing global climate cycling based on three changes in Earth’s orbit around the Sun: obliquity, eccentricity and precession.',
          link: 'https://www.youtube.com/watch?v=oCEZFMtW5Pw'
        },
        {
          id: 11,
          topic_id: 2,
          type: 'text',
          name: "Milankovitch (Orbital) Cycles and Their Role in Earth's Climate",
          description: '',
          link: 'https://climate.nasa.gov/news/2948/milankovitch-orbital-cycles-and-their-role-in-earths-climate/'
        },
        {
          id: 12,
          topic_id: 2,
          type: 'text',
          name: 'Milankovitch Cycles, Paleoclimatic Change and Hominin Evolution',
          description: 'Keen for more? Check out how Milankovitch Cycles were first discovered by Milutin Milanković, understand how they are found in paleoenvironmental records, and learn about how they influenced human evolution!',
          link: 'https://www.nature.com/scitable/knowledge/library/milankovitch-cycles-paleoclimatic-change-and-hominin-evolution-68244581/'
        },
        {
          id: 13,
          topic_id: 3,
          type: 'text',
          name: 'Our Solar System',
          description: 'An overview of our solar system, the different types of objects within it, the Oort Cloud, and why planets look the way they do based on how and where they formed.',
          link: 'https://solarsystem.nasa.gov/solar-system/our-solar-system/in-depth/'
        },
        {
          id: 14,
          topic_id: 3,
          type: 'text',
          name: 'The Origin of the Solar System',
          description: 'A brief overview of five theories about the formation of the solar system.',
          link: 'https://www.rmg.co.uk/stories/topics/origin-solar-system'
        },
        {
          id: 15,
          topic_id: 3,
          type: 'video',
          name: 'Planetary Formation Theory: simulation and evidence',
          description: 'Learn about impacts of planetary gravitational effects on smaller objects orbiting the Sun.',
          link: 'https://www.youtube.com/watch?v=yXq1i3HlumA&ab_channel=CaliforniaAcademyofSciences'
        },
        {
          id: 16,
          topic_id: 3,
          type: 'video',
          name: 'The Formation of the Solar System and the Structure of the Sun',
          description: 'How our Solar System formed: the Sun, formation and information about each of the  inner and outer planets, movements of the outer planets, and information about the structure of the Sun and solar wind.',
          link: 'https://www.youtube.com/watch?v=gxKCDjnWabk&ab_channel=ProfessorDaveExplains'
        },
        {
          id: 17,
          topic_id: 4,
          type: 'text',
          name: 'How the Moon Formed: 5 Wild Lunar Theories',
          description: 'A brief overview of five different proposed theories of how our Moon came to be orbiting our Earth and briefly touches on strengths and weaknesses of each.',
          link: 'https://www.space.com/25322-moon-formation-wild-theories.html'
        },
        {
          id: 18,
          topic_id: 4,
          type: 'text',
          name: 'How was the Moon Formed?',
          description: 'Describes and discusses three hypotheses: Giant Impact, Co-formation and Capture theory in moderate depth.',
          link: 'https://www.space.com/19275-moon-formation.html'
        },
        {
          id: 19,
          topic_id: 4,
          type: 'video',
          name: 'What the Apollo Moon rocks Told Us',
          description: 'An article describing the contributions samples collected from the lunar surface made within the scientific community, especially pertaining to the Moon’s formation.',
          link: 'https://www.nhm.ac.uk/discover/how-did-the-moon-form.html#:~:text=What%20is%20most%20widely%20accepted,Earth%20to%20form%20the%20Moon'
        },
        {
          id: 20,
          topic_id: 4,
          type: 'video',
          name: 'Where did the Moon come from? Development of a theory',
          description: 'A TED talk given by planetary scientist Sarah T. Stewart, where she describes work done in her laboratory as a team of researchers were trying to determine the Earth and Moon’s interlocked history, and hypothesize a new type of planetary object.',
          link: 'https://www.youtube.com/watch?v=7uRPPaYuu44&ab_channel=TED'
        },
        {
          id: 21,
          topic_id: 4,
          type: 'video',
          name: 'The Formation of the Earth and the Moon',
          description: 'A brief recap of the formation of the solar system, the composition of the Earth now and in early formation times and provides evidence linking the Moon’s composition to early Earth.',
          link: 'https://www.youtube.com/watch?v=Ll_2i_PmP6M&ab_channel=ProfessorDaveExplains'
        },
        {
          id: 22,
          topic_id: 5,
          type: 'video',
          name: 'Solar System 101 | National Geographic',
          description: 'How many planets are in the solar system? How did it form in the Milky Way galaxy? Learn facts about the solar system’s genesis, plus its planets, moons, and asteroids.',
          link: 'https://www.youtube.com/watch?v=libKVRa01L8&ab_channel=NationalGeographic'
        },
        {
          id: 23,
          topic_id: 5,
          type: 'text',
          name: 'Planetary Systems',
          description: 'Learn about types of planets, stars and star systems',
          link: 'http://planetary-science.org/planetary-science-3/planetary-astronomy/'
        },
        {
          id: 24,
          topic_id: 5,
          type: 'text',
          name: 'Planet Formation',
          description: 'Learn about how planets form from propoplanetary disks.',
          link: 'https://www.cfa.harvard.edu/research/topic/planet-formation'
        },
        {
          id: 25,
          topic_id: 6,
          type: 'text',
          name: 'What is the Earth System?',
          description: 'Have a quick read about how scientists view Earth as a dynamic system and learn about an example of one of the cycles which propels the system forward.',
          link: 'https://www.sciencelearn.org.nz/resources/1256-what-is-the-earth-system'
        },
        {
          id: 26,
          topic_id: 6,
          type: 'text',
          name: "Earth's Systems - by National Geographic",
          description: 'Discusses the five systems of our Earth that create our environment.',
          link: 'https://www.nationalgeographic.org/article/earths-systems/'
        },
        {
          id: 27,
          topic_id: 6,
          type: 'video',
          name: 'The Earth System',
          description: 'This video describes the four main components of the Earth system (atmosphere, biosphere, geosphere, hydrosphere), how matter is exchanged between the components, and how a change in some aspect of one part of the system will result in changes in other system components. We describe the Earth system in terms of reservoirs and flux between them and discuss how the movement of carbon occurs between system components.',
          link: 'https://www.youtube.com/watch?v=N3EqcUNdIl8&ab_channel=GeoScienceVideos'
        },
        {
          id: 28,
          topic_id: 7,
          type: 'text',
          name: 'The Carbon Cycle',
          description: 'The slow and fast carbon cycle as well as changes in this cycle and the impact of these changes on our Earth.',
          link: 'https://earthobservatory.nasa.gov/features/CarbonCycle'
        },
        {
          id: 29,
          topic_id: 7,
          type: 'activity',
          name: 'Carbon Cycle by Science Learning Hub',
          description: 'Explore an interactive diagram produced by Science Learning Hub',
          link: 'https://www.sciencelearn.org.nz/image_maps/3-carbon-cycle'
        },
        {
          id: 30,
          topic_id: 7,
          type: 'video',
          name: 'The Global Carbon Cycle: Crash Course Chemistry #46',
          description: 'In this episode of Crash Course Chemistry, Hank takes us on a tour of the The Global Carbon Cycle and how it all works. From Carbon Fixation to Redox Reactions, it is all contained within!',
          link: 'https://www.youtube.com/watch?v=aLuSi_6Ol8M&ab_channel=CrashCourse'
        },
        {
          id: 31,
          topic_id: 8,
          type: 'text',
          name: 'What Is the Coriolis Effect?',
          description: 'Check out these easy to understand animations and explanations for learning about the Coriolis Force.',
          link: 'https://scijinks.gov/coriolis/'
        },
        {
          id: 32,
          topic_id: 8,
          type: 'video',
          name: 'Coriolis Effect | National Geographic',
          description: 'A practical approach to learning about the Coriolis Force.',
          link: 'https://www.youtube.com/watch?v=mPsLanVS1Q8&ab_channel=NationalGeographic'
        },
        {
          id: 33,
          topic_id: 8,
          type: 'video',
          name: 'The Coriolis Effect in Action',
          description: 'A demonstration of how the Coriolis Effect has an impact on large bodies of air and water on the Earth.',
          link: 'https://www.youtube.com/watch?v=WB4dxpUS530&ab_channel=MetOffice-LearnAboutWeather'
        }
      ])
    })
}
