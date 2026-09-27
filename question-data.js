const questionData = {

    aptitude: {

        percentages: [
            {
                id: "percentage_001",
                question: "A number is increased by 20%. If the original number is 500, what is the new number?",
                options: ["550", "600", "620", "650"],
                answer: "600",
                explanation: "20% of 500 = 100. Therefore, 500 + 100 = 600."
            },

            {
                id: "percentage_002",
                question: "What is 25% of 200?",
                options: ["25", "40", "50", "75"],
                answer: "50",
                explanation: "25% of 200 = (25/100) × 200 = 50."
            },

            {
                id: "percentage_003",
                question: "A student scores 80 marks out of 100. What is the percentage?",
                options: ["60%", "70%", "80%", "90%"],
                answer: "80%",
                explanation: "Percentage = (80/100) × 100 = 80%."
            },

            {
                id: "percentage_004",
                question: "What is 10% of 500?",
                options: ["25", "40", "50", "100"],
                answer: "50",
                explanation: "10% of 500 = (10/100) × 500 = 50."
            },

            {
                id: "percentage_005",
                question: "A shirt costs ₹1000 and is reduced by 10%. What is the new price?",
                options: ["₹800", "₹850", "₹900", "₹950"],
                answer: "₹900",
                explanation: "10% of ₹1000 = ₹100. New price = ₹1000 − ₹100 = ₹900."
            },

            {
                id: "percentage_006",
                question: "What is 30% of 300?",
                options: ["60", "90", "100", "120"],
                answer: "90",
                explanation: "30% of 300 = (30/100) × 300 = 90."
            }
        ],


        numberSystem: [
            {
                id: "number_001",
                question: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                answer: "2",
                explanation: "2 is the smallest prime number because it has exactly two factors: 1 and 2."
            },

            {
                id: "number_002",
                question: "Which of the following is an even number?",
                options: ["17", "21", "28", "35"],
                answer: "28",
                explanation: "28 is divisible by 2, so it is an even number."
            },

            {
                id: "number_003",
                question: "What is the greatest two-digit number?",
                options: ["90", "98", "99", "100"],
                answer: "99",
                explanation: "The greatest two-digit number is 99."
            },

            {
                id: "number_004",
                question: "What is the smallest whole number?",
                options: ["-1", "0", "1", "2"],
                answer: "0",
                explanation: "Whole numbers start from 0 and continue as 1, 2, 3, and so on."
            },

            {
                id: "number_005",
                question: "Which number is divisible by 3?",
                options: ["124", "125", "126", "127"],
                answer: "126",
                explanation: "1 + 2 + 6 = 9, and 9 is divisible by 3. Therefore, 126 is divisible by 3."
            }
        ],


        profitLoss: [
            {
                id: "profit_loss_001",
                question: "If CP = ₹500 and SP = ₹600, what is the profit?",
                options: ["₹50", "₹75", "₹100", "₹150"],
                answer: "₹100",
                explanation: "Profit = SP − CP = ₹600 − ₹500 = ₹100."
            },

            {
                id: "profit_loss_002",
                question: "If CP = ₹1000 and SP = ₹1200, what is the profit percentage?",
                options: ["10%", "15%", "20%", "25%"],
                answer: "20%",
                explanation: "Profit = ₹200. Profit% = (200/1000) × 100 = 20%."
            },

            {
                id: "profit_loss_003",
                question: "If CP = ₹800 and SP = ₹720, what is the loss?",
                options: ["₹50", "₹60", "₹80", "₹100"],
                answer: "₹80",
                explanation: "Loss = CP − SP = ₹800 − ₹720 = ₹80."
            },

            {
                id: "profit_loss_004",
                question: "If CP = ₹500 and profit = ₹100, what is the SP?",
                options: ["₹400", "₹500", "₹600", "₹700"],
                answer: "₹600",
                explanation: "SP = CP + Profit = ₹500 + ₹100 = ₹600."
            },

            {
                id: "profit_loss_005",
                question: "If SP = ₹900 and loss = ₹100, what is the CP?",
                options: ["₹800", "₹900", "₹1000", "₹1100"],
                answer: "₹1000",
                explanation: "CP = SP + Loss = ₹900 + ₹100 = ₹1000."
            }
        ],


        timeWork: [
            {
                id: "time_work_001",
                question: "A can complete a work in 10 days. What part of the work does A complete in one day?",
                options: ["1/5", "1/10", "1/15", "1/20"],
                answer: "1/10",
                explanation: "If A completes the whole work in 10 days, the one-day work is 1/10."
            },

            {
                id: "time_work_002",
                question: "A can complete a work in 20 days and B in 5 days. How much work do they complete together in one day?",
                options: ["1/2", "1/4", "1/5", "1/10"],
                answer: "1/4",
                explanation: "A's one-day work = 1/20. B's one-day work = 1/5. Together = 1/20 + 1/5 = 5/20 = 1/4."
            },

            {
                id: "time_work_003",
                question: "A can complete a work in 12 days and B in 24 days. How many days will they take together?",
                options: ["6 days", "8 days", "10 days", "12 days"],
                answer: "8 days",
                explanation: "Together work per day = 1/12 + 1/24 = 3/24 = 1/8. Therefore, they take 8 days."
            },

            {
                id: "time_work_004",
                question: "A completes a work in 15 days. What part of the work does A complete in 3 days?",
                options: ["1/3", "1/5", "1/6", "1/10"],
                answer: "1/5",
                explanation: "One-day work = 1/15. In 3 days = 3/15 = 1/5."
            },

            {
                id: "time_work_005",
                question: "A and B together complete a work in 10 days. A alone takes 15 days. How many days will B alone take?",
                options: ["20 days", "25 days", "30 days", "35 days"],
                answer: "30 days",
                explanation: "B's work per day = 1/10 − 1/15 = 1/30. Therefore, B alone takes 30 days."
            }
        ],


        ratioProportion: [
            {
                id: "ratio_001",
                question: "The ratio of boys to girls is 2:3. If there are 10 boys, how many girls are there?",
                options: ["12", "15", "18", "20"],
                answer: "15",
                explanation: "2 parts = 10, so 1 part = 5. Girls = 3 × 5 = 15."
            },

            {
                id: "ratio_002",
                question: "A:B = 3:5. If A = 15, what is B?",
                options: ["20", "25", "30", "35"],
                answer: "25",
                explanation: "3 parts = 15, so 1 part = 5. Therefore, B = 5 × 5 = 25."
            },

            {
                id: "ratio_003",
                question: "4:5 = x:20. Find x.",
                options: ["12", "14", "16", "18"],
                answer: "16",
                explanation: "4/5 = x/20. Therefore, x = (4 × 20)/5 = 16."
            },

            {
                id: "ratio_004",
                question: "The ratio of two numbers is 2:5 and their sum is 35. Find the smaller number.",
                options: ["8", "10", "12", "15"],
                answer: "10",
                explanation: "Total parts = 2 + 5 = 7. One part = 35/7 = 5. Smaller number = 2 × 5 = 10."
            },

            {
                id: "ratio_005",
                question: "6 pens cost ₹60. How much will 10 pens cost?",
                options: ["₹80", "₹90", "₹100", "₹120"],
                answer: "₹100",
                explanation: "Cost of one pen = ₹60/6 = ₹10. Cost of 10 pens = ₹100."
            }
        ]

    },


    coding: [

        {
            id: "coding_001",
            title: "Three-String Transformation",
            language: "Python",

            question: "Given three strings as input, apply the following transformations: replace vowels with # in the first string, replace consonants with * in the second string, and convert all characters to uppercase in the third string.",

            input: "FACEPREP\nhello\nworld",

            output: "F#C#PR#P\n*e**o\nWORLD",

            answer: `def transform_strings():
    s1 = input()
    s2 = input()
    s3 = input()

    vowels = set('aeiouAEIOU')

    out1 = ''.join('#' if c in vowels else c for c in s1)
    out2 = ''.join('*' if c.isalpha() and c not in vowels else c for c in s2)
    out3 = s3.upper()

    print(out1)
    print(out2)
    print(out3)

transform_strings()`,

            explanation: "Read the three strings separately. For the first string, replace every vowel with #. For the second string, replace consonants with * while keeping vowels, digits, and spaces unchanged. For the third string, convert all characters to uppercase."
        },


        {
            id: "coding_002",

            title: "First Non-Repeating Character",

            language: "Python",

            question: "Given a string, find the first character that appears only once in the string. If every character appears more than once, print -1.",

            sampleInput: "swiss",

            sampleOutput: "w",

            explanation: "In the string 'swiss', s appears three times, while w and i appear only once. The first character that appears only once is w.",

            examples: [
                {
                    input: "swiss",
                    output: "w"
                },

                {
                    input: "aabbcdde",
                    output: "c"
                },

                {
                    input: "aabb",
                    output: "-1"
                },

                {
                    input: "programming",
                    output: "p"
                },

                {
                    input: "aabbccxyz",
                    output: "x"
                }
            ],

            answer: `s = input()

for ch in s:
    if s.count(ch) == 1:
        print(ch)
        break
else:
    print("-1")`,

            input: "A single string.",

            output: "Print the first character that appears only once. If there is no such character, print -1."
        }

    ],


    coreEEE: [],


    technicalInterview: [

        {
            id: "technical_001",
            question: "Tell me about your project.",
            answer: "Explain your project idea, problem statement, approach, tools, your contribution, result, and what you learned.",
            explanation: "Explain your project idea, problem statement, approach, tools, your contribution, result, and what you learned."
        },

        {
            id: "technical_002",
            question: "Why did you choose this project?",
            answer: "Explain the problem you wanted to solve and why the project was meaningful or useful.",
            explanation: "Explain the problem you wanted to solve and why the project was meaningful or useful."
        },

        {
            id: "technical_003",
            question: "What was your contribution to the project?",
            answer: "Clearly explain the parts you personally worked on and the results of your contribution.",
            explanation: "Clearly explain the parts you personally worked on and the results of your contribution."
        },

        {
            id: "technical_004",
            question: "How did you approach your project?",
            answer: "Explain the project step by step from problem identification to implementation and testing.",
            explanation: "Explain the project step by step from problem identification to implementation and testing."
        },

        {
            id: "technical_005",
            question: "What tools and technologies did you use in your project?",
            answer: "Mention the software, programming languages, simulation tools, hardware, or other technologies actually used.",
            explanation: "Mention the software, programming languages, simulation tools, hardware, or other technologies actually used."
        },

        {
            id: "technical_006",
            question: "What challenges did you face during the project?",
            answer: "Describe a real technical or teamwork challenge and how you solved it.",
            explanation: "Describe a real technical or teamwork challenge and how you solved it."
        },

        {
            id: "technical_007",
            question: "What did you learn from your project?",
            answer: "Mention technical knowledge as well as problem-solving, teamwork, or communication skills.",
            explanation: "Mention technical knowledge as well as problem-solving, teamwork, or communication skills."
        },

        {
            id: "technical_008",
            question: "How would you improve your project in the future?",
            answer: "Mention realistic improvements, additional features, better accuracy, testing, or optimization.",
            explanation: "Mention realistic improvements, additional features, better accuracy, testing, or optimization."
        },

        {
            id: "technical_009",
            question: "What is a programming language?",
            answer: "A programming language is a formal language used to write instructions that a computer can execute.",
            explanation: "A programming language is a formal language used to write instructions that a computer can execute."
        },

        {
            id: "technical_010",
            question: "What is a variable?",
            answer: "A variable is a named storage location used to hold a value that can change during program execution.",
            explanation: "A variable is a named storage location used to hold a value that can change during program execution."
        },

        {
            id: "technical_011",
            question: "What is a data type?",
            answer: "A data type defines what kind of value a variable can store, such as integer, float, character, or string.",
            explanation: "A data type defines what kind of value a variable can store, such as integer, float, character, or string."
        },

        {
            id: "technical_012",
            question: "What is the difference between a compiler and an interpreter?",
            answer: "A compiler translates a program into machine code before execution, while an interpreter executes the program through interpretation.",
            explanation: "A compiler translates a program into machine code before execution, while an interpreter executes the program through interpretation."
        },

        {
            id: "technical_013",
            question: "What is the difference between C and Python?",
            answer: "C is a compiled, statically typed language commonly used for system and embedded programming; Python is a high-level language known for simpler syntax and dynamic typing.",
            explanation: "C is a compiled, statically typed language commonly used for system and embedded programming; Python is a high-level language known for simpler syntax and dynamic typing."
        },

        {
            id: "technical_014",
            question: "Explain the four pillars of OOP.",
            answer: "The four pillars are encapsulation, abstraction, inheritance, and polymorphism.",
            explanation: "The four pillars are encapsulation, abstraction, inheritance, and polymorphism."
        },

        {
            id: "technical_015",
            question: "What is a class?",
            answer: "A class is a blueprint that defines the data and functions that objects of that class can have.",
            explanation: "A class is a blueprint that defines the data and functions that objects of that class can have."
        },

        {
            id: "technical_016",
            question: "What is an object?",
            answer: "An object is an instance of a class.",
            explanation: "An object is an instance of a class."
        },

        {
            id: "technical_017",
            question: "What is the difference between overloading and overriding?",
            answer: "Overloading uses the same function name with different parameter lists; overriding means a derived class provides its own implementation of an inherited method.",
            explanation: "Overloading uses the same function name with different parameter lists; overriding means a derived class provides its own implementation of an inherited method."
        },

        {
            id: "technical_018",
            question: "What is DBMS?",
            answer: "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, and manage data in databases.",
            explanation: "DBMS stands for Database Management System. It is software used to create, store, organize, retrieve, and manage data in databases."
        },

        {
            id: "technical_019",
            question: "What is a Primary Key?",
            answer: "A primary key uniquely identifies each record in a table and cannot contain duplicate values.",
            explanation: "A primary key uniquely identifies each record in a table and cannot contain duplicate values."
        },

        {
            id: "technical_020",
            question: "What is Normalization?",
            answer: "Normalization organizes database tables to reduce data redundancy and improve data consistency.",
            explanation: "Normalization organizes database tables to reduce data redundancy and improve data consistency."
        },

        {
            id: "technical_021",
            question: "What are joins in SQL?",
            answer: "Joins combine rows from two or more tables using a related column. Common joins include INNER, LEFT, RIGHT, and FULL joins.",
            explanation: "Joins combine rows from two or more tables using a related column. Common joins include INNER, LEFT, RIGHT, and FULL joins."
        },

        {
            id: "technical_022",
            question: "What is a computer network?",
            answer: "A computer network is a group of connected devices that communicate and share data or resources.",
            explanation: "A computer network is a group of connected devices that communicate and share data or resources."
        },

        {
            id: "technical_023",
            question: "What is an IP address?",
            answer: "An IP address is a logical address used to identify a device on a network.",
            explanation: "An IP address is a logical address used to identify a device on a network."
        },

        {
            id: "technical_024",
            question: "What is the difference between TCP and UDP?",
            answer: "TCP is connection-oriented and provides reliable, ordered delivery; UDP is connectionless and faster but does not guarantee delivery.",
            explanation: "TCP is connection-oriented and provides reliable, ordered delivery; UDP is connectionless and faster but does not guarantee delivery."
        },

        {
            id: "technical_025",
            question: "What is HTTP?",
            answer: "HTTP is the Hypertext Transfer Protocol used for communication between web clients and servers.",
            explanation: "HTTP is the Hypertext Transfer Protocol used for communication between web clients and servers."
        },

        {
            id: "technical_026",
            question: "What is an operating system?",
            answer: "An operating system manages computer hardware and software resources and provides services for programs.",
            explanation: "An operating system manages computer hardware and software resources and provides services for programs."
        },

        {
            id: "technical_027",
            question: "What is a process?",
            answer: "A process is a program that is currently being executed.",
            explanation: "A process is a program that is currently being executed."
        },

        {
            id: "technical_028",
            question: "What is a thread?",
            answer: "A thread is a smaller unit of execution within a process.",
            explanation: "A thread is a smaller unit of execution within a process."
        },

        {
            id: "technical_029",
            question: "What is the difference between a process and a thread?",
            answer: "A process has its own memory space, while threads within the same process share the process resources and memory.",
            explanation: "A process has its own memory space, while threads within the same process share the process resources and memory."
        },

        {
            id: "technical_030",
            question: "What is an array?",
            answer: "An array is a collection of elements of the same type stored in an indexed structure.",
            explanation: "An array is a collection of elements of the same type stored in an indexed structure."
        },

        {
            id: "technical_031",
            question: "What is a string?",
            answer: "A string is a sequence of characters used to represent text.",
            explanation: "A string is a sequence of characters used to represent text."
        },

        {
            id: "technical_032",
            question: "What is searching?",
            answer: "Searching is the process of finding a required element in a collection of data.",
            explanation: "Searching is the process of finding a required element in a collection of data."
        },

        {
            id: "technical_033",
            question: "What is sorting?",
            answer: "Sorting is arranging data in a particular order, such as ascending or descending order.",
            explanation: "Sorting is arranging data in a particular order, such as ascending or descending order."
        },

        {
            id: "technical_034",
            question: "What is time complexity?",
            answer: "Time complexity describes how the running time of an algorithm grows as the input size increases.",
            explanation: "Time complexity describes how the running time of an algorithm grows as the input size increases."
        }

    ],


    hrInterview: [

        {
            id: "hr_001",
            question: "Tell me about yourself.",
            answer: "Give a short introduction covering your education, relevant skills, projects, achievements, and career goal.",
            explanation: "Give a short introduction covering your education, relevant skills, projects, achievements, and career goal."
        },

        {
            id: "hr_002",
            question: "Tell me about your strengths.",
            answer: "Mention two or three strengths relevant to the role and support them with brief examples.",
            explanation: "Mention two or three strengths relevant to the role and support them with brief examples."
        },

        {
            id: "hr_003",
            question: "What is your weakness?",
            answer: "Mention a genuine but manageable weakness and explain the steps you are taking to improve it.",
            explanation: "Mention a genuine but manageable weakness and explain the steps you are taking to improve it."
        },

        {
            id: "hr_004",
            question: "Why should we hire you?",
            answer: "Connect your skills, learning attitude, project experience, and willingness to contribute to the role.",
            explanation: "Connect your skills, learning attitude, project experience, and willingness to contribute to the role."
        },

        {
            id: "hr_005",
            question: "Tell me about TCS.",
            answer: "Give a concise factual overview of Tata Consultancy Services and its role as an IT services and consulting company.",
            explanation: "Give a concise factual overview of Tata Consultancy Services and its role as an IT services and consulting company."
        },

        {
            id: "hr_006",
            question: "Why do you want to join TCS?",
            answer: "Explain your interest in the company, learning opportunities, technology exposure, and career growth.",
            explanation: "Explain your interest in the company, learning opportunities, technology exposure, and career growth."
        },

        {
            id: "hr_007",
            question: "Why TCS and not another company?",
            answer: "Focus on the specific aspects of TCS that match your career goals rather than criticizing other companies.",
            explanation: "Focus on the specific aspects of TCS that match your career goals rather than criticizing other companies."
        },

        {
            id: "hr_008",
            question: "What do you know about TCS?",
            answer: "Mention its business areas, global presence, technology services, and the kind of work it does.",
            explanation: "Mention its business areas, global presence, technology services, and the kind of work it does."
        },

        {
            id: "hr_009",
            question: "Why should TCS hire you?",
            answer: "Explain how your technical foundation, adaptability, teamwork, and willingness to learn can contribute to the organization.",
            explanation: "Explain how your technical foundation, adaptability, teamwork, and willingness to learn can contribute to the organization."
        },

        {
            id: "hr_010",
            question: "What do you expect from TCS?",
            answer: "Talk about opportunities to learn, work on real projects, develop professionally, and contribute to the organization.",
            explanation: "Talk about opportunities to learn, work on real projects, develop professionally, and contribute to the organization."
        },

        {
            id: "hr_011",
            question: "Are you willing to relocate?",
            answer: "Answer honestly and clearly based on your willingness and practical circumstances.",
            explanation: "Answer honestly and clearly based on your willingness and practical circumstances."
        },

        {
            id: "hr_012",
            question: "Are you willing to work in different locations or shifts?",
            answer: "Answer honestly and show your flexibility where you are comfortable.",
            explanation: "Answer honestly and show your flexibility where you are comfortable."
        },

        {
            id: "hr_013",
            question: "Where do you see yourself in 5 years?",
            answer: "Describe a realistic professional goal involving stronger technical skills, responsibility, and contribution.",
            explanation: "Describe a realistic professional goal involving stronger technical skills, responsibility, and contribution."
        },

        {
            id: "hr_014",
            question: "What are your short-term goals?",
            answer: "Mention immediate goals such as learning required skills, gaining practical experience, and starting your career successfully.",
            explanation: "Mention immediate goals such as learning required skills, gaining practical experience, and starting your career successfully."
        },

        {
            id: "hr_015",
            question: "What are your long-term goals?",
            answer: "Mention long-term professional growth, expertise, leadership or responsibility, and meaningful contribution.",
            explanation: "Mention long-term professional growth, expertise, leadership or responsibility, and meaningful contribution."
        },

        {
            id: "hr_016",
            question: "Why did you choose your branch?",
            answer: "Explain your genuine interest in the branch and how your studies and projects developed that interest.",
            explanation: "Explain your genuine interest in the branch and how your studies and projects developed that interest."
        },

        {
            id: "hr_017",
            question: "What are your career interests?",
            answer: "Mention the technical areas and type of work you genuinely want to develop in.",
            explanation: "Mention the technical areas and type of work you genuinely want to develop in."
        },

        {
            id: "hr_018",
            question: "Tell me about a time you worked in a team.",
            answer: "Use a real example and explain your role, teamwork, challenge, action, and result.",
            explanation: "Use a real example and explain your role, teamwork, challenge, action, and result."
        },

        {
            id: "hr_019",
            question: "Tell me about a difficult problem you solved.",
            answer: "Describe the problem, how you analyzed it, what action you took, and the result.",
            explanation: "Describe the problem, how you analyzed it, what action you took, and the result."
        },

        {
            id: "hr_020",
            question: "How do you handle pressure?",
            answer: "Explain how you prioritize tasks, stay organized, and work step by step.",
            explanation: "Explain how you prioritize tasks, stay organized, and work step by step."
        },

        {
            id: "hr_021",
            question: "How do you handle failure?",
            answer: "Explain what you learn from mistakes and how you use that learning to improve.",
            explanation: "Explain what you learn from mistakes and how you use that learning to improve."
        },

        {
            id: "hr_022",
            question: "How do you handle disagreements with teammates?",
            answer: "Listen to different views, discuss the issue calmly, focus on the project goal, and reach a practical solution.",
            explanation: "Listen to different views, discuss the issue calmly, focus on the project goal, and reach a practical solution."
        },

        {
            id: "hr_023",
            question: "How do you manage deadlines?",
            answer: "Break the work into tasks, prioritize important work, track progress, and complete tasks on time.",
            explanation: "Break the work into tasks, prioritize important work, track progress, and complete tasks on time."
        },

        {
            id: "hr_024",
            question: "What would you do if you were given a task you didn't know how to do?",
            answer: "Understand the requirement, research the topic, ask appropriate questions, practice, and then implement and test the solution.",
            explanation: "Understand the requirement, research the topic, ask appropriate questions, practice, and then implement and test the solution."
        },

        {
            id: "hr_025",
            question: "What motivates you?",
            answer: "Talk about learning, solving problems, achieving goals, improving yourself, and contributing to meaningful work.",
            explanation: "Talk about learning, solving problems, achieving goals, improving yourself, and contributing to meaningful work."
        },

        {
            id: "hr_026",
            question: "What are your hobbies?",
            answer: "Mention genuine hobbies and briefly explain what you enjoy or learn from them.",
            explanation: "Mention genuine hobbies and briefly explain what you enjoy or learn from them."
        },

        {
            id: "hr_027",
            question: "How do you keep yourself updated?",
            answer: "Mention reliable learning resources, courses, technical articles, practice, or projects you actually use.",
            explanation: "Mention reliable learning resources, courses, technical articles, practice, or projects you actually use."
        },

        {
            id: "hr_028",
            question: "Are you comfortable learning new technologies?",
            answer: "Show that you are willing to learn unfamiliar technologies and give an example if possible.",
            explanation: "Show that you are willing to learn unfamiliar technologies and give an example if possible."
        },

        {
            id: "hr_029",
            question: "You have selected TCS Prime. If we offer you a Ninja role, will you accept it?",
            answer: "Answer honestly. If you are open to the role, explain that you value the opportunity to start, learn, and contribute.",
            explanation: "Answer honestly. If you are open to the role, explain that you value the opportunity to start, learn, and contribute."
        },

        {
            id: "hr_030",
            question: "You are from a different branch. How will you adapt to this role?",
            answer: "Explain the transferable skills you have, your willingness to learn, and how you would build the additional knowledge required for the role.",
            explanation: "Explain the transferable skills you have, your willingness to learn, and how you would build the additional knowledge required for the role."
        },

        {
            id: "hr_031",
            question: "Do you have any questions for us?",
            answer: "Ask one or two thoughtful questions about the role, team, learning opportunities, or expectations.",
            explanation: "Ask one or two thoughtful questions about the role, team, learning opportunities, or expectations."
        }

    ]

};


/*
 * Calculate all question counts automatically.
 */

function getQuestionCounts() {

    const aptitudeCategories =
        Object.values(questionData.aptitude);


    const aptitudeTotal =
        aptitudeCategories.reduce(
            (total, questions) =>
                total + questions.length,
            0
        );


    const codingTotal =
        questionData.coding.length;


    const coreEEETotal =
        questionData.coreEEE.length;


    const technicalInterviewTotal =
        questionData.technicalInterview.length;


    const hrInterviewTotal =
        questionData.hrInterview.length;


    const total =
        aptitudeTotal +
        codingTotal +
        coreEEETotal +
        technicalInterviewTotal +
        hrInterviewTotal;


    return {

        aptitude: aptitudeTotal,

        coding: codingTotal,

        coreEEE: coreEEETotal,

        technicalInterview:
            technicalInterviewTotal,

        hrInterview:
            hrInterviewTotal,

        total: total

    };

}