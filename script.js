const questions = [
    // Round 1
    [
        {
            question: "What is the sum of the first 50 natural numbers?",
            options: ["1275", "1225", "1250", "1300"],
            correct: 0,
        },
        {
            question: "How many ways can 5 people be arranged in a line?",
            options: ["120", "60", "100", "24"],
            correct: 0,
        },
        {
            question: "What is the value of C(6, 3)?",
            options: ["20", "15", "10", "30"],
            correct: 1,
        },
        {
            question: "How many subsets can be formed from a set of 8 elements?",
            options: ["128", "256", "512", "64"],
            correct: 1,
        },
        {
            question: "How many ways can we choose 3 objects from a set of 8?",
            options: ["56", "40", "42", "48"],
            correct: 2,
        },
    ],

    // Round 2
    [
        {
            question: "What is the principle of inclusion-exclusion?",
            options: [
                "A method used to count the number of elements in the union of two or more sets",
                "A principle to calculate the number of elements in the intersection of sets",
                "A rule to exclude overlapping sets in counting",
                "None of the above",
            ],
            correct: 0,
        },
        {
            question: "Which of the following is a valid binary operation?",
            options: ["Addition", "Subtraction", "Multiplication", "All of the above"],
            correct: 3,
        },
        {
            question: "What is the cardinality of the set {1, 2, 3, 4, 5}?",
            options: ["5", "4", "6", "10"],
            correct: 0,
        },
        {
            question: "Which of the following is an example of a relation?",
            options: ["A subset of the Cartesian product of two sets", "A subset of a set", "A function", "A group"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you arrange the letters in the word 'DISCRETE'?",
            options: ["1680", "2520", "840", "720"],
            correct: 3,
        },
    ],

    // Round 3
    [
        {
            question: "What is the total number of edges in a complete graph with 6 vertices?",
            options: ["15", "12", "9", "6"],
            correct: 0,
        },
        {
            question: "Which of the following statements is true about a bijection?",
            options: [
                "Every element in the domain maps to one and only one element in the codomain",
                "Every element in the domain maps to at least one element in the codomain",
                "The function must be surjective",
                "The function must be injective",
            ],
            correct: 0,
        },
        {
            question: "What is the value of the factorial 5!?",
            options: ["120", "100", "1000", "10"],
            correct: 0,
        },
        {
            question: "Which of the following is an example of a set operation?",
            options: ["Union", "Intersection", "Difference", "All of the above"],
            correct: 3,
        },
        {
            question: "What is the number of different ways to partition a set of 4 elements into 2 subsets?",
            options: ["7", "10", "6", "5"],
            correct: 2,
        },
    ],

    // Round 4
    [
        {
            question: "Which of the following is a valid binary relation?",
            options: ["<", "=", ">", "All of the above"],
            correct: 3,
        },
        {
            question: "How many possible ways are there to partition the set {1, 2, 3} into non-empty subsets?",
            options: ["5", "6", "3", "4"],
            correct: 2,
        },
        {
            question: "What is the formula for the number of subsets of a set with n elements?",
            options: ["2^n - 1", "2^n", "n!", "n(n-1)/2"],
            correct: 1,
        },
        {
            question: "Which of the following is true about a function?",
            options: [
                "Every element in the domain must have exactly one corresponding element in the codomain",
                "Every element in the domain can have multiple corresponding elements in the codomain",
                "Every element in the domain must map to multiple elements in the codomain",
                "A function does not need to map every element of the domain",
            ],
            correct: 0,
        },
        {
            question: "What is the number of ways to choose 2 items from 5 items?",
            options: ["10", "12", "20", "5"],
            correct: 0,
        },
    ],

    // Round 5
    [
        {
            question: "What is the definition of a permutation?",
            options: [
                "A subset of objects where order does not matter",
                "An ordered arrangement of objects",
                "A way to group objects in pairs",
                "A method to calculate the union of sets",
            ],
            correct: 1,
        },
        {
            question: "Which of the following is a valid set operation?",
            options: ["Union", "Intersection", "Complement", "All of the above"],
            correct: 3,
        },
        {
            question: "How many binary strings of length 4 can be formed?",
            options: ["8", "16", "32", "4"],
            correct: 1,
        },
        {
            question: "How many edges does a graph with 4 vertices and a complete edge set have?",
            options: ["6", "10", "4", "3"],
            correct: 0,
        },
        {
            question: "What is the complement of the set {1, 2, 3} in the universal set {1, 2, 3, 4, 5}?",
            options: ["{4, 5}", "{1, 2, 3}", "{4, 5, 6}", "None of the above"],
            correct: 0,
        },
    ],
   // Round 6
    [
        {
            question: "How many edges are there in a complete graph with 8 vertices?",
            options: ["28", "36", "40", "48"],
            correct: 0,
        },
        {
            question: "Which of the following is true for a symmetric relation?",
            options: [
                "If aRb then bRa",
                "If aRb then aRa",
                "If aRb then bRa and aRa",
                "If aRb then aRc",
            ],
            correct: 0,
        },
        {
            question: "What is the number of distinct permutations of the letters in the word 'ALGORITHM'?",
            options: ["40320", "5040", "1000", "720"],
            correct: 0,
        },
        {
            question: "What is the sum of the first 100 odd numbers?",
            options: ["5000", "5050", "6000", "4000"],
            correct: 1,
        },
        {
            question: "Which of the following is a recursive relation?",
            options: [
                "F(n) = F(n-1) + F(n-2)",
                "F(n) = 2n + 1",
                "F(n) = n^2",
                "F(n) = n + 3",
            ],
            correct: 0,
        },
    ],

    // Round 7
    [
        {
            question: "What is the total number of subsets of the set {a, b, c, d, e}?",
            options: ["32", "16", "8", "64"],
            correct: 0,
        },
        {
            question: "How many different ways can you arrange the letters in the word 'STATISTICS'?",
            options: ["90720", "45360", "10080", "9070"],
            correct: 1,
        },
        {
            question: "What is the value of C(8, 4)?",
            options: ["70", "56", "84", "12"],
            correct: 0,
        },
        {
            question: "How many different paths can be formed in a graph with 3 vertices and 2 edges?",
            options: ["2", "3", "6", "1"],
            correct: 0,
        },
        {
            question: "Which of the following is a valid graph representation?",
            options: ["Adjacency Matrix", "Adjacency List", "Edge List", "All of the above"],
            correct: 3,
        },
    ],

    // Round 8
    [
        {
            question: "What is the number of ways to partition a set of 5 elements into 3 subsets?",
            options: ["15", "25", "20", "10"],
            correct: 0,
        },
        {
            question: "What is the principle of inclusion-exclusion used to calculate?",
            options: [
                "The number of elements in the union of multiple sets",
                "The number of elements in the intersection of sets",
                "The number of elements in the complement of sets",
                "None of the above",
            ],
            correct: 0,
        },
        {
            question: "How many different ways can you select 3 objects from a set of 6 objects without repetition?",
            options: ["10", "20", "12", "15"],
            correct: 0,
        },
        {
            question: "Which of the following is true about a reflexive relation?",
            options: [
                "Every element in the domain is related to itself",
                "There must be at least one element related to the rest",
                "Every element in the domain must be related to all elements",
                "None of the above",
            ],
            correct: 0,
        },
        {
            question: "What is the number of ways to arrange the digits in the number '112233'?",
            options: ["720", "240", "120", "360"],
            correct: 1,
        },
    ],

    // Round 9
    [
        {
            question: "Which of the following sets is infinite?",
            options: [
                "{1, 2, 3, ...}",
                "{a, b, c}",
                "{0, 1, 2}",
                "None of the above",
            ],
            correct: 0,
        },
        {
            question: "What is the solution to the recurrence relation: F(n) = 2F(n-1) + 3, with F(0) = 1?",
            options: ["F(n) = 2^n + 1", "F(n) = 3^n + 1", "F(n) = 2^n - 1", "F(n) = 2^n + 3"],
            correct: 0,
        },
        {
            question: "What is the number of ways to choose 2 objects from 4 objects?",
            options: ["6", "4", "2", "3"],
            correct: 3,
        },
        {
            question: "What is the power set of the set {1, 2}?",
            options: ["{ {}, {1}, {2}, {1, 2} }", "{1, 2, 3}", "{1, 2}", "{1}"],
            correct: 0,
        },
        {
            question: "How many different binary trees can be constructed with 3 nodes?",
            options: ["3", "5", "6", "2"],
            correct: 0,
        },
    ],

    // Round 10
    [
        {
            question: "Which of the following is a valid tree traversal method?",
            options: ["In-order", "Pre-order", "Post-order", "All of the above"],
            correct: 3,
        },
        {
            question: "What is the number of distinct ways to arrange the letters in the word 'COMPUTER'?",
            options: ["5040", "504", "720", "100"],
            correct: 0,
        },
        {
            question: "What is the total number of elements in the power set of a set with 3 elements?",
            options: ["8", "6", "10", "4"],
            correct: 0,
        },
        {
            question: "Which of the following statements is true about a tree?",
            options: [
                "A tree has exactly one path between any two nodes",
                "A tree has no edges",
                "A tree contains cycles",
                "A tree has exactly two children per node",
            ],
            correct: 0,
        },
        {
            question: "What is the number of possible graphs that can be formed with 3 vertices and 3 edges?",
            options: ["2", "3", "4", "5"],
            correct: 2,
        },
    ],
  // Round 11
    [
        {
            question: "How many distinct binary trees can be constructed with 4 nodes?",
            options: ["14", "16", "12", "10"],
            correct: 0,
        },
        {
            question: "How many ways can you assign 3 objects to 2 bins where one bin can be empty?",
            options: ["8", "6", "4", "9"],
            correct: 0,
        },
        {
            question: "Which of the following is a property of a directed graph?",
            options: [
                "Edges have a direction",
                "Edges do not have a direction",
                "It is always connected",
                "None of the above",
            ],
            correct: 0,
        },
        {
            question: "What is the formula for the number of edges in a complete graph with n vertices?",
            options: ["n(n-1)/2", "n(n+1)/2", "n^2", "n(n-1)"],
            correct: 0,
        },
        {
            question: "What is the number of different ways to select 4 objects from 7 objects?",
            options: ["35", "42", "45", "28"],
            correct: 0,
        },
    ],

    // Round 12
    [
        {
            question: "How many edges does a complete bipartite graph with 5 vertices on one side and 3 vertices on the other side have?",
            options: ["15", "10", "8", "12"],
            correct: 1,
        },
        {
            question: "Which of the following is true about a cyclic graph?",
            options: [
                "It has no cycles",
                "It has exactly one cycle",
                "It may have cycles",
                "None of the above",
            ],
            correct: 2,
        },
        {
            question: "What is the number of ways to choose 2 objects from a set of 10?",
            options: ["45", "50", "60", "55"],
            correct: 0,
        },
        {
            question: "What is the cardinality of the power set of the set {a, b, c, d}?",
            options: ["16", "8", "4", "32"],
            correct: 0,
        },
        {
            question: "How many ways can you select 3 objects from a set of 10 distinct objects?",
            options: ["120", "150", "60", "75"],
            correct: 0,
        },
    ],

    // Round 13
    [
        {
            question: "What is the number of distinct ways to arrange the letters in the word 'MATHEMATICS'?",
            options: ["151200", "12000", "5040", "504"],
            correct: 0,
        },
        {
            question: "How many elements are in the power set of a set with 6 elements?",
            options: ["64", "128", "32", "16"],
            correct: 0,
        },
        {
            question: "What is the number of edges in a graph with 6 vertices and 9 edges?",
            options: ["15", "18", "9", "12"],
            correct: 2,
        },
        {
            question: "What is the formula for the sum of the first n even numbers?",
            options: ["n(n+1)", "n(n+2)", "n^2", "2n(n+1)"],
            correct: 0,
        },
        {
            question: "What is the total number of partitions of the set {1, 2, 3} into 2 non-empty subsets?",
            options: ["2", "3", "4", "5"],
            correct: 1,
        },
    ],

    // Round 14
    [
        {
            question: "Which of the following is true about an acyclic graph?",
            options: [
                "It has no cycles",
                "It has exactly one cycle",
                "It has multiple cycles",
                "None of the above",
            ],
            correct: 0,
        },
        {
            question: "What is the number of ways to select 3 objects from a set of 5 objects where order matters?",
            options: ["60", "15", "12", "20"],
            correct: 0,
        },
        {
            question: "How many ways can you arrange the letters in the word 'DISCRETE'?",
            options: ["2520", "5040", "720", "1680"],
            correct: 0,
        },
        {
            question: "Which of the following is a property of a tree?",
            options: [
                "It has exactly one cycle",
                "There are no cycles in a tree",
                "A tree can have multiple roots",
                "None of the above",
            ],
            correct: 1,
        },
        {
            question: "How many distinct ways can 4 students be selected from a class of 20 students?",
            options: ["4845", "400", "210", "100"],
            correct: 2,
        },
    ],

    // Round 15
    [
        {
            question: "Which of the following is a correct definition of a permutation?",
            options: [
                "An ordered selection of objects",
                "A selection of objects where order does not matter",
                "A function between sets",
                "None of the above",
            ],
            correct: 0,
        },
        {
            question: "How many ways can 3 men and 2 women be arranged in a line such that the men are all together?",
            options: ["120", "60", "24", "30"],
            correct: 1,
        },
        {
            question: "What is the sum of the first 100 even numbers?",
            options: ["5050", "5000", "10000", "10005"],
            correct: 2,
        },
        {
            question: "How many binary search trees can be formed with 3 nodes?",
            options: ["5", "10", "6", "3"],
            correct: 0,
        },
        {
            question: "What is the number of distinct subsets of a set with 5 elements?",
            options: ["32", "16", "24", "64"],
            correct: 0,
        },
    ],
  // Round 16
    [
        {
            question: "How many distinct graphs can be formed with 4 vertices and 3 edges?",
            options: ["6", "12", "9", "4"],
            correct: 0,
        },
        {
            question: "What is the value of C(10, 5)?",
            options: ["252", "240", "300", "500"],
            correct: 0,
        },
        {
            question: "Which of the following is true for a strongly connected directed graph?",
            options: [
                "Every vertex is reachable from every other vertex",
                "No vertex is reachable from any other vertex",
                "There is exactly one cycle",
                "None of the above",
            ],
            correct: 0,
        },
        {
            question: "What is the total number of distinct paths in a complete graph with 5 vertices?",
            options: ["30", "50", "60", "100"],
            correct: 0,
        },
        {
            question: "How many different ways can you arrange the letters in the word 'PROBABILITY'?",
            options: ["1814400", "151200", "40320", "720"],
            correct: 0,
        },
    ],

    // Round 17
    [
        {
            question: "How many ways can you select 3 objects from a set of 8 objects, with replacement?",
            options: ["56", "64", "112", "24"],
            correct: 1,
        },
        {
            question: "Which of the following is true for a bipartite graph?",
            options: [
                "It has two disjoint sets of vertices with no edges within each set",
                "It has only one set of vertices",
                "It can have cycles of odd length",
                "None of the above",
            ],
            correct: 0,
        },
        {
            question: "How many distinct ways can the word 'SYMMETRIC' be arranged?",
            options: ["5040", "1260", "2520", "1000"],
            correct: 1,
        },
        {
            question: "What is the number of distinct ways to distribute 5 identical objects into 3 distinct boxes?",
            options: ["21", "15", "18", "30"],
            correct: 0,
        },
        {
            question: "What is the formula for the total number of elements in the power set of a set with n elements?",
            options: ["2^n", "n^2", "n!", "2n"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "What is the number of ways to partition the set {1, 2, 3, 4} into 2 non-empty subsets?",
            options: ["10", "7", "9", "5"],
            correct: 0,
        },
        {
            question: "What is the formula for the number of ways to arrange 5 objects with 2 of them being identical?",
            options: ["5!", "5!/2!", "5!2!", "5!"],
            correct: 1,
        },
        {
            question: "How many different binary trees can be constructed with 4 nodes?",
            options: ["14", "16", "18", "12"],
            correct: 0,
        },
        {
            question: "How many distinct subsets can be formed from the set {1, 2, 3, 4, 5}?",
            options: ["32", "64", "16", "24"],
            correct: 0,
        },
        {
            question: "Which of the following is true about a graph with 10 vertices and 15 edges?",
            options: [
                "It must be connected",
                "It can have cycles",
                "It is a complete graph",
                "None of the above",
            ],
            correct: 1,
        },
    ],

    // Round 19
    [
        {
            question: "What is the total number of distinct paths in a graph with 4 vertices and 2 edges?",
            options: ["4", "6", "8", "10"],
            correct: 1,
        },
        {
            question: "What is the number of ways to arrange the letters in the word 'DISCRETE'?",
            options: ["2520", "5040", "720", "1680"],
            correct: 0,
        },
        {
            question: "What is the number of distinct paths in a tree with 5 nodes and 4 edges?",
            options: ["5", "4", "3", "6"],
            correct: 0,
        },
        {
            question: "How many ways can you distribute 6 identical objects into 3 distinct boxes?",
            options: ["56", "35", "42", "60"],
            correct: 2,
        },
        {
            question: "What is the formula for the number of permutations of n objects taken r at a time?",
            options: ["n!/(n-r)!", "n!/(n-r)r!", "r!n!", "n!r!"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "How many distinct graphs can be formed with 4 vertices and 2 edges?",
            options: ["5", "6", "7", "10"],
            correct: 0,
        },
        {
            question: "What is the number of ways to arrange the letters in the word 'COMPUTER'?",
            options: ["5040", "504", "720", "100"],
            correct: 0,
        },
        {
            question: "How many ways can 2 objects be selected from 5 distinct objects?",
            options: ["10", "5", "15", "25"],
            correct: 0,
        },
        {
            question: "How many distinct subsets can be formed from the set {a, b, c, d}?",
            options: ["16", "8", "4", "32"],
            correct: 0,
        },
        {
            question: "What is the number of distinct partitions of the set {1, 2, 3, 4}?",
            options: ["15", "10", "7", "20"],
            correct: 0,
        },
    ],
  // Round 21
    [
        {
            question: "How many different ways can you arrange the digits in the number 2024?",
            options: ["60", "120", "24", "48"],
            correct: 0,
        },
        {
            question: "How many distinct subsets can be formed from the set {1, 2, 3, 4, 5}?",
            options: ["32", "64", "16", "24"],
            correct: 0,
        },
        {
            question: "What is the total number of edges in a complete bipartite graph with 5 vertices in one part and 6 vertices in the other part?",
            options: ["30", "40", "20", "50"],
            correct: 0,
        },
        {
            question: "How many different binary trees can be constructed with 5 nodes?",
            options: ["42", "28", "32", "56"],
            correct: 0,
        },
        {
            question: "What is the number of different ways to partition the set {1, 2, 3, 4, 5} into two non-empty subsets?",
            options: ["15", "20", "25", "30"],
            correct: 0,
        },
    ],

    // Round 22
    [
        {
            question: "How many ways can you select 4 objects from a set of 10 objects if the order of selection matters?",
            options: ["210", "5040", "504", "3024"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you arrange the letters in the word 'MATHEMATICAL'?",
            options: ["27720", "30240", "181440", "362880"],
            correct: 0,
        },
        {
            question: "What is the number of distinct spanning trees in a complete graph with 4 vertices?",
            options: ["16", "24", "36", "48"],
            correct: 0,
        },
        {
            question: "How many distinct arrangements can be made from the word 'HELLO'?",
            options: ["60", "120", "24", "72"],
            correct: 0,
        },
        {
            question: "Which of the following is a property of a Hamiltonian cycle?",
            options: [
                "It visits each vertex exactly once",
                "It has exactly one cycle",
                "It visits only a subset of the vertices",
                "None of the above",
            ],
            correct: 0,
        },
    ],

    // Round 23
    [
        {
            question: "How many edges does a complete graph with 5 vertices have?",
            options: ["10", "12", "15", "20"],
            correct: 0,
        },
        {
            question: "What is the number of distinct ways to distribute 4 identical objects into 3 distinct boxes?",
            options: ["15", "12", "18", "24"],
            correct: 0,
        },
        {
            question: "What is the total number of paths in a tree with 6 nodes and 5 edges?",
            options: ["5", "6", "7", "8"],
            correct: 0,
        },
        {
            question: "What is the number of distinct paths between two vertices in a complete graph with 4 vertices?",
            options: ["6", "8", "12", "4"],
            correct: 0,
        },
        {
            question: "How many distinct subsets can be formed from the set {a, b, c, d, e}?",
            options: ["32", "64", "16", "8"],
            correct: 0,
        },
    ],

    // Round 24
    [
        {
            question: "What is the number of ways to select 2 objects from a set of 5 distinct objects with replacement?",
            options: ["25", "20", "16", "10"],
            correct: 0,
        },
        {
            question: "How many distinct graphs can be formed with 4 vertices and 3 edges?",
            options: ["6", "12", "9", "8"],
            correct: 0,
        },
        {
            question: "How many ways can 5 people be arranged in a row of 5 chairs?",
            options: ["120", "100", "60", "80"],
            correct: 0,
        },
        {
            question: "How many distinct arrangements can be made from the word 'DISCRETE' if all letters are different?",
            options: ["5040", "2520", "720", "504"],
            correct: 2,
        },
        {
            question: "What is the number of ways to distribute 6 identical objects into 4 distinct boxes?",
            options: ["21", "35", "28", "24"],
            correct: 0,
        },
    ],

    // Round 25
    [
        {
            question: "How many different ways can you arrange the letters in the word 'PROBABILITY'?",
            options: ["1814400", "151200", "1209600", "5040"],
            correct: 0,
        },
        {
            question: "How many distinct paths are there between two vertices in a graph with 5 vertices and 4 edges?",
            options: ["5", "10", "6", "12"],
            correct: 0,
        },
        {
            question: "What is the number of distinct spanning trees in a graph with 3 vertices?",
            options: ["3", "2", "1", "4"],
            correct: 0,
        },
        {
            question: "What is the number of ways to arrange 5 objects where 2 objects are identical?",
            options: ["60", "120", "24", "10"],
            correct: 0,
        },
        {
            question: "How many ways can you choose a committee of 3 people from a group of 10 people?",
            options: ["120", "210", "45", "35"],
            correct: 1,
        },
    ],
  // Round 26
    [
        {
            question: "How many distinct ways can you arrange the letters in the word 'MATHEMATICS'?",
            options: ["151200", "30240", "120960", "5040"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you arrange 5 objects taken 3 at a time from a set of 10 distinct objects?",
            options: ["720", "504", "1000", "3024"],
            correct: 0,
        },
        {
            question: "How many distinct spanning trees are there for a graph with 4 vertices?",
            options: ["16", "14", "24", "10"],
            correct: 0,
        },
        {
            question: "How many ways can 4 people be arranged in a circle?",
            options: ["24", "6", "12", "48"],
            correct: 0,
        },
        {
            question: "What is the number of distinct partitions of the set {1, 2, 3, 4}?",
            options: ["15", "10", "7", "8"],
            correct: 0,
        },
    ],

    // Round 27
    [
        {
            question: "How many ways can you distribute 5 identical objects into 3 distinct boxes?",
            options: ["21", "15", "18", "25"],
            correct: 0,
        },
        {
            question: "How many distinct paths are there in a graph with 4 vertices and 3 edges?",
            options: ["10", "12", "8", "6"],
            correct: 0,
        },
        {
            question: "How many different ways can you select 2 objects from a set of 6 distinct objects without replacement?",
            options: ["15", "10", "20", "12"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you arrange the letters in the word 'PERMUTATION'?",
            options: ["249600", "14400", "100800", "28800"],
            correct: 0,
        },
        {
            question: "How many ways can you arrange 5 objects where 2 of them are identical?",
            options: ["60", "120", "24", "10"],
            correct: 0,
        },
    ],

    // Round 28
    [
        {
            question: "How many distinct spanning trees can be formed from a complete graph with 5 vertices?",
            options: ["60", "80", "120", "150"],
            correct: 0,
        },
        {
            question: "What is the number of distinct paths in a tree with 5 nodes and 4 edges?",
            options: ["5", "6", "10", "12"],
            correct: 0,
        },
        {
            question: "How many distinct subsets can be formed from a set with 7 elements?",
            options: ["128", "64", "32", "256"],
            correct: 0,
        },
        {
            question: "What is the number of distinct graphs that can be formed from a set of 4 vertices?",
            options: ["16", "10", "12", "24"],
            correct: 0,
        },
        {
            question: "How many ways can you arrange the letters of the word 'DISTINCT'?",
            options: ["5040", "720", "10080", "1680"],
            correct: 0,
        },
    ],

    // Round 29
    [
        {
            question: "How many ways can you arrange the digits in the number 1223?",
            options: ["12", "24", "36", "48"],
            correct: 0,
        },
        {
            question: "How many ways can 5 objects be arranged in a row of 5 chairs if 2 objects are identical?",
            options: ["60", "120", "72", "80"],
            correct: 0,
        },
        {
            question: "What is the total number of edges in a complete bipartite graph with 4 vertices in one set and 6 vertices in the other set?",
            options: ["24", "20", "30", "36"],
            correct: 0,
        },
        {
            question: "What is the number of distinct spanning trees in a graph with 3 vertices?",
            options: ["2", "3", "1", "4"],
            correct: 0,
        },
        {
            question: "How many distinct arrangements can be made from the word 'EXAMINATION'?",
            options: ["453600", "1209600", "302400", "201600"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "How many ways can you choose 3 objects from a set of 9 distinct objects?",
            options: ["84", "72", "63", "90"],
            correct: 0,
        },
        {
            question: "How many distinct subsets can be formed from the set {a, b, c, d, e}?",
            options: ["32", "64", "16", "8"],
            correct: 0,
        },
        {
            question: "How many distinct spanning trees can be formed in a complete graph with 6 vertices?",
            options: ["216", "120", "72", "360"],
            correct: 0,
        },
        {
            question: "What is the number of distinct paths between two vertices in a graph with 3 vertices and 2 edges?",
            options: ["4", "2", "3", "6"],
            correct: 0,
        },
        {
            question: "How many ways can you arrange 7 objects taken 4 at a time?",
            options: ["210", "5040", "1680", "504"],
            correct: 0,
        },
    ],
  // Round 31
    [
        {
            question: "How many distinct ways can you arrange the digits in the number 1233?",
            options: ["12", "24", "36", "48"],
            correct: 0,
        },
        {
            question: "How many ways can you arrange 6 objects taken 2 at a time?",
            options: ["30", "72", "60", "180"],
            correct: 0,
        },
        {
            question: "How many distinct spanning trees can be formed from a graph with 4 vertices and 3 edges?",
            options: ["10", "16", "20", "12"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you select 3 objects from a set of 5 distinct objects?",
            options: ["10", "15", "20", "30"],
            correct: 0,
        },
        {
            question: "How many distinct graphs can be formed with 4 vertices?",
            options: ["16", "12", "8", "24"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "How many distinct ways can you arrange the letters of the word 'POSSIBILITY'?",
            options: ["151200", "30240", "50400", "14400"],
            correct: 0,
        },
        {
            question: "What is the number of distinct partitions of the set {1, 2, 3, 4}?",
            options: ["10", "7", "8", "12"],
            correct: 0,
        },
        {
            question: "How many different binary trees can be made with 5 nodes?",
            options: ["42", "35", "28", "45"],
            correct: 0,
        },
        {
            question: "What is the number of distinct subsets of the set {1, 2, 3, 4, 5}?",
            options: ["32", "64", "16", "24"],
            correct: 0,
        },
        {
            question: "How many different ways can you arrange 5 objects where 3 are identical?",
            options: ["60", "20", "120", "30"],
            correct: 0,
        },
    ],

    // Round 33
    [
        {
            question: "How many ways can you select 2 objects from a set of 7 distinct objects with replacement?",
            options: ["49", "35", "28", "42"],
            correct: 0,
        },
        {
            question: "How many distinct spanning trees are possible for a complete graph with 6 vertices?",
            options: ["120", "150", "180", "216"],
            correct: 0,
        },
        {
            question: "How many distinct graphs can be formed with 5 vertices?",
            options: ["32", "64", "128", "256"],
            correct: 0,
        },
        {
            question: "How many distinct permutations can be made from the word 'COMPUTATION'?",
            options: ["19958400", "5040", "302400", "10080"],
            correct: 0,
        },
        {
            question: "What is the number of ways to distribute 5 identical objects into 4 distinct boxes?",
            options: ["35", "21", "28", "45"],
            correct: 0,
        },
    ],

    // Round 34
    [
        {
            question: "How many distinct paths are there in a tree with 6 nodes and 5 edges?",
            options: ["5", "6", "7", "8"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you select 3 objects from a set of 8 distinct objects?",
            options: ["56", "84", "70", "120"],
            correct: 0,
        },
        {
            question: "How many ways can you arrange 5 objects taken 3 at a time from a set of 10 distinct objects?",
            options: ["720", "600", "450", "500"],
            correct: 0,
        },
        {
            question: "How many distinct spanning trees can be formed from a complete graph with 5 vertices?",
            options: ["150", "120", "100", "80"],
            correct: 0,
        },
        {
            question: "How many distinct paths are there between two vertices in a complete graph with 4 vertices?",
            options: ["6", "10", "12", "15"],
            correct: 0,
        },
    ],

    // Round 35
    [
        {
            question: "How many ways can 7 objects be arranged in a circle?",
            options: ["720", "5040", "120", "7200"],
            correct: 0,
        },
        {
            question: "How many distinct subsets can be formed from a set with 8 elements?",
            options: ["256", "128", "64", "32"],
            correct: 0,
        },
        {
            question: "What is the total number of edges in a complete bipartite graph with 3 vertices in one set and 7 vertices in the other set?",
            options: ["21", "24", "15", "10"],
            correct: 0,
        },
        {
            question: "How many distinct graphs can be formed with 3 vertices?",
            options: ["8", "6", "12", "10"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you arrange the letters in the word 'PROGRAMMING'?",
            options: ["30240", "181440", "5040", "14400"],
            correct: 0,
        },
    ],
  // Round 36
    [
        {
            question: "How many distinct ways can you arrange the digits in the number 112233?",
            options: ["90", "720", "360", "150"],
            correct: 0,
        },
        {
            question: "How many distinct spanning trees can be formed from a graph with 5 vertices and 4 edges?",
            options: ["10", "12", "8", "16"],
            correct: 0,
        },
        {
            question: "How many distinct partitions of the set {1, 2, 3, 4, 5} are possible?",
            options: ["52", "35", "45", "48"],
            correct: 0,
        },
        {
            question: "How many different ways can you choose 4 objects from a set of 10 distinct objects?",
            options: ["210", "504", "120", "240"],
            correct: 0,
        },
        {
            question: "How many different binary trees can be formed with 6 nodes?",
            options: ["132", "256", "42", "56"],
            correct: 0,
        },
    ],

    // Round 37
    [
        {
            question: "How many distinct ways can you arrange the letters of the word 'LOGARITHM'?",
            options: ["90720", "5040", "30240", "1440"],
            correct: 0,
        },
        {
            question: "What is the number of distinct spanning trees for a graph with 4 vertices?",
            options: ["16", "24", "10", "12"],
            correct: 0,
        },
        {
            question: "How many ways can you distribute 7 identical objects into 4 distinct boxes?",
            options: ["35", "50", "60", "72"],
            correct: 0,
        },
        {
            question: "How many distinct subsets can be formed from the set {1, 2, 3, 4, 5, 6}?",
            options: ["64", "128", "32", "256"],
            correct: 0,
        },
        {
            question: "How many distinct arrangements can be made from the word 'DECOMPOSED'?",
            options: ["453600", "5040", "7200", "30240"],
            correct: 0,
        },
    ],

    // Round 38
    [
        {
            question: "How many different ways can you arrange 4 objects taken 2 at a time from a set of 6 objects?",
            options: ["30", "20", "18", "12"],
            correct: 0,
        },
        {
            question: "How many distinct spanning trees can be formed from a complete graph with 4 vertices?",
            options: ["16", "12", "24", "30"],
            correct: 0,
        },
        {
            question: "What is the number of distinct subsets of the set {a, b, c, d}?",
            options: ["16", "12", "24", "32"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you select 2 objects from a set of 9 distinct objects?",
            options: ["36", "84", "72", "56"],
            correct: 0,
        },
        {
            question: "How many distinct graphs can be formed from a complete graph with 4 vertices?",
            options: ["16", "10", "12", "24"],
            correct: 0,
        },
    ],

    // Round 39
    [
        {
            question: "How many ways can 4 objects be arranged in a circle?",
            options: ["24", "12", "48", "36"],
            correct: 0,
        },
        {
            question: "How many distinct paths are there in a tree with 5 nodes and 4 edges?",
            options: ["5", "6", "4", "7"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you arrange 6 objects taken 3 at a time from a set of 8 distinct objects?",
            options: ["336", "480", "600", "720"],
            correct: 0,
        },
        {
            question: "How many distinct spanning trees can be formed from a complete graph with 5 vertices?",
            options: ["150", "120", "72", "84"],
            correct: 0,
        },
        {
            question: "How many distinct partitions of the set {1, 2, 3, 4} are possible?",
            options: ["10", "7", "6", "5"],
            correct: 0,
        },
    ],

    // Round 40
    [
        {
            question: "How many ways can 3 objects be arranged in a circle?",
            options: ["6", "12", "24", "30"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you choose 3 objects from a set of 8 distinct objects?",
            options: ["56", "84", "120", "70"],
            correct: 0,
        },
        {
            question: "How many distinct spanning trees can be formed from a graph with 6 vertices?",
            options: ["120", "150", "180", "216"],
            correct: 0,
        },
        {
            question: "How many distinct ways can you arrange the letters of the word 'COMPUTATION'?",
            options: ["90720", "30240", "5040", "10080"],
            correct: 0,
        },
        {
            question: "How many distinct subsets can be formed from a set with 4 elements?",
            options: ["16", "32", "8", "24"],
            correct: 0,
        },
    ],
];
  



// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
