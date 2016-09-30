export default [
  {
    category: 'damage-control',
    name: 'The client didn’t respond to my last email about a missed deadline.',
    heading: 'Call first. If that doesn’t work, try this.',
    subheading: 'You’re probably pissed by now. Remember that you and your client are on the same team.',
    slug: 'second-missed-deadline',
    template_id: 'missed-deadline-two',
    questions: [
      {
        type: 'text',
        label: 'What’s your name?',
        name: 'name',
        id: 'name',
      },
      {
        type:'text',
        label: 'What’s your client’s name?',
        name: 'client_name',
        id: 'client_name',
      },
      {
        type:'radio',
        label: 'What day can you take a phone call?',
        name: 'date',
        options: [
          {
            id: 'today',
            label: 'Today',
            value: 'today',
          },
          {
            id: 'tomorrow',
            label: 'Tomorrow',
            value: 'tomorrow',
          },
        ],
      },
      {
        type:'radio',
        label: 'What’s the best time for a call?',
        name: 'time_one',
        options: [
          {
            id: 'morning',
            label: 'Morning works best.',
            value: '8 am and 10 am',
          },
          {
            id: 'afternoon',
            label: 'I’m not human until after 10 am.',
            value: '11 am and 1 pm',
          },
          {
            id: 'evening',
            label: 'Is never an option? Late afternoon, I guess.',
            value: '3 pm and 5 pm',
          },
        ],
      },
      {
        type:'radio',
        label: 'How long has it been since the deadline passed?',
        name: 'number_of_days',
        options: [
          {
            id: 'one day',
            label: 'Just a day.',
            value: 'a day',
          },
          {
            id: 'two days',
            label: 'It’s been a couple days.',
            value: 'a couple days',
          },
          {
            id: 'four days',
            label: 'It’s been a few days already.',
            value: 'quite a few days',
          },
          {
            id: 'a week',
            label: 'A whole damn week. FTW!',
            value: 'about a week',
          },
        ],
      },
    ],
  },
  {
    category: 'damage-control',
    name: 'The client didn’t get me what I needed and we missed a deadline.',
    heading: 'Get your project back on track.',
    subheading: 'And keep yourself sane.',
    slug: 'first-missed-deadline',
    template_id: 'missed-deadline-one',
    questions: [
      {
        type: 'text',
        label: 'What’s your name?',
        name: 'name',
        id: 'name',
      },
      {
        type:'text',
        label: 'What’s your client’s name?',
        name: 'client_name',
        id: 'client_name',
      },
      {
        type:'radio',
        label: 'When did your deadline pass?',
        name: 'day',
        options: [
          {
            id: 'today',
            label: 'Today',
            value: 'today',
          },
          {
            id: 'two days',
            label: 'A couple days ago',
            value: 'a couple of days ago',
          },
          {
            id: 'three days',
            label: 'A few days ago',
            value: 'earlier this week',
          },
        ],
      },
      {
        type:'radio',
        label: 'If you got the items you needed today, how much will it push back the timeline?',
        name: 'approximate_time',
        options: [
          {
            id: 'a few days',
            label: 'A few days',
            value: 'by at least a few days',
          },
          {
            id: 'a week',
            label: 'A week',
            value: 'by about a week',
          },
          {
            id: 'a couple weeks',
            label: 'A couple weeks',
            value: 'by a couple weeks',
          },
        ],
      },
    ],
  },
  {
    category: 'damage-control',
    name: 'We’re coming up on a deadline and I need more information.',
    heading: 'Don’t get blamed for a missed deadline.',
    subheading: 'You need all the information so you can kick all the ass.',
    slug: 'upcoming-deadline',
    template_id: 'upcoming-deadline',
    questions: [
      {
        type: 'text',
        label: 'What’s your name?',
        name: 'name',
        id: 'name',
      },
      {
        type:'text',
        label: 'What’s your client’s name?',
        name: 'client_name',
        id: 'client_name',
      },
      {
        type:'radio',
        label: 'When is your first deadline coming up?',
        name: 'days',
        options: [
          {
            id: 'tomorrow',
            label: 'Tomorrow',
            value: 'coming up tomorrow',
          },
          {
            id: 'today',
            label: 'Today',
            value: 'today',
          },
          {
            id: 'two days',
            label: 'In a couple days',
            value: 'coming up in a few days',
          },
          {
            id: 'this week',
            label: 'This week',
            value: 'coming up this week',
          },
        ],
      },
      {
        type:'radio',
        label: 'What items are you waiting on?',
        name: 'items',
        options: [
          {
            id: 'files',
            label: 'Files',
            value: 'the files we talked about',
          },
          {
            id: 'photos',
            label: 'Photos',
            value: 'the photos we discussed',
          },
          {
            id: 'materials',
            label: 'Various things',
            value: 'the materials we discussed',
          },
          {
            id: 'several things',
            label: 'A whole bunch of shit',
            value: 'the items we talked about',
          },
        ],
      },
      {
        type:'radio',
        label: 'When do you need it by?',
        name: 'date',
        options: [
          {
            id: 'yesterday',
            label: 'I needed it yesterday.',
            value: 'by the end of the day today',
          },
          {
            id: 'tomorrow',
            label: 'Tomorrow',
            value: 'by tomorrow',
          },
          {
            id: 'end of the week',
            label: 'By Friday at the latest.',
            value: 'by the end of the week',
          },
          {
            id: 'soon',
            label: 'Soon, but we still have time.',
            value: 'by Monday of next week',
          },
        ],
      },
    ],
  },
  {
    category: 'damage-control',
    name: 'My client is asking for lots of extra things.',
    heading: 'Start setting boundaries. Stop doing unpaid work.',
    subheading: 'Scope creep’s a real bitch. Don’t let it get you down.',
    slug: 'scope-creep',
    template_id: 'scope-creep',
    questions: [
      {
        type: 'text',
        label: 'What’s your name?',
        name: 'name',
        id: 'name',
      },
      {
        type:'text',
        label: 'What’s your client’s name?',
        name: 'client_name',
        id: 'client_name',
      },
      {
        type:'text',
        label: 'Which one of these new tasks do you think will take you the longest?',
        name: 'update_one',
        id: 'update_one',
      },
    ],
  },
  {
    category: 'project-lifecycle',
    name: 'Project Contract',
    heading: 'Every project needs a contract.',
    subheading: 'Yes, even this one. Don’t worry, I got you covered.',
    slug: 'contract',
    template_id: 'template-first-contract',
    questions: [
      {
        type: 'text',
        label: 'What’s your name?',
        name: 'name',
        id: 'name',
      },
      {
        type:'text',
        label: 'What’s your client’s name?',
        name: 'client_name',
        id: 'client_name',
      },
      {
        type:'radio',
        label: 'What type of meeting did you have?',
        name: 'meeting_type',
        options: [
          {
            id: 'call',
            label: 'Phone call',
            value: 'chat with me',
          },
          {
            id: 'video',
            label: 'Video call',
            value: 'meet with me',
          },
          {
            id: 'coffee',
            label: 'Met for coffee',
            value: 'meet me for coffee',
          },
          {
            id: 'person',
            label: 'In-person meeting',
            value: 'meet me',
          },
        ],
      },
      {
        type: 'radio',
        label: 'When did you talk?',
        name: 'timeline',
        options: [
          {
            id: 'today',
            label: 'Earlier today',
            value: 'today',
          },
          {
            id: 'this-week',
            label: 'Earlier this week',
            value: 'earlier this week',
          },
          {
            id: 'last-week',
            label: 'Last week',
            value: 'last week. I hope you had a great weekend',
          },
          {
            id: 'several-weeks',
            label: 'More than a week ago',
            value: 'the other day. I hope everything has been going well',
          },
        ],
      },
      {
        type: 'radio',
        label: 'How do you feel about this project?',
        name: 'project_feeling',
        options: [
          {
            id: 'excited',
            label: 'Excited!',
            value: 'excited to work on',
          },
          {
            id: 'stoked',
            label: 'Stoked!',
            value: 'stoked to work on',
          },
          {
            id: 'interested',
            label: 'Interested in learning more',
            value: 'curious to learn more about',
          },
        ],
      },
      {
        type: 'radio',
        label: 'How do you feel about project contracts?',
        name: 'contract_feeling',
        options: [
          {
            id: 'hassle',
            label: 'They’re a hassle to try and figure out.',
            value: 'can be a hassle',
          },
          {
            id: 'nervous',
            label: 'I’m nervous it’ll make my client uncomfortable.',
            value: 'can be a little annoying',
          },
          {
            id: 'untrustworthy',
            label: 'I’m worried my client will think I don’t trust them.',
            value: 'can feel really formal',
          },
          {
            id: 'necessary',
            label: 'They’re not fun to create, but I know we should have it.',
            value: 'are usually a bit of a pain to deal with'
          }
        ],
      },
    ],
  },
  /*{
    name: 'Cookies',
    heading: 'Who likes cookies?',
    subheading: 'I do! I do!',
    slug: 'cookies',
    template_id: 'template-cookies',
    questions: [
      {
        type: 'text',
        label: 'What is your name?',
        name: 'name',
        id: 'name',
      },
      {
        type: 'radio',
        label: 'What is your favoritie cookie?',
        name: 'cookie',
        options: [
          {
            id: 'sugar',
            label: 'Sugar Cookies',
            value: 'I love cookies! Sugar cookies are my favorite.',
          },
          {
            id: 'chocolate_chip',
            label: 'Chocolate Chip',
            value: 'I love cookies! Chocolate chip cookies are my favorite.',
          },
          {
            id: 'oatmeal',
            label: 'Oatmeal',
            value: 'I love cookies! But I oatmeal cookies are my favorite, so you shouldn’t trust my judgment.',
          },
          {
            id: 'nope',
            label: 'I don’t like cookies',
            value: 'I am a terrible person.',
          },
        ],
      },
    ],
  },*/
  {
    category: 'project-lifecycle',
    name: 'Follow-Up After a First Meeting',
    heading: 'Need to follow up with a client after your first meeting?',
    subheading: 'Answer these questions and we’ll sort that shit out.',
    slug: 'first-meeting-follow-up',
    template_id: 'contract-template',
    questions: [
      {
        type: 'text',
        label: 'What is your name?',
        name: 'name',
        id: 'name',
      },
      {
        type: 'text',
        label: 'What is your client’s name?',
        name: 'client_name',
        id: 'client_name',
      },
      {
        type: 'radio',
        label: 'How did you get together?',
        name: 'meeting_type',
        options: [
          {
            id: 'call',
            label: 'Phone call',
            value: 'chat with me',
          },
          {
            id: 'video',
            label: 'Video call',
            value: 'meet with me',
          },
          {
            id: 'coffee',
            label: 'Met for coffee',
            value: 'meet me for coffee',
          },
          {
            id: 'person',
            label: 'In-person meeting',
            value: 'meet me',
          },
        ],
      },
      {
        type: 'radio',
        label: 'When did you talk?',
        name: 'timeline',
        options: [
          {
            id: 'today',
            label: 'Earlier today',
            value: 'today',
          },
          {
            id: 'this-week',
            label: 'Earlier this week',
            value: 'earlier this week',
          },
          {
            id: 'last-week',
            label: 'Last week',
            value: 'last week. I hope you had a great weekend',
          },
          {
            id: 'several-weeks',
            label: 'More than a week ago',
            value: 'the other day. I hope everything has been going well',
          },
        ],
      },
      {
        type: 'radio',
        label: 'How do you feel about this project?',
        name: 'project_feeling',
        options: [
          {
            id: 'excited',
            label: 'Excited!',
            value: 'excited to work on',
          },
          {
            id: 'stoked',
            label: 'Stoked!',
            value: 'stoked to work on',
          },
          {
            id: 'interested',
            label: 'Interested in learning more',
            value: 'curious to learn more about',
          },
        ],
      },
      {
        type: 'radio',
        label: 'We gotta keep conversations going with clients. What are you going to do next?',
        name: 'communication',
        options: [
          {
            id: 'proposal',
            label: 'Send a proposal',
            value: 'send over a proposal',
          },
          {
            id: 'quote',
            label: 'Send a quote',
            value: 'send you a quote',
          },
          {
            id: 'phonecall',
            label: 'Call them on the phone',
            value: 'give you a call',
          },
          {
            id: 'connect',
            label: 'Send another email if you don’t hear back',
            value: 'connect with you',
          },
        ],
      },
    ],
  },
  {
    category: 'project-lifecycle',
    name: 'I’d like to get a referral from my client.',
    heading: 'Want more money? Then get those referrals.',
    subheading: 'More money means more burritos, people. And everyone wants more burritos.',
    slug: 'referral',
    template_id: 'client-referral',
    questions: [
      {
        type: 'text',
        label: 'What’s your name?',
        name: 'name',
        id: 'name',
      },
      {
        type:'text',
        label: 'What’s your client’s name?',
        name: 'client_name',
        id: 'client_name',
      },
      {
        type: 'text',
        label: 'In one word, what is your main job title? (copywriter, web developer, graphic designer...?)',
        name: 'your_role',
        id: 'your_role',
      },
      {
        type: 'text',
        label: 'What’s one service you’re offering right now? (ex. blog posts, website maintenance, logo design...?)',
        name: 'specific_thing_one',
        id: 'specific_thing_one',
      },
      {
        type: 'text',
        label: 'What’s another service you’re excited about offering? (ex. article research, website updates, design updates...?)',
        name: 'specific_thing_two',
        id: 'specific_thing_two',
      },
      {
        type: 'text',
        label: 'Okay, pick one more thing you’d like to do. Last one, I swear. (ex. editing, template modifications, illustrations...?)',
        name: 'specific_thing_three',
        id: 'specific_thing_three',
      },
    ],
  },  
  {
    category: 'project-lifecycle',
    name: 'I want to get feedback on a completed project.',
    heading: 'Happy clients throw money at you.',
    subheading: 'Just ask them not to throw quarters. Cuz that shit hurts.',
    slug: 'feedback',
    template_id: 'client-feedback',
    questions: [
      {
        type: 'text',
        label: 'What’s your name?',
        name: 'name',
        id: 'name',
      },
      {
        type:'text',
        label: 'What’s your client’s name?',
        name: 'client_name',
        id: 'client_name',
      },
      {
        type: 'text',
        label: 'What’s the link to your client survey? (If you still need to create a survey, check out Survey Monkey!)',
        name: 'client_survey',
        id: 'client_survey',
      }  
    ], 
  },   
];
