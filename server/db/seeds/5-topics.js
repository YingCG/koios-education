exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      // Inserts seed entries
      return knex('topics').insert([
        // Astronomy - Evolution of Astronomy
        {
          id: 1,
          name: 'The Evolution of Astronomy',
          subject_id: 1,
          summary: `Our ancestors have been looking to the sky for centuries - our understanding of the night sky, our solar system and the universe has evolved through time as new ideas arose and our ability to conduct scientific analysis improved. These resources can tell you about concepts we take for granted today which revolutionized how we view our and our planet’s place in the universe.\n
          NCEA Students: This topic is intended to provide a starting research point and supplement your investigation for NCEA standard 91922, “Demonstrate understanding of how scientific ideas and processes develop and evolve”.`,
          questions:
            `What was Classical Astronomy defined by, and when did this occur? \n         
            What’s the Geocentric solar system model? Why did ancient people prefer this model?\n            
            What is the Heliocentric solar system model? Who first proposed this? Who perfected it?\n
            What is planetary retrograde motion? Why does it occur?\n      
            How can we determine the distance to a star with modern telescopes?\n
            Why are planetary orbits not circular? What shape are they? Who discovered this? \n
            What were Galileo Galilei’s major observations?`,
          careers: 'The history of astronomy is diverse and complex, and historians analyse and teach about this history. Modern astronomers use telescopes such as the Hubble Telescope  (which orbits Earth and has helped us understand galaxy formation) and the Brashear Telescope (located on the South Island in New Zealand - https://www.darkskyproject.co.nz/learn/brashear-telescope/, which has been used in the past to study Martian canals and Saturn’s rings) to collect images and data of stellar phenomena to learn more about the universe.',
          data: ''
        },
        // Astronomy - Astronomical Cycles
        {
          id: 2,
          name: 'Astronomical Cycles',
          subject_id: 1,
          summary: 'The three main cycles which help determine Earth’s climate are the Milankovitch Cycles, which are changes in the obliquity and eccentricity of our orbit around the Sun and changes in the axial tilt of Earth. These cycles each take different lengths of time, so Earth’s climate has varied as a factor of the current combination of each. Check out the following links to learn more about these cycles and how they were discovered. \n NCEA Students: This topic is intended to provide sources to supplemental learning and study material for NCEA standard 90954, “Demonstrate understanding of the effects of astronomical cycles on Earth”.',
          questions:
            'What are the three orbital changes that influence Earth’s long term climate? How often do these repeat? \n Why does the Earth experience seasons? \n What other phenomenon can impact Earth’s climate on shorter term scales?',
          careers: 'Climate scientists are called climatologists - they study Earth’s current climate and past climate (paleoclimate) using many different methods. Some study sedimentary deposits and their isotopes, and others may study Antarctic ice sheet cores. Their research helps to inform decision making regarding climate agreement and provide knowledge about climate change in general. Climate scientists in New Zealand can work for private companies such as the National Institute of Water and Atmospheric Research Ltd (NIWA), as part of the Ministry for the Environment working for the New Zealand Government, or at universities conducting research. Check out these links to learn more! https://niwa.co.nz/climate-change, https://environment.govt.nz/publications/statement-of-intent-2008-2011/operating-intentions/climate-change/',
          data: ''
        },
        // Astronomy - Solar System Formation Theory
        {
          id: 3,
          name: 'Solar System Formation Theory',
          subject_id: 1,
          summary:
            'Our Sun and solar system formed over four billion years ago - it has taken years of scientific inquiry to understand how this formation occurs. Sources in this section will explore theories of formation of the solar system, discuss the  main theory and evidence for why it is the current leading theory, and discuss how our planetary system interacts among itself within the solar system. \n NCEA Students: This topic is intended to provide a starting research point and supplement your investigation for NCEA standard 90955, “Investigate an Astronomical or Earth Science Event”.',
          questions: 'Why are the outer planets so much larger than the inner planets? \n Briefly describe how the solar system formed. \n What are the names of the planets? \n Where is the asteroid belt located? \n What’s the Oort Cloud?',
          careers: 'Two types of scientists who study the formation of the solar system are astrophysicists and planetary scientists - they often work as researchers and/or lecturers. A large aspect of their work is developing theories and figuring out ways to test their theories. Some use physical testing in laboratories (check out the Moon Origin Theories to learn more about this), some use observational data from telescopes, and some may use computer code to create simulations, or a mixture of all three! To become an astrophysicist you need to have a strong background in mathematics and science and a passion for the universe!',
          data: ''
        },
        // Astronomy - Moon Origin Theories
        {
          id: 4,
          name: 'Moon Origin Theories',
          subject_id: 1,
          summary: 'The major theory for the formation of our Moon was only proposed in the year 2000, a very short time ago. The following sources have been provided for you to go forth and learn about the history of our Moon evidence for this and the implications of our Moon on the Earth. Here you will also get a taste of refinement of the scientific theory as you learn about how planetary scientist Sarah T. Stewart proposed a refined theory of the Moon’s origin and hypothesised about a new type of planetary object. \n NCEA Students: This topic is intended to provide a starting research point and supplement your investigation for NCEA standard 90955, “Investigate an Astronomical or Earth Science Event”.',
          questions:
            'Describe the most widely accepted theory of moon formation. What’s the name of this theory? \n There’s lots of evidence for this theory - describe key pieces of this. If we have strong evidence, why is it still referred to as a theory? \n What are other theories of moon formation? Why are these theories not accepted as what really occurred? \n How is the composition of rocks on the Moon related to Earth’s composition? How is it different? \n Why do we only see one side of the Moon?',
          careers:
            'Two types of scientists who study the formation of the solar system are astrophysicists and planetary scientists - they often work as researchers and/or lecturers. A large aspect of their work is developing theories and figuring out ways to test their theories. Some use physical testing in laboratories (such as Sarah T. Stewart), some use observational data from telescopes, and some may use computer code to create simulations, or some may analyze samples from the Moon to better understand the conditions in which it formed. To become a planetary scientist or astrophysicist you need to have a strong background in mathematics and science and a passion for the universe!',
          data: ''
        },
        // Earth Science - Stars and Planetary Systems
        {
          id: 5,
          name: 'Stars and Planetary Systems',
          subject_id: 2,
          summary: 'Explore the different star and planet types that we have discovered so far, with examples from far away as well as from our own stellar backyard.',
          questions: 'What is an exoplanet? \n About how many exoplanets have we identified so far? \n How can comets and asteroids help us learn about early Earth?',
          careers: 'In the future you could find work as an Earth scientist or a planetary scientist! Earth scientists can work in research or in fields such as analysing different aspects of our everyday life. As a planetary scientist you could work to learn more about our own Earth or other planets in the universe.',
          data: ''
        },
        // Earth Science - The Earth System
        {
          id: 6,
          name: 'The Earth System',
          subject_id: 2,
          summary: 'The Earth has multiple systems, all of which are highly interconneted.',
          questions: 'What are some examples of cycles which run withi the Earth System? \n What are the five main systems which operate within the Earth System? Could you briefly describe each?',
          careers: 'An understanding of the Earth System is important for everyone to better acknowledge how we are able to survive on our planet - career wise with further learning you could look into becoming a scientist who studies the Earth and systems and how they help support us.',
          data: ''
        },
        // Earth Science - Carbon Cycling
        {
          id: 7,
          name: 'Carbon Cycling',
          subject_id: 2,
          summary: 'Learn about the carbon cycle and how much we rely on this element.',
          questions: "What's the difference between the slow and the fast carbon cycle? \n How has the carbon cycle changed recently? What are potential repercussions of this changing?",
          careers: 'With a passion for the carbon cycle you could look into careers in fields such as climate science.',
          data: ''
        },
        // Earth Science - Hemisphere Spin
        {
          id: 8,
          name: 'The Coriolis Force',
          subject_id: 2,
          summary: 'The Coriolis Effect is a phenomenon in which large bodies of water like oceans and some lakes as well as bodies of air like currents are impacted by the spin of the Earth. Check out the useful resources below to learn more!',
          questions: 'Why does this force occur? \n What type of storm system does this force often effect?',
          careers: 'Career pathways such as meteorology can provide ample opportunity to work with and continue studying the Coriolis effect.',
          data: ''
        }
        //,
        // Physics - The Electromagnetic Spectrum
        // {
        //   id: 9,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Physics - Wave Behaviour
        // {
        //   id: 10,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Physics Wave Systems
        // {
        //   id: 11,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Maori Knowledge - Use of Stars
        // {
        //   id: 12,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Maori Knowledge - Maori Astronomy
        // {
        //   id: 13,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Maori Knowledge - Maori Science
        // {
        //   id: 14,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Math - Algebra
        // {
        //   id: 15,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Math - Geometry
        // {
        //   id: 16,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Math - Triganometry
        // {
        //   id: 17,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Uni Ready - Learning to Learn
        // {
        //   id: 18,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Uni Ready - Time Management
        // {
        //   id: 19,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Uni Ready - Habits
        // {
        //   id: 20,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Soft Skills -  Critical Thinking
        // {
        //   id: 21,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Soft Skills: Communication
        // {
        //   id: 22,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // },
        // // Human Skills - Problem Solving
        // {
        //   id: 23,
        //   name: '',
        //   subject_id: '',
        //   summary: [''],
        //   learning_links:
        //   [
        //     {
        //       type: '',
        //       name: '',
        //       description: '',
        //       link: ''
        //     }
        //   ],
        //   questions: [],
        //   careers: '',
        //   data: []
        // }
      ])
    })
}
