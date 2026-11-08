/* MCE characters and lessons.
   Each room has a keeper you can speak to. Each keeper offers one new lesson a day.
   Finishing a lesson logs it on that path and counts toward your streak. */
window.MCE_CONTENT = {
  npc: {
    wealth: {
      name: 'Orrin', title: 'The Merchant', face: [49, 27],
      hello: [
        'Ah, a customer. Or a saver, which is better for us both.',
        'Every coin has a job. Shall we find yours one?',
        'The scales are level today. Come, sit a while.'
      ],
      offer: 'I have a lesson on the counter. Two minutes of your time, worth more than it costs.',
      done: 'You have had today’s lesson. A merchant who sells too much in one day sells nothing well. Come back tomorrow.',
      empty: 'You have bought every lesson in my shop. I am writing more.',
      bye: ['Count twice, spend once.', 'Safe roads, traveller.', 'Mind the small leaks.']
    },
    discipline: {
      name: 'The Colossus', title: 'Who Fell and Stayed', face: [47, 32],
      hello: [
        '…You came back. Good. That is most of it.',
        'I have lain here a thousand years. One more day of practice is nothing to fear.',
        'Moss grows a little every day. So can you.'
      ],
      offer: 'I have something carved here. It is short. Stone usually is.',
      done: 'One carving a day. More would only crack.',
      empty: 'You have read every line on me. Now I am only stone, and you are the one who carries it.',
      bye: ['Again tomorrow.', 'Slowly. Always slowly.', 'Go. I will be here.']
    },
    vitality: {
      name: 'Maren', title: 'Keeper of the Pool', face: [47, 26],
      hello: [
        'The water is cool today. How does your body feel?',
        'Sit. Breathe out longer than you breathe in.',
        'The dove says you walked well this week. The dove is often right.'
      ],
      offer: 'Drink, and listen. A small thing for your body today.',
      done: 'That is enough for today. Rest is part of the work.',
      empty: 'You know all I know. Now the pool is yours too.',
      bye: ['Walk gently.', 'Go well, and sleep early.', 'Come back to the water.']
    },
    bonds: {
      name: 'Teo', title: 'The Lamplighter', face: [49, 28],
      hello: [
        'Evening. Or morning. Lamps don’t care much which.',
        'Every lantern on these bridges is someone. Let’s keep them burning.',
        'The wind took a few flames last night. Nothing that can’t be relit.'
      ],
      offer: 'I learned something on my rounds. Walk with me?',
      done: 'One lesson a day. The rest of the day is for actual people.',
      empty: 'That’s everything I’ve picked up on these bridges. Go light a real one.',
      bye: ['Keep them lit.', 'Send that message.', 'See you on the next round.']
    },
    craft: {
      name: 'Hester', title: 'The Woodwright', face: [49, 25],
      hello: [
        'Mind the shavings. They get everywhere.',
        'Hands busy? Good. Hands idle? Let’s fix that.',
        'The bench doesn’t care how good you are. It only cares that you showed up.'
      ],
      offer: 'Something I wish someone had told me sooner. Got two minutes?',
      done: 'That’s today’s. Now go make something with it.',
      empty: 'I’ve no more advice to give. Only the work left now.',
      bye: ['Make something small.', 'Back to the bench.', 'Sharp tools, steady hands.']
    },
    lore: {
      name: 'Aldous', title: 'The Librarian', face: [48, 29],
      hello: [
        'Ah. Shoes off the rugs, please. Pip is sleeping. Mostly.',
        'A reader! We get so few who actually finish things.',
        'The shelves have rearranged themselves again. Never mind. What shall we learn?'
      ],
      offer: 'I keep a stack of short pages for travellers. Today’s is on top.',
      done: 'One page a day, read properly, beats a shelf skimmed. Tomorrow, then.',
      empty: 'You have read the whole stack. I shall have to write more. Pip disapproves of the delay.',
      bye: ['Read a little before sleep.', 'Mind the stairs.', 'Pip says goodbye. Pip is asleep.']
    }
  },

  lessons: {
    wealth: [
      { id: 'w1', t: 'Pay yourself first', min: 2, body: [
        'Most people save what is left at the end of the month. Usually nothing is.',
        'Turn it around. On payday, before anything else, move a fixed amount to savings. Make it automatic with a scheduled transfer, so it happens without needing willpower.',
        'Start small enough that you won’t miss it. Even 5% is a habit, and a habit can grow. Raise it each time your income goes up.'
      ], ask: 'Set up one scheduled transfer for your next payday, even a small one.' },
      { id: 'w2', t: 'The emergency fund', min: 2, body: [
        'An emergency fund is money set aside for the car repair, the medical bill or the gap between contracts. Without one, surprises go on credit, and credit is expensive.',
        'A common target is three to six months of essential costs: rent, food, transport, insurance. If your income is irregular, as freelance income usually is, aim for the higher end.',
        'Keep it somewhere boring and reachable: a separate savings or money market account, not invested in shares that might be down when you need them.'
      ], ask: 'Work out one month of your essential costs. That number is your first rung.' },
      { id: 'w3', t: 'The rule of 72', min: 2, body: [
        'Divide 72 by a yearly growth rate and you get roughly how many years it takes money to double.',
        'At 6%, about 12 years. At 9%, about 8. At 12%, about 6. The same rule works against you: debt at 24% doubles in about 3 years if you leave it alone.',
        'This is why starting early matters more than starting big. Every doubling builds on the one before it.'
      ], ask: 'Check the interest rate on your savings and on any debt. Run the rule of 72 on each.' },
      { id: 'w4', t: 'Fees are a quiet leak', min: 3, body: [
        'A 1.5% yearly fee sounds small. It is taken every year, from the whole balance, including the growth.',
        'Take R100,000 over 30 years. At 8.5% a year after fees it grows to about R1.15 million. At 7% after fees it grows to about R760,000. That one-and-a-half percent costs roughly a third of the result.',
        'You can’t control the market. You can control what you pay. Low-cost index funds and ETFs exist for exactly this reason.'
      ], ask: 'Find the total annual fee on one investment or retirement account you hold.' },
      { id: 'w5', t: 'The thirty-day list', min: 2, body: [
        'Most regret purchases are impulse purchases. The fix is a pause.',
        'When you want something that isn’t a need, write it on a list with the date. If you still want it in thirty days, buy it without guilt. Usually you’ll have forgotten why you wanted it.',
        'The list doesn’t forbid anything. It separates wanting from deciding.'
      ], ask: 'Start the list. Put the last thing you nearly bought on it.' }
    ],
    discipline: [
      { id: 'd1', t: 'Never miss twice', min: 2, body: [
        'Missing one day doesn’t break a habit. Research on habit formation found that a single missed day made little difference to how strongly a habit formed.',
        'What breaks habits is the second miss, because two misses start a new pattern.',
        'So when you slip, don’t judge the slip. Just make sure tomorrow isn’t a slip too. That is what the embers in your bonfire are for.'
      ], ask: 'Pick the habit you are most likely to skip. Decide now what the tiny version is on a bad day.' },
      { id: 'd2', t: 'Make it obvious', min: 2, body: [
        'Most habits are started by a cue: something you see, a time, a place, the thing you just finished.',
        'Shape your surroundings so the cue is hard to miss. Put the book on the pillow. Leave the walking shoes by the door. Charge your phone outside the bedroom.',
        'Do the opposite for habits you want to break. Hide the cue, and add a step between you and it.'
      ], ask: 'Move one object today so a good habit is easier to start.' },
      { id: 'd3', t: 'The two-minute start', min: 2, body: [
        'The hardest part of most habits is beginning. So make the beginning tiny.',
        '“Read” becomes “open the book.” “Exercise” becomes “put on trainers.” “Plan the week” becomes “write three things down.”',
        'Often you carry on once you’ve started. If you don’t, you still kept the habit alive, and on bad days that is the job.'
      ], ask: 'Write the two-minute version of one rite you keep putting off.' },
      { id: 'd4', t: 'When, then', min: 2, body: [
        'Intentions like “I’ll be more organised” rarely work. Plans of the form “When X happens, I will do Y” work much better. Psychologists call them implementation intentions, and many studies support them.',
        '“When I sit down with my morning coffee, I will plan the day.” “When I close my laptop at night, I will put my phone in the kitchen.”',
        'Fixing the when and where in advance means you no longer have to decide in the moment.'
      ], ask: 'Write one when-then sentence for tomorrow.' },
      { id: 'd5', t: 'Sixty-six days', min: 2, body: [
        'The idea that a habit takes 21 days is a myth. In a well-known study the median was about 66 days, and the range ran from 18 to over 250.',
        'Simple habits set quickly. Harder ones, like exercise, take longer. That is normal, not a sign you’re failing.',
        'Count in seasons, not weeks. The Colossus has lain here a thousand years. You can manage two months.'
      ], ask: 'Note today’s date beside your newest habit. Check back in 66 days.' }
    ],
    vitality: [
      { id: 'v1', t: 'Walking counts', min: 2, body: [
        'The World Health Organization recommends 150 to 300 minutes of moderate activity a week for adults. A brisk walk counts.',
        'That works out at about 30 minutes, five days a week. You can split it up: three ten-minute walks count the same as one thirty-minute walk.',
        'The biggest health gains come from going from nothing to something. You don’t need to train like an athlete to get most of the benefit.'
      ], ask: 'Add up your active minutes this week. How close are you to 150?' },
      { id: 'v2', t: 'The talk test', min: 2, body: [
        'How hard is moderate? Try talking. At moderate effort you can hold a conversation but couldn’t sing.',
        'If you can sing, speed up a little. If you can only manage a few words, that is vigorous. Vigorous minutes count roughly double.',
        'Most of your movement can be easy to moderate. That is what you can keep up week after week.'
      ], ask: 'On your next walk or ride, try the talk test once.' },
      { id: 'v3', t: 'Sleep is training', min: 2, body: [
        'Adults generally do best on seven or more hours. Your body repairs muscle, stores memories and resets appetite while you sleep.',
        'The most reliable lever is a regular wake-up time, even at weekends. Bedtime tends to follow it.',
        'Morning light helps too. A few minutes outside soon after waking helps set your body clock.'
      ], ask: 'Choose a wake-up time you can keep for the next seven days.' },
      { id: 'v4', t: 'Strength twice a week', min: 2, body: [
        'Alongside cardio, the WHO recommends muscle-strengthening activity on two or more days a week.',
        'It doesn’t need a gym. Squats, push-ups against a wall or counter, lunges, carrying heavy shopping and swimming all count.',
        'Strength protects joints, bones and balance, and that matters more each decade.'
      ], ask: 'Do one set of ten squats or wall push-ups today, then log it.' },
      { id: 'v5', t: 'Move after you sit', min: 2, body: [
        'Long unbroken sitting is a health risk of its own, even for people who exercise.',
        'Break it up. Stand for calls, walk to refill your water, take the stairs. A few minutes of movement every hour adds up.',
        'A gentle walk after meals also helps your body handle the food, especially after dinner.'
      ], ask: 'Set a reminder to stand and move once an hour this afternoon.' }
    ],
    bonds: [
      { id: 'b1', t: 'The small reach', min: 2, body: [
        'People often hold back from texting an old friend because it feels awkward or pointless.',
        'Studies on reaching out found that people consistently underestimate how much the other person appreciates hearing from them. The more surprising the message, the bigger the gap.',
        'It doesn’t need to be a big message. “Saw this and thought of you” is enough to relight a lantern.'
      ], ask: 'Send one short message to someone you haven’t spoken to in a while.' },
      { id: 'b2', t: 'Ask the second question', min: 2, body: [
        'Research on conversation found that people who ask more questions, especially follow-up questions, are liked more.',
        'A follow-up shows you heard the first answer. “How was the trip?” is polite. “What surprised you most about it?” is interest.',
        'Next conversation, try asking one more question than feels natural.'
      ], ask: 'In your next conversation, ask at least one follow-up question.' },
      { id: 'b3', t: 'What the long study found', min: 3, body: [
        'The Harvard Study of Adult Development has followed the same people since 1938. Its clearest finding: the quality of people’s relationships predicted their health and happiness in later life better than wealth or fame did.',
        'The researchers found it was close relationships that mattered, not how many contacts someone had. A few people you can call at 3am.',
        'Relationships need upkeep, like a body or a bank balance. They fade if they’re ignored.'
      ], ask: 'Name the three people you would call at 3am. When did you last speak to each?' },
      { id: 'b4', t: 'Remember one thing', min: 2, body: [
        'A small way to show care: remember one detail someone tells you, and ask about it later.',
        'The job interview, the sick dog, the trip they were planning. Write it down if you need to. Following up later shows you were listening.',
        'Hardly anyone does it, which is why it means so much when someone does.'
      ], ask: 'Think of one thing a friend mentioned recently. Ask them how it went.' },
      { id: 'b5', t: 'Repair quickly', min: 2, body: [
        'Every close relationship has friction. Strong ones repair it quickly.',
        'A repair can be small: “I was short with you earlier, sorry.” It doesn’t need a long explanation. Hold the explanation back unless they ask for it.',
        'The longer you leave it, the bigger the conversation becomes. Repair it while it’s still small.'
      ], ask: 'Is there a small repair you have been putting off? Make it today.' }
    ],
    craft: [
      { id: 'c1', t: 'Practise at the edge', min: 2, body: [
        'Repeating what you already do well feels good and teaches little.',
        'Deliberate practice means working just beyond your comfort: the passage you keep fumbling, the joint that never sits flush. Pick one specific weakness, practise it in focused rounds, and get feedback, from a teacher, a recording or a mirror.',
        'It is slower and more frustrating, and it is how people actually get better.'
      ], ask: 'Name the one thing in your craft you avoid because it’s hard. Spend ten minutes on only that.' },
      { id: 'c2', t: 'Little and often', min: 2, body: [
        'Twenty minutes a day usually beats two hours once a week. Spaced practice gives your brain and hands time to consolidate between sessions.',
        'Short sessions are also easier to start, which makes them more likely to happen.',
        'Leave the guitar on its stand and the hoop on the table. A craft packed away is a craft put off.'
      ], ask: 'Set your tools out where you’ll see them tomorrow.' },
      { id: 'c3', t: 'Quantity teaches quality', min: 2, body: [
        'The book Art & Fear tells of a ceramics class split in two. One half was graded on the quantity of pots they made, the other on a single perfect pot. The best pots came from the quantity group.',
        'Making many things teaches you faster than thinking about one. Each piece shows you a mistake to fix in the next.',
        'Finish things, even small or ugly ones. A finished piece teaches you more than a perfect one you never finish.'
      ], ask: 'Finish one small thing this week, even if it’s rough.' },
      { id: 'c4', t: 'Stop mid-stroke', min: 2, body: [
        'Hemingway said he always stopped writing when he knew what would happen next, so the next day was easy to start.',
        'Try ending a session in the middle of something going well, rather than at a natural stopping point. Leave a note on what comes next.',
        'Then you come back to something already in motion instead of a blank page.'
      ], ask: 'Next session, stop while you still know the next step. Write it down.' },
      { id: 'c5', t: 'Copy to learn', min: 2, body: [
        'Painters copy masters in galleries. Musicians learn songs note for note. Writers have long retyped books they admire.',
        'Copying shows you choices you’d never notice just by looking. Then change one thing, and you’re starting to make it your own.',
        'Originality usually comes after a lot of imitation.'
      ], ask: 'Pick a piece you admire in your craft. Copy a small part of it this week.' }
    ],
    lore: [
      { id: 'l1', t: 'Test, don’t reread', min: 2, body: [
        'Rereading feels productive because the material starts to look familiar. But familiar isn’t the same as remembered.',
        'Testing yourself, by closing the book and recalling what you just read, produces much stronger memory. Researchers call it the testing effect, and it is one of the most reliable findings in learning science.',
        'After each chapter, look away and say the main idea out loud. It takes thirty seconds.'
      ], ask: 'Recall three things from the last thing you read, without looking.' },
      { id: 'l2', t: 'Explain it simply', min: 2, body: [
        'If you can’t explain something simply, you probably don’t understand it yet.',
        'Try explaining an idea as if to a curious twelve-year-old. Where you get stuck or reach for jargon, there is a gap. Go back to the source, fill it, and try again.',
        'This is often called the Feynman technique, after the physicist who was famous for explaining hard things clearly.'
      ], ask: 'Explain one idea from your current book in three plain sentences.' },
      { id: 'l3', t: 'Space it out', min: 2, body: [
        'Over a century ago Hermann Ebbinghaus measured how quickly we forget. Much of what we learn fades within days unless we review it.',
        'The fix is spaced review: come back to an idea after a day, then a few days, then a week. Each review slows the forgetting.',
        'A short note of key ideas, reread on a schedule, keeps a book with you long after you’ve finished it.'
      ], ask: 'Write down one idea worth keeping. Look at it again in three days.' },
      { id: 'l4', t: 'Read with a question', min: 2, body: [
        'You read differently when you are looking for something.',
        'Before starting a book or chapter, write one question you want it to answer. You’ll notice more, skim less and remember what matters to you.',
        'If the book doesn’t answer it, you have learned something about the book.'
      ], ask: 'Write the question you want your current book to answer.' },
      { id: 'l5', t: 'Ten pages', min: 2, body: [
        'Ten pages a day is about fifteen minutes. Over a year that is around 3,600 pages, or roughly a dozen books.',
        'The aim isn’t speed. It’s a daily habit small enough that it rarely gets skipped.',
        'Pip has read three books this way. Pip is an owl.'
      ], ask: 'Read ten pages today, then log them.' }
    ]
  }
};
